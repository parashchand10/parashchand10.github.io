import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
// @ts-ignore: allow side-effect import of SCSS without type declarations 
import '../assets/styles/Contact.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(!name);
    setEmailError(!email);
    setMessageError(!message);

    if (name && email && message) {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'jrayr29@gmail.com', // Target email
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS credentials
      emailjs.send('service_suwp0tc', 'template_5loxfmr', templateParams, 'aA91yB1WlzoaGkE4Y')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
           alert('Message sent successfully to Parash Chand!');
           setName('');
           setEmail('');
           setMessage('');
        }, (err) => {
           console.log('FAILED...', err);
           alert('Failed to send message. Please try again later.');
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be built? Let's talk about it.</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                className="dark-input"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                className="dark-input"
                label="Email / Contact"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or contact' : ''}
              />
            </div>
            <TextField
              required
              className="dark-input"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />
            <Button 
              type="submit" 
              variant="contained" 
              className="send-btn" 
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;