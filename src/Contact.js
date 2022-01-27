import React, { useState } from "react";
import './Contact.css';
import contactPhotoBackground from './svg-images/contactPhotoBackground.svg';
import dribbble from './svg-images/dribbleIcon.svg';
import linkedin from './svg-images/linkedinIcon.svg';
import github from './svg-images/githubIcon.svg';
import EnvelopeMove from "./EnvelopeMove";
import { validate } from 'react-email-validator';

function Contact(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const resetErrors = () => {
    setNameError("");
    setEmailError("");
    setMessageError("");
  }

  const canSend = () => {
    return name.trim() && email.trim() && message.trim();
  }

  const validateForm = () => {
    resetErrors();
    let isOk = true;

    if(name.trim().length === 0) {
      setNameError("Please enter your name");
      isOk = false;
    }

    if(!validate(email)) {
      setEmailError("Please enter a valid e-mail address");
      isOk = false;
    }

    if(message.trim().length === 0) {
      setMessageError("Please enter your message");
      isOk = false;
    }

    return isOk;
  }

  const handleSend = () => {
    console.log("toto")
    if(!validateForm()) return;

    console.log("Sending!");
  }

  return (
    <div>
      <div className="containter contact-container">
        <div className="contact-container-left">
          <div className="image-part">
            <img className="contactPhotoBackground" src={contactPhotoBackground} />
            <img className="contactPhoto" src="contactPhoto.png" />
            <div className="envelope-animation"><EnvelopeMove/></div>
          </div>
          <div className="f2 contact-content-text">You can find me from below</div>
          <div className="contact-webside-group">
          <div className="contact-web github" >
              <img className="web-icon" src={github}/>
              <div className="f1 web-name">GitHub</div>
            </div>
            <div className="contact-web dribbble">
              <img className="web-icon" src={dribbble} />
              <div className="f1 web-name">Dribbble</div>
            </div>
            <div className="contact-web linkedin">
              <img className="web-icon" src={linkedin}/>
              <div className="f1 web-name">LinkedIn</div>
            </div>
            
          </div>
        </div>
        <div className="contact-container-right">
          <div className="f3 contact-title">Sent me an email</div>
          <div className="contact-form">
            <div className="contact-item">
              <div className="f1 contact-item-name">NAME</div>
              <input 
                className="contact-item-box"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="contact-item">
              <div className="f1 contact-item-name">EMAIL ADDRESS</div>
              <input 
                className="contact-item-box"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="contact-item">
              <div className="f1 contact-item-name">MESSAGE</div>
              <textarea 
                rows="8" 
                className="contact-item-message-box"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>
          <div className="contact-button-container">
            <div 
              className="f2 contact-button"
              onClick={handleSend}
            >Send email</div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Contact;