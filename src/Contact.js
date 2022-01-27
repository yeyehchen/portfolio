import React, { useState } from "react";
import './Contact.css';
import contactPhotoBackground from './svg-images/contactPhotoBackground.svg';
import dribbble from './svg-images/dribbleIcon.svg';
import linkedin from './svg-images/linkedinIcon.svg';
import github from './svg-images/githubIcon.svg';
import EnvelopeMove from "./EnvelopeMove";
import { validate } from 'react-email-validator';
import { sendMessage } from "./firebase/firebase";

import { CircularProgress } from "@mui/material";

function Contact(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [sending, setSending] = useState(false);

  const resetErrors = () => {
    setNameError("");
    setEmailError("");
    setMessageError("");
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const validateForm = () => {
    resetErrors();
    let isOk = true;

    if(name.trim().length === 0) {
      setNameError("*Please enter your name");
      isOk = false;
    }

    if(!validate(email)) {
      setEmailError("*Please enter a valid e-mail address");
      isOk = false;
    }

    if(message.trim().length === 0) {
      setMessageError("*Please enter your message");
      isOk = false;
    }

    return isOk;
  }

  const handleSend = () => {
    if(!validateForm()) return;
    setSending(true);
    sendMessage(name, email, message)
    .then(() => {
      resetForm();
      setSending(false);
    })
    .catch((error) => {
      resetForm();
      console.log(error);
    });
  }

  return (
    <div>
      <div className="containter contact-container">
        <div className="contact-container-left">
          <div className="image-part">
            <img className="contactPhotoBackground" src={contactPhotoBackground} alt=""/>
            <img className="contactPhoto" src="contactPhoto.png" alt=""/>
            <div className="envelope-animation"><EnvelopeMove/></div>
          </div>
          <div className="f2 contact-content-text">You can find me in the following platforms</div>
          <div className="contact-webside-group">
          <div className="contact-web github" >
              <img className="web-icon" src={github} alt=""/>
              <div className="f1 web-name">GitHub</div>
            </div>
            <div className="contact-web dribbble">
              <img className="web-icon" src={dribbble} alt=""/>
              <div className="f1 web-name">Dribbble</div>
            </div>
            <div className="contact-web linkedin">
              <img className="web-icon" src={linkedin} alt=""/>
              <div className="f1 web-name">LinkedIn</div>
            </div>
            
          </div>
        </div>
        <div className="contact-container-right">
          <div className="f3 contact-title">Sent me a message</div>
          <div className="contact-form">
            <div className="contact-item">
              <div className="f1 contact-item-name">NAME</div>
              <input 
                className="contact-item-box"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <div>{nameError}</div>
            </div>
            <div className="contact-item">
              <div className="f1 contact-item-name">EMAIL ADDRESS</div>
              <input 
                className="contact-item-box"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div>{emailError}</div>
            </div>
            <div className="contact-item">
              <div className="f1 contact-item-name">MESSAGE</div>
              <textarea 
                rows="8" 
                className="contact-item-message-box"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <div className="contact-item-error">{messageError}</div>
            </div>
          </div>
          <div className="contact-button-container">
            <div 
              className="f2 contact-button send-button"
              onClick={handleSend}
            >
              {sending ?
                <CircularProgress size={24} sx={{color: "white"}}/>
              : 
                "SEND"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Contact;