import React, { Component } from 'react';
import Navbar from './Navbar'
import BannerButton from '../components/BannerButton'

class Banner extends Component {
  constructor(props) {
    super(props),
    console.log(props)
  }
  render() {
    return (
      <div className="banner-wrapper">
        <div className="banner-image" alt="Girl in Field">
        <Navbar />
          <div className="banner-gradient">
            <div className="banner-text-container">
              <p>"I didn’t know my Cosmetic Surgeon</p>
              <p><span>wasn’t</span> a Plastic Surgeon."</p>
            </div>
          </div>
          <BannerButton />
        </div>
      </div>
    );
  }
}

export default Banner;
