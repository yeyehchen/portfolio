import React from "react";
import './Home.css';

import decoration1 from './svg-images/decoration1.svg';
import decoration2 from './svg-images/decoration2.svg';
import mailIcon from './svg-images/mailIcon.svg';
import neenee1 from './svg-images/neenee1.svg';
import noteapp1 from './svg-images/noteapp1.svg';
import cafeapp1 from './svg-images/cafeapp1.svg';
import uiwebIcon from './svg-images/uiwebIcon.svg';
import brandingIcon from './svg-images/brandingIcon.svg';
import illustrationIcon from './svg-images/illustrationIcon.svg';

import { useNavigate } from "react-router-dom";


function Home(props) {

  const navigate = useNavigate();

  const renderTop = () => (
    <div className="top-container">
      <div className="top-container-background">
        <img id="right-deco" src={decoration2} />
        <img id="left-deco" src={decoration1} />
      </div>
      <div className="top-container-body">
          <img className="profilePhoto" src="profilePhoto.png"/>
        <div className="profile-text-container">
          <div className="profile-text-title">
            <div className="f3">DESIGNER</div>
            <div className="f3">BASED IN PORTUGAL</div>
          </div>
          <div className="profile-text">
            <div className="f2">Hi! I am Yeyeh.</div>
            <div className="f2">Fashion designer turned UI and Web designer.</div>
          </div>
          <div className="top-container-footer">
            <img id="mail-icon" src={mailIcon} />
            <div className="f1 top-container-email">yaya1204hk@gmail.com</div>
          </div>
        </div>
      </div>

    </div>
  )

  const renderWork = () => (
      <div className="container uiwork-container">
        <div className="f4 uiwork-title">RECENT UI DESIGN PROJECTS</div>
        <div className="uiwork-container-photos">
          <div className="uiwork-photos-left">
            <div id="uiwork-neenee">
              <img src={neenee1} />
              <div className="f2 uiwork-text">LEARNING WEBSITE FOR KIDS</div>
            </div>
            <div className="f2 ui-button pointer" onClick={() => navigate("/work")}>MORE PROJECTS</div>
          </div>
          <div className="uiwork-photos-right">
            <div id="uiwork-note">
              <img src={noteapp1} />
              <div className="f2 uiwork-text">NOTE TAKING APP</div>
            </div>
            <div id="uiwork-cafe">
              <img src={cafeapp1} />
              <div className="f2 uiwork-text">COFESHOP APP</div>
            </div>
          </div>
        </div>
      </div>
  )

  const renderService = () => (
    <div className="container bottom-container">
      <div className="service-container">
        <div className="f3 service-title">HOW CAN I HELP YOU?</div>
        <div className="f1 service-text">Do ea adipisicing non enim cupidatat consequat laborum dolore velit sit excepteur nulla id. Esse laborum aute qui fugiat culpa incididunt tempor nulla aliquip tempor ut. Do duis cupidatat ipsum deserunt. Amet commodo velit id magna dolore elit. Sit commodo et sunt commodo qui.</div>
        <div className="service-iamges-container">
          <div className="service-image-ui">
            <img className="service-image-icon" src={uiwebIcon} />
            <div className="f1 service-image-text">UI & WEB DESIGN</div>
          </div>
          <div className="service-image-branding">
            <img className="service-image-icon" src={brandingIcon} />
            <div className="f1 service-image-text">BRANDING &<br></br>LOGO DESIGN</div>

          </div>
          <div className="service-image-illustration">
            <img className="service-image-icon" src={illustrationIcon} />
            <div className="f1 service-image-text">ILLUSTRATION</div>
          </div>
        </div>
        <div className="f2 service-button pointer" onClick={() => navigate("/work")}>SEE MORE WORK</div>
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

export default Home;