import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// import { ConstructorModelNew } from '../../models/ConstructorModelNew'
import { ConstructorModelFin } from '../../models/ConstructorModelFin'

import TableLoader from '../TableLoader/TableLoader'

import line from '../../images/line.svg'

const ConfiguratorModel = ({ 
  name,
  frameCount,
  colorFrame,
  frameWheels,
  tableTopMaterial,
  tableTopBreed,
  tableTopDspColor,
  tableTopMdfColor,
  tableTopThickness,
  tableTopLength,
  holesPosition,
  holesKind,
  systemBlock,
  cableManagement,
  rosette,
  charging,
  headphoneHook,
  coaster,
  barKind,
  barPosition,
  twoDrawersKind,
  twoDrawersPosition,
  plywoodBoxKind,
  plywoodBoxPosition,
  bagHook,
  monitor,
  bracket
}) => {
  return (
    <div className="configurator-model intro-configurator__model configurator__item">
      <div className="configurator__mob-title-wrapper title-wrapper">
        <h2 className="configurator__mob-title title title--big">{name}</h2>
      </div>
      <div className="configurator-model__inner">
        <span className="configurator-model__line model-line">
          <img src={line} alt="360"/>
          <span className="configurator-model__line-slider model-line__slider">
            <span>360</span>
          </span>
        </span>
        <Canvas camera={{ position: [11, 11, 11], far: 100000 }}>
          <directionalLight intensity={1} position={[10, 10, 10]} />
          <hemisphereLight intensity={0.35} />
          <Suspense fallback={<TableLoader />}>
            <ConstructorModelFin
              frameCount={frameCount}
              colorFrame={colorFrame}
              frameWheels={frameWheels}
              tableTopMaterial={tableTopMaterial}
              tableTopBreed={tableTopBreed}
              tableTopDspColor={tableTopDspColor}
              tableTopMdfColor={tableTopMdfColor}
              tableTopThickness={tableTopThickness}
              tableTopLength={tableTopLength}
              holesPosition={holesPosition}
              holesKind={holesKind}
              systemBlock={systemBlock}
              cableManagement={cableManagement}
              rosette={rosette}
              charging={charging}
              headphoneHook={headphoneHook}
              coaster={coaster}
              barKind={barKind}
              barPosition={barPosition}
              twoDrawersKind={twoDrawersKind}
              twoDrawersPosition={twoDrawersPosition}
              plywoodBoxKind={plywoodBoxKind}
              plywoodBoxPosition={plywoodBoxPosition}
              bagHook={bagHook}
              monitor={monitor}
              bracket={bracket}
            />
            {/* <ConstructorModelNew
              frameCount={frameCount}
              colorFrame={colorFrame}
              frameWheels={frameWheels}
              tableTopMaterial={tableTopMaterial}
              tableTopBreed={tableTopBreed}
              tableTopDspColor={tableTopDspColor}
              tableTopMdfColor={tableTopMdfColor}
              tableTopThickness={tableTopThickness}
              tableTopLength={tableTopLength}
              holesPosition={holesPosition}
              holesKind={holesKind}
              systemBlock={systemBlock}
              cableManagement={cableManagement}
              rosette={rosette}
              headphoneHook={headphoneHook}
              coaster={coaster}
              barKind={barKind}
              barPosition={barPosition}
              twoDrawersKind={twoDrawersKind}
              twoDrawersPosition={twoDrawersPosition}
              plywoodBoxKind={plywoodBoxKind}
              plywoodBoxPosition={plywoodBoxPosition}
              bagHook={bagHook}
              monitor={monitor}
              bracket={bracket}
            /> */}
            <OrbitControls target={[-2.3011003770685785, 2.469466388550635, 0.8229261309996024]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default ConfiguratorModel