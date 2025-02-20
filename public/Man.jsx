import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Man(props) {
  const { nodes, materials } = useGLTF('/man.gltf');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust speed by changing the value
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials['mat_0-RP_Man_Dennis_0263_dif.jpg']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/man.gltf');
