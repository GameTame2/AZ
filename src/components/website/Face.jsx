import React from 'react';
import '../../styles/website.css';

function Face() {

  return (
      <div className="face">

      <div id="large-face-box">
        <img src="src\img\face.png" alt="face image" />
      </div>

      <div className="face-box" id="face-box-1">
        <img className="face-img" src="src\img\gem1.png" alt="icon" />
        <p className="face-box-title">Наклонности</p>
      </div>

      <div className="face-box" id="face-box-2">
        <img className="face-img" src="src\img\gem6.png" alt="icon" />
        <p className="face-box-title">Наклонности</p>
      </div>

      <div className="face-box" id="face-box-3">
        <img className="face-img" src="src\img\gem3.png" alt="icon" />
        <p className="face-box-title">Наклонности</p>
      </div>

      <div className="face-box" id="face-box-4">
        <img className="face-img" src="src\img\gem5.png" alt="icon" />
        <p className="face-box-title">Наклонности</p>
      </div>

      <div className="face-box" id="face-box-5">
        <img className="face-img" src="src\img\gem2.png" alt="icon" />
        <p className="face-box-title">Наклонности</p>
      </div>

      <div className="face-box" id="face-box-6">
        <img className="face-img" src="src\img\gem4.png" alt="icon" />
        <p className="face-box-title">Наклонности</p>
      </div>

      </div>
    
  );
}

export default Face;