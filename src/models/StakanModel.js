import React from 'react'
import { useGLTF } from '@react-three/drei'

export const StakanModel = (props) => {
  const { nodes, materials } = useGLTF('/stakan-model.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Box006.geometry} material={materials['Material.001']} position={[13.56, 1.96, 2.3]} scale={0.03} />
    </group>
  )
}

useGLTF.preload('/stakan-model.glb')