import React, { Component } from 'react';
import MenuNavLogo from '../components/MenuNavLogo'
// import hamburgerIconWhite from '../images/icons/hamburger-icon-thin-wh.svg'
import UPSSLogoSqPink from '../images/logos/upss-logo-sq-pk.png'
import hamburgerIconPink from '../images/icons/hamburger-icon-thin-pk.svg'

const DarkNav = (props) => (
      <div className="dark-navbar-wrapper">
        <div className="dark-navbar-container">
          <a href="/"><img className="sq-upss-logo-pink"  src={UPSSLogoSqPink} alt="UPSS" /></a>
          <div className="hamburger-container">
            <div className="icon-container">
              <img className="thin-hamburger" src={hamburgerIconPink} onClick={props.onMenuToggle} />
            </div>
            <p className="hamburger-menu-pink" onClick={props.onMenuToggle}>MENU</p>
          </div>
        </div>
      </div>
    );
//   }
// }

export default DarkNav;
