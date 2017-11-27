import React, { Component } from 'react';

class LearnMoreButton extends Component {
  render() {
    return (
      <div>
        <a href="#info">
          <button className="learnmorebutton" type="button" value="Learn More" onClick={e => {console.log('learn more button clicked')}} />
        </a>
        <a href="#info">
          <button className="learnmorebutton" type="button" value="Learn More" onClick={e => {console.log('learn more button clicked')}} />
        </a>
      </div>
    );
  }
}

export default LearnMoreButtonn;
