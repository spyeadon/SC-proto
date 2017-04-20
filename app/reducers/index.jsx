import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  geocode: require('./geocode').default,
  history: require('./history').default
})

export default rootReducer
