import React from 'react'
import {Link} from 'react-router'

export const WhoAmI = ({ user, logout, toggleHistory, displayHistory, getSearchHistory }) => (
  <div className="whoami">
    <span className="whoami-user-name"><strong>{user && user.name}</strong></span>
    {!displayHistory ? <button className="btn btn-default btn-lg" onClick={logout}>
      <i className="fa fa-sign-out" aria-hidden="true" />
    </button> : null}
    {!displayHistory ?
      <button id="search-btn" className="btn btn-default btn-lg" onClick={() => {getSearchHistory(user.id); toggleHistory(true)}}>Search History</button> :
      <button id="search-btn" className="btn btn-default btn-lg" onClick={() => toggleHistory(false)}>Home</button>
  }
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {toggleHistory, getSearchHistory} from 'APP/app/action-creators/history'
import {connect} from 'react-redux'

export default connect(
  ({ auth, history }) => ({ user: auth, displayHistory: history.displayHistory }),
  {logout, toggleHistory, getSearchHistory}
)(WhoAmI)
