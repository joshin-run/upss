import React, { Component } from 'react';
// import exDocPic from '../images/doctors/ex_doc_pic_235x360.png'
import YorkYates from '../images/doctors/york_yates.jpg'
import LeeMalan from '../images/doctors/lee_malan.jpg'
import RenatoSaltz from '../images/doctors/renato_saltz.png'
import JuneChen from '../images/doctors/june_chen.jpg'
import ScottLindley from '../images/doctors/scott_lindley.png'
import DavidClayton from '../images/doctors/david_clayton.png'
import MichaelMarion from '../images/doctors/Marion_Michael_D_2x4.jpg'
import BryanSonntag from '../images/doctors/bryan_sonntag.jpg'
import GrantAFairbanks from '../images/doctors/grant_a_fairbanks.jpg'
import StephanRalston from '../images/doctors/stephan_ralston.jpg'
import JamesClayton from '../images/doctors/james_clayton.jpg'
import TrentonJones from '../images/doctors/trenton_jones.jpg'
import JasonHancey from '../images/doctors/jason_hancey.png'
import GrantRFairbanks from '../images/doctors/grant_r_fairbanks.jpg'
import KimballCrofts from '../images/doctors/kimball_crofts.jpg'
import DanielSellers from '../images/doctors/daniel_sellers.jpg'
import BradfordRockwell from '../images/doctors/brad_rockwell.jpg'
import DavidThomas from '../images/doctors/david_thomas.png'
import EricAshby from '../images/doctors/eric_ashby.jpg'
import GregoryKjar from '../images/doctors/gregory_kjar.jpg'
import ScottHaupt from '../images/doctors/scott_haupt.png'
import ChristineCheng from '../images/doctors/christine_cheng.jpg'
import BrianBrzowski from '../images/doctors/brian_brzowski.jpg'

