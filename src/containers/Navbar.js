import React, { Component } from 'react';
import NavLogo from '../components/NavLogo'
import hamburgerIconWhite from '../images/icons/hamburger-icon-thin-wh.svg'

class Navbar extends Component {
                // <img className="hamburger-icon-white" src={hamburgerIconWhite} />
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <NavLogo />
          <div className="hamburger-container">
            <div className="icon-container">
              <p className="hamburger-text-icon">&#9776;</p>
            </div>
            <p className="hamburger-menu">MENU</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
