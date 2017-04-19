import React from 'react';
const ChartD3 = require('react-d3-core').Chart;
const LineChartD3 = require('react-d3-basic').LineChart;
const d3 = require('d3');
import {formatData, formatHourlyWeather} from '../utils.jsx';

class Chart extends React.Component {
  constructor(props){
    super();
    this.state = {
      width: 600,
      height: 300,
      margins: {left: 50, right: 50, top: 30, bottom: 30},
      title: "Last Week's Forecast",
      xScale: 'linear',
      yLabel: `Temperature (\u2109)`,
      xLabel: 'Month.Day',
      chartSeries: [{
        field: 'temperature',
        name: `Temperature (\u2109)`,
        color: '#ff7f0e',
        style: {
          strokeWidth: 5,
          strokeOpacity: 1,
          fillOpacity: 0.5
        }
      }, {
        field: 'apparentTemperature',
        name: `Feels Like (\u2109)`,
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
    this.forecast = [];
    this.todaysWeather = {};
  }

  componentWillReceiveProps (nextProps) {
    this.chartData = formatData(nextProps.weatherData);
    console.log('formatted array of data is: ', this.chartData);
    console.log("location of weather search is: ", this.props.formattedAddress);
    this.forecast = formatData(nextProps.forecastData);
    console.log("formatted array of forecast is: ", this.forecast);
    if (nextProps.currentData[0]) this.todaysWeather = formatHourlyWeather(nextProps.currentData[0]);
    console.log("formatted object of todays weather is: ", this.todaysWeather);
  }

  xAccessor (day) {
    return day.chartKey;
  }

  render() {
    if (this.chartData.length  < 6 || this.forecast.length < 6 || this.props.formattedAddress === '') {
      return (
        <div key="data" id="almost-there" />
      )
    }
    return (
      <div key="data" id="chartClass-container">
        <h1>{this.props.formattedAddress}</h1>
        <h3 className="subheaders">Today</h3>
          <span>{this.todaysWeather.summary}</span><br />
          <span>Current temperature: {this.todaysWeather.temperature}{`\u2109`}</span><br />
          <span>Currently feels like: {this.todaysWeather.apparentTemperature}{`\u2109`}</span><br />
          {this.todaysWeather.precipType ? <span>Chance of {this.todaysWeather.precipType} is: {Math.round(this.todaysWeather.precipProbability * 100)}%</span> : <span>No precipiation at the moment!</span>}
          <div id="hourlyForecast">
            {
              this.todaysWeather.hourly.map(hour => {
                return (
                  <ul key={hour.time} className="weatherEachHour">
                  <li>{hour.hour}</li>
                  <li>{hour.summary}</li>
                  <li>Temperature: {hour.temperature}</li>
                  <li>Wind speed: {hour.windSpeed} mph</li>
                  {hour.precipType ?
                    <li>Chance of {hour.precipType} is: {Math.round(hour.precipProbability * 100)}%</li> : <span>No chance of precipiation</span>
                  }
                  </ul>
                )
              })
            }
          </div>
        <h3 className="subheaders">Forecast</h3>
          <div id="forecast">
            {
              this.forecast.map(day => {
                return (
                  <ul key={day.time} className="weatherEachDay">
                  <li>{day.dayMonth}</li>
                  <li>{day.summary}</li>
                  <li>Temperature: {day.temperature}</li>
                  <li>Wind speed: {day.windSpeed} mph</li>
                  {day.precipType ?
                    <li>Chance of {day.precipType} is: {Math.round(day.precipProbability * 100)}%</li> : <span>No chance of precipiation</span>
                  }
                  </ul>
                )
              })
            }
          </div>
        <h3 className="subheaders">Last week's weather:</h3>
        <LineChartD3
          title={this.state.title}
          width={this.state.width}
          height={this.state.height}
          margins={this.state.margins}
          data={this.chartData}
          chartSeries={this.state.chartSeries}
          showXGrid={true}
          showYGrid={true}
          yLabel={this.state.yLabel}
          xLabel={this.state.xLabel}
          x={this.xAccessor}
          // xAxisTickCount={6}
          // yAxisTickCount={10}
          // xScale={this.state.xScale}
        />
      </div>
    )
  }
}

export default Chart;
