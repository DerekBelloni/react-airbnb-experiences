import React from 'react';
import airLogo from '../images/airbnb-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar-img">
      <img className="nav--logo" src={airLogo} alt="" />
    </nav>
  )
}

export default Navbar;