import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Man from '../../../public/Man';
import '../../styles/website.css';

function Face() {
  return (
    <div className="face">
        <div className="face-title">
            <h1>Запознайте се с <span className="face-name"><a href="/story">Иван</a></span></h1>
            <p></p>
        </div>
        <Canvas>
          <ambientLight/>
          <Suspense fallback={null}>
          <Man scale={2.5} position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
    </div>
  );
}

export default Face;