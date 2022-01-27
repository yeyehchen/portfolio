import React from "react";

import footerLine from './svg-images/footerLine.svg';
import footerHeadIcon from './svg-images/footerHeadIcon.svg';
import footerImage from './svg-images/footerImage.svg';
import HeadIcon from "./HeadIcon";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-image-container"><HeadIcon/></div>
          <div className='f2 footer-text' >Let's create amazing design together!</div>
        </div>
        <div className="footer-top-right">
          <div className='f1 footer-button'>ABOUT</div>
          <div className='f1 footer-button'>WORK</div>
          <div className='f1 footer-button'>CONTACT</div>
        </div>
      </div>
      <div className="footer-bottom">
        <img id='footerLine' src={footerLine} />
        <div className="footer-copyright">All content and images Copyright © 2021 YeYeh Chen</div>
      </div>
    </div>
  )
}

export default Footer;