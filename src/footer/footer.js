import React from 'react';
import '../styles/main.css';
import {Link} from 'react-router-dom'

const Footer = () => {
      return(
            <div class="Footer">
            <hr className="line"/>
                  <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="demo">
                        <div className="connect" >STAY CONNECTED</div>
                        <div className="socialMedia">
                        <a href="https://www.facebook.com/" className="fa fa-facebook navbar-brand"> </a>
                        <a href="https://twitter.com/" className="fa fa-twitter navbar-brand"> </a>
                        <a href="https://www.instagram.com/" className="fa fa-instagram navbar-brand"> </a>
                        <a href="https://www.reddit.com/" className="fa fa-reddit navbar-brand"> </a>
                        </div>
                        </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-sm-12">
                              <div className="demo">
                                    <ul className="footerInfo">
                                          <li className="copywrites"><Link  to="/" className="foot">&copy; 2020 THIRD EYE WEB DESIGN</Link></li>
                                          <li className="termsConditions"><Link to="/" className="foot">TERMS & CONDITIONS</Link></li>
                                          <li className="privacyPolicy"><Link to="/" className="foot">PRIVACY POLICY</Link></li>
                                    </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
      );
}


export default Footer;