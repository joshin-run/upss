import React, { Component } from 'react';
import MenuNavLogo from '../components/MenuNavLogo'
import hamburgerIconWhite from '../images/icons/hamburger-icon-thin-wh.svg'
import upssLogoPink from '../images/logos/upss-logo-sleek-mid-bold-pink.svg'

class DarkNav extends Component {
  constructor(props) {
    super(props)
    console.log('NavbarDark props:', props)
    this.state = {}
  }

  render() {
    return (
      <div className="dark-navbar-wrapper">
        <div className="dark-navbar-container">
          <img className="dark-upss-logo-pink"  src={upssLogoPink} alt="UPSS" />
          <div className="dark-hamburger-container">
            <div className="icon-container">
              <p className="dark-hamburger-text-icon" onClick={this.props.onMenuToggle}>&#9776;
              </p>
            </div>
            <p className="dark-hamburger-menu" onClick={this.props.onMenuToggle}>MENU</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DarkNav;
