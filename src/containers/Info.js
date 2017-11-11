import React, { Component } from 'react';
import hexigonDoc from '../images/hexigonDoc.png'
import upssLogo from '../images/logos/upss-logo-text.png'
import toonDoc from '../images/toon-doc.svg'
import aspsLogo from '../images/logos/ASPS_logo_300dpi.jpg'
import steth from '../images/steth.png'

class Info extends Component {
  render() {
    return (
      <div className="info-wrapper">
        <p className="info-section-title">
          Our Mission
        </p>
        <div className="our-mission-container">
          <img className="our-mission-image" src={hexigonDoc} />
          <div className="our-mission-content">
            <img className="upss-logo-text-info"  src={upssLogo} alt="UPSS" />
            <div className="our-mission-text">
              <p><span>The Utah Plastic Surgery Society’s mission is to:</span></p><br />
              <p>Encourage the highest possible standards in the field of plastic surgery</p><br />
              <p>Provide trustworthy information to prospective patients</p><br />
              <p>Protect the public from irresponsible and unqualified practitioners</p>
            </div>
          </div>
        </div>
        <p className="info-section-title">
          UPSS Membership
        </p>
        <div className="upss-membership-container">
          <div className="upss-membership-content">
            <div className="upss-membership-text">
              <p>In order to qualify for membership in the Utah Plastic Surgery Society, a surgeon must be properly trained and be certified by the <a href="https://www.abplasticsurgery.org/" target="_blank"><span className="link">American Board of Plastic Surgery.</span></a></p><br />
              <p>Prospective patients can be assured that UPSS surgeons have successfully met the most rigorous academic and professional requirements, and have demonstrated outstanding surgical skill throughout their careers.</p>
            </div>
            <img className="toon-doctor-image"  src={toonDoc} alt="Cartoon Male Doctor" />
          </div>
        </div>
        <p className="info-section-title">
         American Society of<br />
         Plastic Surgeons
        </p>
        <div className="asps-container">
          <img className="asps-image" src={steth} />
          <div className="asps-content">
            <img className="asps-logo" src={aspsLogo} alt="ASPS Logo" />
            <div className="">
              <p>Only a board certified plastic surgeons will provide the medical expertise you deserve.</p><br />
              <p>Learn more about the <a href="https://www.plasticsurgery.org/" target="_blank"><span className="link">American Society of Plastic Surgeons</span></a></p><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
