import React, { Component } from 'react';
import NavLogo from '../components/NavLogo'
import hamburgerIconWhite from '../images/icons/hamburger-icon-thin-wh.svg'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  toggleMenu = () => {
    this.props.onToggleMenu()
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <NavLogo />
          <div className="hamburger-container">
            <div className="icon-container">
              <p className="hamburger-text-icon" onClick={this.toggleMenu}>&#9776;</p>
            </div>
            <p className="hamburger-menu" onClick={this.toggleMenu}>MENU</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
