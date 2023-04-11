import React from 'react'
import { useGLTF } from '@react-three/drei'

export const HookNaushModel = (props) => {
  const { nodes, materials } = useGLTF('/hook-naush-model.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object009.geometry} material={materials['Material.001']} position={[-10.06, 3.77, -4.36]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/hook-naush-model.glb')