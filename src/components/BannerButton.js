import React, { Component } from 'react';

class BannerButton extends Component {

  render() {
    return (
      <div className="bannerbutton-container">
        <a href="#info">
          <div className="bannerbutton">
            <p>Learn More</p>
          </div>
        </a>
      </div>
    );
  }
}

export default BannerButton;
