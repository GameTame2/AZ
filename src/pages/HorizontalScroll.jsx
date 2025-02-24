import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState } from "react";
import Man from '../../public/Man';
import TextReveal from './TextReveal'
import '../styles/horizontal.css';


const HorizontalScroll = () => {

  return (

    <div className="story-wrapper">

      <div className="story-upper">
        <a href="/">
          <img src="src/img/Face_logo.png" alt="face" className="quiz-logo"/>
        </a>
      </div>

      <div className="story-first">
        <div className="story-first-left">
          <img src="src/img/modelbg.png" alt="bg" />
          <Canvas>
              <ambientLight/>
              <Suspense fallback={null}>
              <Man scale={2} position={[0, 0, 0]} />
              </Suspense>
          </Canvas>
        </div>
        <div className="story-first-right">
          <h1 className='reveal-text'>Иван <br /> <span>28 години, счетоводител</span></h1>
        </div>
      </div>

      
      <TextReveal/>
      
      
    </div>

  );
};

export default HorizontalScroll;