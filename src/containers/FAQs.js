import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DarkNav from './DarkNav'
import WhatIsPS from '../components/FAQ-Content/WhatIsPS'
import CSFAQs from '../components/FAQ-Content/CSFAQs'
import WhatIsRS from '../components/FAQ-Content/WhatIsRS'
import RvsCS from '../components/FAQ-Content/RvsCS'
import WhatIsUPSS from '../components/FAQ-Content/WhatIsUPSS'
import WhySocietyDoc from '../components/FAQ-Content/WhySocietyDoc'

const FAQs = ( props ) => (
  <Router>
    <div>
    <DarkNav onMenuToggle={props.onMenuToggle} />
      <div className="title-bar">
        <p className="title-bar_title">Plastic Surgery FAQs</p><br />
        <p className="title-bar_subtitle">Take a look at some of the frequently asked questions</p>
      </div>
      <div className="submenu-wrapper">
        <div className="submenu">
          <ul>
            <li><Link to={`${props.match.path}/what-is-plastic-surgery`}>What is Plastic Surgery?</Link></li>
            <li><Link to={`${props.match.path}/cosmetic-surgery-faqs`}>Cosmetic Surgery FAQs</Link></li>
            <li><Link to={`${props.match.path}/what-is-reconstructive-surgery`}>What is Reconstructive Surgery?</Link></li>
            <li><Link to={`${props.match.path}/reconstructive-vs-cosmetic-surgery`}>Reconstructive vs. Cosmetic Surgery</Link></li>
            <li><Link to={`${props.match.path}/what-is-utah-plastic-surgery-society`}>What is the Utah Plastic Surgery Society?</Link></li>
            <li><Link to={`${props.match.path}/why-should-you-choose-a-society-doctor`}>Why Should You Choose a Society Doctor?</Link></li>
          </ul>
        </div>
        <div className="submenu-body">
          <Route exact path={`${props.match.path}/what-is-plastic-surgery`} component={WhatIsPS}/>
          <Route path={`${props.match.path}/cosmetic-surgery-faqs`} component={CSFAQs}/>
          <Route path={`${props.match.path}/what-is-reconstructive-surgery`} component={WhatIsRS}/>
          <Route path={`${props.match.path}/reconstructive-vs-cosmetic-surgery`} component={RvsCS}/>
          <Route path={`${props.match.path}/what-is-utah-plastic-surgery-society`} component={WhatIsUPSS}/>
          <Route path={`${props.match.path}/why-should-you-choose-a-society-doctor`} component={WhySocietyDoc}/>
        </div>
      </div>
    </div>
  </Router>
)

export default FAQs;
