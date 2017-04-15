import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  geocode: require('./geocode').default
})

export default rootReducer
