import React, { Component } from 'react';

class NavMenu extends Component {
  render() {
    return (
      <div className="nav-menu-wrapper">
        <ul className="nav-menu-container">
          <li className="item"><a href="/">Home</a></li>
          <li className="item"><a href="/plastic_surgery_faqs">Plastic Surgery FAQs</a></li>
          <li className="item"><a href="/procedures">Procedures</a></li>
          <li className="item"><a href="/member_directory">Member Directory</a></li>
          <li className="item"><a href="/contact_us">Contact Us</a></li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;
