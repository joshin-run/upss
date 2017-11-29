import React, { Component } from 'react';
import UPSSLogoSqWhite from '../images/logos/upss-logo-sq-wh.png'
import facebook from '../images/icons/facebook-circ-wh2.png'
import twitter from '../images/icons/twitter-circ-wh.png'
import youtube from '../images/icons/youtube-circ-wh2.png'

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-info-container">
          <img className="upss-sq-logo" src={UPSSLogoSqWhite} alt="Square UPSS Logo" />
          <div className="footer-media">
            <img className="media" src={facebook} alt="Facebook" />
            <img className="media" src={twitter} alt="Twitter" />
            <img className="media" src={youtube} alt="Youtube" />
          </div>
          <div className="footer-copy">
            <div className="footer-copy-text">
              <p className="copy-text">Copyright © 2017</p>
              <p className="society-text">Utah Plastic Surgery Society. All Rights Reserved</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;
