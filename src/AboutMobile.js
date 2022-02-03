import React from "react";
import "./AboutMobile.css";

import yeyehImg from "./svg-images/yeyehImg.svg";
import aboutDeco from "./svg-images/aboutDeco.svg";
import greenDot from "./svg-images/greenDot.svg";
import yellozDot from "./svg-images/yellozDot.svg";
import redDot from "./svg-images/redDot.svg";
import mobileExperienceImage from "./svg-images/mobileExperienceImage.svg";
import plusImage from "./svg-images/plusImage.svg";


function AboutMobile(props) {


  const renderTopAbout = () => (
    <div className="mobile-about-top-container">
      <div className="mobile-top-image">
        <img className="mobile-aboutDeco" src={aboutDeco} alt="" />
        <img className="mobile-yeyehImg" src={yeyehImg} alt="" />
      </div>
      <div className="mobile-t1 mobile-about-top-title">A BIT ABOUT ME</div>
      <div className="mobile-t4 mobile-about-top-text">
        Little Taiwanese who loves to travel. I lived in four contries and love
        to learn about other cultures and share mine. I'm always up to prepare a
        Taiwanese feast for the new faces I meet.
      </div>
      <div className="mobile-t4 mobile-about-top-text">
        I've always loved creating all sorts of things. I like to create my own
        clothes and I think that there's no better gift than something home-made.
      </div>

    </div>
  )


  const renderExperience = () => (
    <div className="mobile-experience-container">
      <div className="mobile-t1 mobile-experience-title">WORK EXPERIENCE</div>
      <img id="mobile-experience-img" src={mobileExperienceImage} alt="" />
      <div className="mobile-list">
        <div className="mobile-list-item mt mb">
          <img className="mobile-dot" src={greenDot} alt="" />
          <div className="mobile-t3 mobile-experience-item-title">FASHION/ACCESSORY DESIGNER</div>
        </div>
        <div className="mobile-t4 mobile-experience-item-text">
          After gratuating, I've worked as a fashion and accessory designer for <a target="#" href="https://www.gozo.com.tw/">Gozo</a>.
          I've also worked as a liaison between brands and clothing factories to validate the designs.
        </div>
        <div className="mobile-list-item">
          <img className="mobile-dot" src={yellozDot} alt="" />
          <div className="mobile-t3 mobile-experience-item-title">SELF-EMPLOYED</div>
        </div>
        <div className="mobile-t4 mobile-experience-item-text">
          Creating has always been my passion. After moving to Europe I started designing my own brand.
          At the same time, since I had always loved to cook, I also started my own food truck bussiness where
          I sold my own take on Taiwanese street food.
        </div>
        <div className="mobile-list-item">
          <img className="mobile-dot" src={redDot} alt="" />
          <div className="mobile-t3 mobile-experience-item-title">UI/WEB DESIGNER</div>
        </div>
        <div className="mobile-t4 mobile-experience-item-text mb">
          In the past two years I started to learn web development and fell in love with web design.
          I'm still learning how to program (I've implemented this website in React) but I am more passionate
          in UI design.
        </div>
      </div>
    </div>
  )

  const renderSkills = () => (
    <div className="mobile-personal-skill-container">
      <div className="mobile-t1 mobile-skills-title">PERSONAL SKILL</div>
      <div className="mobile-skills-container">
        <div className="mobile-skills-files">
          <div className="mobile-design-container">
            <div className="mobile-t3 mobile-file-title" id="mobile-design">DESIGN</div>
            <div className="mobile-design-file-container">
              <div className="mobile-file-list">
                <div className="mobile-t4 mobile-file-item">FIGMA</div>
                <div className="mobile-t4 mobile-file-item">ADOBE XD</div>
                <div className="mobile-t4 mobile-file-item">PHOTOSHOP</div>
                <div className="mobile-t4 mobile-file-item">PROCREATE</div>
              </div>
            </div>
          </div>
          <div className="mobile-coding-container">
            <div className="mobile-t3 mobile-file-title" id="mobile-coding">CODING</div>
            <div className="mobile-coding-file-container">
              <div className="mobile-file-list">
                <div className="mobile-t4 mobile-file-item">HTML/CSS</div>
                <div className="mobile-t4 mobile-file-item">REACT</div>
                <div className="mobile-t4 mobile-file-item">JAVASCRIPT</div>
                <div className="mobile-t4 mobile-file-item">PYTHONE</div>
              </div>
            </div>
          </div>
        </div>
        <img id="mobile-plusImage" src={plusImage} />
        <div className="mobile-others-container ">
          <div className="mobile-t3 mobile-file-title">ALSO...</div>
          <div className="mobile-others-file-container">
            <div className="mobile-file-list">
              <div className="mobile-t4 mobile-others-file-item">COOKING</div>
              <div className="mobile-t4 mobile-others-file-item">CRAFTING</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )




  return (
    <div>
      {renderTopAbout()}
      {renderExperience()}
      {renderSkills()}
    </div>



  )

}


export default AboutMobile;
