import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <Layout>
        <h1 className="title">My Contact Info</h1>
        <div className="contact-details">
          Here are some contact details. Please get in touch.
        </div>
      </Layout>
    </div>
  );
};

export default ContactPage;
