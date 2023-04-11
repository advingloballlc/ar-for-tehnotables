import React from 'react'
import { useGLTF } from '@react-three/drei'

export const PlywoodboxModelA5 = (props) => {
  const { nodes, materials } = useGLTF('/plywoodbox-model-a5.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Box023.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Object033.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Object034.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_106.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_107.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_108.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_109.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_110.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_111.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_112.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_113.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_114.geometry} material={materials['Material.005']} />
    </group>
  )
}

useGLTF.preload('/plywoodbox-model-a5.glb')