'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import {geolocation} from './components/Geolocation.jsx';
import GoogleApiWrapper, {mapContainer} from './components/MapContainer.jsx'

import DarkSkyAPI from 'dark-sky-api';
import {DarkSky_API_KEY} from '../API_KEYS.json';

const defaultWeatherInfo = () => {
  DarkSkyAPI.apiKey = DarkSky_API_KEY;
  DarkSkyAPI.loadCurrent()
  .then(result => console.log(result))
}

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI /> : <Login />}
      </nav>
      {children}
    </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
       <IndexRedirect to="/map" />
        <Route path="/geolocation" component={geolocation} />
        <Route path="/map" component={GoogleApiWrapper} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
