import React from 'react'
import { useGLTF } from '@react-three/drei'

export const PolkaModel = (props) => {
  const { nodes, materials } = useGLTF('/polka-model.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_061.geometry} material={materials.Chrome_Black_Chameleon} position={[0.97, -0.57, -1.91]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_066.geometry} material={materials.Chrome_Black_Chameleon} position={[0.97, -0.57, -1.91]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_064.geometry} material={materials.Chrome_Black_Chameleon} position={[0.97, -0.57, -1.91]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_062.geometry} material={materials['Plastic_Simple_Blurry_Gray.001']} position={[0.97, -0.57, -1.91]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/polka-model.glb')