import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Newspaper from '../../../../public/Newspaper';
import "../../../styles/quiz.css"

const Journalism = () => {
  return (
    <div className="job journal">
        <div className="jobmodel">
        <div className="arth1">ЖУРНАЛИСТИКА</div>
        <div className="artp">
            <img src="/images/down-arrow.png" alt="down" />
            Имаш невероятен талант за журналистика! Обичаш да разкриваш истории, да търсиш истината и да информираш хората по начин, който привлича вниманието. Твоето любопитство и критично мислене те правят истински разследващ журналист, готов да разкрие всички факти зад новините! 📰✍️          </div>
          <Canvas>
            <ambientLight/>
            <Suspense fallback={null}>
            <Newspaper position={[0, 0, -0.5]} />
            </Suspense>
          </Canvas>
        </div>
    </div>
  );
};

export default Journalism;