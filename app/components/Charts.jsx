import React from 'react';
const ChartD3 = require('react-d3-core').Chart;
const LineChartD3 = require('react-d3-basic').LineChart;

const Chart = (props) => {

  const data = props.getWeatherData();
  if (data) data.then(result => console.log("weather data is: ", result));

  return (
    <div id="geolocation-container">
      {data && <ChartD3>
        <LineChartD3 />
      </ChartD3>}
    </div>
  )
}

export default Chart;
