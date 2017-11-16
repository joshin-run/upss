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
    };
  }

  toggleMenu = () => {
    this.setState({isSidebarOpen: !this.state.isMenuOpen})
  }

  render() {
    return (
      <div>
        <Banner onToggleMenu={this.toggleMenu}/>
        <Menu />
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
