import axios from 'axios';

export const USER_SEARCH = 'USER_SEARCH';
export const retrieveUserSearch = searchHistory => ({
  type: USER_SEARCH,
  searchHistory: searchHistory
})
export const ADD_USER_SEARCH = 'ADD_USER_SEARCH';
export const addToSearchHistory = () => ({
  type: ADD_USER_SEARCH
})

export const getSearchHistory = (userID) =>
  dispatch =>
    axios.get(`/api/users/history/${userID}`)
    .then(res => {
      dispatch(retrieveUserSearch(res.data))
    })
    .catch(err => console.error(err))

export const postToSearchHistory = (searchAddress, userID) =>
  dispatch =>
    axios.post(`/api/users/history/${userID}`, {searchAddress: searchAddress})
    .then(dispatch(addToSearchHistory()))
    .catch(err => console.error(err))

export const SHOW_HISTORY = 'SHOW_HISTORY';
export const toggleHistory = (bool) => ({
  type: SHOW_HISTORY,
  displayHistory: bool
})
