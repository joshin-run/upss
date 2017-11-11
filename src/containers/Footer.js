import React, { Component } from 'react';
import facebook from '../images/icons/facebook-w.svg'
import twitter from '../images/icons/twitter-w.svg'
import youtube from '../images/icons/youtube-w.svg'

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">

        <div className="footer-info-container">
          <div className="footer-info">
            <p>Utah Plastic Surgery Society</p>
            <p>310 East 4500 South</p>
            <p>Suite 500</p>
            <p>Salt Lake City, UT 84107-4250</p>
            <p>(801) 747-3500</p>
          </div>
          <div className="footer-media">
            <img className="media" src={facebook} alt="Facebook" />
            <img className="media" src={twitter} alt="Twitter" />
            <img className="media" src={youtube} alt="Youtube" />
          </div>
        </div>

        <div className="footer-copy">
          <div className="footer-copy-text">
            <p className="copy-text">Copyright © 2017</p>
            <p className="society-text">Utah Plastic Surgery Society. All Rights Reserved</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;
