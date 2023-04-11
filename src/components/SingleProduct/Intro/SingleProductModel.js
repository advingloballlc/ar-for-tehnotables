import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { WoodModel } from '../../../models/WoodModel'
import { DspModel } from '../../../models/DspModel'
import { WpnModel } from '../../../models/WpnModel'
import { ChildModelBlue } from '../../../models/ChildModelBlue'
import { ChildModelPink } from '../../../models/ChildModelPink'
import { GameModelBlack } from '../../../models/GameModelBlack'
import { GameModelWhite } from './../../../models/GameModelWhite'
import { WingameModel } from '../../../models/WingameModel'
import { PlatformaAkhModel } from '../../../models/PlatformaAkhModel'
import { PolkaModel } from '../../../models/PolkaModel'
import { HookNaushModel } from '../../../models/HookNaushModel'
import { StakanModel } from '../../../models/StakanModel'
import { TwoDrewesModelBlack } from '../../../models/TwoDrewesModelBlack'
import { TwoDrawesModelWhite } from '../../../models/TwoDrawesModelWhite'
import { PlywoodboxModelA4 } from '../../../models/PlywoodboxModelA4'
import { PlywoodboxModelA5 } from '../../../models/PlywoodboxModelA5'

import TableLoader from '../../TableLoader/TableLoader'

