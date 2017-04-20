import React from 'react';
import {connect} from 'react-redux';
import Login from './Login'
import WhoAmI from './WhoAmI'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div id="logo-container">
        SkyCast, Inc.
      </div>
      {props.user ?
        <div className="logged-in">
          <WhoAmI />
        </div> :
        <div className="logged-in">
          <Login />
        </div>}
    </nav>
  )
}

let mapStateToProps = state => {
  return {
    user: state.auth,
  }
}

const NavbarContainer = connect(mapStateToProps, null)(Navbar)

export default NavbarContainer;
