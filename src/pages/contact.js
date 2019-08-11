import React from 'react';
import Nav from '../components/Nav';

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <Nav />
      <h1 className="title">My Contact Info</h1>
      <div className="contact-details">
        Here are some contact details. Please get in touch.
      </div>
    </div>
  );
};

export default ContactPage;
