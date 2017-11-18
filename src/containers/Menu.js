import React, { Component } from 'react';
import MenuNavbar from './MenuNavbar'
import facebook from '../images/icons/facebook-circ-wh2.png'
import twitter from '../images/icons/twitter-circ-wh.png'
import youtube from '../images/icons/youtube-circ-wh2.png'
import faqs from './FAQs'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>
//
//       <hr/>
//
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )

class Menu extends Component {
  constructor(props) {
    super(props)
    console.log('Menu props:', props)
    this.state = {}
  }

  render() {
    return (
      <div className={`menu-wrapper${this.props.isMenuOpen ? ' open' : ''}`}>
        <MenuNavbar onMenuToggle={this.props.onMenuToggle}/>
        <div className="menu-items-wrapper">
          <ul className="menu-items-container">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/faqs">Plastic Surgery FAQs</Link></li>
            <li><Link to="/procedures">Procedures</Link></li>
            <li><Link to="/members">Member Directory</Link></li>
            <li><Link to="#contactus">Contact Us</Link></li>
          </ul>
          <div className="menu-info">
            <p>Utah Plastic Surgery Society</p>
            <p>310 East 4500 South</p>
            <p>Suite 500</p>
            <p>Salt Lake City, UT 84107-4250</p>
            <p>(801) 747-3500</p>
          </div>
        </div>
        <div className="menu-media">
          <img className="menu-media-icons" src={facebook} alt="Facebook" />
          <img className="menu-media-icons" src={twitter} alt="Twitter" />
          <img className="menu-media-icons" src={youtube} alt="Youtube" />
        </div>
      </div>
    );
  }
}

export default Menu;
