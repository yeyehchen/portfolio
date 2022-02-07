import React, { useState } from "react";
import './ContactMobile.css';
import contactPhotoBackground from './svg-images/contactPhotoBackground.svg';
import dribbble from './svg-images/dribbleIcon.svg';
import linkedin from './svg-images/linkedinIcon.svg';
import github from './svg-images/githubIcon.svg';
import EnvelopeMove from "./EnvelopeMove";
import { validate } from 'react-email-validator';
import { sendMessage } from "./firebase/firebase";

import { CircularProgress } from "@mui/material";

function ContactMobile(props) {

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

    if (name.trim().length === 0) {
      setNameError("*Please enter your name");
      isOk = false;
    }

    if (!validate(email)) {
      setEmailError("*Please enter a valid e-mail address");
      isOk = false;
    }

    if (message.trim().length === 0) {
      setMessageError("*Please enter your message");
      isOk = false;
    }

    return isOk;
  }

  const handleSend = () => {
    if (!validateForm()) return;
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
      <div className="mobile-contact-container">
        <div className="mobile-contact-info">
          <div className="mobile-contact-image">
            <img className="mobile-contactPhotoBackground" src={contactPhotoBackground} alt="" />
            <img className="mobile-contactPhoto" src="contactPhoto.png" alt="" />
            <div className="mobile-envelope-animation"><EnvelopeMove /></div>
          </div>
          <div className="mobile-t3 mobile-contact-content-text">You can find me in the following platforms</div>
          <div className="mobile-contact-webside-group mb">
            <a className="mobile-web-icon" target="_blank" href="https://dribbble.com/Yeyeh">
              <img className="" src={dribbble} alt="" />
            </a>
            <a className="mobile-web-icon" target="_blank" href="https://www.linkedin.com/in/yeyeh-chen-94132b202/">
              <img className="" src={linkedin} alt="" />
            </a>
            <a className="mobile-web-icon" target="_blank" href="https://github.com/yeyehchen">
              <img className="" src={github} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-contact-message-container">
        <div className="mobile-t3 mobile-contact-title">Or sent me a message</div>
        <div className="mobile-contact-form">
          <div className="mobile-contact-item">
            <div className="mobile-t4 mobile-contact-item-name">NAME</div>
            <input
              className="mobile-contact-item-box"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <div>{nameError}</div>
          </div>
          <div className="mobile-contact-item">
            <div className="mobile-t4 mobile-contact-item-name">EMAIL ADDRESS</div>
            <input
              className="mobile-contact-item-box"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div>{emailError}</div>
          </div>
          <div className="mobile-contact-item">
            <div className="mobile-t4 mobile-contact-item-name">MESSAGE</div>
            <textarea
              rows="8"
              className="mobile-contact-item-message-box"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <div className="mobile-contact-item-error">{messageError}</div>
          </div>
        </div>
        <div className="mobile-contact-button-container">
          <div
            className="mobile-t3 mobile-contact-button mobile-send-button"
            onClick={handleSend}
          >
            {sending ?
              <CircularProgress size={24} sx={{ color: "white" }} />
              :
              "SEND"
            }
          </div>
        </div>
      </div>
    </div>

  )

}

export default ContactMobile;