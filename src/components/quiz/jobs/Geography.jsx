import React from "react";
import "../../../styles/quiz.css";


const Geography = () => {

  return (
    <div className="job geo">
      <div className="jobmodel">
        <div className="arth1">ГЕОГРАФИЯ</div>

        <div className="artp">
          <img src="/images/down-arrow.png" alt="down" />
          Разполагаш с изключителен талант за география! Лесно запомняш
          местоположения, флагове и любопитни факти за различни страни, а
          картите ти се струват като втора природа. Твоето усещане за ориентация
          и интересът ти към света те правят истински изследовател! 🌍
        </div>
        <img className="jobimg" src="/images/geographer.jpg" alt="geographer" />
      </div>
    </div>
  );
};

export default Geography;
