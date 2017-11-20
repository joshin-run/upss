import React, { Component } from 'react';
import DarkNav from './DarkNav';
import Home from './Home';
import Menu from './Menu';
import FAQs from './FAQs';
import Procedures from './Procedures';
import Members from './Members';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import { render } from 'react-dom'
import { browserHistory, Router, Link, withRouter } from 'react-router'

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

  render() {
    return (
      <div>
        <Menu
          isMenuOpen={this.state.isMenuOpen}
          onMenuToggle={this.toggleMenu}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faqs" render={(props) => (
            <FAQs {...props} onMenuToggle={this.toggleMenu} />
          )} />
          <Route exact path="/procedures" render={(props) => (
            <Procedures {...props} onMenuToggle={this.toggleMenu} />
          )} />
          <Route exact path="/members" render={(props) => (
            <Members {...props} onMenuToggle={this.toggleMenu} />
          )} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main
