import React, { Component } from 'react';
import '../styles/App.css';
import Banner from './Banner'
import Menu from './Menu'
import Info from './Info'
import FeaturedMembers from './FeaturedMembers'
import Members from './Members'
import ContactUs from './ContactUs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }



  render() {
    return (
      <div className="app-container">
        <Banner
          onMenuToggle={this.props.onMenuToggle}
        />
        <Menu
          isMenuOpen={this.props.isMenuOpen}
          onMenuToggle={this.props.onMenuToggle}
        />
        <Info />
        <FeaturedMembers />
        <ContactUs />
      </div>
    );
  }
}

export default App;