const SingleProductModel = ({ 
  slug, 
  activeColor,
  activeBreed,
  activeDspColor,
  activeMdfColor,
  activePlywoodboxSize,
  activeTwoDrawesMaterial
}) => {
  return (
    <>
      { slug === 'height-adjustable-desk-model-strong' && <Canvas pixelRatio={[1, 2]} shadows={true} camera={{ position: [400, 600, 500], fov: 70, far: 100000, zoom: 1 }}>
        <OrbitControls target={[-113.83742850056886, 16.768562970632235, 46.828437127391574]} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        <hemisphereLight intensity={0.35} />
        <Suspense fallback={<TableLoader />}>
          <WoodModel activeColor={activeColor} activeBreed={activeBreed} />
        </Suspense>
      </Canvas> }
      { slug === 'model-strong-dsp' && <Canvas pixelRatio={[1, 2]} shadows={true} camera={{ position: [-600, 1100, 1700], fov: 70, far: 100000, zoom: 1 }}>
        <OrbitControls target={[340.8821399639091, 190.91492268650845, 358.2032151489131]} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        <hemisphereLight intensity={0.35} />
        <Suspense fallback={<TableLoader />}>
          <DspModel activeColor={activeColor} activeDspColor={activeDspColor} />
        </Suspense>
      </Canvas> }
      { slug === 'model-strong-mdf' && <Canvas pixelRatio={[1, 2]} shadows={true} camera={{ position: [-600, 1100, 1700], fov: 70, far: 100000, zoom: 1 }}>
        <OrbitControls target={[340.8821399639091, 190.91492268650845, 358.2032151489131]} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        <hemisphereLight intensity={0.35} />
        <Suspense fallback={<TableLoader />}>
          <DspModel activeColor={activeColor} activeMdfColor={activeMdfColor} />
        </Suspense>
      </Canvas> }
      { slug === 'work-station-wpn' && <Canvas pixelRatio={[1, 2]} shadows={true} camera={{ position: [-35, 35, 35], fov: 70, far: 100000, zoom: 1 }}>
        <OrbitControls target={[-3, 0, 0]} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        <hemisphereLight intensity={0.35} />
        <Suspense fallback={<TableLoader />}>
          <WpnModel />
        </Suspense>
      </Canvas> }
      { slug === 'stil-dlja-shkoljariv' && <Canvas pixelRatio={[1, 2]} shadows={true} camera={{ position: [-100, 1100, 100], fov: 70, far: 100000, zoom: 1 }}>
        <OrbitControls target={[651.7087525904877, 465.20486884466976, -1113.6904454133153]} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        <hemisphereLight intensity={0.35} />
        <Suspense fallback={<TableLoader />}>
          { activeColor === '#7daed8' && <ChildModelBlue /> }
          { activeColor === '#dda4a4' && <ChildModelPink /> }
        </Suspense>
      </Canvas> }
      { slug === 'gaming_desk' && <Canvas pixelRatio={[1, 2]} shadows={true} camera={{ position: [-800, 1500, 1500], fov: 70, far: 100000, zoom: 1 }}>
        <OrbitControls target={[414.78063888750785, 242.16177348798342, 575.8403811377423]} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        <hemisphereLight intensity={0.35} />
        <Suspense fallback={<TableLoader />}>
          { activeColor === '#000000' && <GameModelBlack /> }
          { activeColor === '#ffffff' && <GameModelWhite /> }
        </Suspense>
      </Canvas> }
      { slug === 'wingame' && <Canvas pixelRatio={[1, 2]} shadows={true} camera={{ position: [ -1100, 1900, 1900], fov: 70, far: 100000, zoom: 1 }}>
        <OrbitControls target={[118.73764890334563, 998.8344062989191, 295.1686853601266]} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        <hemisphereLight intensity={0.35} />
        <Suspense fallback={<TableLoader />}>
          <WingameModel />
        </Suspense>
      </Canvas> }
      { slug === 'ar-platforma' && <Canvas camera={{ position: [1, 1, 1], far: 100000, zoom: 3 }}>
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <directionalLight intensity={.35} position={[-30, -30, -30]} />
        <Suspense fallback={<TableLoader />}>
          <PlatformaAkhModel activeColor={activeColor} />
          <OrbitControls position={[5, -3, 5.000000000000001]} target={[2.3627377393886344, 0.14052880377593235, -0.2504967944726448]} />
        </Suspense>
      </Canvas> }
      { slug === 'shelf-for-system-unit' && <Canvas camera={{ position: [7, 7, 7], far: 100000 }}>
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <directionalLight intensity={.35} position={[-30, -30, -30]} />
        <Suspense fallback={<TableLoader />}>
          <PolkaModel />
          <OrbitControls position={[5, -3, 5.000000000000001]} target={[-0.3733923611504412, 2.0199310134691357, 1.229390783674822]} />
        </Suspense>
      </Canvas> }
      { slug === 'kryuchok' && <Canvas camera={{ position: [7, 7, 7], far: 100000, zoom: 10 }}>
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <directionalLight intensity={.35} position={[-30, -30, -30]} />
        <Suspense fallback={<TableLoader />}>
          <HookNaushModel />
          <OrbitControls position={[5, -3, 5.000000000000001]} target={[-1.499055711323291, 0.643805366426616, -2.5164544175733616]} />
        </Suspense>
      </Canvas> }
      { slug === 'pidstakannyk-plastykovyj' && <Canvas camera={{ position: [5, 5, -5], far: 100000, zoom: 1.2 }}>
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <directionalLight intensity={.35} position={[-30, -30, -30]} />
        <Suspense fallback={<TableLoader />}>
          <StakanModel />
          <OrbitControls target={[14.081925628064061, -0.11353813717456612, 0.3449146338450211]} />
        </Suspense>
      </Canvas> }
      { slug === 'modul-z-dvoh-yashhykiv-pidvisnyj' && <Canvas camera={{ position: [-10, 10, -10], far: 100000, zoom: 2 }}>
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <directionalLight intensity={.35} position={[-30, -30, -30]} />
        <Suspense fallback={<TableLoader />}>
          { activeTwoDrawesMaterial === 'Дерево' || activeTwoDrawesMaterial === 'Wood' ? <TwoDrawesModelWhite /> : <TwoDrewesModelBlack /> }
          <OrbitControls target={[0.16526992279439365, 0.9723372226241814, 0.5633391673001179]} />
        </Suspense>
      </Canvas> }
      { slug === 'yashhyk-z-fanery' && <Canvas camera={{ position: activePlywoodboxSize === 'А4' ? [-15, 10, -10] : [-25, 10, -20], far: 100000, zoom: 1.8 }}>
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <directionalLight intensity={.35} position={[-30, -30, -30]} />
          <Suspense fallback={<TableLoader />}>
            { activePlywoodboxSize === 'А4' ? <PlywoodboxModelA4 /> : <PlywoodboxModelA5 /> }
            <OrbitControls target={activePlywoodboxSize === 'А4' ? [-7.736982959743949, 0.41592053701599446, 0.13205199653058985] : [-11.688227301528991, -0.7145569035994019, 0.6322415990772979]} />
          </Suspense>
        </Canvas> }
    </>
  )
}

export default SingleProductModel