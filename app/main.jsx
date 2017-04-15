'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import GeoContainer from './components/Geolocation.jsx';
import GoogleApiWrapper from './components/MapAPIContainer.jsx'
import DarkSkyApi from './DarkSky.jsx';

const defaultWeatherInfo = () => {
  DarkSkyApi.loadCurrent()
  .then(result => console.log(result))
}

const AppContainer = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI /> : <Login />}
      </nav>
      {/*children*/}
      <div id="flex">
        <GeoContainer />
        <GoogleApiWrapper />
      </div>
    </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
       {/*<IndexRedirect to="/map" />*/}
        <Route path="/geolocation" component={GeoContainer} onEnter={defaultWeatherInfo} />
        <Route path="/map" component={GoogleApiWrapper} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
