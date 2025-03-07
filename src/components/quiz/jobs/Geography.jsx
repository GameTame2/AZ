import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Globe from "../../../../public/Globe";
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
        <Canvas>
          <ambientLight />
          <Suspense fallback={null}>
            <Globe scale={20} position={[0, -1, 0]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Geography;
