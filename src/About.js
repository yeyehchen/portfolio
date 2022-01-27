import React from "react";
import "./About.css";

import yeyehImg from "./svg-images/yeyehImg.svg";
import aboutDeco from "./svg-images/aboutDeco.svg";
import greenDot from "./svg-images/greenDot.svg";
import yellozDot from "./svg-images/yellozDot.svg";
import redDot from "./svg-images/redDot.svg";
import experience from "./svg-images/experience.svg"


function About(props) {


  const renderTopAbout = () => (
    <div className="container about-top-container">
      <div className="about-top-left">
        <img className="aboutDeco" src={aboutDeco} alt=""/>
        <img className="yeyehImg" src={yeyehImg} alt=""/>
      </div>
      <div className="about-top-right">
        <div className="f4 about-top-title">A bit about me</div>
        <div className="f1 about-top-text">
          Little Taiwanese who loves to travel. I lived in four contries and love
          to learn about other cultures and share mine. I'm always up to prepare a
          Taiwanese feast for the new faces I meet.
        </div>
        <div className="f1 about-top-text">
          I've always loved creating all sorts of things. I like to create my own
          clothes and I think that there's no better gift than something home-made.
        </div>
      </div>
    </div>
  )


  const renderExperience = () => (
    <div className="experience-container">
      <div className="experience-left">
        <div className="f4 experience-left-title">WORK<br></br>EXPERIENCE</div>
        <img id="experience-img" src={experience} alt=""/>
      </div>
      <div className="experience-right">
        <div className="list-title">
          <img className="dot" src={greenDot} alt=""/>
          <div className="f2 experience-right-title">FASHION/ACCESSORY DESIGNER</div>
        </div>
        <div className="f1 experience-right-text">
          After gratuating, I've worked as a fashion and accessory designer for <a target="#" href="https://www.gozo.com.tw/">Gozo</a>.
          I've also worked as a liaison between brands and clothing factories to validate the designs.
        </div>
        <div className="list-title">
          <img className="dot" src={yellozDot} alt=""/>
          <div className="f2 experience-right-title">SELF-EMPLOYED</div>
        </div>
        <div className="f1 experience-right-text">
          Creating has always been my passion. After moving to Europe I started designing my own brand.
          At the same time, since I had always loved to cook, I also started my own food truck bussiness where 
          I sold my own take on Taiwanese street food.
        </div>
        <div className="list-title">
          <img className="dot" src={redDot} alt=""/>
          <div className="f2 experience-right-title">UI/WEB DESIGNER</div>
        </div>
        <div className="f1 experience-right-text">
          In the past two years I started to learn web development and fell in love with web design.
          I'm still learning how to program (I've implemented this website in React) but am more passionate 
          in UI design.
        </div>
      </div>
    </div>
  )



  return (
    <div>
      {renderTopAbout()}
      {renderExperience()}
    </div>



  )

}


export default About;
