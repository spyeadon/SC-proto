import React from 'react'

export const Login = ({ login }) => (
  <form
    className="form-inline"
    id="login-form"
    onSubmit={evt => {
    evt.preventDefault();
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <input
      className="form-control input-lg"
      name="username"
      type="text"
    />
    <input
      className="form-control input-lg"
      name="password"
      type="password"
    />
    <button
      type="submit"
      className="btn btn-default btn-sm"
      >Login
    </button>
  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import {toggleHistory} from 'APP/app/action-creators/history'

export default connect(
  null,
  {login}
  )(Login)
