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
          <div id="main_menu_link" class="main_menu_link">
          	<div class="sand_icon">
          		<div class="sand_icon_bar sand_icon_bar_1"></div>
          		<div class="sand_icon_bar sand_icon_bar_2"></div>
          		<div class="sand_icon_bar sand_icon_bar_3"></div>
          	</div>
            <p className="main_menu_label">MENU</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
