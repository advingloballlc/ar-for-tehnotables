import React from 'react'
import { useGLTF } from '@react-three/drei'

export function DspModel(props) {
  const { nodes, materials } = useGLTF('/dsp-model.glb')

  return (
    <group {...props} dispose={null}>
      <group position={[341.21, 384.84, 482.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[-90.23, 48.85, 320.23]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group position={[0, -30.98, 26.93]}>
                <mesh geometry={nodes.Box034.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[-90.25, -31.55, 320.23]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group position={[0, -31, 26.93]}>
                <mesh geometry={nodes.Box040.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[-506.51, 12.07, 297.46]}>
            <group rotation={[-Math.PI, 0, Math.PI / 2]}>
              <group position={[0, 0, -49.69]}>
                <mesh geometry={nodes.Cylinder040.geometry} material={materials['Silver Cleanауа']} />
              </group>
            </group>
          </group>
          <group position={[591.07, 8.05, 316.83]}>
            <group rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <group position={[30.14, 3.87, 1]}>
                <mesh geometry={nodes.Line026.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[570.28, 8.05, 348.16]}>
            <group rotation={[-Math.PI, 0, -Math.PI / 2]}>
              <group position={[30.14, -8.67, 1]}>
                <mesh geometry={nodes.Line027.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[573.53, -128.27, 331.39]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[2.37, 2.35, -1]}>
                <mesh geometry={nodes.Line028.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[573.53, 143.84, 331.39]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[2.37, 2.35, -1]}>
                <mesh geometry={nodes.Line029.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[-591.08, 8.05, 316.83]}>
            <group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
              <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                <group position={[30.14, 3.87, 1]}>
                  <mesh geometry={nodes.Line035.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
                </group>
              </group>
            </group>
          </group>
          <group position={[-570.3, 8.05, 348.16]}>
            <group rotation={[0, 0, -Math.PI / 2]}>
              <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                <group position={[30.14, -8.67, 1]}>
                  <mesh geometry={nodes.Line036.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
                </group>
              </group>
            </group>
          </group>
          <group position={[-573.53, -128.27, 331.39]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                <group position={[2.37, 2.35, -1]}>
                  <mesh geometry={nodes.Line037.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
                </group>
              </group>
            </group>
          </group>
          <group position={[-573.53, 143.84, 331.39]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                <group position={[2.37, 2.35, -1]}>
                  <mesh geometry={nodes.Line038.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
                </group>
              </group>
            </group>
          </group>
          <group position={[-298.26, 363.07, 370.38]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group scale={[1.07, 1.07, 0.66]}>
                <group position={[-352.78, -254.4, -26.89]}>
                  <mesh geometry={nodes.Object006.geometry} material={materials['11 - CoronaMtl']} />
                </group>
              </group>
            </group>
          </group>
          <group position={[297.18, 363.07, 370.38]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group scale={[1.07, 1.07, 0.66]}>
                <group position={[-352.78, -254.4, -26.89]}>
                  <mesh geometry={nodes.Object007.geometry} material={materials['11 - CoronaMtl']} />
                </group>
              </group>
            </group>
          </group>
          <group position={[0, 0, 359.14]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group position={[0, 0, -10]}>
                {/* Тут */}
                {/* { props.activeDspColor === 'Білий преміум' && <mesh geometry={nodes.Box043.geometry} material={textures.белый} /> }
                { props.activeDspColor === 'Венге магія' && <mesh geometry={nodes.Box043.geometry} material={textures['венге магия']} /> }
                { props.activeDspColor === 'Дуб готланд' && <mesh geometry={nodes.Box043.geometry} material={textures['дуб готланд']} /> }
                { props.activeDspColor === 'Ільм вермут' && <mesh geometry={nodes.Box043.geometry} material={textures['ильм вермут']} /> }
                { props.activeDspColor === 'Чорний' && <mesh geometry={nodes.Box043.geometry} material={textures.черный} /> }

                { props.activeMdfColor === 'Нобелла сілк' && <mesh geometry={nodes.Box043.geometry} material={textures['нобелла силк']} /> } */}
                  <mesh geometry={nodes.Box043.geometry} material={materials['11 - CoronaMtl']} />
              </group>
            </group>
          </group>
          <group position={[0, 0, 359.14]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group position={[0, 0, -10]}>
                {/* Тут */}
                {/* { props.activeDspColor === 'Білий преміум' && <mesh geometry={nodes.Object008.geometry} material={textures.белый} /> }
                { props.activeDspColor === 'Венге магія' && <mesh geometry={nodes.Object008.geometry} material={textures['венге магия']} /> }
                { props.activeDspColor === 'Дуб готланд' && <mesh geometry={nodes.Object008.geometry} material={textures['дуб готланд']} /> }
                { props.activeDspColor === 'Ільм вермут' && <mesh geometry={nodes.Object008.geometry} material={textures['ильм вермут']} /> }
                { props.activeDspColor === 'Чорний' && <mesh geometry={nodes.Object008.geometry} material={textures.черный} /> }

                { props.activeMdfColor === 'Нобелла сілк' && <mesh geometry={nodes.Object008.geometry} material={textures['нобелла силк']} /> } */}

                <mesh geometry={nodes.Object008.geometry} material={materials['11 - CoronaMtl']} />
              </group>
            </group>
          </group>
          <group position={[-560.06, 8.15, -329.89]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group position={[0, 0, -15.68]}>
                <mesh geometry={nodes.Box037.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[-560.06, 8.15, 11.65]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group position={[0, 0, -335.5]}>
                <mesh geometry={nodes.Box039.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[560.09, 8.5, 11.65]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group position={[0, 0, -335.5]}>
                <mesh geometry={nodes.Box030.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[560.09, 8.5, -329.89]}>
            <group rotation={[0, 0, Math.PI / 2]}>
              <group position={[0, 0, -15.68]}>
                <mesh geometry={nodes.Box028.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
              </group>
            </group>
          </group>
          <group position={[-560.12, -29.5, -365.61]}>
            <group rotation={[2.44, 0, -Math.PI]}>
              <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                <group position={[0, -197.24, 204.67]}>
                  <mesh geometry={nodes.Plane010.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
                </group>
              </group>
            </group>
          </group>
          <group position={[-560.06, -29.8, -357.3]}>
            <group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
              <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                <group position={[0, -0.58, -35.93]}>
                  <mesh geometry={nodes.Box050.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
                </group>
              </group>
            </group>
          </group>
          <group position={[560.15, -29.8, -357.3]}>
            <group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
              <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                <group position={[0, -0.58, -35.93]}>
                  <mesh geometry={nodes.Box051.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
                </group>
              </group>
            </group>
          </group>
          <group position={[560.09, -29.5, -365.61]}>
            <group rotation={[2.44, 0, -Math.PI]}>
              <group rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
                <group position={[0, -197.24, 204.67]}>
                  <mesh geometry={nodes.Plane011.geometry} material={materials['02 - CoronaMtl']} material-color={props.activeColor} />
                </group>
              </group>
            </group>
          </group>
          <mesh geometry={nodes.Box049.geometry} material={materials.DefaultMaterial} position={[647.02, -280.41, 348.03]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[317.85, 703.81, 407.21]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, Math.PI]}>
            <group position={[-66.96, -7.92, 3.05]}>
              <group position={[66.96, 7.92, -3.05]}>
                <group rotation={[0, 0, Math.PI / 2]}>
                  <group scale={49.03}>
                    <group position={[0, 0.38, 0]}>
                      <group position={[0, -0.38, 0]}>
                        <group position={[0.01, 0, -0.07]}>
                          <group position={[-0.01, 0.18, -0.25]}>
                            <mesh geometry={nodes.Korpus_02.geometry} material={materials['06 - CoronaMtl']} />
                          </group>
                        </group>
                        <group position={[0.01, -0.37, -0.12]}>
                          <group position={[-0.01, 0.54, -0.2]}>
                            <mesh geometry={nodes.Kontakt.geometry} material={materials['06 - CoronaMtl']} />
                          </group>
                        </group>
                        <group position={[0, 1.44, 0.24]}>
                          <group position={[0, -1.26, -0.56]}>
                            <mesh geometry={nodes.Button.geometry} material={materials['15 - CoronaMtl']} />
                          </group>
                        </group>
                        <group position={[0, 0.18, 0.12]}>
                          <group position={[0, 0, -0.44]}>
                            <mesh geometry={nodes.Vint.geometry} material={materials['06 - CoronaMtl']} />
                          </group>
                        </group>
                        <group position={[0, 1.64, 0.06]}>
                          <group position={[0, -1.46, -0.38]}>
                            <mesh geometry={nodes.Default.geometry} material={materials['06 - CoronaMtl']} />
                          </group>
                        </group>
                        <group position={[0, 0, -0.02]}>
                          <group position={[0, 0.18, -0.3]}>
                            <mesh geometry={nodes.Object003.geometry} material={materials['06 - CoronaMtl']} material-color={props.activeColor} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[-180.76, 727.7, 865.22]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[49.81, -32.38, 0.41]}>
            <group position={[-49.09, 29.5, -6.72]}>
              <mesh geometry={nodes.Object009.geometry} material={materials['18 - CoronaMtl']} />
            </group>
          </group>
          <group position={[33.57, -32.38, 0.41]}>
            <group position={[-32.85, 29.5, -6.72]}>
              <mesh geometry={nodes.Object010.geometry} material={materials['24 - CoronaMtl']} />
            </group>
          </group>
          <group position={[17.15, -32.38, 0.41]}>
            <group position={[-16.42, 29.5, -6.72]}>
              <mesh geometry={nodes.Object011.geometry} material={materials['23 - CoronaMtl']} />
            </group>
          </group>
          <group position={[-15.7, -32.38, 0.41]}>
            <group position={[16.42, 29.5, -6.72]}>
              <mesh geometry={nodes.Object013.geometry} material={materials['21 - CoronaMtl']} />
            </group>
          </group>
          <group position={[-32.13, -32.38, 0.41]}>
            <group position={[32.85, 29.5, -6.72]}>
              <mesh geometry={nodes.Object014.geometry} material={materials['20 - CoronaMtl']} />
            </group>
          </group>
          <group position={[-48.04, -32.38, 0.41]}>
            <group position={[48.76, 29.5, -6.72]}>
              <mesh geometry={nodes.Object015.geometry} material={materials['19 - CoronaMtl']} />
            </group>
          </group>
          <mesh geometry={nodes.Object012.geometry} material={materials['22 - CoronaMtl']} position={[0.72, -2.88, -6.3]} />
          <mesh geometry={nodes.Box052.geometry} material={materials['16 - CoronaMtl']} position={[0.72, -2.88, -6.3]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dsp-model.glb')