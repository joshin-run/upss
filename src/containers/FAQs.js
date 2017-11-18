import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

class FAQs extends Component {
  render() {
    return (
      <div className="faq-wrapper">
        <Navbar />
          <p><a href="/">HELLOW!</a></p>
        <Footer />
      </div>
    );
  }
}

export default FAQs;
