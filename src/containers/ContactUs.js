import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="contactUs-wrapper">
        <div className="contactUs-overlay">
          <div className="contactUs-text-container">
            <p>Contact Us</p>
            <form action="">
              <fieldset className="fieldset">
                Full name:<br />
                <input className="input-fields" type="text" name="fullname" />
                <br />
                Email:<br />
                <input className="input-fields" type="text" name="email" />
                <br />
                Subject:<br />
                <input className="input-fields" type="text" name="subject" />
                <br />
                Message:<br />
                <textarea className="input-area" rows="8" />
                <br /><br />
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
