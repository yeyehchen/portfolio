import React, { useState } from "react";
//import validator from "validator";

import { validate } from 'react-email-validator';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";

function ContactModal(props) {

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
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {"How can I help you?"}
      </DialogTitle>
      <DialogContent>
        <Box mt={2}>
          <Typography>
            Name:
          </Typography>
          <TextField
            fullWidth
            autoFocus
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
            helperText={nameError}
            error={!!nameError}
          />
        </Box>
        <Box mt={2}>
          <Typography>
            E-mail:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            helperText={emailError}
            error={!!emailError}
          />
        </Box>
        <Box mt={2}>
          <Typography>
            How can I help?
          </Typography>
          <TextField
            fullWidth
            multiline
            variant="outlined"
            minRows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            helperText={messageError}
            error={!!messageError}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={handleSend} disabled={!canSend()}>
          Send Email
        </Button>
      </DialogActions>
    </Dialog>
  )

}

export default ContactModal;