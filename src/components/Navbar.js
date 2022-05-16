import React from 'react';
import airLogo from '../images/airbnb-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar-img">
      <img src={airLogo} alt="" />
    </nav>
  )
}

export default Navbar;