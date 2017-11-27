import React, { Component } from 'react';
import logo from '../images/logos/upss-logo-sleek-mid-bold-white.png'

class NavLogo extends Component {
  render() {
    return (
      <div>
        <a href="/"><img className="logo-img"  src={logo} alt="UPSS" /></a>
      </div>
    );
  }
}

export default NavLogo;
