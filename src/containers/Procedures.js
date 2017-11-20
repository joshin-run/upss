import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DarkNav from './DarkNav'
// import Footer from './Footer'
import AWR from '../components/Procedures-Content/AWR'
import BodyContouring from '../components/Procedures-Content/BodyContouring'
import BodyProcedures from '../components/Procedures-Content/BodyProcedures'
import Botox from '../components/Procedures-Content/Botox'
import BrAugment from '../components/Procedures-Content/BrAugment'
import BrLift from '../components/Procedures-Content/BrLift'
import BrReconstruct from '../components/Procedures-Content/BrReconstruct'
import BrReduct from '../components/Procedures-Content/BrReduct'
import BrwLift from '../components/Procedures-Content/BrwLift'
import Cleft from '../components/Procedures-Content/Cleft'
import CongenFD from '../components/Procedures-Content/CongenFD'
import DermalFillers from '../components/Procedures-Content/DermalFillers'
import EarSurgery from '../components/Procedures-Content/EarSurgery'
import Eyelid from '../components/Procedures-Content/Eyelid'
import EyelidBleph from '../components/Procedures-Content/EyelidBleph'
import FacialFract from '../components/Procedures-Content/FacialFract'
import FacialRejuv from '../components/Procedures-Content/FacialRejuv'
import Hand from '../components/Procedures-Content/Hand'
import Jaw from '../components/Procedures-Content/Jaw'
import LaserBR from '../components/Procedures-Content/LaserBR'
import LaserHR from '../components/Procedures-Content/LaserHR'
import LaserP from '../components/Procedures-Content/LaserP'
import LaserSVT from '../components/Procedures-Content/LaserSVT'
import LaserWT from '../components/Procedures-Content/LaserWT'
import Lipo from '../components/Procedures-Content/Lipo'
import Micro from '../components/Procedures-Content/Micro'
import Nasal from '../components/Procedures-Content/Nasal'
import Neck from '../components/Procedures-Content/Neck'
import Nose from '../components/Procedures-Content/Nose'
import Otoplasty from '../components/Procedures-Content/Otoplasty'
import Scar from '../components/Procedures-Content/Scar'
import SkinCancer from '../components/Procedures-Content/SkinCancer'
import SkinGrafts from '../components/Procedures-Content/SkinGrafts'
import Tummy from '../components/Procedures-Content/Tummy'

