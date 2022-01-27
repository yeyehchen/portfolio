import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import ContactModal from "./ContactModal";

function Nav(props) {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

 
  return (
    <div className="container nav-container">
      <ContactModal open={open} handleClose={() => setOpen(false)}/>

      <div className="f2 nav-name pointer" onClick={() => navigate('/')}>YEYEH CHEN</div>

      <div className="nav-buttons">
        <div className="f1 button z2" onClick={() => navigate('/about')}>ABOUT</div>

        <div className="f1 button z2" onClick={() => navigate('/work')}>WORK</div>

        <div className="f1 button z2" onClick={() => navigate('contact')}>CONTACT</div>

      </div>
    </div>
  )

}

export default Nav;