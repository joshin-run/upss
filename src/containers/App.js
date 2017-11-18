import React, { Component } from 'react';
import '../styles/App.css';
// import Home from './Home'
import Menu from './Menu'
// import FAQs from './FAQs'
// import Procedures from './Procedures'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
      <Router>
        <div className="app-container">
          <Menu
            isMenuOpen={this.state.isMenuOpen}
            onMenuToggle={this.toggleMenu}
          />

          <Route exact path="/" component={Home}/>
          <Route path="/faqs" component={FAQs}/>
          <Route path="/procedures" component={Procedures}/>

          <Footer />
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <Home
    onMenuToggle={this.toggleMenu}
  />
)
const FAQs = () => (
  <FAQs
  onMenuToggle={this.toggleMenu}
  />
)
const Procedures = () => (
  <Procedures
    onMenuToggle={this.toggleMenu}
  />
)



export default App;
