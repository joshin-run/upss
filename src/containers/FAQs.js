import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Navbar from './Navbar'
// import Footer from './Footer'
import WhatIsPS from '../components/FAQ-Content/WhatIsPS'
import CSFAQs from '../components/FAQ-Content/CSFAQs'
import WhatIsRS from '../components/FAQ-Content/WhatIsRS'
import RvsCS from '../components/FAQ-Content/RvsCS'
import WhatIsUPSS from '../components/FAQ-Content/WhatIsUPSS'
import WhySocietyDoc from '../components/FAQ-Content/WhySocietyDoc'


// class FAQs extends Component {
//   render() {
//     return (
//       <div className="faq-wrapper">
//
//       </div>
//     );
//   }
// }

const FAQs = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/whatIsPS">What is Plastic Surgery?</Link></li>
        <li><Link to="/CSFAQs">Cosmetic Surgery FAQs</Link></li>
        <li><Link to="/whatIsRS">What is Reconstructive Surgery?</Link></li>
        <li><Link to="/RvsCS">Reconstructive vs. Cosmetic Surgery</Link></li>
        <li><Link to="/whatIsUPSS">What is the Utah Plastic Surgery Society?</Link></li>
        <li><Link to="/whySocietyDoc">Why Should You Choose a Society Doctor?</Link></li>
      </ul>

      <hr/>

      <Route path="/whatIsPS" component={WhatIsPS}/>
      <Route path="/CSFAQs" component={CSFAQs}/>
      <Route path="/whatIsRS" component={WhatIsRS}/>
      <Route path="/RvsCS" component={RvsCS}/>
      <Route path="/whatIsUPSS" component={WhatIsUPSS}/>
      <Route path="/whySocietyDoc" component={WhySocietyDoc}/>
    </div>
  </Router>
)

export default FAQs;
