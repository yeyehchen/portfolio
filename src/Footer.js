import React from "react";

import footerLine from './svg-images/footerLine.svg';
import HeadIcon from "./HeadIcon";
import { useNavigate } from "react-router-dom";

function Footer(props) {

  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-image-container"><HeadIcon/></div>
          <div className='f2 footer-text' >Let's create amazing designs together!</div>
        </div>
        <div className="footer-top-right">
          <div className='footer-button pointer' onClick={() => navigate("/")}>HOME</div>
          <div className='footer-button pointer' onClick={() => navigate("/about")}>ABOUT</div>
          <div className='footer-button pointer' onClick={() => navigate("/work")}>WORK</div>
          <div className='footer-button pointer' onClick={() => navigate("/contact")}>CONTACT</div>
        </div>
      </div>
      <div className="footer-bottom">
        <img id='footerLine' src={footerLine} alt="" />
        <div className="footer-copyright">All content and images Copyright © 2021 YeYeh Chen</div>
      </div>
    </div>
  )
}

export default Footer;