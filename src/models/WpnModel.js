import React from 'react'
import { useGLTF } from '@react-three/drei'

export function WpnModel(props) {
  const { nodes, materials } = useGLTF('/wpn-model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Rectangle086.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Rectangle087.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Rectangle088.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Line002.geometry} material={materials.Material} />
      <mesh geometry={nodes.Rectangle010.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Object002.geometry} material={materials['Material #179']} />
      <mesh geometry={nodes.Rectangle083.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Rectangle084.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Rectangle085.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Object060.geometry} material={materials['Material #127.012']} />
      <mesh geometry={nodes.Object061.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Box002.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Line048.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Line049.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Rectangle082.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Line047.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Line055.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Line043.geometry} material={materials['Material #127']} />
      <mesh geometry={nodes.Line064.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Line065.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Line066.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Line067.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Object074.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Object075.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Object076.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Object077.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Line068.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Object078.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.Object079.geometry} material={materials['Material #127.007']} />
      <mesh geometry={nodes.низ_новый.geometry} material={materials['Material #181.009']} />
      <mesh geometry={nodes.верх_новый.geometry} material={materials['Material.012']} />
      <mesh geometry={nodes.соты.geometry} material={materials['Material.013']} />
    </group>
  )
}

useGLTF.preload('/wpn-model.glb')