class FeaturedMembers extends Component {
  render() {
    return (
      <div className="featured-members-wrapper">
        <p className="page-header">Featured Members</p>
        <p className="header-sub-title">All Society Members are</p>
        <p className="header-sub-title">Board Certified by</p>
        <a href="https://www.plasticsurgery.org/"><p className="content">The American Board of Plastic Surgery</p></a>

        <div className="featured-members-card-container">
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={YorkYates} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                York Yates, M.D.
              </p>
              <p className="featured-member-address">
                2121 North 1700 West<br />
                Layton, UT 84041
              </p>
              <p className="featured-member-phone-number">
                (801) 773-4840
              </p>
              <p className="featured-member-site">
                <a href="http://www.yorkyates.com" target="_blank">www.yorkyates.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={LeeMalan} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Lee J. Malan, M.D.
              </p>
              <p className="featured-member-address">
              3955 Harrison Blvd<br />
              Ogden, UT 84403
              </p>
              <p className="featured-member-phone-number">
                (801) 621-3591
              </p>
              <p className="featured-member-site">

              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={RenatoSaltz} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Renato Saltz, M.D.
              </p>
              <p className="featured-member-address">
              5445 South Highland Drive<br />
              Salt Lake City, UT 84117
              </p>
              <p className="featured-member-phone-number">
                (801) 274-9500
              </p>
              <p className="featured-member-site">
                <a href="http://www.saltzplasticsurgery.com" target="_blank">www.saltzplasticsurgery.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={JuneChen} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                June S. Chen, M.D.
              </p>
              <p className="featured-member-address">
              7240 S. Highland Dr., <br />
              Suite 175<br />
              Salt Lake City, UT 84121
              </p>
              <p className="featured-member-phone-number">
                (801) 943-0401
              </p>
              <p className="featured-member-site">
                <a href="http://www.jschenmd.com" target="_blank">www.jschenmd.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={ScottLindley} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                T. Scott Lindley, M.D.
              </p>
              <p className="featured-member-address">
              9500 South 1300 East<br />
              Sandy, UT 84049
              </p>
              <p className="featured-member-phone-number">
                (801) 501-2555
              </p>
              <p className="featured-member-site">

              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={DavidClayton} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                David N. Clayton, M.D.
              </p>
              <p className="featured-member-address">
              9450 South 1300 East,<br />
              Suite 220<br />
              Sandy, UT 84094
              </p>
              <p className="featured-member-phone-number">
                (801) 501-6500
              </p>
              <p className="featured-member-site">
              <a href="http://www.claytonplasticsurgery.com" target="_blank">www.claytonplasticsurgery.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={MichaelMarion} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Michael D. Marion, M.D.
              </p>
              <p className="featured-member-address">
              680 East Main Street<br />
              Lehi, UT 84043
              </p>
              <p className="featured-member-phone-number">
                (801) 331-8554
              </p>
              <p className="featured-member-site">
              <a href="http://www.mdmarion.com" target="_blank">www.mdmarion.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={BryanSonntag} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Bryan V. Sonntag, M.D.
              </p>
              <p className="featured-member-address">
              10382 South Jordan Parkway,<br />
              Suite 100<br />
              South Jordan, UT 84095
              </p>
              <p className="featured-member-phone-number">
                (801) 571-7710
              </p>
              <p className="featured-member-site">
              <a href="http://www.bryansonntag.com" target="_blank">www.bryansonntag.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={GrantAFairbanks} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Grant A. Fairbanks, M.D.
              </p>
              <p className="featured-member-address">
              1151 East 3900 South<br />
              Salt Lake City, UT 84124
              </p>
              <p className="featured-member-phone-number">
                (801) 268-8838
              </p>
              <p className="featured-member-site">
              <a href="http://www.FairbanksPlasticSurgery.com" target="_blank">www.FairbanksPlasticSurgery.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={StephanRalston} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Stephan L. Ralston, M.D.
              </p>
              <p className="featured-member-address">
              1452 East Ridgeline Drive,<br />
              Suite 100<br />
              South Ogden, UT 84405
              </p>
              <p className="featured-member-phone-number">
                (801) 479-5937
              </p>
              <p className="featured-member-site">
              <a href="http://www.enhancementsurgery.com" target="_blank">www.enhancementsurgery.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={JamesClayton} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Stephan L. Ralston, M.D.
              </p>
              <p className="featured-member-address">
              280 River Park Drive, <br />
              Suite 240<br />
              Provo, UT 84604
              </p>
              <p className="featured-member-phone-number">
                (801) 375-4646
              </p>
              <p className="featured-member-site">
              <a href="http://www.jamesclaytonmd.com" target="_blank">www.jamesclaytonmd.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={TrentonJones} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Trenton Jones, M.D.
              </p>
              <p className="featured-member-address">
              1375 East 800 North<br />
              Orem, UT 84097
              </p>
              <p className="featured-member-phone-number">
                (801) 418-8172
              </p>
              <p className="featured-member-site">
              <a href="http://www.trentonjonesmd.com" target="_blank">www.trentonjonesmd.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={JasonHancey} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Jason Hancey, M.D.
              </p>
              <p className="featured-member-address">
              9450 South 1300 East, <br />
              Suite 220<br />
              Sandy, UT 84093
              </p>
              <p className="featured-member-phone-number">
                (801) 501-6250
              </p>
              <p className="featured-member-site">

              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={GrantRFairbanks} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Grant R. Fairbanks, M.D.
              </p>
              <p className="featured-member-address">
              1151 East 3900 South<br />
              Salt Lake City, UT 84124
              </p>
              <p className="featured-member-phone-number">
                (801) 268-8838
              </p>
              <p className="featured-member-site">
                <a href="http://www.FairbanksPlasticSurgery.com" target="_blank">www.FairbanksPlasticSurgery.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={KimballCrofts} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Kimball M. Crofts, M.D.
              </p>
              <p className="featured-member-address">
              385 West 600 North<br />
              Lindon, UT 84103
              </p>
              <p className="featured-member-phone-number">
                (801) 785-8825
              </p>
              <p className="featured-member-site">
                <a href="http://www.croftsmd.com" target="_blank">www.croftsmd.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={BradfordRockwell} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                W. Bradford Rockwell, M.D.
              </p>
              <p className="featured-member-address">
              30 North 1900 East,<br />
              #3B 400<br />
              Salt Lake City, UT 84132
              </p>
              <p className="featured-member-phone-number">
                (801) 585-3253
              </p>
              <p className="featured-member-site">

              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={DavidThomas} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                David S. Thomas, M.D.
              </p>
              <p className="featured-member-address">
              370th 9th Avenue,<br />
               Suite 200<br />
              Salt Lake City, UT 84103
              </p>
              <p className="featured-member-phone-number">
                (801) 355-0731
              </p>
              <p className="featured-member-site">

              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={EricAshby} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Eric Ashby, M.D.
              </p>
              <p className="featured-member-address">
              1660 West Antelope Dr.,<br />
               Suite #210<br />
              Layton, UT 84041
              </p>
              <p className="featured-member-phone-number">
                (801) 779-0700
              </p>
              <p className="featured-member-site">
                <a href="http://www.ashbyplasticsurgery.com" target="_blank">www.ashbyplasticsurgery.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={GregoryKjar} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Gregory Kjar, M.D.
              </p>
              <p className="featured-member-address">
              1551 Renaissance Towne Dr.,<br />
               Suite 360<br />
              Bountiful, UT 84010
              </p>
              <p className="featured-member-phone-number">
                (801) 295-9105
              </p>
              <p className="featured-member-site">
                <a href="http://www.drkjar.com" target="_blank">www.drkjar.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={ScottHaupt} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                R. Scott Haupt, M.D.
              </p>
              <p className="featured-member-address">
              5292 College Drive,<br />
               Suite 302<br />
              Murray, UT 84123
              </p>
              <p className="featured-member-phone-number">
                (801) 293-8100
              </p>
              <p className="featured-member-site">
                <a href="http://www.utahcosmeticsurgery.com" target="_blank">www.utahcosmeticsurgery.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={ChristineCheng} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Christine A. Cheng, M.D.
              </p>
              <p className="featured-member-address">
              415 South Medical Drive<br />
              Bountiful, UT 84010
              </p>
              <p className="featured-member-phone-number">
                (801) 298-9774
              </p>
              <p className="featured-member-site">
                <a href="http://www.womanplasticsurgeon.com" target="_blank">www.womanplasticsurgeon.com</a>
              </p>
            </div>
          </div>
          <div className="featured-member-card">
            <img className="featured-member-pic" href="" src={BrianBrzowski} />
            <div className="contact-info-container">
              <p className="featured-member-name">
                Brian K. Brzowski, M.D.
              </p>
              <p className="featured-member-address">
              1525 East 6000 South,<br />
               Suite C<br />
              South Ogden, UT 84405
              </p>
              <p className="featured-member-phone-number">
                (801) 479-5722
              </p>
              <p className="featured-member-site">
                <a href="http://www.brzowski.com" target="_blank">www.brzowski.com</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default FeaturedMembers;
