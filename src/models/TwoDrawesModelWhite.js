import React from 'react'
import { useGLTF } from '@react-three/drei'

export const TwoDrawesModelWhite = (props) => {
  const { nodes, materials } = useGLTF('/twodrawes-white-model.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Box006.geometry} material={materials['baked_Material #124']} />
      <mesh geometry={nodes.Box007.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Object024.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Object025.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Object027.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_098.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_099.geometry} material={materials['Material.007']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_100.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_101.geometry} material={materials['Material.008']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_105.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_106.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_103001.geometry} material={materials['Material.012']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_096.geometry} material={materials['Material.013']} />
      <mesh geometry={nodes.Object025001.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Object027001.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_103002.geometry} material={materials['Material.012']} />
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_096001.geometry} material={materials['Material.013']} />
    </group>
  )
}

useGLTF.preload('/twodrawes-white-model.glb')