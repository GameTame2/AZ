import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Chem from '../../../../public/Chem';
import "../../../styles/quiz.css"

const Chemistry = () => {
  return (
    <div className="job art">
        <div className="jobmodel">
        <div className="arth1">ХИМИЯ</div>
        <div className="artp">
            <img src="/images/down-arrow.png" alt="down" />
            Имаш невероятен талант за химия! Разбираш как веществата взаимодействат помежду си, обичаш да експериментираш и да откриваш скритите закони на природата. Твоето логическо мислене и любопитство те правят истински учен, готов да разгадае тайните на материята! ⚗️🔬          </div>
          <Canvas>
            <ambientLight/>
            <Suspense fallback={null}>
            <Chem position={[0, -1, -1]} />
            </Suspense>
          </Canvas>
        </div>
    </div>
  );
};

export default Chemistry;