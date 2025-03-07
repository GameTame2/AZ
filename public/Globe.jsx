import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/globe.gltf");
  const groupRef = useRef();

  // Auto-rotation effect
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust speed if needed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.globe_GlobeMaterial_0.geometry}
        material={materials.GlobeMaterial}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/globe.gltf");
