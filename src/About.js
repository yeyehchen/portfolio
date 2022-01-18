import React from "react";
import Footer from "./Footer";
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
        <img className="aboutDeco" src={aboutDeco} />
        <img className="yeyehImg" src={yeyehImg} />
      </div>
      <div className="about-top-right">
        <div className="f4 about-top-title">A bit about me</div>
        <div className="f1 about-top-text">Born in taiwan,Esse occaecat officia tempor cupidatat elit. Incididunt amet occaecat consequat anim elit proident ut nostrud nostrud velit aliquip pariatur et. Laborum laboris quis officia pariatur cupidatat laboris anim duis labore labore.what i like to do . </div>
      </div>
    </div>
  )


  const renderExperience = () => (
    <div className="experience-container">
      <div className="experience-left">
        <div className="f4 experience-left-title">WORK<br></br>EXPERIENCE</div>
        <img id="experience-img" src={experience} />
      </div>
      <div className="experience-right">
        <div className="list-title">
          <img className="dot" src={greenDot} />
          <div className="f2 experience-right-title">FASHTION/ACCESSORY DESIGNER</div>
        </div>
        <div className="f1 experience-right-text">Cillum culpa ipsum excepteur incididunt enim minim quis aliqua exercitation incididunt eiusmod sit consequat pariatur. Velit aliqua est in anim id consequat do eiusmod cupidatat quis anim sint.</div>
        <div className="list-title">
          <img className="dot" src={yellozDot} />
          <div className="f2 experience-right-title">SELF-EMPLOYED</div>
        </div>
        <div className="f1 experience-right-text">Cillum culpa ipsum excepteur incididunt enim minim quis aliqua exercitation incididunt eiusmod sit consequat pariatur. Velit aliqua est in anim id consequat do eiusmod cupidatat quis anim sint.</div>
        <div className="list-title">
          <img className="dot" src={redDot} />
          <div className="f2 experience-right-title">UI/WEB DESIGNER</div>
        </div>
        <div className="f1 experience-right-text">Cillum culpa ipsum excepteur incididunt enim minim quis aliqua exercitation incididunt eiusmod sit consequat pariatur. Velit aliqua est in anim id consequat do eiusmod cupidatat quis anim sint.</div>
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
