import {NEW_SEARCH} from '../action-creators/geocode.jsx';

const initialState = {
  weatherData: {}
};

const geocode = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case NEW_SEARCH:
      newState.weatherData = action.weatherData;
      return newState;

    default:
      return state;
  }

}

export default geocode;
