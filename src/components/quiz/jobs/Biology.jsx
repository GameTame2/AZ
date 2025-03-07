import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Skull from "../../../../public/Skull";
import "../../../styles/quiz.css";

const Biology = () => {
  return (
    <div className="job bio">
      <div className="jobmodel">
        <div className="arth1">БИОЛОГИЯ</div>
        <div className="artp">
          <img src="/images/down-arrow.png" alt="down" />
          Твоят талант за биология те прави истински изследовател на живата
          природа! Разбираш лесно как функционират организмите, обичаш да
          изучаваш растения, животни и човешкото тяло, и винаги имаш жажда за
          знания за света около нас. Твоята любознателност и аналитично мислене
          те правят роден учен! 🧬🌱
        </div>
        <Canvas>
          <ambientLight />
          <Suspense fallback={null}>
            <Skull scale={1.5} position={[0, -0.5, 1]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Biology;
