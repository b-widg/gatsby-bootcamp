import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <Header />
      <h1 className="title">About Title</h1>
      <p>Here is a bit about me</p>
      <Footer />
    </div>
  );
};

export default AboutPage;
