import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";

function Nav(props) {

  const navigate = useNavigate();

  return (
    <div className="container nav-container">
      <div className="f2 nav-name pointer" onClick={() => navigate('/')}>YEYEH CHEN</div>

      <div className="nav-buttons">
        <div className="f1 button" onClick={() => navigate('/about')}>ABOUT</div>

        <div className="f1 button" onClick={() => navigate('/work')}>WORK</div>

        <div className="f1 button" onClick={() => navigate('/contact')}>CONTACT</div>

      </div>
    </div>
  )

}

export default Nav;