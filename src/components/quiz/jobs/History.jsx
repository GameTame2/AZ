import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import King from '../../../../public/King';
import "../../../styles/quiz.css"

const History = () => {
  return (
    <div className="job art">
        <div className="jobmodel">
        <div className="arth1">ИСТОРИЯ</div>
        <div className="artp">
            <img src="src\img\down-arrow.png" alt="down" />
            Имаш невероятен талант за история! Обичаш да откриваш миналото и да разгадаваш събитията, които са оформили света около нас. Твоето внимание към детайлите и аналитично мислене те правят истински историк, готов да открие скритите уроци на човечеството! 📚🏺          </div>
          <Canvas>
            <ambientLight/>
            <Suspense fallback={null}>
            <King scale={10} position={[0, -1.5, 0]} />
            </Suspense>
          </Canvas>
        </div>
    </div>
  );
};

export default History;