import React from 'react';
import '../../styles/website.css';

function Hero() {

  return (
    <div className="hero">
      <div className="hero-left">
        <img src="src\img\arrow4.png" alt="arrow-left" />
      </div>
      <div className="hero-middle">
        <div className="hero-title">
          <div className="crown-group">
            <img src="src\img\sun.png" alt="sun" id='crown-sun' />
            <img src="src\img\crown1.png" alt="crown" className='crown-first'/>
          </div>
          <h1>АЗ</h1>
        </div>
        <h2>“Да знаеш кой си е началото на всичко, което ще постигнеш.” - Ралф Емерсън</h2>
        
      </div>
      <div className="hero-right">
        <img src="src\img\arrow5.png"/>
      </div>
    </div>
  );
}

export default Hero;