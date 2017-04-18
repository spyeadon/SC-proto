import {HISTORY, FORECAST, CURRENT, NEW_SEARCH} from '../action-creators/geocode.jsx';

const initialState = {
  weatherData: [],
  forecastData: [],
  currentData: []
};

const geocode = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case HISTORY:
      newState.weatherData.push(action.weatherData);
      if (newState.weatherData.length >= 6) {
        newState.weatherData = newState.weatherData.slice();
      }
      return newState;

    case FORECAST:
      newState.forecastData.push(action.forecastData);
      if (newState.forecastData.length >= 6) {
        newState.forecastData = newState.forecastData.slice();
      }
      return newState;

    case CURRENT:
      newState.currentData.push(action.currentData);
      newState.currentData = newState.currentData.slice();
      return newState;

    case NEW_SEARCH:
      return {
        weatherData: [],
        forecastData: [],
        currentData: []
      };

    default:
      return state;
  }

}

export default geocode;
