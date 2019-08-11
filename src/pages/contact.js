import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <Header />

      <h1 className="title">My Contact Info</h1>
      <div className="contact-details">
        Here are some contact details. Please get in touch.
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
