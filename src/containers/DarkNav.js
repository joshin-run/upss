import React, { Component } from 'react';
import MenuNavLogo from '../components/MenuNavLogo'
import hamburgerIconWhite from '../images/icons/hamburger-icon-thin-wh.svg'
import upssLogoPink from '../images/logos/upss-logo-sleek-mid-bold-pink2.png'

const DarkNav = (props) => (
      <div className="dark-navbar-wrapper">
        <div className="dark-navbar-container">
          <a href="/"><img className="dark-upss-logo-pink"  src={upssLogoPink} alt="UPSS" /></a>
          <div className="dark-hamburger-container">
            <div className="icon-container">
              <p className="dark-hamburger-text-icon" onClick={props.onMenuToggle}>&#9776;
              </p>
            </div>
            <p className="dark-hamburger-menu" onClick={props.onMenuToggle}>MENU</p>
          </div>
        </div>
      </div>
    );
//   }
// }

export default DarkNav;
