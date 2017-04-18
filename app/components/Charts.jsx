import React from 'react';
const ChartD3 = require('react-d3-core').Chart;
const LineChartD3 = require('react-d3-basic').LineChart;
import ChartTEST from './Chart-test.jsx';

const Chart = (props) => {

  // return (
  //     <ChartTEST
  //       weatherData={props.weatherData}
  //       currentData={props.currentData}
  //       forecastData={props.forecastData}
  //     />
  // )

    return (
      <div key="data" id="chart-container">

        {/*<ChartD3>
          <LineChartD3 />
        </ChartD3>*/}
      </div>
    )

}

export default Chart;
