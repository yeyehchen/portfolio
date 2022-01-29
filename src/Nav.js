import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";
import { useLocation } from 'react-router-dom'


function Nav(props) {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="container nav-container">
      <ContactModal open={open} handleClose={() => setOpen(false)}/>

      <div className="f2 nav-name pointer" onClick={() => navigate('/')}>YEYEH CHEN</div>

      <div className="nav-buttons">

        <div className={"f1 button z2" + (location.pathname === "/" ? " active" : "")} onClick={() => navigate('/')}>HOME</div>

        <div className={"f1 button z2" + (location.pathname === "/about" ? " active" : "")} onClick={() => navigate('/about')}>ABOUT</div>

        <div className={"f1 button z2" + (location.pathname === "/work" ? " active" : "")} onClick={() => navigate('/work')}>WORK</div>

        <div className={"f1 button z2" + (location.pathname === "/contact" ? " active" : "")} onClick={() => navigate('contact')}>CONTACT</div>

      </div>
    </div>
  )

}

export default Nav;