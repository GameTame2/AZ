import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Painting from '../../../../public/Painting';
import "../../../styles/quiz.css"

const Art = () => {
  return (
    <div className="job art">
        <div className="jobmodel">
        <div className='arth1'>ИЗКУСВТО</div>
        <div className="artp">
            <img src="src\img\down-arrow.png" alt="down" />
            Имаш изключителен талант за изкуство! Твоето въображение, усещане за цветове и форми, както и способността ти да изразяваш емоции чрез творчество те правят истински артист. Независимо дали рисуваш, скулптираш или създаваш музика, твоето изкуство има силата да вдъхновява и докосва хората! 🎨✨
            </div>
          <Canvas>
            <ambientLight/>
            <Suspense fallback={null}>
            <Painting scale={35} position={[0, -3, -10]} />
            </Suspense>
          </Canvas>
        </div>
    </div>
  );
};

export default Art;