'use strict'
import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import NotFound from './components/NotFound'
import NavbarContainer from './components/Navbar.jsx';

import GeoContainer from './components/Geolocation.jsx';
import GoogleApiWrapper from './components/MapAPIContainer.jsx';
import HistoryContainer from './components/History.jsx';

const AppContainer = connect(
  ({ history }) => ({ displayHistory: history.displayHistory })
)(
  ({ displayHistory }) =>
    <div id="absolute-container">
      <NavbarContainer />
      {!displayHistory ?
        <div id="flex">
          <GoogleApiWrapper />
          <GeoContainer />
        </div> :
        <div id="flex">
          <HistoryContainer />
        </div>
    }
    </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/geolocation" component={GeoContainer} />
        <Route path="/map" component={GoogleApiWrapper} />
        <Route path="/searchHistory" component={HistoryContainer} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
