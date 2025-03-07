import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Books(props) {
  const { nodes, materials } = useGLTF("/books.gltf");
  const groupRef = useRef();

  // Auto-rotation effect
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust speed if needed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {" "}
      {/* Added ref here */}
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/books.gltf");
