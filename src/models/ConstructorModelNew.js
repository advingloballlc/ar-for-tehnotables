import React from 'react'
import { useGLTF } from '@react-three/drei'

export const ConstructorModelNew = (props) => {
  const { nodes, materials } = useGLTF('/constructor-commpressed-new.glb')

  const activeFrameCount = props.frameCount.filter(item => item.isActive)[0].value,
        activeFrameWheels = props.frameWheels.filter(item => item.isActive)[0].value,
        activeMaterial = props.tableTopMaterial.filter(item => item.isActive)[0].value,
        activeBreed = props.tableTopBreed.filter(item => item.isActive)[0].value,
        activeDspColor = props.tableTopDspColor.filter(item => item.isActive)[0].value,
        activeMdfColor = props.tableTopMdfColor.filter(item => item.isActive)[0].value,
        activeThickness = props.tableTopThickness.filter(item => item.isActive)[0].value,
        activeHolesPosition = props.holesPosition.filter(item => item.isActive)[0].value,
        activeHolesKind = props.holesKind.filter(item => item.isActive)[0].value,
        activeBracket = props.bracket.filter(item => item.isActive)[0].value,
        activeMonitor = props.monitor.filter(item => item.isActive)[0].value,
        activeCoaster = props.coaster.filter(item => item.isActive)[0].value,
        activeHeadphoneHook = props.headphoneHook.filter(item => item.isActive)[0].value,
        activeBagHook = props.bagHook.filter(item => item.isActive)[0].value,
        activeRosette = props.rosette.filter(item => item.isActive)[0].value,
        activeSystemBlock = props.systemBlock.filter(item => item.isActive)[0].value,
        activeBarKind = props.barKind.filter(item => item.isActive)[0].value,
        activeBarPosition = props.barPosition.filter(item => item.isActive)[0].value,
        activeTwoDrawersKind = props.twoDrawersKind.filter(item => item.isActive)[0].value,
        activeTwpDrawersPosition = props.twoDrawersPosition.filter(item => item.isActive)[0].value,
        activePlywoodBoxKind = props.plywoodBoxKind.filter(item => item.isActive)[0].value,
        activePlywoodBoxPosition = props.plywoodBoxPosition.filter(item => item.isActive)[0].value
  
  return (
    <group {...props} dispose={null}>
      {/* Пульт */}
      <mesh geometry={nodes.pult_L.geometry} material={materials['Material-plastik']} />

      {/* Лівий ящик для ПК */}
      {
        activeFrameCount === 'frame-count-2' &&
        activeSystemBlock === 'system-block-left' &&
          <>
            <mesh geometry={nodes.rama_PC_box_L.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
            <mesh geometry={nodes.wood_rama_PC_box_L.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
          </>
      }
      

      {/* Правий ящик для ПК */}
      {
        activeFrameCount === 'frame-count-2' &&
        activeSystemBlock === 'system-block-right' &&
          <>
            <mesh geometry={nodes.rama_PC_box_R.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
            <mesh geometry={nodes.wood_rama_PC_box_R.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
          </>
      }


      {
        props.tableTopLength >= 121 &&
          <>
            {/* Ліва барна стійка з підсвіткою */}
            {
              activeFrameCount === 'frame-count-2' &&
              activeBarKind === 'bar-with-light' && 
              activeBarPosition === 'bar-left' &&
                <>
                  <mesh geometry={nodes.metal_bar_L.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.rama_BAR_L.geometry} material={materials['Material-red']} />
                  <mesh geometry={nodes.wood_bar_L.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Opora_L_bar_POLKA.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.svet_bar_L.geometry} material={materials['Material-light']} />
                </>
            }
            {/* Права барна стійка з підсвіткою */}
            {
              activeFrameCount === 'frame-count-2' &&
              activeBarKind === 'bar-with-light' && 
              activeBarPosition === 'bar-right' &&
                <>
                  <mesh geometry={nodes.metal_bar_R.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Opora_R_bar_POLKA.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.rama_BAR_R.geometry} material={materials['Material-red']} />
                  <mesh geometry={nodes.wood_bar_R.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.svet_bar_R.geometry} material={materials['Material-light']} />
                </>
            }
            {/* Ліва барна стійка без підсвіткою */}
            {
              activeFrameCount === 'frame-count-2' &&
              activeBarKind === 'bar-without-light' && 
              activeBarPosition === 'bar-left' &&
                <>
                  <mesh geometry={nodes.metal_bar_L.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.rama_BAR_L.geometry} material={materials['Material-red']} />
                  <mesh geometry={nodes.wood_bar_L.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Opora_L_bar_POLKA.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                </>
            }
            {/* Права барна стійка без підсвіткою */}
            {
              activeFrameCount === 'frame-count-2' &&
              activeBarKind === 'bar-without-light' && 
              activeBarPosition === 'bar-right' &&
                <>
                  <mesh geometry={nodes.metal_bar_R.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Opora_R_bar_POLKA.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.rama_BAR_R.geometry} material={materials['Material-red']} />
                  <mesh geometry={nodes.wood_bar_R.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                </>
            }
          </>
      }


      {
        props.tableTopLength >= 121 &&
        activeFrameCount === 'frame-count-2' &&
        activeTwoDrawersKind !== 'drawers-without' &&
          <>
            {
              activeTwpDrawersPosition === 'drawers-left' &&
                <>
                  {/* Кріплення для лівого ящика */}
                  <mesh geometry={nodes.Yashik_derg_L.geometry} material={materials['Material #129.002']} material-color={props.colorFrame} />
                  {
                    // Ясен
                    activeMaterial === 'wood' &&
                    activeBreed === 'ash' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['Ash!']} />
                  }
                  {
                    // Дуб
                    activeMaterial === 'wood' &&
                    activeBreed === 'oak' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['Oak-mat']} />
                  }
                  {
                    // Горіх
                    activeMaterial === 'wood' &&
                    activeBreed === 'nut' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['Walnut-mat']} />
                  }
                  {
                    // Дуб рустикальний
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'dub-rustikalny' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['рустикальный дуб.001']} />
                  }
                  {
                    // Графіт структура
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'grafit-struktura' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['серый графит']} />
                  }
                  {
                    // Дуб натуральний
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'dub-naturalny' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['дуб натуральный']} />
                  }
                  {
                    // Дуб янтарний
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'dub-yantarny' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['янтарный дуб']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'nobela-silk' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['нобелла силк']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'lancelot' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials.ланселот} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'beton-svitlo-siry' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials.бетон} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'morsky-siniy' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['морской синий']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'bily-matovy' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials.матвайт} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'lid' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials.лед} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'ilm-velmut' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['ильм вермут']} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'dub-gotland' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['дуб готланд']} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'bily-premium' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials.белый} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'venge-magia' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['венге магия']} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'chorny' &&
                      <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials.черный} />
                  }
                </>
            }
            {
              activeTwpDrawersPosition === 'drawers-right' &&
                <>
                  {/* Кріплення для правого ящика */}
                  <mesh geometry={nodes.Yashik_derg_R.geometry} material={materials['Material #129.002']} material-color={props.colorFrame} />
                  {
                    // Ясен
                    activeMaterial === 'wood' &&
                    activeBreed === 'ash' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['Ash!']} />
                  }
                  {
                    // Дуб
                    activeMaterial === 'wood' &&
                    activeBreed === 'oak' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['Oak-mat']} />
                  }
                  {
                    // Горіх
                    activeMaterial === 'wood' &&
                    activeBreed === 'nut' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['Walnut-mat']} />
                  }
                  {
                    // Дуб рустикальний
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'dub-rustikalny' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['рустикальный дуб.001']} />
                  }
                  {
                    // Графіт структура
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'grafit-struktura' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['серый графит']} />
                  }
                  {
                    // Дуб натуральний
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'dub-naturalny' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['дуб натуральный']} />
                  }
                  {
                    // Дуб янтарний
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'dub-yantarny' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['янтарный дуб']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'nobela-silk' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['нобелла силк']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'lancelot' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials.ланселот} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'beton-svitlo-siry' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials.бетон} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'morsky-siniy' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['морской синий']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'bily-matovy' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials.матвайт} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'lid' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials.лед} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'ilm-velmut' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['ильм вермут']} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'dub-gotland' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['дуб готланд']} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'bily-premium' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials.белый} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'venge-magia' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['венге магия']} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'chorny' &&
                      <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials.черный} />
                  }
                </>
            }
          </>
      }

      {
        props.tableTopLength >= 120 &&
        activeFrameCount === 'frame-count-2' &&
        activePlywoodBoxKind !== 'plywoodbox-without' &&
          <>
            {
              // Ящик з фанери лівий
              activePlywoodBoxPosition === 'plywood-left' &&
                <>
                  <mesh geometry={nodes.Mesh310.geometry} material={materials['fanera-11psd.001']} />
                  <mesh geometry={nodes.Mesh310_1.geometry} material={materials['Material #129.002']} material-color={props.colorFrame} />
                </>
            }
            {
              // Ящик з фанери правий
              activePlywoodBoxPosition === 'plywood-right' &&
                <>
                  <mesh geometry={nodes.Mesh004.geometry} material={materials['fanera-11psd.002']} />
                  <mesh geometry={nodes.Mesh004_1.geometry} material={materials['Material #129.003']} material-color={props.colorFrame} />
                </>
            }
          </>
      }

        {/* activeFrameCount === 'frame-count-2' &&
        (activeSystemBlock === 'system-block-left' || 
        activeSystemBlock === 'system-block-right' ||
        activeBarKind === 'bar-with-light' ||
        activeBarKind === 'bar-without-light' ||
        activeTwoDrawersKind !== 'drawers-without' ||
        activePlywoodBoxKind !== 'plywoodbox-without' || 
        props.tableTopLength <= 164) && */}

      {/* Вузький двохопорний */}
      {
        activeFrameCount === 'frame-count-2' &&
        props.tableTopLength <= 164 &&
          <>
            { 
              activeFrameWheels === 'frame-wheels-without'
                ? <>
                    <mesh geometry={nodes.Nogi_bez_koles_narrow.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
                    <mesh geometry={nodes.RAMA_base_T.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
                  </>
                : <>
                    <mesh geometry={nodes.Opora_dlya_koles_narrow.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
                    <mesh geometry={nodes.RAMA_base_T_BAR.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
                  </>
            }
          </>
      }

        {/* activeFrameCount === 'frame-count-2' &&
        props.tableTopLength >= 165 &&
        !(activeSystemBlock === 'system-block-left' || 
        activeSystemBlock === 'system-block-right' ||
        activeBarKind === 'bar-with-light' ||
        activeBarKind === 'bar-without-light' ||
        activeTwoDrawersKind !== 'drawers-without' ||
        activePlywoodBoxKind !== 'plywoodbox-without') && */}

      {/* Широкий двохопорний */}
      { 
        activeFrameCount === 'frame-count-2' &&
        props.tableTopLength >= 165 &&
          <>
            {
              activeFrameWheels === 'frame-wheels-without'
                ? <>
                    <mesh geometry={nodes.Nogi_bez_koles_wide.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
                    <mesh geometry={nodes.RAMA_base_wide.geometry} material={materials['Material.001']} material-color={props.colorFrame} />
                  </>
                : <>
                    <mesh geometry={nodes['Opora_dlya_koles-wide-curve'].geometry} material={materials['Material.001']} material-color={props.colorFrame} />
                    <mesh geometry={nodes['RAMA_base_wide-curve'].geometry} material={materials['Material.001']} material-color={props.colorFrame} />
                  </>
            }
          </>
       }


      {/* Широкий чотирьохопорний */}
      { 
        activeFrameCount === 'frame-count-4' &&
        props.tableTopLength >= 165 &&
          <mesh geometry={nodes.square_opora_wide.geometry} material={materials['Material.001']} material-color={props.colorFrame} /> 
      }

      {/* Вузький чотирьохопорний */}
      {
        activeFrameCount === 'frame-count-4' &&
        props.tableTopLength <= 164 &&
          <mesh geometry={nodes.square_opora_narrow.geometry} material={materials['Material.002']} material-color={props.colorFrame} />
      }

        {/* activeFrameWheels === 'frame-wheels-italy' &&
        (activeSystemBlock === 'system-block-left' || 
        activeSystemBlock === 'system-block-right' || 
        activeBarKind === 'bar-with-light' ||
        activeBarKind === 'bar-without-light' ||
        activeTwoDrawersKind !== 'drawers-without' ||
        activePlywoodBoxKind !== 'plywoodbox-without' || 
        props.tableTopLength <= 164) && */}

      {/* Італійські коліщата (Вузький двохопорний) */}
      {
        activeFrameWheels === 'frame-wheels-italy' &&
        props.tableTopLength <= 164 &&
          <>
            <mesh geometry={nodes.italian_koleso_narrow00.geometry} material={materials['Material-red-rubber']} />
            <mesh geometry={nodes.italian_koleso_narrow01.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
          </>
      }

        {/* activeFrameWheels === 'frame-wheels-china' && 
        (activeSystemBlock === 'system-block-left' || 
        activeSystemBlock === 'system-block-right' ||
        activeBarKind === 'bar-with-light' ||
        activeBarKind === 'bar-without-light' ||
        activeTwoDrawersKind !== 'drawers-without' ||
        activePlywoodBoxKind !== 'plywoodbox-without' || 
        props.tableTopLength <= 164) && */}

      {/* Китайські коліщата (Вузький двохопорний) */}
      {
        activeFrameWheels === 'frame-wheels-china' &&
        props.tableTopLength <= 164 &&
          <>
            <mesh geometry={nodes.china_koleso_base_narrow.geometry} material={materials['Material-metal-light']} />
            <mesh geometry={nodes.china_koleso_brake_narrow.geometry} material={materials['Material-plastik']} />
            <mesh geometry={nodes.china_koleso_wheel_narrow.geometry} material={materials['Material-grey']} />   
          </>
      }

        {/* activeFrameWheels === 'frame-wheels-italy' && 
        props.tableTopLength >= 165 &&
        !(activeSystemBlock === 'system-block-left' || 
        activeSystemBlock === 'system-block-right' ||
        activeBarKind === 'bar-with-light' ||
        activeBarKind === 'bar-without-light' ||
        activeTwoDrawersKind !== 'drawers-without' ||
        activePlywoodBoxKind !== 'plywoodbox-without') && */}

      {/* Італійські коліщата (Широкий) */}
      { 
        activeFrameWheels === 'frame-wheels-italy' && 
        props.tableTopLength >= 165 &&
          <>
            <mesh geometry={nodes.italian_koleso_wide_base00.geometry} material={materials['Material-red-rubber']} />
            <mesh geometry={nodes.italian_koleso_wide_base01.geometry} material={materials['Material-metal']} material-color={props.colorFrame} /> 
          </>
      }

        {/* activeFrameWheels === 'frame-wheels-china' &&
        props.tableTopLength >= 165 &&
        !(activeSystemBlock === 'system-block-left' || 
        activeSystemBlock === 'system-block-right' ||
        activeBarKind === 'bar-with-light' ||
        activeBarKind === 'bar-without-light' ||
        activeTwoDrawersKind !== 'drawers-without' ||
        activePlywoodBoxKind !== 'plywoodbox-without') && */}

      {/* Китайські коліщата (Широкий) */}
      {
        activeFrameWheels === 'frame-wheels-china' &&
        props.tableTopLength >= 165 &&
          <>
            <mesh geometry={nodes['china_koleso_base-wide'].geometry} material={materials['Material-metal-light']} />
            <mesh geometry={nodes['china_koleso_brake-wide'].geometry} material={materials['Material-plastik']} />
            <mesh geometry={nodes['china_koleso_wheel-wide'].geometry} material={materials['Material-grey']} />
          </>
      }

      {
        activeBracket === 'bracket-without' &&
          <>
            {/* Підставка під монітор */}
            {
              activeMonitor !== 'monitor-without' &&
                <>
                  <mesh geometry={nodes.base_podstavka_monitior.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  { 
                    activeMaterial === 'wood' &&
                    activeBreed === 'ash' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['Ash!']} />
                  }
                  {
                    activeMaterial === 'wood' &&
                    activeBreed === 'oak' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['Oak-mat']} />
                  }
                  {
                    activeMaterial === 'wood' &&
                    activeBreed === 'nut' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['Walnut-mat']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'dub-rustikalny' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['рустикальный дуб.001']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'grafit-struktura' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['серый графит']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'dub-naturalny' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['дуб натуральный']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'dub-yantarny' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['янтарный дуб']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'nobela-silk' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['нобелла силк']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'lancelot' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials.ланселот} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'beton-svitlo-siry' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials.бетон} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'morsky-siniy' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['морской синий']} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'bily-matovy' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials.матвайт} />
                  }
                  {
                    activeMaterial === 'mdf' &&
                    activeMdfColor === 'lid' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials.лед} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'ilm-velmut' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['ильм вермут']} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'dub-gotland' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['дуб готланд']} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'bily-premium' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials.белый} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'venge-magia' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['венге магия']} />
                  }
                  {
                    activeMaterial === 'dsp' &&
                    activeDspColor === 'chorny' &&
                      <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials.черный} />
                  }
                </>
            }
          </>
      }

      {
        activeMonitor === 'monitor-without' &&
          <>
            {/* Механічний для 1 монітору */}
            {
              activeBracket === 'mech-1-mon' &&
                <>
                  <mesh geometry={nodes['1-_monitor-base'].geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Mesh091.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Mesh091_1.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Monitor_centered.geometry} material={materials['Material #129']} material-color="#000000" />
                </>
            }
            {/* Електричний для 1 монітору */}
            {
              activeBracket === 'elec-1-mon' &&
                <>
                  <mesh geometry={nodes.Mesh120.geometry} material={materials['Material #129']} material-color="#000000" />
                  <mesh geometry={nodes.Mesh120_1.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                </>
            }
            {/* Кранштейн механічний (2 монітори) */}
            {
              activeBracket === 'mech-2-mon' &&
                <>
                  <mesh geometry={nodes['derg--2-monitora'].geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Mesh093.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Mesh093_1.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Mesh096.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Mesh096_1.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                  <mesh geometry={nodes.Monitor_L_1.geometry} material={materials['Material #129']} material-color="#000000" />
                  <mesh geometry={nodes.Monitor_R_1.geometry} material={materials['Material #129']} material-color="#000000" />  
                </>
            }
            {/* Кранштейн електричний (2 монітори) */}
            {
              activeBracket === 'elec-2-mon' &&
                <>
                  <mesh geometry={nodes.Mesh121.geometry} material={materials['Material #129']} material-color="#000000" />
                  <mesh geometry={nodes.Mesh121_1.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
                </>
            }
          </>
      }
      

      {
        activeMaterial === 'wood' &&
          <>
            {
              activeBreed === 'ash' &&
                <>
                  { 
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 120 &&
                      <mesh geometry={nodes['120_82-20mm-003-ash001'].geometry} material={materials['Ash!']} /> 
                  }
                  { 
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 120 &&
                      <mesh geometry={nodes['120_82-40mm-003-ash001'].geometry} material={materials['Material #443.007']} /> 
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 140 &&
                    props.tableTopLength >= 121 &&
                      <mesh geometry={nodes['140_82-20mm-003-ash001'].geometry} material={materials['Ash!']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 140 &&
                    props.tableTopLength >= 121 &&
                      <mesh geometry={nodes['140_82-40mm-003-ash001'].geometry} material={materials['Material #443.006']} />
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 150 &&
                    props.tableTopLength >= 141 &&
                      <mesh geometry={nodes['150_82-20mm-003-ash001'].geometry} material={materials['Ash!']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 150 &&
                    props.tableTopLength >= 141 &&
                      <mesh geometry={nodes['150_82-40mm-003-ash001'].geometry} material={materials['Material #443.005']} />
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 165 &&
                    props.tableTopLength >= 151 &&
                      <mesh geometry={nodes['165_82-20mm-003-ash001'].geometry} material={materials['Ash!']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 165 &&
                    props.tableTopLength >= 151 &&
                      <mesh geometry={nodes['165_82-40mm-003-ash001'].geometry} material={materials['Material #443.004']} />
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 180 &&
                    props.tableTopLength >= 166 &&
                      <mesh geometry={nodes['180_82-20mm-003_ash001'].geometry} material={materials['Ash!']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 180 &&
                    props.tableTopLength >= 166 &&
                      <mesh geometry={nodes['180_82-40mm-003-ash001'].geometry} material={materials['Ash!']} />
                  }              
                </>
            }
            {
              activeBreed === 'oak' &&
                <>
                  { 
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 120 &&
                      <mesh geometry={nodes['120_82-20mm-oak'].geometry} material={materials['Oak-mat']} /> 
                  }
                  { 
                    activeThickness === '40mm' && 
                    props.tableTopLength <= 120 &&
                      <mesh geometry={nodes['120_82-40mm-oak'].geometry} material={materials['Oak-mat']} /> 
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 140 &&
                    props.tableTopLength >= 121 &&
                      <mesh geometry={nodes['140_82-20mm-oak'].geometry} material={materials['Oak-mat']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 140 &&
                    props.tableTopLength >= 121 &&
                      <mesh geometry={nodes['140_82-40mm-oak'].geometry} material={materials['Oak-mat']} />
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 150 &&
                    props.tableTopLength >= 141 &&
                      <mesh geometry={nodes['150_82-20mm-oak'].geometry} material={materials['Oak-mat']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 150 &&
                    props.tableTopLength >= 141 &&
                      <mesh geometry={nodes['150_82-40mm-oak'].geometry} material={materials['Oak-mat']} />
                  }              
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 165 &&
                    props.tableTopLength >= 151 &&
                      <mesh geometry={nodes['165_82-20mm-oak'].geometry} material={materials['Oak-mat']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 165 &&
                    props.tableTopLength >= 151 &&
                      <mesh geometry={nodes['165_82-40mm-oak'].geometry} material={materials['Oak-mat']} />
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 180 &&
                    props.tableTopLength >= 166 &&
                      <mesh geometry={nodes['180_82-20mm-oak'].geometry} material={materials['Oak-mat']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 180 &&
                    props.tableTopLength >= 166 &&
                      <mesh geometry={nodes['180_82-40mm-oak'].geometry} material={materials['Oak-mat']} />
                  }
                </>
            }
            {
              activeBreed === 'nut' &&
                <>
                  { 
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 120 &&
                      <mesh geometry={nodes['120_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} /> 
                  }
                  { 
                    activeThickness === '40mm' && 
                    props.tableTopLength <= 120 &&
                      <mesh geometry={nodes['120_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} /> 
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 140 &&
                    props.tableTopLength >= 121 &&
                      <mesh geometry={nodes['140_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 140 &&
                    props.tableTopLength >= 121 &&
                      <mesh geometry={nodes['140_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} />
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 150 &&
                    props.tableTopLength >= 141 &&
                      <mesh geometry={nodes['150_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 150 &&
                    props.tableTopLength >= 141 &&
                      <mesh geometry={nodes['150_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} />
                  }              
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 165 &&
                    props.tableTopLength >= 151 &&
                      <mesh geometry={nodes['165_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 165 &&
                    props.tableTopLength >= 151 &&
                      <mesh geometry={nodes['165_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} />
                  }
                  {
                    activeThickness === '20mm' &&
                    props.tableTopLength <= 180 &&
                    props.tableTopLength >= 166 &&
                      <mesh geometry={nodes['180_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} />
                  }
                  {
                    activeThickness === '40mm' &&
                    props.tableTopLength <= 180 &&
                    props.tableTopLength >= 166 &&
                      <mesh geometry={nodes['180_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} />
                  }
                </>
            }
          </>
      }

      {
        activeMaterial === 'mdf' &&
          <>
            {/* dub-rustikalny */}
            { 
              activeMdfColor === 'dub-rustikalny' && 
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} /> 
            }
            {
              activeMdfColor === 'dub-rustikalny' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 && 
                <mesh geometry={nodes['140_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} />
            }
            {
              activeMdfColor === 'dub-rustikalny' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} />
            }
            {
              activeMdfColor === 'dub-rustikalny' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} />
            }
            {
              activeMdfColor === 'dub-rustikalny' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} />
            }
            {/* grafit-struktura */}
            { 
              activeMdfColor === 'grafit-struktura' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mmсерый_графит'].geometry} material={materials['серый графит']} /> 
            }
            {
              activeMdfColor === 'grafit-struktura' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 && 
                <mesh geometry={nodes['140_82-20mm-серый_графит'].geometry} material={materials['серый графит']} />
            }
            {
              activeMdfColor === 'grafit-struktura' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-серый_графит'].geometry} material={materials['серый графит']} />
            }
            {
              activeMdfColor === 'grafit-struktura' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-серый_графит'].geometry} material={materials['серый графит']} />
            }
            {
              activeMdfColor === 'grafit-struktura' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-серый_графит'].geometry} material={materials['серый графит']} />
            }
            {/* dub-naturalny */}
            { 
              activeMdfColor === 'dub-naturalny' &&
              props.tableTopLength <= 120 &&
              <mesh geometry={nodes['120_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
            }
            {
              activeMdfColor === 'dub-naturalny' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 && 
              <mesh geometry={nodes['140_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
            }
            {
              activeMdfColor === 'dub-naturalny' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
            }
            {
              activeMdfColor === 'dub-naturalny' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
            }
            {
              activeMdfColor === 'dub-naturalny' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
            }
            {/* dub-yantarny */}
            { 
              activeMdfColor === 'dub-yantarny' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
            }
            {
              activeMdfColor === 'dub-yantarny' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 && 
                <mesh geometry={nodes['140_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
            }
            {
              activeMdfColor === 'dub-yantarny' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
            }
            {
              activeMdfColor === 'dub-yantarny' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
            }
            {
              activeMdfColor === 'dub-yantarny' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
            }
            {/* nobela-silk */}
            { 
              activeMdfColor === 'nobela-silk' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
            }
            {
              activeMdfColor === 'nobela-silk' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 && 
                <mesh geometry={nodes['140_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
            }
            {
              activeMdfColor === 'nobela-silk' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
            }
            {
              activeMdfColor === 'nobela-silk' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
            }
            {
              activeMdfColor === 'nobela-silk' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
            }
            {/* lancelot */}
            { 
              activeMdfColor === 'lancelot' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-ланселот'].geometry} material={materials.ланселот} />
            }
            {
              activeMdfColor === 'lancelot' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 && 
                <mesh geometry={nodes['140_82-20mm-ланселот'].geometry} material={materials.ланселот} />
            }
            {
              activeMdfColor === 'lancelot' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-ланселот'].geometry} material={materials.ланселот} />
            }
            {
              activeMdfColor === 'lancelot' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-ланселот'].geometry} material={materials.ланселот} />
            }
            {
              activeMdfColor === 'lancelot' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
              <mesh geometry={nodes['180_82-20mm-ланселот'].geometry} material={materials.ланселот} />
            }
            {/* beton-svitlo-siry */}
            { 
              activeMdfColor === 'beton-svitlo-siry' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-бетон'].geometry} material={materials.бетон} />
            }
            {
              activeMdfColor === 'beton-svitlo-siry' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 && 
                <mesh geometry={nodes['140_82-20mm-бетон'].geometry} material={materials.бетон} />
            }
            {
              activeMdfColor === 'beton-svitlo-siry' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-бетон'].geometry} material={materials.бетон} />
            }
            {
              activeMdfColor === 'beton-svitlo-siry' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-бетон'].geometry} material={materials.бетон} />
            }
            {
              activeMdfColor === 'beton-svitlo-siry' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-бетон'].geometry} material={materials.бетон} />
            }
            {/* morsky-siniy */}
            { 
              activeMdfColor === 'morsky-siniy' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
            }
            {
              activeMdfColor === 'morsky-siniy' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 && 
                <mesh geometry={nodes['140_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
            }
            {
              activeMdfColor === 'morsky-siniy' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
            }
            {
              activeMdfColor === 'morsky-siniy' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
            }
            {
              activeMdfColor === 'morsky-siniy' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
            }
            {/* bily-matovy */}
            { 
              activeMdfColor === 'bily-matovy' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-матвайт'].geometry} material={materials.матвайт} />
            }
            {
              activeMdfColor === 'bily-matovy' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 &&
                <mesh geometry={nodes['140_82-20mm-матвайт'].geometry} material={materials.матвайт} />
            }
            {
              activeMdfColor === 'bily-matovy' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-матвайт'].geometry} material={materials.матвайт} />
            }
            {
              activeMdfColor === 'bily-matovy' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-матвайт'].geometry} material={materials.матвайт} />
            }
            {
              activeMdfColor === 'bily-matovy' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-матвайт'].geometry} material={materials.матвайт} />
            }
            {/* lid */}
            { 
              activeMdfColor === 'lid' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-лед'].geometry} material={materials.лед} />
            }
            {
              activeMdfColor === 'lid' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 &&
                <mesh geometry={nodes['140_82-20mm-лед'].geometry} material={materials.лед} />
            }
            {
              activeMdfColor === 'lid' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-лед'].geometry} material={materials.лед} />
            }
            {
              activeMdfColor === 'lid' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-лед'].geometry} material={materials.лед} />
            }
            {
              activeMdfColor === 'lid' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-лед'].geometry} material={materials.лед} />
            }
          </>
      }

      {
        activeMaterial === 'dsp' &&
          <>
            {/* ilm-velmut */}
            {
              activeDspColor === 'ilm-velmut' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
            }
            {
              activeDspColor === 'ilm-velmut' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 &&
                <mesh geometry={nodes['140_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
            }
            {
              activeDspColor === 'ilm-velmut' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
            }
            {
              activeDspColor === 'ilm-velmut' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
            }
            {
              activeDspColor === 'ilm-velmut' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
            }
            {/* dub-gotland */}
            {
              activeDspColor === 'dub-gotland' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
            }
            {
              activeDspColor === 'dub-gotland' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 &&
                <mesh geometry={nodes['140_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
            }
            {
              activeDspColor === 'dub-gotland' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
            }
            {
              activeDspColor === 'dub-gotland' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
            }
            {
              activeDspColor === 'dub-gotland' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
            }
            {/* bily-premium */}
            {
              activeDspColor === 'bily-premium' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-белый'].geometry} material={materials.белый} />
            }
            {
              activeDspColor === 'bily-premium' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 &&
                <mesh geometry={nodes['140_82-20mm-белый'].geometry} material={materials.белый} />
            }
            {
              activeDspColor === 'bily-premium' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
               <mesh geometry={nodes['150_82-20mm-белый'].geometry} material={materials.белый} />
            }
            {
              activeDspColor === 'bily-premium' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-белый'].geometry} material={materials.белый} />
            }
            {
              activeDspColor === 'bily-premium' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-белый'].geometry} material={materials.белый} />
            }
            {/* venge-magia */}
            {
              activeDspColor === 'venge-magia' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
            }
            {
              activeDspColor === 'venge-magia' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 &&
                <mesh geometry={nodes['140_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
            }
            {
              activeDspColor === 'venge-magia' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
            }
            {
              activeDspColor === 'venge-magia' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
            }
            {
              activeDspColor === 'venge-magia' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
            }
            {/* chorny */}
            {
              activeDspColor === 'chorny' &&
              props.tableTopLength <= 120 &&
                <mesh geometry={nodes['120_82-20mm-черный'].geometry} material={materials.черный} />
            }
            {
              activeDspColor === 'chorny' &&
              props.tableTopLength <= 140 &&
              props.tableTopLength >= 121 &&
                <mesh geometry={nodes['140_82-20mm-черный'].geometry} material={materials.черный} />
            }
            {
              activeDspColor === 'chorny' &&
              props.tableTopLength <= 150 &&
              props.tableTopLength >= 141 &&
                <mesh geometry={nodes['150_82-20mm-черный'].geometry} material={materials.черный} />
            }
            {
              activeDspColor === 'chorny' &&
              props.tableTopLength <= 165 &&
              props.tableTopLength >= 151 &&
                <mesh geometry={nodes['165_82-20mm-черный'].geometry} material={materials.черный} />
            }
            {
              activeDspColor === 'chorny' &&
              props.tableTopLength <= 180 &&
              props.tableTopLength >= 166 &&
                <mesh geometry={nodes['180_82-20mm-черный'].geometry} material={materials.черный} />
            }
          </>
      }
      
      

      {/* Лівий гачок для навушників */}
      {
        activeHeadphoneHook === 'headphone-left' && 
          <mesh geometry={nodes.Hook_L.geometry} material={materials['Material-plastik.001']} material-color={props.colorFrame} />
      }
      {/* Правий гачок для навушників */}
      {
        activeHeadphoneHook === 'headphone-right' &&
          <mesh geometry={nodes.Hook_R.geometry} material={materials['Material-plastik.001']} material-color={props.colorFrame} />
      }
      {/* Лівий підстаканник */}
      {
        activeCoaster === 'coaster-left' &&
          <mesh geometry={nodes.stakan_L.geometry} material={materials['Material-plastik']} material-color="#000000" />
      }
      {/* Правий підстаканник */}
      {
        activeCoaster === 'coaster-right' &&
          <mesh geometry={nodes.stakan_R.geometry} material={materials['Material-plastik']} material-color="#000000" />
      }
      {/* activeBagHook */}
      {
        activeFrameCount === 'frame-count-2' &&
          <>
            {/* Лівий гачок для сумки */}
            {
              activeBagHook === 'baghook-left' &&
                <mesh geometry={nodes.Hook_small_L.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
            }
            {/* Правий гачок для сумки */}
            {
              activeBagHook === 'baghook-right' &&
                <mesh geometry={nodes.Hook_small_R.geometry} material={materials['Material-metal']} material-color={props.colorFrame} />
            }
          </>
      }

      {/* Кабель менеджмент */}
      { props.cableManagement && <mesh geometry={nodes.cable_manager.geometry} material={materials['Material-metal']} material-color={props.colorFrame} /> }
      

      {/* Отвір для проводів Метал хром */}
      {
        activeHolesPosition === 'hole-center-2' &&
        activeHolesKind === 'metal-chorome' &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <>
            <mesh geometry={nodes['Zaglushka_silver_L-20mm'].geometry} material={materials['Material silver']} />
            <mesh geometry={nodes['Zaglushka_silver_R-20mm'].geometry} material={materials['Material silver']} />
          </>
      }
      {
        activeHolesPosition === 'hole-center-2' &&
        activeHolesKind === 'metal-chorome' &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <>
            <mesh geometry={nodes['Zaglushka_silver_L-40mm'].geometry} material={materials['Material silver']} />
            <mesh geometry={nodes['Zaglushka_silver_R-40mm'].geometry} material={materials['Material silver']} />
          </>
      }
      {
        activeHolesPosition === 'hole-left-1' &&
        activeHolesKind === 'metal-chorome' &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_silver_L-20mm'].geometry} material={materials['Material silver']} />
      }
      {
        activeHolesPosition === 'hole-left-1' &&
        activeHolesKind === 'metal-chorome' &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_silver_L-40mm'].geometry} material={materials['Material silver']} />
      }
      {
        activeHolesPosition === 'hole-right-1' &&
        activeHolesKind === 'metal-chorome' &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_silver_R-20mm'].geometry} material={materials['Material silver']} />
      }
      {
        activeHolesPosition === 'hole-right-1' &&
        activeHolesKind === 'metal-chorome' &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_silver_R-40mm'].geometry} material={materials['Material silver']} />
      }
      {/* Отвір для проводів Метал і Пластик Білий */}
      {
        activeHolesPosition === 'hole-center-2' &&
        (activeHolesKind === 'metal-white' || activeHolesKind === 'plastic-white') &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <>
            <mesh geometry={nodes['Zaglushka_white_L-20mm'].geometry} material={materials['Material-white-plastic']} />
            <mesh geometry={nodes['Zaglushka_white_R-20mm'].geometry} material={materials['Material-white-plastic']} />
          </>
      }
      {
        activeHolesPosition === 'hole-center-2' &&
        (activeHolesKind === 'metal-white' || activeHolesKind === 'plastic-white') &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <>
            <mesh geometry={nodes['Zaglushka_white_L-40mm'].geometry} material={materials['Material-white-plastic']} />
            <mesh geometry={nodes['Zaglushka_white_R-40mm'].geometry} material={materials['Material-white-plastic']} />
          </>
      }
      {
        activeHolesPosition === 'hole-left-1' &&
        (activeHolesKind === 'metal-white' || activeHolesKind === 'plastic-white') &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_white_L-20mm'].geometry} material={materials['Material-white-plastic']} />
      }
      {
        activeHolesPosition === 'hole-left-1' &&
        (activeHolesKind === 'metal-white' || activeHolesKind === 'plastic-white') &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_white_L-40mm'].geometry} material={materials['Material-white-plastic']} />
      }
      {
        activeHolesPosition === 'hole-right-1' &&
        (activeHolesKind === 'metal-white' || activeHolesKind === 'plastic-white') &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_white_R-20mm'].geometry} material={materials['Material-white-plastic']} />
      }
      {
        activeHolesPosition === 'hole-right-1' &&
        (activeHolesKind === 'metal-white' || activeHolesKind === 'plastic-white') &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_white_R-40mm'].geometry} material={materials['Material-white-plastic']} />
      }
      {/* Отвір для проводів Метал і Пластик Чорний */}
      {
        activeHolesPosition === 'hole-center-2' &&
        (activeHolesKind === 'metal-black' || activeHolesKind === 'plastic-black') &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <>
            <mesh geometry={nodes['Zaglushka_black_L-20mm'].geometry} material={materials.Plastic_Simple_Blurry_Gray} />
            <mesh geometry={nodes['Zaglushka_black_R-20mm'].geometry} material={materials['Material-black-plastic']} />
          </>
      }
      {
        activeHolesPosition === 'hole-center-2' &&
        (activeHolesKind === 'metal-black' || activeHolesKind === 'plastic-black') &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <>
            <mesh geometry={nodes['Zaglushka_black_L-40mm'].geometry} material={materials['Material-black-plastic']} />
            <mesh geometry={nodes['Zaglushka_black_R-40mm'].geometry} material={materials['Material-black-plastic']} />
          </>
      }
      {
        activeHolesPosition === 'hole-left-1' &&
        (activeHolesKind === 'metal-black' || activeHolesKind === 'plastic-black') &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_black_L-20mm'].geometry} material={materials.Plastic_Simple_Blurry_Gray} />
      }
      {
        activeHolesPosition === 'hole-left-1' &&
        (activeHolesKind === 'metal-black' || activeHolesKind === 'plastic-black') &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_black_L-40mm'].geometry} material={materials['Material-black-plastic']} />
      }
      {
        activeHolesPosition === 'hole-right-1' &&
        (activeHolesKind === 'metal-black' || activeHolesKind === 'plastic-black') &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_black_R-20mm'].geometry} material={materials['Material-black-plastic']} />
      }
      {
        activeHolesPosition === 'hole-right-1' &&
        (activeHolesKind === 'metal-black' || activeHolesKind === 'plastic-black') &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Zaglushka_black_R-40mm'].geometry} material={materials['Material-black-plastic']} />
      }
      
      
      {/* Блок для розеток */}
      {
        activeRosette === 'rosette-left' &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Block_rozetki__black_L-20mm'].geometry} material={materials['Material-black-plastic']} />
      }
      {
        activeRosette === 'rosette-left' &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Block_rozetki__black_L-40mm'].geometry} material={materials['Material-black-plastic']} />
      }
      {
        activeRosette === 'rosette-right' &&
        (activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
          <mesh geometry={nodes['Block_rozetki_black_R-20mm'].geometry} material={materials['Material-black-plastic']} />
      }
      {
        activeRosette === 'rosette-right' &&
        !(activeThickness === '20mm' || activeMaterial === 'mdf' || activeMaterial === 'dsp') &&
        <mesh geometry={nodes['Block_rozetki_black_R-40mm'].geometry} material={materials['Material-black-plastic']} />
      }

      {/* Блок для розетки білий лівий (вузький) */}
      {/* <mesh geometry={nodes['Block_rozetki__white_L-20mm'].geometry} material={materials['Material-white-plastic']} /> */}
      {/* Блок для розетки білий лівий (товстий) */}
      {/* <mesh geometry={nodes['Block_rozetki__white_L-40mm'].geometry} material={materials['Material-white-plastic']} /> */}
      
      {/* Блок для розетки білий правий (вузький) */}
      {/* <mesh geometry={nodes['Block_rozetki_white_R-20mm'].geometry} material={materials['Material-white-plastic']} /> */}
      {/* Блок для розетки білий правий (товстий) */}
      {/* <mesh geometry={nodes['Block_rozetki_white_R-40mm'].geometry} material={materials['Material-white-plastic']} /> */}
    </group>
    
    // <group {...props} dispose={null}>
    //   <mesh geometry={nodes.square_opora_wide.geometry} material={materials['Material.001']} />
    //   <mesh geometry={nodes.Mesh310.geometry} material={materials['fanera-11psd.001']} />
    //   <mesh geometry={nodes.Mesh310_1.geometry} material={materials['Material #129.002']} />
    //   <mesh geometry={nodes.Mesh120.geometry} material={materials['Material #129']} />
    //   <mesh geometry={nodes.Mesh120_1.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Mesh121.geometry} material={materials['Material #129']} />
    //   <mesh geometry={nodes.Mesh121_1.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Yashik_derg_L.geometry} material={materials['Material #165.016']} />
    //   <mesh geometry={nodes.Yashik_derg_R.geometry} material={materials['Material #165.007']} />
    //   <mesh geometry={nodes.Mesh004.geometry} material={materials['fanera-11psd.002']} />
    //   <mesh geometry={nodes.Mesh004_1.geometry} material={materials['Material #129.003']} />
    //   <mesh geometry={nodes.square_opora_narrow.geometry} material={materials['Material.002']} />
    //   <mesh geometry={nodes.Nogi_bez_koles_wide.geometry} material={materials['Material.003']} />
    //   <mesh geometry={nodes.RAMA_base_wide.geometry} material={materials['Material.003']} />
    //   <mesh geometry={nodes['120_82-20mm-003-ash001'].geometry} material={materials['Ash!']} />
    //   <mesh geometry={nodes['120_82-40mm-003-ash001'].geometry} material={materials['Material #443.007']} />
    //   <mesh geometry={nodes['140_82-20mm-003-ash001'].geometry} material={materials['Ash!']} />
    //   <mesh geometry={nodes['140_82-40mm-003-ash001'].geometry} material={materials['Material #443.006']} />
    //   <mesh geometry={nodes['150_82-20mm-003-ash001'].geometry} material={materials['Ash!']} />
    //   <mesh geometry={nodes['150_82-40mm-003-ash001'].geometry} material={materials['Material #443.005']} />
    //   <mesh geometry={nodes['165_82-20mm-003-ash001'].geometry} material={materials['Ash!']} />
    //   <mesh geometry={nodes['165_82-40mm-003-ash001'].geometry} material={materials['Material #443.004']} />
    //   <mesh geometry={nodes['180_82-20mm-003_ash001'].geometry} material={materials['Ash!']} />
    //   <mesh geometry={nodes['180_82-40mm-003-ash001'].geometry} material={materials['Ash!']} />
    //   <mesh geometry={nodes['120_82-20mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['120_82-40mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['140_82-20mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['140_82-40mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['150_82-20mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['150_82-40mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['165_82-20mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['165_82-40mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['180_82-20mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['180_82-40mm-oak'].geometry} material={materials['Oak-mat']} />
    //   <mesh geometry={nodes['120_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['120_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['140_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['140_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['150_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['150_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['165_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['165_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['180_82-20mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['180_82-40mm-Walnut'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['120_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} />
    //   <mesh geometry={nodes['140_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} />
    //   <mesh geometry={nodes['150_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} />
    //   <mesh geometry={nodes['165_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} />
    //   <mesh geometry={nodes['180_82-20mm-рустикальный_дуб'].geometry} material={materials['рустикальный дуб.001']} />
    //   <mesh geometry={nodes['120_82-20mmсерый_графит'].geometry} material={materials['серый графит']} />
    //   <mesh geometry={nodes['140_82-20mm-серый_графит'].geometry} material={materials['серый графит']} />
    //   <mesh geometry={nodes['150_82-20mm-серый_графит'].geometry} material={materials['серый графит']} />
    //   <mesh geometry={nodes['165_82-20mm-серый_графит'].geometry} material={materials['серый графит']} />
    //   <mesh geometry={nodes['180_82-20mm-серый_графит'].geometry} material={materials['серый графит']} />
    //   <mesh geometry={nodes['120_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
    //   <mesh geometry={nodes['140_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
    //   <mesh geometry={nodes['150_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
    //   <mesh geometry={nodes['165_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
    //   <mesh geometry={nodes['180_82-20mm-дуб_натуральный'].geometry} material={materials['дуб натуральный']} />
    //   <mesh geometry={nodes['120_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
    //   <mesh geometry={nodes['140_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
    //   <mesh geometry={nodes['150_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
    //   <mesh geometry={nodes['165_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
    //   <mesh geometry={nodes['180_82-20mm-янтарный_дуб'].geometry} material={materials['янтарный дуб']} />
    //   <mesh geometry={nodes['120_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
    //   <mesh geometry={nodes['140_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
    //   <mesh geometry={nodes['150_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
    //   <mesh geometry={nodes['165_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
    //   <mesh geometry={nodes['180_82-20mm-нобелла_силк'].geometry} material={materials['нобелла силк']} />
    //   <mesh geometry={nodes['120_82-20mm-ланселот'].geometry} material={materials.ланселот} />
    //   <mesh geometry={nodes['140_82-20mm-ланселот'].geometry} material={materials.ланселот} />
    //   <mesh geometry={nodes['150_82-20mm-ланселот'].geometry} material={materials.ланселот} />
    //   <mesh geometry={nodes['165_82-20mm-ланселот'].geometry} material={materials.ланселот} />
    //   <mesh geometry={nodes['180_82-20mm-ланселот'].geometry} material={materials.ланселот} />
    //   <mesh geometry={nodes['120_82-20mm-бетон'].geometry} material={materials['морской синий']} />
    //   <mesh geometry={nodes['140_82-20mm-бетон'].geometry} material={materials.бетон} />
    //   <mesh geometry={nodes['150_82-20mm-бетон'].geometry} material={materials.бетон} />
    //   <mesh geometry={nodes['165_82-20mm-бетон'].geometry} material={materials.бетон} />
    //   <mesh geometry={nodes['180_82-20mm-бетон'].geometry} material={materials.бетон} />
    //   <mesh geometry={nodes['120_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
    //   <mesh geometry={nodes['140_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
    //   <mesh geometry={nodes['150_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
    //   <mesh geometry={nodes['165_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
    //   <mesh geometry={nodes['180_82-20mm-морской_синий'].geometry} material={materials['морской синий']} />
    //   <mesh geometry={nodes['120_82-20mm-матвайт'].geometry} material={materials.матвайт} />
    //   <mesh geometry={nodes['140_82-20mm-матвайт'].geometry} material={materials.матвайт} />
    //   <mesh geometry={nodes['150_82-20mm-матвайт'].geometry} material={materials.матвайт} />
    //   <mesh geometry={nodes['165_82-20mm-матвайт'].geometry} material={materials.матвайт} />
    //   <mesh geometry={nodes['180_82-20mm-матвайт'].geometry} material={materials.матвайт} />
    //   <mesh geometry={nodes['120_82-20mm-лед'].geometry} material={materials.лед} />
    //   <mesh geometry={nodes['140_82-20mm-лед'].geometry} material={materials.лед} />
    //   <mesh geometry={nodes['150_82-20mm-лед'].geometry} material={materials.лед} />
    //   <mesh geometry={nodes['165_82-20mm-лед'].geometry} material={materials.лед} />
    //   <mesh geometry={nodes['180_82-20mm-лед'].geometry} material={materials.лед} />
    //   <mesh geometry={nodes['120_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
    //   <mesh geometry={nodes['140_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
    //   <mesh geometry={nodes['150_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
    //   <mesh geometry={nodes['165_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
    //   <mesh geometry={nodes['180_82-20mm-ильм_вермут'].geometry} material={materials['ильм вермут']} />
    //   <mesh geometry={nodes['120_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
    //   <mesh geometry={nodes['140_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
    //   <mesh geometry={nodes['150_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
    //   <mesh geometry={nodes['165_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
    //   <mesh geometry={nodes['180_82-20mm-дуб_готланд'].geometry} material={materials['дуб готланд']} />
    //   <mesh geometry={nodes['120_82-20mm-белый'].geometry} material={materials.белый} />
    //   <mesh geometry={nodes['140_82-20mm-белый'].geometry} material={materials.белый} />
    //   <mesh geometry={nodes['150_82-20mm-белый'].geometry} material={materials.белый} />
    //   <mesh geometry={nodes['165_82-20mm-белый'].geometry} material={materials.белый} />
    //   <mesh geometry={nodes['180_82-20mm-белый'].geometry} material={materials.белый} />
    //   <mesh geometry={nodes['120_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
    //   <mesh geometry={nodes['140_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
    //   <mesh geometry={nodes['150_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
    //   <mesh geometry={nodes['165_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
    //   <mesh geometry={nodes['180_82-20mm-венге_магия'].geometry} material={materials['венге магия']} />
    //   <mesh geometry={nodes['120_82-20mm-черный'].geometry} material={materials.черный} />
    //   <mesh geometry={nodes['140_82-20mm-черный'].geometry} material={materials.черный} />
    //   <mesh geometry={nodes['150_82-20mm-черный'].geometry} material={materials.черный} />
    //   <mesh geometry={nodes['165_82-20mm-черный'].geometry} material={materials.черный} />
    //   <mesh geometry={nodes['180_82-20mm-черный'].geometry} material={materials.черный} />
    //   <mesh geometry={nodes.Mesh133.geometry} material={materials['yashik-door-niz.jpg.001']} />
    //   <mesh geometry={nodes.Mesh133_1.geometry} material={materials['ящик-верх дверь.002']} />
    //   <mesh geometry={nodes.Mesh133_2.geometry} material={materials['Material #395.001']} />
    //   <mesh geometry={nodes.Mesh133_3.geometry} material={materials['Material #399.001']} />
    //   <mesh geometry={nodes.Mesh133_4.geometry} material={materials['Material #386.001']} />
    //   <mesh geometry={nodes.Mesh066.geometry} material={materials['yashik-door-niz.jpg']} />
    //   <mesh geometry={nodes.Mesh066_1.geometry} material={materials['Material #395']} />
    //   <mesh geometry={nodes.Mesh066_2.geometry} material={materials['Material #399']} />
    //   <mesh geometry={nodes.Mesh066_3.geometry} material={materials['Material #386']} />
    //   <mesh geometry={nodes.Mesh066_4.geometry} material={materials['ящик-верх дверь.001']} />
    //   <mesh geometry={nodes['Yashik_Ash-L'].geometry} material={materials['Ash-yash']} />
    //   <mesh geometry={nodes['Yashik_Ash-R'].geometry} material={materials['Ash-yash']} />
    //   <mesh geometry={nodes['Yashik_Орех-L'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes['Yashik_Орех-R'].geometry} material={materials['Walnut-mat']} />
    //   <mesh geometry={nodes.metal_bar_R.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Opora_R_bar_POLKA.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.rama_BAR_R.geometry} material={materials['Material-red']} />
    //   <mesh geometry={nodes.svet_bar_R.geometry} material={materials['Material-light']} />
    //   <mesh geometry={nodes.wood_bar_R.geometry} material={materials['Material #129']} />
    //   <mesh geometry={nodes.metal_bar_L.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.rama_BAR_L.geometry} material={materials['Material-red']} />
    //   <mesh geometry={nodes.svet_bar_L.geometry} material={materials['Material-light']} />
    //   <mesh geometry={nodes.wood_bar_L.geometry} material={materials['Material #129']} />
    //   <mesh geometry={nodes.Opora_L_bar_POLKA.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.rama_PC_box_L.geometry} material={materials['Material.001']} />
    //   <mesh geometry={nodes.wood_rama_PC_box_L.geometry} material={materials['Material.001']} />
    //   <mesh geometry={nodes.rama_PC_box_R.geometry} material={materials['Material.001']} />
    //   <mesh geometry={nodes.wood_rama_PC_box_R.geometry} material={materials['Material.001']} />
    //   <mesh geometry={nodes.Hook_L.geometry} material={materials['Material-plastik.001']} />
    //   <mesh geometry={nodes.Hook_R.geometry} material={materials['Material-plastik']} />
    //   <mesh geometry={nodes.stakan_L.geometry} material={materials['Material-plastik']} />
    //   <mesh geometry={nodes.stakan_R.geometry} material={materials['Material-plastik']} />
    //   <mesh geometry={nodes.Hook_small_L.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Hook_small_R.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.pult_L.geometry} material={materials['Material-plastik']} />
    //   <mesh geometry={nodes.cable_manager.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.base_podstavka_monitior.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.wood_podstavka_monitior.geometry} material={materials['Material #227']} />
    //   <mesh geometry={nodes.Nogi_bez_koles_narrow.geometry} material={materials['Material.001']} />
    //   <mesh geometry={nodes.RAMA_base_T.geometry} material={materials['Material.001']} />
    //   <mesh geometry={nodes.Opora_dlya_koles_narrow.geometry} material={materials['Material.001']} />
    //   <mesh geometry={nodes.RAMA_base_T_BAR.geometry} material={materials['Material.001']} />
    //   <mesh geometry={nodes['Zaglushka_black_L-20mm'].geometry} material={materials.Plastic_Simple_Blurry_Gray} />
    //   <mesh geometry={nodes['Zaglushka_black_L-40mm'].geometry} material={materials['Material-black-plastic']} />
    //   <mesh geometry={nodes['Zaglushka_black_R-20mm'].geometry} material={materials['Material-black-plastic']} />
    //   <mesh geometry={nodes['Zaglushka_black_R-40mm'].geometry} material={materials['Material-black-plastic']} />
    //   <mesh geometry={nodes['Zaglushka_silver_L-20mm'].geometry} material={materials['Material silver']} />
    //   <mesh geometry={nodes['Zaglushka_silver_L-40mm'].geometry} material={materials['Material silver']} />
    //   <mesh geometry={nodes['Zaglushka_silver_R-20mm'].geometry} material={materials['Material silver']} />
    //   <mesh geometry={nodes['Zaglushka_silver_R-40mm'].geometry} material={materials['Material silver']} />
    //   <mesh geometry={nodes['Zaglushka_white_L-20mm'].geometry} material={materials['Material-white-plastic']} />
    //   <mesh geometry={nodes['Zaglushka_white_L-40mm'].geometry} material={materials['Material-white-plastic']} />
    //   <mesh geometry={nodes['Zaglushka_white_R-20mm'].geometry} material={materials['Material-white-plastic']} />
    //   <mesh geometry={nodes['Zaglushka_white_R-40mm'].geometry} material={materials['Material-white-plastic']} />
    //   <mesh geometry={nodes['Block_rozetki__black_L-20mm'].geometry} material={materials['Material-black-plastic']} />
    //   <mesh geometry={nodes['Block_rozetki__black_L-40mm'].geometry} material={materials['Material-black-plastic']} />
    //   <mesh geometry={nodes['Block_rozetki__white_L-20mm'].geometry} material={materials['Material-white-plastic']} />
    //   <mesh geometry={nodes['Block_rozetki__white_L-40mm'].geometry} material={materials['Material-white-plastic']} />
    //   <mesh geometry={nodes['Block_rozetki_black_R-20mm'].geometry} material={materials['Material-black-plastic']} />
    //   <mesh geometry={nodes['Block_rozetki_black_R-40mm'].geometry} material={materials['Material-black-plastic']} />
    //   <mesh geometry={nodes['Block_rozetki_white_R-20mm'].geometry} material={materials['Material-white-plastic']} />
    //   <mesh geometry={nodes['Block_rozetki_white_R-40mm'].geometry} material={materials['Material-white-plastic']} />
    //   <mesh geometry={nodes['1-_monitor-base'].geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Mesh091.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Mesh091_1.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Monitor_centered.geometry} material={materials['Material #129']} />
    //   <mesh geometry={nodes['derg--2-monitora'].geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Mesh093.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Mesh093_1.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Mesh096.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Mesh096_1.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.Monitor_L_1.geometry} material={materials['Material #129']} />
    //   <mesh geometry={nodes.Monitor_R_1.geometry} material={materials['Material #129']} />
    //   <mesh geometry={nodes.italian_koleso_narrow00.geometry} material={materials['Material-red-rubber']} />
    //   <mesh geometry={nodes.italian_koleso_narrow01.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.italian_koleso_wide_base00.geometry} material={materials['Material-red-rubber']} />
    //   <mesh geometry={nodes.italian_koleso_wide_base01.geometry} material={materials['Material-metal']} />
    //   <mesh geometry={nodes.china_koleso_base_narrow.geometry} material={materials['Material-metal-light']} />
    //   <mesh geometry={nodes.china_koleso_brake_narrow.geometry} material={materials['Material-plastik']} />
    //   <mesh geometry={nodes.china_koleso_wheel_narrow.geometry} material={materials['Material-grey']} />
    //   <mesh geometry={nodes['china_koleso_base-wide'].geometry} material={materials['Material-metal-light']} />
    //   <mesh geometry={nodes['china_koleso_brake-wide'].geometry} material={materials['Material-plastik']} />
    //   <mesh geometry={nodes['china_koleso_wheel-wide'].geometry} material={materials['Material-grey']} />
    //   <mesh geometry={nodes['Yashik_янтарный_дуб-L'].geometry} material={materials['янтарный дуб']} />
    //   <mesh geometry={nodes['Yashik_серый_графит-L'].geometry} material={materials['серый графит']} />
    //   <mesh geometry={nodes['Yashik_рустикальный_дуб-L'].geometry} material={materials['рустикальный дуб']} />
    //   <mesh geometry={nodes['Yashik_нобелла_силк-L'].geometry} material={materials['нобелла силк']} />
    //   <mesh geometry={nodes.Yashik_бетон_L.geometry} material={materials.бетон} />
    //   <mesh geometry={nodes.Yashik_дуб_натуральный_L.geometry} material={materials['дуб натуральный']} />
    //   <mesh geometry={nodes.Yashik_ланселот_L.geometry} material={materials.ланселот} />
    //   <mesh geometry={nodes['Yashik_лед-L'].geometry} material={materials.лед} />
    //   <mesh geometry={nodes['Yashik_маттвайт-L'].geometry} material={materials.матвайт} />
    //   <mesh geometry={nodes['Yashik_морской_синий-L'].geometry} material={materials['морской синий']} />
    //   <mesh geometry={nodes.Yashik_бетон_R.geometry} material={materials.бетон} />
    //   <mesh geometry={nodes.Yashik_дуб_натуральный_R.geometry} material={materials['дуб натуральный']} />
    //   <mesh geometry={nodes.Yashik_ланселот_R.geometry} material={materials.ланселот} />
    //   <mesh geometry={nodes.Yashik_лед_R.geometry} material={materials.лед} />
    //   <mesh geometry={nodes['Yashik_маттвайт-R'].geometry} material={materials.матвайт} />
    //   <mesh geometry={nodes['Yashik_морской_синий-R'].geometry} material={materials['морской синий']} />
    //   <mesh geometry={nodes['Yashik_нобелла_силк-R'].geometry} material={materials['нобелла силк']} />
    //   <mesh geometry={nodes['Yashik_рустикальный_дуб-R'].geometry} material={materials['рустикальный дуб']} />
    //   <mesh geometry={nodes['Yashik_серый_графит-R'].geometry} material={materials['серый графит']} />
    //   <mesh geometry={nodes['Yashik_янтарный_дуб-R'].geometry} material={materials['янтарный дуб']} />
    //   <mesh geometry={nodes['Yashik_черный-L'].geometry} material={materials.черный} />
    //   <mesh geometry={nodes['Yashik_белый-L'].geometry} material={materials.белый} />
    //   <mesh geometry={nodes['Yashik_венге_магия-L'].geometry} material={materials['венге магия']} />
    //   <mesh geometry={nodes['Yashik_дуб_готланд-L'].geometry} material={materials['дуб готланд']} />
    //   <mesh geometry={nodes['Yashik_ильм_вермут-L'].geometry} material={materials['ильм вермут']} />
    //   <mesh geometry={nodes['Yashik_белый-R'].geometry} material={materials.белый} />
    //   <mesh geometry={nodes['Yashik_венге_магия-R'].geometry} material={materials['венге магия']} />
    //   <mesh geometry={nodes['Yashik_дуб_готланд-R'].geometry} material={materials['дуб готланд']} />
    //   <mesh geometry={nodes['Yashik_ильм_вермут-R'].geometry} material={materials['ильм вермут']} />
    //   <mesh geometry={nodes['Yashik_черный-R'].geometry} material={materials.черный} />
    //   <mesh geometry={nodes.italian_koleso_narrow_base.geometry} material={materials['Material-red-rubber.001']} />
    //   <mesh geometry={nodes.italian_koleso__narrow_base.geometry} material={materials['Material-metal.002']} />
    //   <mesh geometry={nodes['china_koleso_base-narrow'].geometry} material={materials['Material-metal-light.001']} />
    //   <mesh geometry={nodes['china_koleso_brake-narrow'].geometry} material={materials['Material-plastik.002']} />
    //   <mesh geometry={nodes['china_koleso_wheel-narrow'].geometry} material={materials['Material-grey.001']} />
    //   <mesh geometry={nodes['Opora_dlya_koles-wide-curve'].geometry} material={materials['Material.004']} />
    //   <mesh geometry={nodes['RAMA_base_wide-curve'].geometry} material={materials['Material.004']} />
    // </group>
  )
}

useGLTF.preload('/constructor-commpressed-new.glb')