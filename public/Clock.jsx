import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/clock.gltf')
  const { actions } = useAnimations(animations, group)

  // Rotate the clock continuously
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01 // Adjust speed if needed
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0, -0.128, 0.128]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clock_Armature_13">
                <group name="Minute_hand_8" rotation={[-Math.PI / 2, 0, -0.002]}>
                  <group name="Minute_hand_7" rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.Clock_hands} />
                  </group>
                </group>
                <group name="Hour_hand_10" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Hour_hand_9" rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.Clock_hands} />
                  </group>
                </group>
                <group name="Second_hand_12" rotation={[-Math.PI / 2, 0, -0.105]}>
                  <group name="Second_hand_11" rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Clock_hands} />
                  </group>
                </group>
                <group name="Clock_Battery_2">
                  <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.Clock_hook} />
                </group>
                <group name="Clock_face_3">
                  <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Clock_face} />
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Clock_Back} />
                </group>
                <group name="Clock_face_glass_4">
                  <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Glass} />
                </group>
                <group name="Clock_hooK_5">
                  <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Clock_hook} />
                </group>
                <group name="Knob_6">
                  <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Clock_hands} />
                  <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.Gold} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/clock.gltf')