const Procedures = (props) => (
  <Router>
    <div>
    <DarkNav onMenuToggle={props.onMenuToggle} />
      <ul>
        <li><Link to="/abdominal-wall-reconstruction">Abdominal Wall Reconstruction</Link></li>
        <li><Link to="/body-contouring">Body Contouring After Massive Weight Loss</Link></li>
        <li><Link to="/body-procedures">Body Procedures</Link></li>
        <li><Link to="/botox">BOTOX® Cosmetic</Link></li>
        <li><Link to="/breast-augmentation">Breast Augmentation (Breast Implants)</Link></li>
        <li><Link to="/breast-lift">Breast Lift</Link></li>
        <li><Link to="/breast-reconstruction">Breast Reconstruction</Link></li>
        <li><Link to="/breast-reduction">Breast Reduction</Link></li>
        <li><Link to="/brow-lift">Brow Lift</Link></li>
        <li><Link to="/cleft-lip-and-palate">Cleft Lip and Palate</Link></li>
        <li><Link to="/congenital-facial-deformities">Congenital Facial Deformities</Link></li>
        <li><Link to="/dermal-fillers">Dermal Fillers</Link></li>
        <li><Link to="/ear-surgery-otoplasty">Ear Surgery (Otoplasty)</Link></li>
        <li><Link to="/eyelid-surgery">Eyelid Surgery</Link></li>
        <li><Link to="/eyelid-surgery-blepharoplasty">Eyelid Surgery (Blepharoplasty)</Link></li>
        <li><Link to="/facial-fractures-and-wounds">Facial Fractures and Wounds</Link></li>
        <li><Link to="/facial-rejuvenation">Facial Rejuvenation</Link></li>
        <li><Link to="/hand-surgery">Hand Surgery</Link></li>
        <li><Link to="/jaw-surgery">Jaw Surgery</Link></li>
        <li><Link to="/laser-blemish-removal">Laser Blemish Removal</Link></li>
        <li><Link to="/laser-hair-removal">Laser Hair Removal</Link></li>
        <li><Link to="/laser-procedures">Laser Procedures</Link></li>
        <li><Link to="/laser-spider-vein-treatment">Laser Spider Vein Treatment</Link></li>
        <li><Link to="/laser-wrinkle-treatment">Laser Wrinkle Treatment</Link></li>
        <li><Link to="/liposuction">Liposuction</Link></li>
        <li><Link to="/microsurgery">Microsurgery</Link></li>
        <li><Link to="/nasal-septal-deviation-and-nose-surgery">Nasal Septal Deviation and Nose Surgery</Link></li>
        <li><Link to="/neck-lift">Neck Lift</Link></li>
        <li><Link to="/nose-surgery-rhinoplasty">Nose Surgery (Rhinoplasty)</Link></li>
        <li><Link to="/otoplasty-ear-setback-surgery-and-external-ear-reconstruction">Otoplasty (Ear SetbackSurgery) and External Ear Reconstruction</Link></li>
        <li><Link to="/scar-revision">Scar Revision</Link></li>
        <li><Link to="/skin-cancer-surgery">Skin Cancer Surgery</Link></li>
        <li><Link to="/skin-grafts-and-skin-flaps">Skin Grafts and Skin Flaps</Link></li>
        <li><Link to="/tummy-tuck-abdominoplasty">Tummy Tuck (Abdominoplasty)</Link></li>

      </ul>

      <hr/>

      <Route path="/abdominal-wall-reconstruction" component={AWR}/>
      <Route path="/body-contouring" component={BodyContouring}/>
      <Route path="/body-procedures" component={BodyProcedures}/>
      <Route path="/botox" component={Botox}/>
      <Route path="/breast-augmentation" component={BrAugment}/>
      <Route path="/breast-lift" component={BrLift}/>
      <Route path="/breast-reconstruction" component={BrReconstruct}/>
      <Route path="/breast-reduction" component={BrReduct}/>
      <Route path="/brow-lift" component={BrwLift}/>
      <Route path="/cleft-lip-and-palate" component={Cleft}/>
      <Route path="/congenital-facial-deformities" component={CongenFD}/>
      <Route path="/dermal-fillers" component={DermalFillers}/>
      <Route path="/ear-surgery-otoplasty" component={EarSurgery}/>
      <Route path="/eyelid-surgery" component={Eyelid}/>
      <Route path="/eyelid-surgery-blepharoplasty" component={EyelidBleph}/>
      <Route path="/facial-fractures-and-wounds" component={FacialFract}/>
      <Route path="/facial-rejuvenation" component={FacialRejuv}/>
      <Route path="/hand-surgery" component={Hand}/>
      <Route path="/jaw-surgery" component={Jaw}/>
      <Route path="/laser-blemish-removal" component={LaserBR}/>
      <Route path="/laser-hair-removal" component={LaserHR}/>
      <Route path="/laser-procedures" component={LaserP}/>
      <Route path="/laser-spider-vein-treatment" component={LaserSVT}/>
      <Route path="/laser-wrinkle-treatment" component={LaserWT}/>
      <Route path="/liposuction" component={Lipo}/>
      <Route path="/microsurgery" component={Micro}/>
      <Route path="/nasal-septal-deviation-and-nose-surgery" component={Nasal}/>
      <Route path="/neck-lift" component={Neck}/>
      <Route path="/nose-surgery-rhinoplasty" component={Nose}/>
      <Route path="/otoplasty-ear-setback-surgery-and-external-ear-reconstruction" component={Otoplasty}/>
      <Route path="/scar-revision" component={Scar}/>
      <Route path="/skin-cancer-surgery" component={SkinCancer}/>
      <Route path="/skin-grafts-and-skin-flaps" component={SkinGrafts}/>
      <Route path="/tummy-tuck-abdominoplasty" component={Tummy}/>

    </div>
  </Router>
)

export default Procedures;
