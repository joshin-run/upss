import React, { Component } from 'react';
import logo from '../images/logos/upss-logo-sleek-mid-bold.svg'

class MenuNavLogo extends Component {
  render() {
    return (
      <div>
        <a href="/"><img className="menu-logo-img"  src={logo} alt="UPSS" /></a>
      </div>
    );
  }
}

export default MenuNavLogo;
