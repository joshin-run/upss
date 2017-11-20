import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DarkNav from './DarkNav'
// import Footer from './Footer'
import WhatIsPS from '../components/FAQ-Content/WhatIsPS'
import CSFAQs from '../components/FAQ-Content/CSFAQs'
import WhatIsRS from '../components/FAQ-Content/WhatIsRS'
import RvsCS from '../components/FAQ-Content/RvsCS'
import WhatIsUPSS from '../components/FAQ-Content/WhatIsUPSS'
import WhySocietyDoc from '../components/FAQ-Content/WhySocietyDoc'

// console.log('I am faqs props:', props)
const FAQs = (props) => (
  <Router>
    <div>
    <DarkNav onMenuToggle={props.onMenuToggle} />
      <ul>
        <li><Link to="/what-is-plastic-surgery">What is Plastic Surgery?</Link></li>
        <li><Link to="/cosmetic-surgery-faqs">Cosmetic Surgery FAQs</Link></li>
        <li><Link to="/what-is-reconstructive-surgery">What is Reconstructive Surgery?</Link></li>
        <li><Link to="/reconstructive-vs-cosmetic-surgery">Reconstructive vs. Cosmetic Surgery</Link></li>
        <li><Link to="/what-is-utah-plastic-surgery-society">What is the Utah Plastic Surgery Society?</Link></li>
        <li><Link to="/why-should-you-choose-a-society-doctor">Why Should You Choose a Society Doctor?</Link></li>
      </ul>

      <hr/>

      <Route path="/what-is-plastic-surgery" component={WhatIsPS}/>
      <Route path="/cosmetic-surgery-faqs" component={CSFAQs}/>
      <Route path="/what-is-reconstructive-surgery" component={WhatIsRS}/>
      <Route path="/reconstructive-vs-cosmetic-surgery" component={RvsCS}/>
      <Route path="/what-is-utah-plastic-surgery-society" component={WhatIsUPSS}/>
      <Route path="/why-should-you-choose-a-society-doctor" component={WhySocietyDoc}/>
    </div>
  </Router>
)

export default FAQs;
