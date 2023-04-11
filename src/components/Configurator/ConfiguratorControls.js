import React, { useContext } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getCart } from '../../cart/getCart'
import { addConfiguratorToCart } from '../../cart/addConfiguratorToCart'

import { LangCodeContext } from '../../context/LangCodeProvider'

import { checkInp } from '../../utils/checkInp'
import { incremementCount } from '../../utils/incremementCount'
import { decrementCount } from '../../utils/decrementCount'
import { setCookie } from '../../utils/setCookie'
import { showErrModal } from '../../utils/showErrModal'
import { showCartModal } from '../../utils/showCartModal'

import { isBrowser } from '../../utils/isBrowser'

const ConfiguratorControls = ({
  message,
  counter, 
  setCounter, 
  price,
  frameCount,
  frameHeight,
  colorFrame,
  isColorpickerVisible,
  wasColorPickerClicked,
  frameWheels,
  tableTopMaterial,
  tableTopBreed,
  tableTopMdfColor,
  tableTopDspColor,
  tableTopThickness,
  tableTopLength,
  tableTopDepth,
  tableTopTonning,
  holesKind,
  holesPosition,
  incline,
  systemBlock,
  monitor,
  cableManagement,
  charging,
  rosette,
  headphoneHook,
  coaster,
  barKind,
  barPosition,
  twoDrawersKind,
  twoDrawersPosition,
  plywoodBoxKind,
  plywoodBoxPosition,
  tonePlywoodBox,
  bagHook,
  bracket,
  id,
  isAddingToCart,
  setIsAddingToCart,
  isAddedToCart,
  setIsAddedToCart,
  addToCartBtn,
  addedCartToBtn,
  constFrame,
  confTableTop,
  confOpt
}) => {
  let langCode = useContext(LangCodeContext)
  
  const activeFrameCount = frameCount.filter(item => item.isActive)[0],
        activeFrameHeight = frameHeight.filter(item => item.isActive)[0],
        activeFrameWheels = frameWheels.filter(item => item.isActive)[0],
        activeTableTopBreed = tableTopBreed.filter(item => item.isActive)[0],
        activeMdfColor = tableTopMdfColor.filter(item => item.isActive)[0],
        activeDspColor = tableTopDspColor.filter(item => item.isActive)[0],
        activeTableTopThickness = tableTopThickness.filter(item => item.isActive)[0],
        activeTableTopMaterial = tableTopMaterial.filter(item => item.isActive)[0],
        activeHolesKind = holesKind.filter(item => item.isActive)[0],
        activeHolesPosition = holesPosition.filter(item => item.isActive)[0],
        activeSystemBlock = systemBlock.filter(item => item.isActive)[0],
        activeMonitor = monitor.filter(item => item.isActive)[0],
        activeCharging = charging.filter(item => item.isActive)[0],
        activeRosette = rosette.filter(item => item.isActive)[0],
        activeHeadphoneHook = headphoneHook.filter(item => item.isActive)[0],
        activeCoaster = coaster.filter(item => item.isActive)[0],
        activeBarKind = barKind.filter(item => item.isActive)[0],
        activeBarPosition = barPosition.filter(item => item.isActive)[0],
        activeTwoDrawersKind = twoDrawersKind.filter(item => item.isActive)[0],
        activeDrawersPosition = twoDrawersPosition.filter(item => item.isActive)[0],
        activePlywoodBoxKind = plywoodBoxKind.filter(item => item.isActive)[0],
        activePlywoodBoxPosition = plywoodBoxPosition.filter(item => item.isActive)[0],
        activeBagHook = bagHook.filter(item => item.isActive)[0],
        activeBracket = bracket.filter(item => item.isActive)[0],
        activeTableTopTone = tableTopTonning.filter(item => item.isActive)[0]

  let activeFrameHeightPrice = '',
      activeFrameWheelsPrice = '',
      activeTableTopTonePrice = '',
      activeHolesPrice = '',
      activeSystemBlockPrice = '',
      activeMonitorPrice = '',
      activeChargingPrice = '',
      activeRosettePrice = '',
      activeHeadphoneHookPrice = '',
      activeCoasterPrice = '',
      activeBarPrice = '',
      activeTwoDrawersPrice = '',
      activePlywoodBoxPrice = '',
      activeBagHookPrice = '',
      activeBracketPrice = '',
      activeTableTopMaterialPrice = ''

  if (activeTableTopTone.value === 'tone-oil') {
    activeTableTopTonePrice = confTableTop.confTableTopMaterialTone.confTableTopMaterialToneOilPrice || 0
  }

  if (activeTableTopTone.value === 'tone-lak') {
    activeTableTopTonePrice = confTableTop.confTableTopMaterialTone.confTableTopMaterialToneLakPrice || 0
  }

  if (activeTableTopTone.value === 'tone-lak-ton') {
    activeTableTopTonePrice = confTableTop.confTableTopMaterialTone.confTableTopMaterialToneLakTonPrice || 0
  }

  // Висота
  // Двохопорний
  if (activeFrameCount.value === 'frame-count-2' && activeFrameHeight.value === 'frame-height-65-105')
    activeFrameHeightPrice = constFrame.confFrameHeight.confFrameFrameOne.confFrameFrameListPriceOne

  if (activeFrameCount.value === 'frame-count-2' && activeFrameHeight.value === 'frame-height-70-115')
    activeFrameHeightPrice = constFrame.confFrameHeight.confFrameFrameTwo.confFrameFrameListPriceOne

  if (activeFrameCount.value === 'frame-count-2' && activeFrameHeight.value === 'frame-height-75-123')
    activeFrameHeightPrice = constFrame.confFrameHeight.confFrameFrameThree.confFrameFrameListPriceOne

  // Чотирьохопорний
  if (activeFrameCount.value === 'frame-count-4' && activeFrameHeight.value === 'frame-height-65-105')
    activeFrameHeightPrice = constFrame.confFrameHeight.confFrameFrameOne.confFrameFrameListPriceTwo

  if (activeFrameCount.value === 'frame-count-4' && activeFrameHeight.value === 'frame-height-70-115')
    activeFrameHeightPrice = constFrame.confFrameHeight.confFrameFrameTwo.confFrameFrameListPriceTwo

  if (activeFrameCount.value === 'frame-count-4' && activeFrameHeight.value === 'frame-height-75-123')
    activeFrameHeightPrice = constFrame.confFrameHeight.confFrameFrameThree.confFrameFrameListPriceTwo

  // Колір каркасу
  let colorFramePrice = (isColorpickerVisible && colorFrame.trim() !== '' || wasColorPickerClicked && colorFrame.trim() !== '') ? constFrame.confFrameColor.confFrameColorPrice : 0

  // Коліщата
  // Двохопорний
  if (activeFrameCount.value === 'frame-count-2' && activeFrameWheels.value === 'frame-wheels-china')
    activeFrameWheelsPrice = constFrame.confFrameWheels.confFrameWheelsOne.confFrameWheelsOnePriceOne

  if (activeFrameCount.value === 'frame-count-2' && activeFrameWheels.value === 'frame-wheels-italy')
    activeFrameWheelsPrice = constFrame.confFrameWheels.confFrameWheelsTwo.confFrameWheelsTwoPriceOne

  if (activeFrameCount.value === 'frame-count-2' && activeFrameWheels.value === 'frame-wheels-without')
    activeFrameWheelsPrice = 0

  // Двохопорний
  if (activeFrameCount.value === 'frame-count-4' && activeFrameWheels.value === 'frame-wheels-china')
  activeFrameWheelsPrice = constFrame.confFrameWheels.confFrameWheelsOne.confFrameWheelsOnePriceTwo

  if (activeFrameCount.value === 'frame-count-4' && activeFrameWheels.value === 'frame-wheels-italy')
    activeFrameWheelsPrice = constFrame.confFrameWheels.confFrameWheelsTwo.confFrameWheelsTwoPriceTwo

  if (activeFrameCount.value === 'frame-count-4' && activeFrameWheels.value === 'frame-wheels-without')
    activeFrameWheelsPrice = 0

  // Отвори під проводи
  if (activeHolesPosition.value === 'hole-without')
    activeHolesPrice = 0
    
  // Метал - хром
  if (activeHolesPosition.value === 'hole-center-2' && activeHolesKind.value === 'metal-chorome')
    activeHolesPrice = confOpt.confHolesKind.confHolesMetal2

  if (activeHolesPosition.value === 'hole-left-1' && activeHolesKind.value === 'metal-chorome')
    activeHolesPrice = confOpt.confHolesKind.confHolesMetal1

  if (activeHolesPosition.value === 'hole-right-1' && activeHolesKind.value === 'metal-chorome')
    activeHolesPrice = confOpt.confHolesKind.confHolesMetal1

  // Метал - чорний
  if (activeHolesPosition.value === 'hole-center-2' && activeHolesKind.value === 'metal-black')
    activeHolesPrice = confOpt.confHolesKind.confHolesMetal2

  if (activeHolesPosition.value === 'hole-left-1' && activeHolesKind.value === 'metal-black')
    activeHolesPrice = confOpt.confHolesKind.confHolesMetal1

  if (activeHolesPosition.value === 'hole-right-1' && activeHolesKind.value === 'metal-black')
    activeHolesPrice = confOpt.confHolesKind.confHolesMetal1

  // Метал - білий
  if (activeHolesPosition.value === 'hole-center-2' && activeHolesKind.value === 'metal-white')
    activeHolesPrice = confOpt.confHolesKind.confHolesMetal2

  if (activeHolesPosition.value === 'hole-left-1' && activeHolesKind.value === 'metal-white')
    activeHolesPrice = confOpt.confHolesKind.confHolesMetal1

  if (activeHolesPosition.value === 'hole-right-1' && activeHolesKind.value === 'metal-white')
    activeHolesPrice = confOpt.confHolesKind.confHolesMetal1

  // Пластик - білий
  if (activeHolesPosition.value === 'hole-center-2' && activeHolesKind.value === 'plastic-white')
    activeHolesPrice = confOpt.confHolesKind.confHolesPlactic2

  if (activeHolesPosition.value === 'hole-left-1' && activeHolesKind.value === 'plastic-white')
    activeHolesPrice = confOpt.confHolesKind.confHolesPlactic1

  if (activeHolesPosition.value === 'hole-right-1' && activeHolesKind.value === 'plastic-white')
    activeHolesPrice = confOpt.confHolesKind.confHolesPlactic1

  // Пластик - чорний
  if (activeHolesPosition.value === 'hole-center-2' && activeHolesKind.value === 'plastic-black')
    activeHolesPrice = confOpt.confHolesKind.confHolesPlactic2

  if (activeHolesPosition.value === 'hole-left-1' && activeHolesKind.value === 'plastic-black')
    activeHolesPrice = confOpt.confHolesKind.confHolesPlactic1

  if (activeHolesPosition.value === 'hole-right-1' && activeHolesKind.value === 'plastic-black')
    activeHolesPrice = confOpt.confHolesKind.confHolesPlactic1

  // Нахил
  let inclinePrice = incline ? confOpt.confInc.confIncPrice : 0

  // Полиця під ПК
  if (activeSystemBlock.value === 'system-block-without')
    activeSystemBlockPrice = 0
  else
    activeSystemBlockPrice = confOpt.confSystem.confSystemPrice

  // Полиця під монітор
  if (activeMonitor.value === 'monitor-without' || activeBracket.value !== 'bracket-without')
    activeMonitorPrice = 0

  if (activeMonitor.value !== 'monitor-without' && activeTableTopMaterial.value == 'dsp' && activeBracket.value === 'bracket-without')
    activeMonitorPrice = confOpt.confMonitor.confMonitorDsp

  if (activeMonitor.value !== 'monitor-without' && activeTableTopMaterial.value == 'mdf' && activeBracket.value === 'bracket-without')
    activeMonitorPrice = confOpt.confMonitor.confMonitorMdf

  if (activeMonitor.value !== 'monitor-without' && activeTableTopMaterial.value == 'wood' && activeBracket.value === 'bracket-without')
    activeMonitorPrice = confOpt.confMonitor.confMonitorWood

  // Кабель менеджмент
  let cableManagementPrice = cableManagement ? confOpt.confCable.confCablePrice : 0

  // Безпровідна зарядка
  if (activeCharging.value === 'charging-without')
    activeChargingPrice = 0
  else
    activeChargingPrice = confOpt.confCharging.confChargingPrice

  // Блок розеток
  if (activeRosette.value === 'rosette-without')
    activeRosettePrice = 0
  else
    activeRosettePrice = confOpt.confRosette.confRosettePrice

  // Крючок для навушників
  if (activeHeadphoneHook.value === 'headphone-without')
    activeHeadphoneHookPrice = 0
  else
    activeHeadphoneHookPrice = confOpt.confHeadphone.confHeadphonePrice

  // Підстаканник
  if (activeCoaster.value === 'coaster-without')
    activeCoasterPrice = 0
  else
  activeCoasterPrice = confOpt.confCoaster.confCoasterPrice


  // Барна стійка
  if (activeBarKind.value === 'bar-without')
    activeBarPrice = 0

  if (activeBarKind.value === 'bar-without-light')
    activeBarPrice = confOpt.confBar.confBarPriceWithoutlight

  if (activeBarKind.value === 'bar-with-light')
    activeBarPrice = confOpt.confBar.confBarPriceLight

  // Тумба на 2 ящики
  if (activeTwoDrawersKind.value === 'drawers-without')
    activeTwoDrawersPrice = 0
  
  if (activeTwoDrawersKind.value !== 'drawers-without' && activeTableTopMaterial.value == 'dsp')
    activeTwoDrawersPrice = confOpt.confTwodrawes.confTwodrawesDsp

  if (activeTwoDrawersKind.value !== 'drawers-without' && activeTableTopMaterial.value == 'mdf')
    activeTwoDrawersPrice = confOpt.confTwodrawes.confTwodrawesMdf

  if (activeTwoDrawersKind.value !== 'drawers-without' && activeTableTopMaterial.value === 'wood')
    activeTwoDrawersPrice = confOpt.confTwodrawes.confTwodrawesWood

  // Ящик з фанери
  if (activePlywoodBoxKind.value === 'plywoodbox-without')
    activePlywoodBoxPrice = 0

  if (activePlywoodBoxKind.value === 'a4')
    activePlywoodBoxPrice = confOpt.confPlywoodbox.confPlywoodboxA4
  
  if (activePlywoodBoxKind.value === 'a5')
    activePlywoodBoxPrice = confOpt.confPlywoodbox.confPlywoodboxA5

  // Тонування ящика з фанери
  let tonePlywoodBoxPrice = tonePlywoodBox && activePlywoodBoxKind.value !== 'plywoodbox-without' ? confOpt.confPlywoodboxTone.confPlywoodboxTonePrice : 0

  // Гачок для сумки
  if (activeBagHook.value === 'baghook-without' || activeFrameCount.value === 'frame-count-4')
    activeBagHookPrice = 0
  else
    activeBagHookPrice = confOpt.confBaghook.confBaghookPrice

  // Кронштейн для монітору
  if (activeBracket.value === 'bracket-without' || activeMonitor.value !== 'monitor-without')
    activeBracketPrice = 0
  
  if (activeBracket.value === 'mech-1-mon' && activeMonitor.value === 'monitor-without')
    activeBracketPrice = confOpt.confCronhs.confCronhsMech1

  if (activeBracket.value === 'mech-2-mon' && activeMonitor.value === 'monitor-without')
    activeBracketPrice = confOpt.confCronhs.confCronhsMech2

  if (activeBracket.value === 'elec-1-mon' && activeMonitor.value === 'monitor-without')
    activeBracketPrice = confOpt.confCronhs.confCronhsElec1

  if (activeBracket.value === 'elec-2-mon' && activeMonitor.value === 'monitor-without')
    activeBracketPrice = confOpt.confCronhs.confCronhsElec2


  // Матеріал
  if (activeTableTopMaterial.value === 'dsp') {
    if (tableTopLength <= 120)
      activeTableTopMaterialPrice = confTableTop.confTableTopDsp.confTableTopDsp120
    
    if (tableTopLength <= 140 && tableTopLength >= 121)
      activeTableTopMaterialPrice = confTableTop.confTableTopDsp.confTableTopDsp121140

    if (tableTopLength <= 150 && tableTopLength >= 141)
      activeTableTopMaterialPrice = confTableTop.confTableTopDsp.confTableTopDsp141150

    if (tableTopLength <= 165 && tableTopLength >= 151)
      activeTableTopMaterialPrice = confTableTop.confTableTopDsp.confTableTopDsp151165

    if (tableTopLength <= 180 && tableTopLength >= 166)
      activeTableTopMaterialPrice = confTableTop.confTableTopDsp.confTableTopDsp166180
  }

  if (activeTableTopMaterial.value === 'mdf') {
    let PlusPriceMdf = tableTopLength >= 160 ? confTableTop.confTableTopMdf.confTableTopMdf160 : 0
    
    activeTableTopMaterialPrice = Math.round(((tableTopDepth * tableTopLength * 4200) / 10000)) + PlusPriceMdf
  }

  if (activeTableTopMaterial.value === 'wood') {
    if (activeTableTopBreed.value === 'oak') {
      if (tableTopLength <= 120 && activeTableTopThickness.value === '20mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopOak.confTableTopOak12020

      if (tableTopLength <= 120 && activeTableTopThickness.value === '40mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopOak.confTableTopOak12040

      if (tableTopLength >= 121 && tableTopLength <= 150 && activeTableTopThickness.value === '20mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopOak.confTableTopOak12115020

      if (tableTopLength >= 121 && tableTopLength <= 150 && activeTableTopThickness.value === '40mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopOak.confTableTopOak12115040

      if (tableTopLength >= 151 && tableTopLength <= 180 && activeTableTopThickness.value === '20mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopOak.confTableTopOak15118020

      if (tableTopLength >= 151 && tableTopLength <= 180 && activeTableTopThickness.value === '40mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopOak.confTableTopOak15118040
    }

    if (activeTableTopBreed.value === 'ash') {
      if (tableTopLength <= 120 && activeTableTopThickness.value === '20mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopAsh.confTableTopAsh12020

      if (tableTopLength <= 120 && activeTableTopThickness.value === '40mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopAsh.confTableTopAsh12040

      if (tableTopLength >= 121 && tableTopLength <= 144 && activeTableTopThickness.value === '20mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopAsh.confTableTopAsh12114420

      if (tableTopLength >= 121 && tableTopLength <= 144 && activeTableTopThickness.value === '40mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopAsh.confTableTopAsh12114440

      if (tableTopLength >= 145 && tableTopLength <= 180 && activeTableTopThickness.value === '20mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopAsh.confTableTopAsh14518020

      if (tableTopLength >= 145 && tableTopLength <= 180 && activeTableTopThickness.value === '40mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopAsh.confTableTopAsh14518040
    }

    if (activeTableTopBreed.value === 'nut') {
      if (tableTopLength <= 120 && activeTableTopThickness.value === '20mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopNut.confTableTopNut12020

      if (tableTopLength <= 120 && activeTableTopThickness.value === '40mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopNut.confTableTopNut12040

      if (tableTopLength >= 121 && tableTopLength <= 150 && activeTableTopThickness.value === '20mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopNut.confTableTopNut12115020

      if (tableTopLength >= 121 && tableTopLength <= 150 && activeTableTopThickness.value === '40mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopNut.confTableTopNut12115040

      if (tableTopLength >= 151 && tableTopLength <= 180 && activeTableTopThickness.value === '20mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopNut.confTableTopNut15118020

      if (tableTopLength >= 151 && tableTopLength <= 180 && activeTableTopThickness.value === '40mm')
        activeTableTopMaterialPrice = confTableTop.confTableTopBreed.confTableTopNut.confTableTopNut15118040
    }
  }

  // price + 
  // Загальна ціна
  let totalPrice = 
    activeFrameHeightPrice + colorFramePrice + 
    activeFrameWheelsPrice + activeHolesPrice + inclinePrice + 
    activeSystemBlockPrice + activeMonitorPrice + cableManagementPrice +
    activeChargingPrice + activeRosettePrice + activeHeadphoneHookPrice +
    activeCoasterPrice + activeBarPrice + activeTwoDrawersPrice +
    activePlywoodBoxPrice + tonePlywoodBoxPrice + activeBagHookPrice + 
    activeBracketPrice + activeTableTopMaterialPrice + activeTableTopTonePrice

  const addToCartHandler = () => {
    const frame = {
      count: activeFrameCount.name, 
      height: activeFrameHeight.name, 
      color: colorFrame, 
      wheels: activeFrameWheels.name,
    }

    const tabletop = activeTableTopMaterial.value === 'mdf' 
      ? {
        material: activeTableTopMaterial.name, 
        color: activeMdfColor.name, 
        thickness: activeTableTopThickness.name, 
        length: tableTopLength.toString(),
        depth: tableTopDepth.toString(),
      } 
      : activeTableTopMaterial.value === 'dsp' ? {
        material: activeTableTopMaterial.name, 
        color: activeDspColor.name, 
        thickness: activeTableTopThickness.name, 
        length: tableTopLength.toString(),
        depth: tableTopDepth.toString(),
      }
      : {
        material: activeTableTopMaterial.name, 
        wood: activeTableTopBreed.name, 
        thickness: activeTableTopThickness.name, 
        length: tableTopLength.toString(), 
        depth: tableTopDepth.toString(),
        toning: activeTableTopTone.name,
      }

    const options = {
      holes_for_wires: activeHolesPosition.name,
      tabletop_slope: incline ? confOpt.confInc.confInc1 : confOpt.confInc.confInc2,
      system_unit_shelf: activeSystemBlock.name,
      monitor_shelf: activeMonitor.name,
      cable_management: cableManagement ? confOpt.confCable.confCable1 : confOpt.confCable.confCable2,
      wireless_charging: activeCharging.name,
      socket_block: activeRosette.name,
      headphone_hook: activeHeadphoneHook.name,
      coaster: activeCoaster.name,
      bar_counter: {
        value: activeBarKind.name,
      },
      drawers_cabinet: {
        value: activeTwoDrawersKind.name,
      },
      playwood_box: {
        value: activePlywoodBoxKind.name,
      },
      bag_hook: activeBagHook.name,
      monitor_bracket: activeBracket.name,
    }

    if (activeHolesPosition.value !== 'hole-without') options.plug_type = activeHolesKind.name

    if (activeBarKind.value !== 'bar-without') options.bar_counter.placement = activeBarPosition.name

    if (activeTwoDrawersKind.value !== 'drawers-without') options.drawers_cabinet.placement = activeDrawersPosition.name

    if (activePlywoodBoxKind.value !== 'plywoodbox-without') {
      options.playwood_box.placement = activePlywoodBoxPosition.name
      options.playwood_box.tinting = tonePlywoodBox ? confOpt.confPlywoodboxTone.confPlywoodboxTone1 : confOpt.confPlywoodboxTone.confPlywoodboxTone2
    }

    NProgress.start()
    setIsAddingToCart(true)
    addConfiguratorToCart(frame, tabletop, options, totalPrice, counter, message, langCode) 
      .then(() => {
        getCart(langCode)
          .then(({ data }) => {
            setCookie('cart_count', data.total_items, {secure: true, 'max-age': 172800})
            setIsAddingToCart(false)
            NProgress.done()
            showCartModal()
            setIsAddedToCart(data.items.some(item => item.product_id === id))
            isBrowser() && window.fbq('track', 'AddToCart')
          })
      })
      .catch(() => {
        setIsAddingToCart(false)
        NProgress.done()
        showErrModal()
      })
  }
  
  return (
    <div className="configurator-controls">
      <div className="configurator__price">{totalPrice} uah</div>
      <div className="configurator-controls__inner">
        <div className="configurator__counter">
          <button 
            className="configurator__counter-btn configurator__counter-btn--minus"
            onClick={e => decrementCount(e, counter, setCounter)}
          >
            -
          </button>
          <input 
            className="configurator__counter-inp" 
            autoComplete="off" 
            type="text"
            value={counter}
            onChange={e => checkInp(e, setCounter, 1, 99999)}
          />
          <button 
            className="configurator__counter-btn configurator__counter-btn--plus"
            onClick={e => incremementCount(e, counter, setCounter)}
          >
            +
          </button>
        </div>
        <div className="configurator__btn-wrapper">
          <button 
            className={`configurator__btn form-btn ${isAddingToCart ? 'disabled' : ''}`}
            disabled={isAddingToCart}
            onClick={addToCartHandler}
          >
            <div className={`configurator__btn-inner ${isAddedToCart ? 'fade' : ''}`}>
              <span>{addToCartBtn}</span>
              <span>{addToCartBtn}</span>
            </div>
            <div className={`configurator__btn-inner ${!isAddedToCart ? 'fade' : ''}`}>
              <span>{addedCartToBtn}</span>
              <span>{addedCartToBtn}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfiguratorControls