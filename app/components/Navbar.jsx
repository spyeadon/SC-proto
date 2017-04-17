import React from 'react';
import {connect} from 'react-redux';
import Login from './Login'
import WhoAmI from './WhoAmI'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
      </div>
      {props.user ? <WhoAmI /> : <Login />}
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
