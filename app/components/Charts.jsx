import React from 'react';
const ChartD3 = require('react-d3-core').Chart;
const LineChartD3 = require('react-d3-basic').LineChart;
import ChartTEST from './Chart-test.jsx';
import {formatData} from '../utils.jsx';

const Chart = (props) => {

  var chartData = formatData(props.weatherData);
  console.log('formatted array of data is: ', chartData);
  var width = 400;
  var height = 300;
  var margins = {left: 0, right: 0, top: 50, bottom: 50}
  var title = "Last Week's Forecast"
  var chartSeries = [{
    field: 'temperature',
    name: 'temperature',
    color: '#ff7f0e'
  }]
  var xAccessor = function(day) {
      return day.dayOfTheMonth;
    }

  return (
    <div key="data" id="chart-container">

      <ChartD3
        title={title}
        width={width}
        height={height}
        margins={margins}
      >
        <LineChartD3
          title={title}
          width={width}
          height={height}
          margins={margins}
          data={chartData}
          chartSeries={chartSeries}
          showXGrid={false}
          showYGrid={false}
          x={xAccessor}
        />
      </ChartD3>
    </div>
  )

    // return (
//     <ChartTEST
//       weatherData={props.weatherData}
//       currentData={props.currentData}
//       forecastData={props.forecastData}
//     />
// )

}

export default Chart;
