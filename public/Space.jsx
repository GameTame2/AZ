import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Space(props) {
  const { nodes, materials } = useGLTF('/space.gltf');
  const groupRef = useRef();

  // Rotate the model on the X-axis
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust speed here
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, -Math.PI / 2, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Material7} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Material1} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Material9} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.Material10} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.Material6} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.Material8} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.Material11} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.Material2} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.Material5} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.Material0} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.Material4} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/space.gltf');