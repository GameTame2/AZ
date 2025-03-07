import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Man from '../../public/Man';
import TextReveal from './TextReveal';
import { Link } from "react-router-dom";
import '../styles/horizontal.css';


const HorizontalScroll = () => {

  return (

    <div className="story-wrapper">

      <div className="story-upper">
        <a href="/">
          <img src="/images/Face_logo.png" alt="face" className="quiz-logo"/>
        </a>
      </div>

      <div className="story-first">
        <div className="story-first-left">
          <img src="/images/modelbg.png" alt="bg" />
          <Canvas>
              <ambientLight/>
              <Suspense fallback={null}>
              <Man scale={2} position={[0, 0, 0]} />
              </Suspense>
          </Canvas>
        </div>
        <div className="story-first-right">
          <h1 className='reveal-text'>Иван <br /> <span>на 28 години, <br />професия: счетоводител</span></h1>
        </div>
      </div>


      
      <TextReveal/>
      
      
      <div className="story-cta"><Link to="/quiz"> Към теста &#8594;</Link></div>

      <div className="spacing"></div>
    </div>

  );
};

export default HorizontalScroll;