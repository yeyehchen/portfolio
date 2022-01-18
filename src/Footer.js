import React from "react";

import footerLine from './svg-images/footerLine.svg';
import footerPolygon from './svg-images/footerPolygon.svg';
import mailIcon from './svg-images/mailIcon.svg';

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className='f2 footer-text' >Consequat fugiat aute sint non dolore eiusmod id non laborum aliquip. Commodo cillum nisi esse officia eu ipsum.</div>
          <div className="footer-buttonsign">
            <div className='f2 footer-button'>CONTACT ME</div>
            <img id='footer-arrow' src={footerPolygon} />
          </div>
        </div>
        <div className="footer-top-right">
          <img id="footer-mail-icon" src={mailIcon} />
          <div className="f1 footer-email">yaya1204hk@gmail.com</div>
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