import React, { Component } from 'react';
import stethHeart from '../images/steth-heart.png'
import upssLogoPink from '../images/logos/upss-logo-sleek-mid-bold-pink.png'
import toonDoc from '../images/toon-doc.svg'
import aspsLogo from '../images/logos/ASPS_logo_300dpi.jpg'
import docComputer from '../images/doc-computer.png'
import redCheckmark from '../images/icons/red-checkmark.svg'

class Info extends Component {
  render() {
    return (
      <div id="info" className="info-wrapper">
        <div className="page-container">
        <p className="info-section-title">
        Our Mission
        </p>
        <div className="our-mission-container">
          <img className="steth-heart" src={stethHeart} />
          <div className="our-mission-content">
            <img className="upss-logo-pink"  src={upssLogoPink} alt="UPSS" />
            <ul className="our-mission-text">
              <p><span>The Utah Plastic Surgery Society’s mission is to:</span></p><br />
              <li>Encourage the highest possible standards in the field of plastic surgery</li><br />
              <li>Provide trustworthy information to prospective patients</li><br />
              <li>Protect the public from irresponsible and unqualified practitioners</li>
            </ul>
          </div>
        </div>
          <p className="info-section-title">
          UPSS Membership
          </p>
          <div className="upss-membership-container">
            <div className="upss-membership-content">
              <div className="upss-membership-text">
                <p>In order to qualify for membership in the Utah Plastic Surgery Society, a surgeon must be properly trained and be certified by the <a href="https://www.abplasticsurgery.org/"><span className="link">American Board of Plastic Surgery.</span></a></p>
                <p><br />Prospective patients can be assured that UPSS surgeons have successfully met the most rigorous academic and professional requirements, and have demonstrated outstanding surgical skill throughout their careers.</p>
              </div>
              <img className="toon-doctor-image"  src={toonDoc} alt="Cartoon Male Doctor" />
            </div>
          </div>
          <p className="info-section-title">
          American Society of<br />
          Plastic Surgeons
          </p>
          <div className="asps-container">
            <img className="doc-computer" src={docComputer} />
            <div className="asps-content">
              <img className="asps-logo" src={aspsLogo} alt="ASPS Logo" />
              <div className="">
                <p>Only a board certified plastic surgeons will provide the medical expertise you deserve.</p><br />
                <p>Learn more about the <a href="https://www.plasticsurgery.org/"><span className="link">American Society of Plastic Surgeons</span></a></p><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
