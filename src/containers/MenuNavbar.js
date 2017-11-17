import React, { Component } from 'react';
import MenuNavLogo from '../components/MenuNavLogo'
import ex from '../images/icons/ex-32-thin.png'

class MenuNavbar extends Component {
  constructor(props) {
    super(props),
    console.log('MenuNavbar props:', props),
    this.state = {}
  }
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <MenuNavLogo />
          <div className="hamburger-container">
            <div className="icon-container" onClick={this.props.onMenuToggle}>
              <img className="ex" src={ex} />
            </div>
            <p className="hamburger-menu" onClick={this.props.onMenuToggle}>CLOSE</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNavbar;
