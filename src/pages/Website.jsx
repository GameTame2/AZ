import React from 'react';
import Header from '../components/website/Header.jsx';
import Hero from '../components/website/Hero.jsx';
import Face from '../components/website/Face.jsx';
import Cta from '../components/website/Cta.jsx';
import Footer from '../components/website/Footer.jsx';
import '../styles/website.css';

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