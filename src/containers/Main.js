import React from 'react';
import DarkNav from './DarkNav';
import Home from './Home';
import FAQs from './FAQs';
import Procedures from './Procedures';
import Members from './Members';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
const Main = () => (
    <div>
      <DarkNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faqs" component={FAQs}/>
        <Route exact path="/procedures" component={Procedures}/>
        <Route exact path="/members" component={Members}/>
      </Switch>
      <Footer />
    </div>
);
export default Main
