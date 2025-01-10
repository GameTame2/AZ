import React from 'react';
import '../../styles/website.css';

function Hero() {

  return (
    <div className="hero">
      <div className="hero-left">
        <img src="src\img\arrow-left.png" alt="arrow-left" />
      </div>
      <div className="hero-middle">
        <div className="hero-title">
          <img src="src\img\crown.png" alt="crown" />
          <h1>АЗ</h1>
        </div>
        <h2>“Да знаеш кой си е началото на всичко, което ще постигнеш.” - Ралф Емерсън</h2>
      </div>
      <div className="hero-right">
        <img src="src\img\arrow-right.png"/>
      </div>
    </div>
  );
}

export default Hero;