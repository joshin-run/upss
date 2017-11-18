import React from 'react';
import Home from './Home';
import FAQs from './FAQs';
import Procedures from './Procedures';
import Members from './Members';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
const Main = () => (
    <div>
        <Switch>
          <Route to="/" component={Home} />
          <Route path="/faqs" component={FAQs}/>
          <Route path="/procedures" component={Procedures}/>
          <Route path="/members" component={Members}/>
        </Switch>
        <Footer />
    </div>
);
export default Main
