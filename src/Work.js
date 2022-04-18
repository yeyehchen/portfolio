import React from "react";
import "./Work.css";

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
    <div className="container projects-container">
      <div className="ui-projects-container">
        <div className="ui-projects-row">
          <div className="ui-title-box">
            <div>
              <div className="f3 uiWeb-title">WEB & APP UI Designs</div>
              {/*<div className="f1 uiWeb-text">click on the project to see the prototype in Figma</div>*/}
            </div>
            <img id="uiWorkIcon" src={uiWorkIcon} alt=""/>
          </div>
          <img id="workNee" src={workNee} alt=""/>
        </div>
        <div className="ui-project-text-container">
          <div className="ui-project-text">
            <div className="f2 project-name">ONLINE LEARNING PLATFORM FOR KIDS</div>
            <div className="f1 project-tool">FIGMA</div>
          </div>
        </div>
        <div className="ui-projects-row">
          <img id='workBike' src={workBike} alt=""/>
          <img id='workFurniture' src={workFuniture} alt=""/>
        </div>
        <div className="ui-project-text-container">
          <div className="ui-project-text">
            <div className="f2 project-name">BIKE SHOP</div>
            <div className="f1 project-tool">ADOBE XD</div>
          </div>
          <div className="ui-project-text">
            <div className="f2 project-name">FURNITURE SHOP</div>
            <div className="f1 project-tool">ADOBE XD</div>
          </div>
        </div>
        <div className="ui-projects-row">
          <img id='workNote' src={workNote} alt=""/>
        </div>
        <div className="ui-project-text-container">
          <div className="ui-project-text" />
          <div className="ui-project-text">
            <div className="f2 project-name">NOTE TAKING APP</div>
            <div className="f1 project-tool">FIGMA</div>
          </div>
        </div>
        <div className="ui-projects-row">
          <img id='workRecipe' src={workRecipe} alt=""/>
          <img id='workCafe' src={workCafe} alt=""/>
        </div>
        <div className="ui-project-text-container">
          <div className="ui-project-text">
            <div className="f2 project-name">COOKING RECIPES APP</div>
            <div className="f1 project-tool">FIGMA</div>
          </div>
          <div className="ui-project-text">
            <div className="f2 project-name">COFFEE SHOP APP</div>
            <div className="f1 project-tool">FIGMA</div>
          </div>
        </div>
      </div>
    </div>
  )

}

const renderOtherPorjects = () => (
  <div className="container other-design-container">
    <div className="other-design-row">
      <div id="title-box" >
        <div className="f3 other-design-title" >OTHER DESIGN PROJECTS</div>
        <img id="otherWorkIcon" src={otherWorkIcon} alt=""/>
      </div>
      <img id="workIcon" src={workIcon} alt=""/>
    </div>
    <div className="other-design-text-containter">
      <div className="f2 other-design-text">ICON DESIGN</div>
      <img className="workLine" src={workLine} alt=""/>
    </div>
    <div className="other-design-row">
      <img id="worKHaobao" src={workHaobao} alt=""/>
      <img id="worKBienyeh" src={workbienyeh} alt=""/>
    </div>
    <div className="other-design-text-containter">
      <div className="f2 other-design-text">BRANDING/LOGO DESIGN</div>
      <img className="workLine" src={workLine} alt=""/>
    </div>
    <div className="other-design-row">
      <img id="calendar" src={calendar} alt=""/>
    </div>
    <div className="other-design-text-containter">
      <div className="f2 other-design-text">CALENDAR DESIGN/ILLUSTRATION</div>
    </div>
  </div>

)


function Work(props) {
  return (
    <div>
      {renderProjects()}
      {renderOtherPorjects()}
    </div>
  )
}

export default Work;