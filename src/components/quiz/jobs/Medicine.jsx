import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Pills from '../../../../public/Pills';
import "../../../styles/quiz.css"

const Medicine = () => {
  return (
    <div className="job art">
        <div className="jobmodel">
        <div className="arth1">МЕДИЦИНА</div>
        <div className="artp">
            <img src="/images/down-arrow.png" alt="down" />
            Имаш невероятен талант за медицина! Обичаш да разбираш как функционира човешкото тяло и да намираш решения за здравословни проблеми. Твоето внимание към детайлите и съчувствие към другите те правят истински лекар, готов да помага на хората да водят здравословен и щастлив живот! 🩺💉          </div>
          <Canvas>
            <ambientLight/>
            <Suspense fallback={null}>
            <Pills position={[0, -3, -10]} />
            </Suspense>
          </Canvas>
        </div>
    </div>
  );
};

export default Medicine;