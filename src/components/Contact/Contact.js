import React from 'react';
import { Element } from 'react-scroll';
import { IconButton } from '@mui/material';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Whatsapp from '@mui/icons-material/WhatsApp';
import Instagram from '@mui/icons-material/Instagram';
import './Contact.css'

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_container">
        <p>
          Email: <span>rajauri2010@gmail.com</span>
        </p>
        <p>
          Github username: <span>RAJA-NAGARAJ</span>
        </p>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/raja-n-035321250/" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://wa.me/919345567233" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <Whatsapp />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/rajjjuuhh/" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
