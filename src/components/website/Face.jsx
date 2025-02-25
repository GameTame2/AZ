import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Man from '../../../public/Man';
import '../../styles/website.css';
import { Link } from "react-router-dom"

function Face() {
  return (
    <div className="face">
        <div className="face-title">
            <h1>Запознайте се с <span className="face-name"><Link to="/story">Иван</Link></span></h1>
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