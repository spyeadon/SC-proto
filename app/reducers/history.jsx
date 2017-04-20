import {USER_SEARCH} from '../action-creators/history.jsx';

const initialState = {
  searchHistory: []
}

const history = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type){
    case USER_SEARCH:
      newState.searchHistory = action.searchHistory;
      return newState;

    default:
      return state;
  }

}

export default history;
