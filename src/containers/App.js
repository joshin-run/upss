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
      isPaneOpenLeft: false
    };
  }

  render() {
    return (
      <div>
        <Banner toggleMenu={() => this.setState(prevState => ({
          menuIsOpen: !prevState.menuIsOpen,
        }))}/>
        <Menu isOpen={this.state.menuIsOpen} />
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
