import React, { Component } from 'react';
import LearnMoreButton from './LearnMoreButton'
import upssLogo from '../images/logos/upss-logo-text.png'
import aspsLogo from '../images/logos/ASPS_logo_300dpi.jpg'

class LearnMore extends Component {
  render() {
    return (
      <div className="learnmore-wrapper">
        <div className="logo-text-wrapper">
          <a href=""><img className="upss-logo-text"  src={upssLogo} alt="UPSS" /></a>
          <a href="/"><img className="asps-logo-text"  src={aspsLogo} alt="UPSS" /></a></div>
        <LearnMoreButton />
      </div>
    );
  }
}

export default LearnMore;
