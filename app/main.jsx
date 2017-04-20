'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import NavbarContainer from './components/Navbar.jsx';

import GeoContainer from './components/Geolocation.jsx';
import GoogleApiWrapper from './components/MapAPIContainer.jsx';
import HistoryContainer from './components/History.jsx';

import {getSearchHistory} from './action-creators/history.jsx';

// const searchHistoryOnEnter = () => {
//   const user = store.getState().auth;
//   store.dispatch(getSearchHistory(user.id))
// }

const AppContainer = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div id="absolute-container">
      <NavbarContainer />
      <div id="flex">
        <GoogleApiWrapper />
        <GeoContainer />
      </div>
    </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/geolocation" component={GeoContainer} />
        <Route path="/map" component={GoogleApiWrapper} />
        {/*<Route path="/searchHistory" component={HistoryContainer} onEnter={searchHistoryOnEnter} />*/}
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
