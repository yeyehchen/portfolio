import React from "react";

import footerLine from './svg-images/footerLine.svg';
import HeadIcon from "./HeadIcon";
import { useNavigate } from "react-router-dom";

function Footer(props) {

  const navigate = useNavigate();
  
  return (
    <div className="footer-container">
      <div className="footer-top-mobile">
          <div className="footer-image-container-mobile"><HeadIcon/></div>
          <div className="footer-contact-mobile">
            <div className='f2 footer-text-mobile' >Let's create amazing designs together!</div>
            <div className='footer-button-mobile pointer' onClick={() => navigate("/contact")}>CONTACT</div>
          </div>
      </div>
      <div className="footer-bottom">
        <img id='footerLine' src={footerLine} alt=""/>
        <div className="footer-copyright-mobile">All content and images Copyright © 2021 YeYeh Chen</div>
      </div>
    </div>
  )
}

export default Footer;