import {USER_SEARCH, SHOW_HISTORY} from '../action-creators/history.jsx';

const initialState = {
  searchHistory: [],
  displayHistory: false
}

const history = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type){
    case USER_SEARCH:
      newState.searchHistory = action.searchHistory;
      return newState;

    case SHOW_HISTORY:
      newState.displayHistory = action.displayHistory;
      return newState;

    default:
      return state;
  }

}

export default history;
