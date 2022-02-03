import React from "react";
import "./WorkMobile.css";

import uiWorkIcon from "./svg-images/uiWorkIcon.svg";
import calendar from "./svg-images/calendar.svg";
import otherWorkIcon from "./svg-images/otherWorkIcon.svg";
import workbienyeh from "./svg-images/workbienyeh.svg";
import workBike from "./svg-images/workBike.svg";
import workCafe from "./svg-images/workCafe.svg";
import workFuniture from "./svg-images/workFuniture.svg";
import workHaobao from "./svg-images/workHaobao.svg";
import workNee from "./svg-images/workNee.svg";
import workNote from "./svg-images/workNote.svg";
import workRecipe from "./svg-images/workRecipe.svg";
import workIcon from "./svg-images/workIcon.svg";
import workLine from "./svg-images/workLine.svg";

const renderProjects = () => {

  return (
    <div className="mobile-ui-projects-container">
      <div className="mobile-ui-title-box">
        <img id="mobile-uiWorkIcon" src={uiWorkIcon} alt="" />
        <div className="mobile-t2 mobile-uiWeb-title">WEB & APP UI Designs</div>
        {/*<div className="f1 uiWeb-text">click on the project to see the prototype in Figma</div>*/}
      </div>
      <div className="mobile-project-list mt">
        <div className="mobile-ui-project-text-container mt">
          <img id="mobile-workNee" src={workNee} alt="" />
          <div className="mobile-t3 mobile-project-name">ONLINE LEARNING PLATFORM FOR KIDS</div>
          <div className="mobile-t4 mobile-project-tool">FIGMA</div>
        </div>
        <div className="mobile-ui-project-text-container mt">
          <img id='mobile-workBike' src={workBike} alt="" />
          <div className="mobile-t3 mobile-project-name">BIKE SHOP</div>
          <div className="mobile-t4 mobile-project-tool">ADOBE XD</div>
        </div>
        <div className="mobile-ui-project-text-container mt">
          <img id='mobile-workFurniture' src={workFuniture} alt="" />
          <div className="mobile-t3 mobile-project-name">FURNITURE SHOP</div>
          <div className="mobile-t4 mobile-project-tool">ADOBE XD</div>
        </div>
        <div className="mobile-ui-project-text-container mt">
          <img id='mobile-workNote' src={workNote} alt="" />
          <div className="mobile-t3 mobile-project-name">NOTE TAKING APP</div>
          <div className="mobile-t4 mobile-project-tool">FIGMA</div>
        </div>
        <div className="mobile-ui-project-text-container mt">
          <img id='mobile-workRecipe' src={workRecipe} alt="" />
          <div className="mobile-t3 mobile-project-name">COOKING RECIPES APP</div>
          <div className="mobile-t4 mobile-project-tool">FIGMA</div>
        </div>
        <div className="mobile-ui-project-text-container mt">
          <img id='mobile-workCafe' src={workCafe} alt="" />
          <div className="mobile-t3 mobile-project-name">COFFEE SHOP APP</div>
          <div className="mobile-t4 mobile-project-tool">FIGMA</div>
        </div>
      </div>
    </div>
  )

}

const renderOtherPorjects = () => (
  <div className="mobile-other-design-container">
    <div id="mobile-title-box" >
      <img id="mobile-otherWorkIcon" src={otherWorkIcon} alt="" />
      <div className="mobile-t2 mobile-other-design-title" >OTHER PROJECTS</div>
    </div>
    <div className="mobile-other-design-list mt">
      <div className="mobile-other-design-item mt mb">
        <img id="mobile-worKBienyeh" src={workbienyeh} alt="" />
        <div className="mobile-t3 mobile-other-design-text">BRANDING/LOGO DESIGN</div>
      </div>
      <div className="mobile-other-design-item mb">
        <img id="mobile-worKHaobao" src={workHaobao} alt="" />
        <div className="mobile-t3 mobile-other-design-text">BRANDING/LOGO DESIGN</div>
      </div>
      <div className="mobile-other-design-item mb">
        <img id="mobile-worKIcon" src={workIcon} alt="" />
        <div className="mobile-t3 mobile-other-design-text">ICON DESIGN</div>
      </div>
      <div className="mobile-other-design-item">
        <img id="mobile-calendar" src={calendar} alt="" />
        <div className="mobile-t3 mobile-other-design-text">CALENDER DESIGN/ILLUSTRATION</div>
      </div>
    </div>
  </div>

)


function WorkMobile(props) {
  return (
    <div>
      {renderProjects()}
      {renderOtherPorjects()}
    </div>
  )
}

export default WorkMobile;