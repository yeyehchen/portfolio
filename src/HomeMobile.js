import React from "react";
import './HomeMobile.css';

import decoration1 from './svg-images/decoration1.svg';
import decoration2 from './svg-images/decoration2.svg';
import mailIcon from './svg-images/mailIcon.svg';
import neenee1 from './svg-images/neenee1.svg';
import noteapp1 from './svg-images/noteapp1.svg';
import cafeapp1 from './svg-images/cafeapp1.svg';
import uiwebIcon from './svg-images/uiwebIcon.svg';
import brandingIcon from './svg-images/brandingIcon.svg';
import illustrationIcon from './svg-images/illustrationIcon.svg';
import footerPolygon from './svg-images/footerPolygon.svg';

import { useNavigate } from "react-router-dom";



function HomeMobile(props) {

  const navigate = useNavigate();

  const renderTop = () => (
    <div className="mobile-top-container">
      <img id="mobile-right-deco" src={decoration1} />
      <img id="mobile-left-deco" src={decoration1} />
      <div className="mobile-profile-text-container">
        <div className="mobile-profile-text-title">
          <div className="mobile-t1">DESIGNER,</div>
          <div className="mobile-t3">BASED IN PORTUGAL</div>
        </div>
        <div className="mobile-profile-text">
          <div className="mobile-t3">Hi! I am Yeyeh.</div>
          <div className="mobile-t3">Fashion designer turned UI and Web designer.</div>
        </div>
      </div>
      <img className="mobile-profilePhoto" src="profilePhoto.png" />
    </div>
  )
  
  const renderWork = () => (
    <div className="mobile-uiwork-container">
      <div className="mobile-t2 mobile-uiwork-title">LATLEST PROJECTS</div>
      <div className="mobile-uiwork-container-photos">
        <div className="mobile-uiwork-item">
          <img  className="mobile-uiwork-photo" src={neenee1} />
          <div className="mobile-t4 mobile-uiwork-text">ONLINE LEARNING <br></br>PLATFORM FOR KIDS</div>
        </div>
        <div className="mobile-uiwork-item">
          <img className="mobile-uiwork-photo" src={noteapp1} />
          <div className="mobile-t4 mobile-uiwork-text">NOTE TAKING APP</div>
        </div>
        <div className="mobile-uiwork-item">
          <img className="mobile-uiwork-photo" src={cafeapp1} />
          <div className="mobile-t4 mobile-uiwork-text">COFESHOP APP</div>
        </div>
        <div className="mobile-t3 mobile-ui-button mobile-pointer" onClick={() => navigate("/work")}>MORE PROJECTS</div>
      </div>
    </div>
  )

  const renderService = () => (
    <div className="mobile-bottom-container">
      <div className="mobile-service-container">
        <div className="mobile-t2 mobile-service-title">HOW CAN I HELP YOU?</div>
        <div className="mobile-t4 mobile-service-text">Do ea adipisicing non enim cupidatat consequat laborum dolore velit sit excepteur nulla id. Esse laborum aute qui fugiat culpa incididunt tempor nulla aliquip tempor ut. Do duis cupidatat ipsum deserunt. Amet commodo velit id magna dolore elit. Sit commodo et sunt commodo qui.</div>
        <div className="mobile-service-iamges-container">
          <div className="mobile-service-image-ui">
            <img className="mobile-service-image-icon" src={uiwebIcon} />
            <div className="mobile-t3 mobile-service-image-text">UI & WEB DESIGN</div>
          </div>
          <div className="mobile-service-image-branding">
            <img className="mobile-service-image-icon" src={brandingIcon} />
            <div className="mobile-t3 mobile-service-image-text">BRANDING & LOGO DESIGN</div>

          </div>
          <div className="mobile-service-image-illustration">
            <img className="mobile-service-image-icon" src={illustrationIcon} />
            <div className="mobile-t3 mobile-service-image-text">ILLUSTRATION</div>
          </div>
        </div>
        <div className="mobile-t3 mobile-service-button pointer" onClick={() => navigate("/work")}>SEE MORE WORK</div>
      </div>
    </div>
  )


  return (
    <div>
      {renderTop()}
      {renderWork()}
      {renderService()}
    </div>



  )
}

export default HomeMobile;