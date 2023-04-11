import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ChildModelPink(props) {
  const { nodes, materials } = useGLTF('/child-model-pink.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[758.45, 482.25, -1136.26]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-534.23, -6.22, -467.77]}>
          <mesh geometry={nodes.Line007.geometry} material={materials['Стол 2 ножки']} position={[28.46, 9.15, -2.9]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line006.geometry} material={materials['Стол 2 ножки']} position={[-24.7, 9.15, -2.9]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line005.geometry} material={materials['Стол 2 ножки']} position={[34.5, -10.77, 4.34]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[-537.08, 33.38, -183.1]}>
          <mesh geometry={nodes.Box001.geometry} material={materials['Стол 2 ножки']} position={[22.41, 0, -263.5]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Box002.geometry} material={materials['Стол 2 ножки']} position={[30.21, 0, 6.62]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[-547.63, -338.87, 138.68]}>
          <mesh geometry={nodes.TextPlus005.geometry} material={materials.кнопки} position={[67.56, -23.3, -1.45]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.TextPlus002.geometry} material={materials.кнопки} position={[20.11, -23.43, -1.56]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.TextPlus001.geometry} material={materials.Пульт} position={[-54.08, -20.67, 1.77]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.Cylinder002.geometry} material={materials.Пульт} position={[-10.85, -17.88, -2.86]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.Line011.geometry} material={materials.кнопки} position={[-11.32, -22.6, -0.66]} rotation={[0.87, 0, 0]} />
          <mesh geometry={nodes.Cylinder003.geometry} material={materials.Пульт} position={[5.11, -17.88, -2.86]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.Line012.geometry} material={materials.кнопки} position={[5.31, -21.39, 0.93]} rotation={[Math.PI / 3, 0, Math.PI]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.Cylinder007.geometry} material={materials.Пульт} position={[67.67, -17.88, -2.86]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.Cylinder004.geometry} material={materials.Пульт} position={[20.8, -17.88, -2.86]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.Cylinder005.geometry} material={materials.Пульт} position={[36.56, -17.88, -2.86]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.TextPlus003.geometry} material={materials.кнопки} position={[35.87, -23.06, -1.16]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.Cylinder006.geometry} material={materials.Пульт} position={[51.94, -17.88, -2.86]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.TextPlus004.geometry} material={materials.кнопки} position={[51.75, -23.32, -1.44]} rotation={[0.96, 0, 0]} />
          <mesh geometry={nodes.Line010.geometry} material={materials.Пульт} position={[7.44, 31.14, -2.65]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
        <group position={[-504.33, -181.49, 137.96]}>
          <mesh geometry={nodes.Line014.geometry} material={materials['Стол 2 ножки']} position={[3.71, 4.66, 8.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder009.geometry} material={materials['Стол 2 ножки']} position={[3.79, -0.86, -0.24]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[-416.7, -181.49, 137.96]}>
          <mesh geometry={nodes.Cylinder010.geometry} material={materials['Стол 2 ножки']} position={[3.79, -0.86, -0.24]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line015.geometry} material={materials['Стол 2 ножки']} position={[3.71, 4.66, 8.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[-386.36, -181.49, 137.96]}>
          <mesh geometry={nodes.Cylinder011.geometry} material={materials['Стол 2 ножки']} position={[3.79, -0.86, -0.24]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line016.geometry} material={materials['Стол 2 ножки']} position={[3.71, 4.66, 8.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[3.1, -181.49, 137.96]}>
          <mesh geometry={nodes.Cylinder012.geometry} material={materials['Стол 2 ножки']} position={[3.79, -0.86, -0.24]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line017.geometry} material={materials['Стол 2 ножки']} position={[3.71, 4.66, 8.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[385.7, -181.49, 137.96]}>
          <mesh geometry={nodes.Cylinder013.geometry} material={materials['Стол 2 ножки']} position={[3.79, -0.86, -0.24]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line018.geometry} material={materials['Стол 2 ножки']} position={[3.71, 4.66, 8.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[415.63, -181.49, 137.96]}>
          <mesh geometry={nodes.Cylinder014.geometry} material={materials['Стол 2 ножки']} position={[3.79, -0.86, -0.24]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line019.geometry} material={materials['Стол 2 ножки']} position={[3.71, 4.66, 8.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[503.55, -181.49, 137.96]}>
          <mesh geometry={nodes.Cylinder015.geometry} material={materials['Стол 2 ножки']} position={[3.79, -0.86, -0.24]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line020.geometry} material={materials['Стол 2 ножки']} position={[3.71, 4.66, 8.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[559.23, 8.61, 116.3]} scale={[-1, 1, 1]}>
          <mesh geometry={nodes.Line021.geometry} material={materials['Стол 2 ножки']} position={[-13.21, -15.67, -0.43]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line022.geometry} material={materials['Стол 2 ножки']} position={[5.06, 69.88, 31.84]} />
        </group>
        <group position={[535.75, 33.38, -183.1]}>
          <mesh geometry={nodes.Box007.geometry} material={materials['Стол 2 ножки']} position={[22.41, 0, -263.5]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Box008.geometry} material={materials['Стол 2 ножки']} position={[30.21, 0, 6.62]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[538.6, -6.22, -467.77]}>
          <mesh geometry={nodes.Line033.geometry} material={materials['Стол 2 ножки']} position={[34.5, -10.77, 4.34]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line034.geometry} material={materials['Стол 2 ножки']} position={[-24.7, 9.15, -2.9]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Line035.geometry} material={materials['Стол 2 ножки']} position={[28.46, 9.15, -2.9]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[-0.66, 193.56, 280.14]}>
          <line geometry={nodes.Line029.geometry} material={materials['Стол 2 ножки']} position={[0, 21.84, 55.77]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <line geometry={nodes.Line027.geometry} material={materials['Стол 2 ножки']} position={[0, -42.65, -102.44]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <line geometry={nodes.Line028.geometry} material={materials['Стол 2 ножки']} position={[0, 65.07, 158.49]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <mesh geometry={nodes.Line002.geometry} material={materials['Стол 2']} position={[433.77, 162.26, 151.56]} />
        <mesh geometry={nodes.Line008.geometry} material={materials['Стол 2 ножки']} position={[-571.44, -7.06, 115.87]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Line009.geometry} material={materials['Стол 2 ножки']} position={[-591.06, 113.38, 62.04]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Стол 2 ножки']} position={[-455.05, 54.74, -17.43]} />
        <mesh geometry={nodes.Line013.geometry} material={materials['Стол 2 ножки']} position={[-553.18, 78.49, 148.14]} />
        <mesh geometry={nodes.Box003.geometry} material={materials['Стол 2 ножки']} position={[525.31, -132.57, 140.83]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Cylinder008.geometry} material={materials['Стол 2 ножки']} position={[507.92, -182.35, 137.71]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Box004.geometry} material={materials['Стол 2 ножки']} position={[-339.85, 307.51, 141.34]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Box005.geometry} material={materials['Стол 2 ножки']} position={[522.59, 307.51, 141.34]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Line023.geometry} material={materials['Стол 2 ножки']} position={[-286.29, 185.31, 229.35]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Box006.geometry} material={materials['Стол 2 ножки']} position={[558.92, 49.15, 116.48]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Line001.geometry} material={materials.Держатель} position={[0.29, -195.32, 175.41]} rotation={[0.61, 0, 0]} />
        <line geometry={nodes.Line031.geometry} material={materials['Стол 2 ножки']} position={[11.24, 258.12, 437.68]} rotation={[Math.PI / 2, 0, 0]} />
        <line geometry={nodes.Line030.geometry} material={materials['Стол 2 ножки']} position={[0.72, 259.19, 440.76]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Line026.geometry} material={materials['Стол 2 ножки']} position={[295.39, 249.05, 426.31]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Line025.geometry} material={materials['Стол 2 ножки']} position={[295.77, 185.31, 229.35]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Line024.geometry} material={materials['Стол 2 ножки']} position={[-286.12, 249.05, 426.31]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Line004.geometry} material={materials['Стол 2']} position={[42.06, -116.81, 202.92]} rotation={[0.61, 0, 0]} />
        <mesh geometry={nodes.Line003.geometry} material={materials['Стол 2']} position={[-433.77, 162.26, 151.56]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Line032.geometry} material={materials['Стол 2 ножки']} position={[26.58, 256.85, 438.07]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.37} />
      </group>
    </group>
  )
}

useGLTF.preload('/child-model-pink.glb')