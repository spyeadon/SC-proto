import React from 'react';

const ChartTEST = (props) => {

    return (
      <div key="data" id="chart-container">
          {
            props.currentData.map(element => {
              return (
                <ul key={element.moment}>
                  <li>Current Weather data:</li>
                  <li>temp is: {element.currently.temperature}</li>
                </ul>
              )
            })
          }
          <br />
          {
            props.weatherData.map(element => {
              return (
                <ul key={element.moment}>
                  <li>past Weather data example:</li>
                  <li>temp is: {element.currently.temperature}</li>
                </ul>
              )
            })
          }
          <br />
          {
            props.forecastData.map(element => {
              return (
                <ul key={element.moment}>
                  <li>future Weather data example:</li>
                  <li>temp is: {element.currently.temperature}</li>
                </ul>
              )
            })
          }
      </div>
    )

}

export default ChartTEST;
