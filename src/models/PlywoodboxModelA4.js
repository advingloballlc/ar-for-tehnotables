import React from 'react'
import { useGLTF } from '@react-three/drei'

export const PlywoodboxModelA4 = (props) => {
  const { nodes, materials } = useGLTF('/plywoodbox-model-a4.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_096.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_097.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_098.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_099.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_100.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_101.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_102.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_103.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_104.geometry} material={materials['Material #118']} />
    </group>
  )
}

useGLTF.preload('/plywoodbox-model-a4.glb')