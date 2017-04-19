import React from 'react';
const ChartD3 = require('react-d3-core').Chart;
const LineChartD3 = require('react-d3-basic').LineChart;
const d3 = require('d3');
import {formatData} from '../utils.jsx';
import ReactDOM from 'react-dom';

class Chart extends React.Component {
  constructor(props){
    super();
    this.state = {
      width: 500,
      height: 300,
      margins: {left: 100, right: 100, top: 50, bottom: 50},
      title: "Last Week's Forecast",
      xScale: 'time',
      chartSeries: [{
        field: 'temperature',
        name: 'Temperature',
        color: '#ff7f0e',
        style: {
          strokeWidth: 5,
          strokeOpacity: 0.5,
          fillOpacity: 0.5
        }
      }, {
        field: 'apparentTemperature',
        name: 'Feels Like',
        color: '#2C75FF',
        style: {
          strokeWidth: 5,
          strokeOpacity: 0.5,
          fillOpacity: 0.5
        }
      }]
    }
    this.xAccessor = this.xAccessor.bind(this);
    this.chartData = [];
  }

  componentWillMount () {
    this.chartData = formatData(this.props.weatherData);
    console.log('formatted array of data is: ', this.chartData);
  }

  xAccessor (day) {
    return day.chartKey;
  }

  render() {
    if (this.chartData.length  < 6) {
      return (
        <div key="data" id="almost-there" />
      )
    }
    return (
      <div key="data" id="chartClass-container">
          <LineChartD3
            title={this.state.title}
            width={this.state.width}
            height={this.state.height}
            margins={this.state.margins}
            data={this.chartData}
            chartSeries={this.state.chartSeries}
            showXGrid={true}
            showYGrid={true}
            x={this.xAccessor}
            xAxisTickCount={6}
            yAxisTickCount={10}
            xScale={this.state.xScale}
          />
      </div>
    )
  }
}

export default Chart;
