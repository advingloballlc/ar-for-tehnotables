import React from 'react'
import { useGLTF } from '@react-three/drei'

export function WingameModel(props) {
  const { nodes, materials } = useGLTF('/wingame-model.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[120.8, 382.51, 316.61]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 382.51]}>
          <mesh geometry={nodes.Object007.geometry} material={materials.Чорний} position={[-401.46, -27.99, 750]} scale={[0.58, 0.65, 1]} />
          <mesh geometry={nodes.Plane001.geometry} material={materials.Білий} position={[-401.46, -27.99, 750]} scale={[0.58, 0.65, 1]} />
          <mesh geometry={nodes.TextPlus001.geometry} material={materials.Логотип} position={[0, -252.23, 723.68]} rotation={[Math.PI / 2, 0, 0]} />
          <group position={[-401.46, -27.99, 755.78]} scale={[0.58, 0.65, 1]}>
            <mesh geometry={nodes.mesh_4.geometry} material={materials.Чорний} />
            <mesh geometry={nodes.mesh_4_1.geometry} material={materials.Чорний} />
          </group>
          <mesh geometry={nodes.Rectangle001.geometry} material={materials.Сенсор} position={[-524.53, -388.96, 765.1]} />
          <mesh geometry={nodes.Object.geometry} material={materials.Скло} position={[-401.46, -27.99, 756.2]} scale={[0.58, 0.65, 1]} />
        </group>
        <mesh geometry={nodes.Object008.geometry} material={materials.Чорний} position={[-401.46, -27.99, 752.96]} scale={[0.58, 0.65, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/wingame-model.glb')
