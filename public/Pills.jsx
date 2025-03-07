import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function Pills(props) {
  const { nodes, materials } = useGLTF("/pills.gltf");
  const groupRef = useRef();

  // Rotate the model continuously
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust speed if needed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.merge11_2_0.geometry}
        material={materials.merge11}
      />
      <mesh
        geometry={nodes.merge11_1_4_0.geometry}
        material={materials.merge11_1}
      />
      <mesh
        geometry={nodes.merge11_2_6_0.geometry}
        material={materials.merge11_2}
      />
      <mesh
        geometry={nodes.merge11_2_6_0_1.geometry}
        material={materials.merge11_2}
      />
    </group>
  );
}

useGLTF.preload("/pills.gltf");
