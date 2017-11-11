import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="contactUs-wrapper">
        <div className="contactUs-overlay">
          <div className="contactUs-text-container">
            <p className="title">Contact Us</p>
            <form action="">
              <fieldset className="fieldset">
                <p className="form-label">Full name:</p>
                <input className="input-fields" type="text" name="fullname" />
                <p className="form-label">Email:</p>
                <input className="input-fields" type="text" name="email" />
                <p className="form-label">Subject:</p>
                <input className="input-fields" type="text" name="subject" />
                <p className="form-label">Message:</p>
                <textarea className="input-area" rows="8" />                  
                <input className="submit-btn" type="submit" value="Submit" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
