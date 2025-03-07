import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Coordinate(props) {
  const { nodes, materials } = useGLTF("/coordinate.gltf");
  const groupRef = useRef();

  // This will make the group spin around the X-axis
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta; // Adjust the speed of rotation by multiplying delta
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef} scale={[2, 2, 2]}>
      {" "}
      {/* Scale the component to make it bigger */}
      <group rotation={[0, 0.151, 0]}>
        <group position={[-0.017, -1.155, 0.638]}>
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials.material_1}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.material_2}
          />
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials.material_3}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.material_4}
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.material_5}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.material_6}
          />
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials.material_7}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.material_8}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials.material_9}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.material_10}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials.material_11}
            position={[0.042, 1.287, -0.442]}
            scale={0.051}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/coordinate.gltf");
