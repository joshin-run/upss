import React, { Component } from 'react';
import NavLogo from '../components/NavLogo'
import hamburgerIconWhite from '../images/icons/hamburger-icon-thin-wh.svg'

class Navbar extends Component {
  constructor(props) {
    super(props)
    console.log('Navbar props:', props)
    this.state = {}
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <NavLogo />
          <div className="hamburger-container">
            <div className="icon-container">
              <img className="thin-hamburger" src={hamburgerIconWhite} onClick={this.props.onMenuToggle} />
            </div>
            <p className="hamburger-menu" onClick={this.props.onMenuToggle}>MENU</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
