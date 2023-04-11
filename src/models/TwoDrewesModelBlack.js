import React from 'react'
import { useGLTF } from '@react-three/drei'

export const TwoDrewesModelBlack = (props) => {
  const { nodes, materials } = useGLTF('/twodrawes-black-model.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ð_Ð_ÐµÐ_ÐµÐ_Ñ_Ð_ÐµÑ_ÐºÐ_1_025.geometry} material={materials['14_0_0_0.005']} />
      <mesh geometry={nodes.Object016.geometry} material={materials['14_0_0_0.005']} />
      <mesh geometry={nodes.Object017.geometry} material={materials['14_0_0_0.005']} />
      <mesh geometry={nodes.Object018.geometry} material={materials['14_0_0_0.005']} />
      <mesh geometry={nodes.Box017.geometry} material={materials['Material.016']} />
      <mesh geometry={nodes.Object028.geometry} material={materials['Plastic_Simple_Blurry_Gray.005']} />
      <mesh geometry={nodes.Object029.geometry} material={materials['Plastic_Simple_Blurry_Gray.005']} />
      <mesh geometry={nodes.Box021.geometry} material={materials['Material.017']} />
      <mesh geometry={nodes.Box022.geometry} material={materials['Material.018']} />
    </group>
  )
}

useGLTF.preload('/twodrawes-black-model.glb')