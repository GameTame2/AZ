import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Books from '../../../../public/Books';
import "../../../styles/quiz.css";

const Ped = () => {
  return (
    <div className="job ped">
        <div className="jobmodel">
        <div className="arth1">ПЕДАГОГИКА</div>
        <div className="artp">
            <img src="src\img\down-arrow.png" alt="down" />
            Имаш невероятен талант за педагогика! Обичаш да обучаваш и вдъхновяваш хората, да споделяш знания и да помагаш на другите да растат и се развиват. Твоето търпение и умение да разбирате нуждите на учениците те правят истински педагог, готов да изгражда бъдещето чрез образование! 📚👩‍🏫          </div>
          <Canvas>
            <ambientLight/>
            <Suspense fallback={null}>
            <Books scale={1.2} position={[0, -15, -100]} />
            </Suspense>
          </Canvas>
        </div>
    </div>
  );
};

export default Ped;