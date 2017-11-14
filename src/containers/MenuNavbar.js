import React, { Component } from 'react';
import NavLogo from '../components/NavLogo'
import ex from '../images/icons/ex-32-thin.png'

class MenuNavbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <NavLogo />
          <div className="hamburger-container">
            <div className="icon-container">
              <img className="ex" src={ex} />
            </div>
            <p className="hamburger-menu">MENU</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNavbar;
