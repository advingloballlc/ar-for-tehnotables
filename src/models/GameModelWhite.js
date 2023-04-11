import React from 'react'
import { useGLTF } from '@react-three/drei'

export function GameModelWhite(props) {
  const { nodes, materials } = useGLTF('/game-model-white.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[298.23, 378.17, 680.46]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, 1.13]}>
            <group position={[10.28, -558.81, 38.41]}>
              <group position={[0.06, -132.06, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group position={[-9.02, 0, -2]}>
                    <mesh geometry={nodes.Rectangle030.geometry} material={materials['04 - CoronaMtl']} />
                  </group>
                </group>
              </group>
              <group position={[0.06, 132.03, 0]}>
                <group rotation={[Math.PI / 2, 0, Math.PI]}>
                  <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                    <group position={[-9.02, 0, -2]}>
                      <mesh geometry={nodes.Rectangle032.geometry} material={materials['04 - CoronaMtl']} />
                    </group>
                  </group>
                </group>
              </group>
              <mesh geometry={nodes.Box031.geometry} material={materials['04 - CoronaMtl']} position={[0.06, -0.02, -297.5]} />
              <mesh geometry={nodes.Box032.geometry} material={materials['12 - CoronaMtl']} position={[-205.2, -0.02, -317.5]} />
              <mesh geometry={nodes.Box033.geometry} material={materials['12 - CoronaMtl']} position={[203.89, -0.02, -317.5]} />
              <mesh geometry={nodes.Cylinder028.geometry} material={materials['Silver Clean']} position={[-265.25, -134.06, 40.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.41, 0.41, 1.23]} />
              <mesh geometry={nodes.Cylinder029.geometry} material={materials['Silver Clean']} position={[-265.25, -134.06, -39.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.41, 0.41, 1.23]} />
              <mesh geometry={nodes.Cylinder030.geometry} material={materials['Silver Clean']} position={[265.28, -134.06, 40.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.41, 0.41, 1.23]} />
              <mesh geometry={nodes.Cylinder031.geometry} material={materials['Silver Clean']} position={[265.28, -134.06, -39.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.41, 0.41, 1.23]} />
              <mesh geometry={nodes.Cylinder032.geometry} material={materials['Silver Clean']} position={[-265.25, 134.06, 40.09]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.41, 0.41, 1.23]} />
              <mesh geometry={nodes.Cylinder033.geometry} material={materials['Silver Clean']} position={[-265.25, 134.06, -39.27]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.41, 0.41, 1.23]} />
              <mesh geometry={nodes.Cylinder034.geometry} material={materials['Silver Clean']} position={[265.28, 134.06, 40.09]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.41, 0.41, 1.23]} />
              <mesh geometry={nodes.Cylinder035.geometry} material={materials['Silver Clean']} position={[265.28, 134.06, -39.27]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.41, 0.41, 1.23]} />
              <mesh geometry={nodes.Rectangle029.geometry} material={materials['12 - CoronaMtl']} position={[0.06, -120.09, 0]} rotation={[Math.PI / 2, 0, 0]} />
              <mesh geometry={nodes.Rectangle031.geometry} material={materials['12 - CoronaMtl']} position={[0.06, 120.05, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-1, 1, 1]} />
            </group>
            <group position={[10.28, -379.59, -12.23]}>
              <group position={[0, 0, -91.21]}>
                <group position={[0, 0, 91.21]}>
                  <group position={[0.05, -0.82, -303.59]}>
                    <group position={[-87.32, 3.92, -48.89]}>
                      <mesh geometry={nodes.Box027.geometry} material={materials['черный метал']} />
                    </group>
                  </group>
                  <group position={[-1.78, 0, -310.99]}>
                    <group position={[0, 0, -15.68]}>
                      <mesh geometry={nodes.Box028.geometry} material={materials['12 - CoronaMtl']} />
                    </group>
                  </group>
                  <group position={[-1.78, 0, 30.56]}>
                    <group position={[0, 0, -335.5]}>
                      <mesh geometry={nodes.Box030.geometry} material={materials['04 - CoronaMtl']} />
                    </group>
                  </group>
                  <group position={[-0.35, 21.2, -303.14]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                      <group position={[-0.44, 13.41, -2.5]}>
                        <mesh geometry={nodes.Line021.geometry} material={materials['черный метал']} />
                      </group>
                    </group>
                  </group>
                  <group position={[-0.35, -22.76, -303.14]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                      <group position={[-0.44, 13.41, -2.5]}>
                        <mesh geometry={nodes.Line022.geometry} material={materials['черный метал']} />
                      </group>
                    </group>
                  </group>
                  <group position={[0, -0.99, -290.75]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                      <group position={[-1.39, 10.11, -4.74]}>
                        <mesh geometry={nodes.Line023.geometry} material={materials['черный метал']} />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group position={[8.05, -411.57, 323.5]}>
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group position={[30.14, 3.87, 0]}>
                  <mesh geometry={nodes.Line026.geometry} material={materials['черный метал']} />
                </group>
              </group>
            </group>
            <group position={[8.05, -377.24, 353.82]}>
              <group rotation={[-Math.PI, 0, 0]}>
                <group position={[30.14, 3.87, 0]}>
                  <mesh geometry={nodes.Line027.geometry} material={materials['черный метал']} />
                </group>
              </group>
            </group>
            <group position={[8.05, 592.08, 323.5]}>
              <group rotation={[Math.PI / 2, 0, Math.PI]}>
                <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                  <group position={[30.14, 3.87, 0]}>
                    <mesh geometry={nodes.Line035.geometry} material={materials['черный метал']} />
                  </group>
                </group>
              </group>
            </group>
            <group position={[8.05, 557.75, 353.82]}>
              <group rotation={[0, 0, -Math.PI]}>
                <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                  <group position={[30.14, 3.87, 0]}>
                    <mesh geometry={nodes.Line036.geometry} material={materials['черный метал']} />
                  </group>
                </group>
              </group>
            </group>
            <group position={[363.07, 298.26, 377.04]}>
              <group scale={[1.07, 1.07, 0.66]}>
                <group position={[-352.78, -254.4, -26.88]}>
                  <mesh geometry={nodes.Object006.geometry} material={materials.столешница} />
                </group>
              </group>
            </group>
            <group position={[363.07, -297.18, 377.04]}>
              <group scale={[1.07, 1.07, 0.66]}>
                <group position={[-352.78, -254.4, -26.88]}>
                  <mesh geometry={nodes.Object007.geometry} material={materials.столешница} />
                </group>
              </group>
            </group>
            <group position={[0, 0, 365.81]}>
              <group position={[0, 0, -10]}>
                <mesh geometry={nodes.Box043.geometry} material={materials['20 - CoronaMtl']} />
              </group>
            </group>
            <group position={[0, 0, 365.81]}>
              <group position={[0, 0, -10]}>
                <mesh geometry={nodes.Object008.geometry} material={materials['красная полоса']} />
              </group>
            </group>
            <group position={[9.97, 559.23, -315.82]}>
              <group position={[-87.32, 3.92, -48.89]}>
                <mesh geometry={nodes.Box036.geometry} material={materials['черный метал']} />
              </group>
            </group>
            <group position={[8.15, 560.06, -323.23]}>
              <group position={[0, 0, -15.68]}>
                <mesh geometry={nodes.Box037.geometry} material={materials['12 - CoronaMtl']} />
              </group>
            </group>
            <group position={[8.15, 560.06, 18.32]}>
              <group position={[0, 0, -335.5]}>
                <mesh geometry={nodes.Box039.geometry} material={materials['04 - CoronaMtl']} />
              </group>
            </group>
            <group position={[9.58, 581.26, -315.38]}>
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group position={[-0.44, 13.41, -2.5]}>
                  <mesh geometry={nodes.Line030.geometry} material={materials['черный метал']} />
                </group>
              </group>
            </group>
            <group position={[9.58, 537.29, -315.38]}>
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group position={[-0.44, 13.41, -2.5]}>
                  <mesh geometry={nodes.Line031.geometry} material={materials['черный метал']} />
                </group>
              </group>
            </group>
            <group position={[9.93, 559.07, -302.98]}>
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group position={[-1.39, 10.11, -4.74]}>
                  <mesh geometry={nodes.Line032.geometry} material={materials['черный метал']} />
                </group>
              </group>
            </group>
            <group position={[-285.65, 558.91, -322.88]}>
              <group position={[41.77, 0, 53.57]}>
                <group scale={1.11}>
                  <group position={[0, 0, -1.17]}>
                    <mesh geometry={nodes.Box045.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
              <group position={[2.37, 0, -5.1]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group position={[-7.81, -8.79, -20.81]}>
                    <mesh geometry={nodes.Cylinder041.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
              <group position={[39.79, 0, 41.56]}>
                <group position={[0, -0.3, -13.85]}>
                  <mesh geometry={nodes.Cylinder042.geometry} material={materials['10 - CoronaMtl']} />
                </group>
              </group>
              <group position={[-47.76, 0.8, -8.74]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group position={[1.8, -3.85, -15.01]}>
                    <mesh geometry={nodes.Line040.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
            </group>
            <group position={[-285.65, -379.72, -322.88]}>
              <group position={[41.77, 0, 53.57]}>
                <group scale={1.11}>
                  <group position={[0, 0, -1.17]}>
                    <mesh geometry={nodes.Box046.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
              <group position={[2.37, 0, -5.1]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group position={[-7.81, -8.79, -20.81]}>
                    <mesh geometry={nodes.Cylinder043.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
              <group position={[39.79, 0, 41.56]}>
                <group position={[0, -0.3, -13.85]}>
                  <mesh geometry={nodes.Cylinder044.geometry} material={materials['10 - CoronaMtl']} />
                </group>
              </group>
              <group position={[-47.76, 0.8, -8.74]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group position={[1.8, -3.85, -15.01]}>
                    <mesh geometry={nodes.Line041.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
            </group>
            <group position={[321.41, -379.46, -322.88]} rotation={[0, 0, -Math.PI]}>
              <group position={[41.77, 0, 53.57]}>
                <group scale={1.11}>
                  <group position={[0, 0, -1.17]}>
                    <mesh geometry={nodes.Box047.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
              <group position={[2.37, 0, -5.1]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group position={[-7.81, -8.79, -20.81]}>
                    <mesh geometry={nodes.Cylinder045.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
              <group position={[39.79, 0, 41.56]}>
                <group position={[0, -0.3, -13.85]}>
                  <mesh geometry={nodes.Cylinder046.geometry} material={materials['10 - CoronaMtl']} />
                </group>
              </group>
              <group position={[-47.76, 0.8, -8.74]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group position={[1.8, -3.85, -15.01]}>
                    <mesh geometry={nodes.Line042.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
            </group>
            <group position={[321.41, 559.21, -322.88]} rotation={[0, 0, -Math.PI]}>
              <group position={[41.77, 0, 53.57]}>
                <group scale={1.11}>
                  <group position={[0, 0, -1.17]}>
                    <mesh geometry={nodes.Box048.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
              <group position={[2.37, 0, -5.1]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group position={[-7.81, -8.79, -20.81]}>
                    <mesh geometry={nodes.Cylinder047.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
              <group position={[39.79, 0, 41.56]}>
                <group position={[0, -0.3, -13.85]}>
                  <mesh geometry={nodes.Cylinder048.geometry} material={materials['10 - CoronaMtl']} />
                </group>
              </group>
              <group position={[-47.76, 0.8, -8.74]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group position={[1.8, -3.85, -15.01]}>
                    <mesh geometry={nodes.Line043.geometry} material={materials['10 - CoronaMtl']} />
                  </group>
                </group>
              </group>
            </group>
            <mesh geometry={nodes.Box034.geometry} material={materials['черный метал']} position={[48.85, 59.25, 353.82]} />
            <mesh geometry={nodes.Box040.geometry} material={materials['черный метал']} position={[-31.55, 59.25, 353.82]} />
            <mesh geometry={nodes.Cylinder040.geometry} material={materials['Silver Cleanауа']} position={[12.07, 506.51, 353.82]} rotation={[-Math.PI, 0, -Math.PI]} />
            <mesh geometry={nodes.Line028.geometry} material={materials['черный метал']} position={[-127.27, -395.41, 340.4]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
            <mesh geometry={nodes.Line029.geometry} material={materials['черный метал']} position={[144.84, -395.41, 340.4]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
            <mesh geometry={nodes.Line037.geometry} material={materials['черный метал']} position={[-127.27, 578.68, 340.4]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.Line038.geometry} material={materials['черный метал']} position={[144.84, 578.68, 340.4]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.Plane008.geometry} material={materials['черный метал']} position={[344.7, -29.19, 355.82]} />
            <mesh geometry={nodes.Object010.geometry} material={materials['Acrylic Opaque Autumn Maple']} position={[-291.09, 579.72, -336.77]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Object011.geometry} material={materials['Acrylic Opaque Autumn Maple']} position={[-291.09, -358.91, -336.77]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Object012.geometry} material={materials['Acrylic Opaque Autumn Maple']} position={[326.85, -400.27, -336.77]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Object013.geometry} material={materials['Acrylic Opaque Autumn Maple']} position={[326.85, 538.4, -336.77]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/game-model-white.glb')
