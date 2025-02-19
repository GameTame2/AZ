import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Chem(props) {
  const { nodes, materials } = useGLTF('/chem.gltf')
  const groupRef = useRef()

  // Auto-rotation effect
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01 // Adjust speed if needed
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group position={[-1.397, 0.07, -0.5]}>
        <mesh geometry={nodes.Object_24.geometry} material={materials.Soporte} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Plastic} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.vidrio} position={[2.758, 1.281, 1.1]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.vidrio} position={[0.806, 1.281, 1.1]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.vidrio} position={[0.5, 1.314, -0.7]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.vidrio} position={[2, 1.314, -0.7]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.vidrio} position={[1.5, 1.314, -0.7]} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.vidrio} position={[1, 1.314, -0.7]} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.vidrio} position={[-0.902, 1.281, 1.1]} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.vidrio} position={[-2.396, 1.799, 1.1]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.vidrio} position={[-0.765, 1.876, -0.5]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.Soporte} position={[1.25, 0.069, -0.7]} />
    </group>
  )
}

useGLTF.preload('/chem.gltf')
