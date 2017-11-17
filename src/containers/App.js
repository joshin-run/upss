import React, { Component } from 'react';
import '../styles/App.css';
import Banner from './Banner'
import Menu from './Menu'
import Info from './Info'
import FeaturedMembers from './FeaturedMembers'
import Members from './Members'
import ContactUs from './ContactUs'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  render() {
    return (
      <div className="app-container">
        <Banner
          onMenuToggle={this.toggleMenu}
        />
        <Menu 
          isMenuOpen={this.state.isMenuOpen}
          onMenuToggle={this.toggleMenu}
        />
        <Info />
        <FeaturedMembers />
        <Members />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
