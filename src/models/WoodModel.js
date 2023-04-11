import React from 'react'
import { useGLTF } from '@react-three/drei'

export const WoodModel = (props) => {
  const { nodes, materials } = useGLTF('/wood-model.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Rectangle047.geometry} material={materials['Material.003']} rotation={[Math.PI / 2, 0, 0]} />
      {/* { props.activeBreed === 'Горіх' && <mesh geometry={nodes['????3_new_UV001'].geometry} material={textures['Walnut-mat']} rotation={[Math.PI / 2, 0, 0]} /> }
      { props.activeBreed === 'Дуб' && <mesh geometry={nodes['????3_new_UV001'].geometry} material={textures['Oak-mat']} rotation={[Math.PI / 2, 0, 0]} /> }
      { props.activeBreed === 'Ясен зрощений' && <mesh geometry={nodes['????3_new_UV001'].geometry} material={textures['Ash!']} rotation={[Math.PI / 2, 0, 0]} /> } */}
      <mesh geometry={nodes['????3_new_UV001'].geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Rectangle064____nogi.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, 0, 0]} material-color={props.activeColor} />
    </group>
  )
}

useGLTF.preload('/wood-model.glb')