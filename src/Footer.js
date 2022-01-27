import React from "react";

import footerLine from './svg-images/footerLine.svg';
import HeadIcon from "./HeadIcon";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-image-container"><HeadIcon/></div>
          <div className='f2 footer-text' >Let's create amazing designs together!</div>
        </div>
        <div className="footer-top-right">
          <div className='f1 footer-button pointer'>ABOUT</div>
          <div className='f1 footer-button pointer'>WORK</div>
          <div className='f1 footer-button pointer'>CONTACT</div>
        </div>
      </div>
      <div className="footer-bottom">
        <img id='footerLine' src={footerLine} alt=""/>
        <div className="footer-copyright">All content and images Copyright © 2021 YeYeh Chen</div>
      </div>
    </div>
  )
}

export default Footer;