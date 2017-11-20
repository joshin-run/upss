import React, { Component } from 'react';
import DarkNav from './DarkNav';
import Home from './Home';
import Menu from './Menu';
import FAQs from './FAQs';
import Procedures from './Procedures';
import Members from './Members';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
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

// const Main = () => (
  render() {
    return (
      <div>
        <DarkNav onMenuToggle={this.toggleMenu}/>
        <Menu
          isMenuOpen={this.state.isMenuOpen}
          onMenuToggle={this.toggleMenu}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faqs" component={FAQs}/>
          <Route exact path="/procedures" component={Procedures}/>
          <Route exact path="/members" component={Members}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main
