import {NEW_SEARCH} from '../action-creators/geocode.jsx';

const initialState = {
  geocodeData: {}
};

const geocode = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case NEW_SEARCH:
      newState.geocodeData = action.geocodeData;
      return newState;

    default:
      return state;
  }

}

export default geocode;
