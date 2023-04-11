import React from 'react'
import { useGLTF } from '@react-three/drei'

export const PlatformaAkhModel = (props) => {
  const { nodes, materials } = useGLTF('/platforma-akh-model.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object045.geometry} material={materials['Material #282']} />
      <mesh geometry={nodes.Object046.geometry} material={materials['Material #282']} />
      <mesh geometry={nodes.Object047.geometry} material={materials['Material #282']} />
      <mesh geometry={nodes.Object048.geometry} material={materials['Material #282']} />
      <mesh geometry={nodes.Object049.geometry} material={materials['Material #282']} />
      <mesh geometry={nodes.Object050.geometry} material={materials['Material #282']} />
      <mesh geometry={nodes.Object051.geometry} material={materials['Material #282']} />
      <mesh geometry={nodes.Object052.geometry} material={materials['Material #282']} />
      <mesh geometry={nodes.Mesh008.geometry} material={materials['Material #300']} material-color={props.activeColor} />
      <mesh geometry={nodes.Mesh008_1.geometry} material={materials['Material #301']} />
      <mesh geometry={nodes.Mesh008_2.geometry} material={materials['Material #284']} />
      <mesh geometry={nodes.stitch_result_stitch_all387.geometry} material={materials['Material #281']} />
      <mesh geometry={nodes.stitch_result_stitch_all388.geometry} material={materials['Material #281']} />
      <mesh geometry={nodes.stitch_result_stitch_all389.geometry} material={materials['Material #281']} />
      <mesh geometry={nodes.stitch_result_stitch_all390.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.stitch_result_stitch_all391.geometry} material={materials['Material.008']} />
      <mesh geometry={nodes.stitch_result_stitch_all392.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.stitch_result_stitch_all393.geometry} material={materials['Material.012']} />
      <mesh geometry={nodes.stitch_result_stitch_all394.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes.stitch_result_stitch_all395.geometry} material={materials['Material.015']} />
      <mesh geometry={nodes.stitch_result_stitch_all396.geometry} material={materials['Material.016']} />
      <mesh geometry={nodes.stitch_result_stitch_all397.geometry} material={materials['Material.014']} />
      <mesh geometry={nodes.stitch_result_stitch_all398.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.stitch_result_stitch_all399.geometry} material={materials['Material.013']} />
      <mesh geometry={nodes.stitch_result_stitch_all400.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.stitch_result_stitch_all401.geometry} material={materials['Material.007']} />
      <mesh geometry={nodes.stitch_result_stitch_all402.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.stitch_result_stitch_all403.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.stitch_result_stitch_all404.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.stitch_result_stitch_all405.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('/platforma-akh-model.glb')