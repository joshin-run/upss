// import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DarkNav from './DarkNav'
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
    <div className="title-bar">
      <p className="title-bar_title">Procedures</p><br />
      <p className="title-bar_subtitle">Here is an extensive list of procedures</p>
      <p className="title-bar_subtitle">(See selection below)</p>
    </div>
    <div className="submenu-wrapper">
      <div className="submenu">
        <ul>
          <li><Link to={`${props.match.path}/abdominal-wall-reconstruction`}>Abdominal Wall Reconstruction</Link></li>
          <li><Link to={`${props.match.path}/body-contouring`}>Body Contouring After Massive Weight Loss</Link></li>
          <li><Link to={`${props.match.path}/body-procedures`}>Body Procedures</Link></li>
          <li><Link to={`${props.match.path}/botox`}>BOTOX® Cosmetic</Link></li>
          <li><Link to={`${props.match.path}/breast-augmentation`}>Breast Augmentation (Breast Implants)</Link></li>
          <li><Link to={`${props.match.path}/breast-lift`}>Breast Lift</Link></li>
          <li><Link to={`${props.match.path}/breast-reconstruction`}>Breast Reconstruction</Link></li>
          <li><Link to={`${props.match.path}/breast-reduction`}>Breast Reduction</Link></li>
          <li><Link to={`${props.match.path}/brow-lift`}>Brow Lift</Link></li>
          <li><Link to={`${props.match.path}/cleft-lip-and-palate`}>Cleft Lip and Palate</Link></li>
          <li><Link to={`${props.match.path}/congenital-facial-deformities`}>Congenital Facial Deformities</Link></li>
          <li><Link to={`${props.match.path}/dermal-fillers`}>Dermal Fillers</Link></li>
          <li><Link to={`${props.match.path}/ear-surgery-otoplasty`}>Ear Surgery (Otoplasty)</Link></li>
          <li><Link to={`${props.match.path}/eyelid-surgery`}>Eyelid Surgery</Link></li>
          <li><Link to={`${props.match.path}/eyelid-surgery-blepharoplasty`}>Eyelid Surgery (Blepharoplasty)</Link></li>
          <li><Link to={`${props.match.path}/facial-fractures-and-wounds`}>Facial Fractures and Wounds</Link></li>
          <li><Link to={`${props.match.path}/facial-rejuvenation`}>Facial Rejuvenation</Link></li>
          <li><Link to={`${props.match.path}/hand-surgery`}>Hand Surgery</Link></li>
          <li><Link to={`${props.match.path}/jaw-surgery`}>Jaw Surgery</Link></li>
          <li><Link to={`${props.match.path}/laser-blemish-removal`}>Laser Blemish Removal</Link></li>
          <li><Link to={`${props.match.path}/laser-hair-removal`}>Laser Hair Removal</Link></li>
          <li><Link to={`${props.match.path}/laser-procedures`}>Laser Procedures</Link></li>
          <li><Link to={`${props.match.path}/laser-spider-vein-treatment`}>Laser Spider Vein Treatment</Link></li>
          <li><Link to={`${props.match.path}/laser-wrinkle-treatment`}>Laser Wrinkle Treatment</Link></li>
          <li><Link to={`${props.match.path}/liposuction`}>Liposuction</Link></li>
          <li><Link to={`${props.match.path}/microsurgery`}>Microsurgery</Link></li>
          <li><Link to={`${props.match.path}/nasal-septal-deviation-and-nose-surgery`}>Nasal Septal Deviation and Nose Surgery</Link></li>
          <li><Link to={`${props.match.path}/neck-lift`}>Neck Lift</Link></li>
          <li><Link to={`${props.match.path}/nose-surgery-rhinoplasty`}>Nose Surgery (Rhinoplasty)</Link></li>
          <li><Link to={`${props.match.path}/otoplasty-ear-setback-surgery-and-external-ear-reconstruction`}>Otoplasty (Ear SetbackSurgery) and External Ear Reconstruction</Link></li>
          <li><Link to={`${props.match.path}/scar-revision`}>Scar Revision</Link></li>
          <li><Link to={`${props.match.path}/skin-cancer-surgery`}>Skin Cancer Surgery</Link></li>
          <li><Link to={`${props.match.path}/skin-grafts-and-skin-flaps`}>Skin Grafts and Skin Flaps</Link></li>
          <li><Link to={`${props.match.path}/tummy-tuck-abdominoplasty`}>Tummy Tuck (Abdominoplasty)</Link></li>
        </ul>
      </div>
      <div className="submenu-body">
        <Route path={`${props.match.path}/abdominal-wall-reconstruction`} component={AWR}/>
        <Route path={`${props.match.path}/body-contouring`} component={BodyContouring}/>
        <Route path={`${props.match.path}/body-procedures`} component={BodyProcedures}/>
        <Route path={`${props.match.path}/botox`} component={Botox}/>
        <Route path={`${props.match.path}/breast-augmentation`} component={BrAugment}/>
        <Route path={`${props.match.path}/breast-lift`} component={BrLift}/>
        <Route path={`${props.match.path}/breast-reconstruction`} component={BrReconstruct}/>
        <Route path={`${props.match.path}/breast-reduction`} component={BrReduct}/>
        <Route path={`${props.match.path}/brow-lift`} component={BrwLift}/>
        <Route path={`${props.match.path}/cleft-lip-and-palate`} component={Cleft}/>
        <Route path={`${props.match.path}/congenital-facial-deformities`} component={CongenFD}/>
        <Route path={`${props.match.path}/dermal-fillers`} component={DermalFillers}/>
        <Route path={`${props.match.path}/ear-surgery-otoplasty`} component={EarSurgery}/>
        <Route path={`${props.match.path}/eyelid-surgery`} component={Eyelid}/>
        <Route path={`${props.match.path}/eyelid-surgery-blepharoplasty`} component={EyelidBleph}/>
        <Route path={`${props.match.path}/facial-fractures-and-wounds`} component={FacialFract}/>
        <Route path={`${props.match.path}/facial-rejuvenation`} component={FacialRejuv}/>
        <Route path={`${props.match.path}/hand-surgery`} component={Hand}/>
        <Route path={`${props.match.path}/jaw-surgery`} component={Jaw}/>
        <Route path={`${props.match.path}/laser-blemish-removal`} component={LaserBR}/>
        <Route path={`${props.match.path}/laser-hair-removal`} component={LaserHR}/>
        <Route path={`${props.match.path}/laser-procedures`} component={LaserP}/>
        <Route path={`${props.match.path}/laser-spider-vein-treatment`} component={LaserSVT}/>
        <Route path={`${props.match.path}/laser-wrinkle-treatment`} component={LaserWT}/>
        <Route path={`${props.match.path}/liposuction`} component={Lipo}/>
        <Route path={`${props.match.path}/microsurgery`} component={Micro}/>
        <Route path={`${props.match.path}/nasal-septal-deviation-and-nose-surgery`} component={Nasal}/>
        <Route path={`${props.match.path}/neck-lift`} component={Neck}/>
        <Route path={`${props.match.path}/nose-surgery-rhinoplasty`} component={Nose}/>
        <Route path={`${props.match.path}/otoplasty-ear-setback-surgery-and-external-ear-reconstruction`} component={Otoplasty}/>
        <Route path={`${props.match.path}/scar-revision`} component={Scar}/>
        <Route path={`${props.match.path}/skin-cancer-surgery`} component={SkinCancer}/>
        <Route path={`${props.match.path}/skin-grafts-and-skin-flaps`} component={SkinGrafts}/>
        <Route path={`${props.match.path}/tummy-tuck-abdominoplasty`} component={Tummy}/>
      </div>
    </div>
    </div>
  </Router>
)

export default Procedures;
