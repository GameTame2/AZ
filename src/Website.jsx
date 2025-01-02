import React from 'react';
import Header from './website/Header.jsx';
import Hero from './website/Hero.jsx';
import Face from './website/Face.jsx';
import Cta from './website/Cta.jsx';
import Footer from './website/Footer.jsx';
import './website/website.css';

function Website() {
  return (
    <>
      <div className="body">
        <Header />
        <Hero />
        <Face />
        <Cta />
        <Footer />
      </div>
    </>

  );
}

export default Website;