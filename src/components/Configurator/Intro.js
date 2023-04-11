import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import ConfiguratorModel from './ConfiguratorModel'
import ConfiguratorFilter from './ConfiguratorFilter'

import './Intro.scss'

import { disableOverflow } from '../../utils/disableOveflow'
import { detectLighthouse } from '../../utils/detectLighthouse'

const ConfigiratorIntro = ({ 
  id,
  name,
  productPrice,
  isAddingToCart, 
  setIsAddingToCart, 
  isAddedToCart, 
  setIsAddedToCart,
  addToCartBtn,
  addedCartToBtn,
  constFrame,
  confTableTop,
  confOpt,
  confField
}) => {
  const intro = useRef(null)

  const BASE_PRICE = parseInt(productPrice)

  const [ counter, setCounter ] = useState(1)
  const [ price, setPrice ] = useState(BASE_PRICE)
  const [ message, setMessage ] = useState('')

  // Frame
  const [ frameCount, setFrameCount ] = useState([
    {
      id: 1,
      name: constFrame.confFrameCount.confFrameCountOne.confFrameCountListTitle,
      value: 'frame-count-2',
      isActive: true,
    },
    // {
    //   id: 2,
    //   name: constFrame.confFrameCount.confFrameCountTwo.confFrameCountListTitle,
    //   value: 'frame-count-4',
    //   isActive: false,
    // }
  ])

  const [ frameHeight, setFrameHeight ] = useState([
    {
      id: 1,
      name: constFrame.confFrameHeight.confFrameFrameOne.confFrameFrameListTitle,
      value: 'frame-height-65-105',
      isActive: false,
    },
    {
      id: 2,
      name: constFrame.confFrameHeight.confFrameFrameTwo.confFrameFrameListTitle,
      value: 'frame-height-70-115',
      isActive: false,
    },
    {
      id: 3,
      name: constFrame.confFrameHeight.confFrameFrameThree.confFrameFrameListTitle,
      value: 'frame-height-75-123',
      isActive: true,
    }
  ])

  const [ isColorpickerVisible, setIsColorpickerVisible ] = useState(false)
  const [ wasColorPickerClicked, setWasColorPickerClicked ] = useState(false)
  const [ colorFrame, setColorFrame ] = useState('#000000')
  const [ colorsFrame, setColorsFrame ] = useState([
    {
      id: 1,
      borderColor: '#000000',
      backgroundColor: '#000000',
      isActive: true,
    },
    {
      id: 2,
      borderColor: '#848484',
      backgroundColor: '#848484',
      isActive: false,
    },
    {
      id: 3,
      borderColor: '#E7E7E7',
      backgroundColor: '#ffffff',
      isActive: false,
    }
  ])
  const [ frameWheels, setFrameWheels ] = useState([
    {
      id: 1,
      name: constFrame.confFrameWheels.confFrameWheelsOne.confFrameWheelsOneTitle,
      value: 'frame-wheels-china',
      isActive: false,
    },
    {
      id: 2,
      name: constFrame.confFrameWheels.confFrameWheelsTwo.confFrameWheelsTwoTitle,
      value: 'frame-wheels-italy',
      isActive: false,
    },
    {
      id: 3,
      name: constFrame.confFrameWheels.confFrameWheelsThree.confFrameWheelsThreeTitle,
      value: 'frame-wheels-without',
      isActive: true,
    }
  ])

  const changeFrameCount = id => {
    setFrameCount(frameCount.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeFrameHeight = id => {
    setFrameHeight(frameHeight.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeFrameWheels = id => {
    setFrameWheels(frameWheels.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  // Table Top
  const [ tableTopMaterial, setTableTopMaterial ] = useState([
    {
      id: 1,
      name: confTableTop.confTableTopMaterial.confTableTopOne.confTableListTitle,
      value: 'dsp',
      isActive: false
    },
    {
      id: 2,
      name: confTableTop.confTableTopMaterial.confTableTopTwo.confTableListTitle,
      value: 'mdf',
      isActive: false
    },
    {
      id: 3,
      name: confTableTop.confTableTopMaterial.confTableTopThree.confTableListTitle,
      value: 'wood',
      isActive: true
    },
  ])
  const [ tableTopBreed, setTableTopBreed ] = useState([
    {
      id: 1,
      name: confTableTop.confTableTopBreed.confTableTopOak.confTableTopOakTitle,
      value: 'oak',
      material: 'wood',
      isActive: true
    },
    {
      id: 2,
      name: confTableTop.confTableTopBreed.confTableTopAsh.confTableTopAshTitle,
      value: 'ash',
      material: 'wood',
      isActive: false
    },
    {
      id: 3,
      name: confTableTop.confTableTopBreed.confTableTopNut.confTableTopNutTitle,
      value: 'nut',
      material: 'wood',
      isActive: false
    },
  ])
  const [ tableTopDspColor, setTableTopDspColor ] = useState([
    {
      id: 1,
      name: confTableTop.confTableTopDsp.confTableTopDsp1,
      value: 'bily-premium',
      material: 'dsp',
      isActive: true
    },
    {
      id: 2,
      name: confTableTop.confTableTopDsp.confTableTopDsp4,
      value: 'dub-gotland',
      material: 'dsp',
      isActive: false
    },
    {
      id: 3,
      name: confTableTop.confTableTopDsp.confTableTopDsp2,
      value: 'ilm-velmut',
      material: 'dsp',
      isActive: false
    },
    {
      id: 4,
      name: confTableTop.confTableTopDsp.confTableTopDsp5,
      value: 'venge-magia',
      material: 'dsp',
      isActive: false
    },
    {
      id: 5,
      name: confTableTop.confTableTopDsp.confTableTopDsp3,
      value: 'chorny',
      material: 'dsp',
      isActive: false
    },
  ])
  const [ tableTopMdfColor, setTableTopMdfColor ] = useState([
    {
      id: 1,
      name: confTableTop.confTableTopMdf.confTableTopMdf1,
      value: 'bily-matovy',
      material: 'mdf',
      isActive: true
    },
    {
      id: 2,
      name: confTableTop.confTableTopMdf.confTableTopMdf6,
      value: 'beton-svitlo-siry',
      material: 'mdf',
      isActive: false
    },
    {
      id: 3,
      name: confTableTop.confTableTopMdf.confTableTopMdf2,
      value: 'lid',
      material: 'mdf',
      isActive: false
    },
    {
      id: 4,
      name: confTableTop.confTableTopMdf.confTableTopMdf7,
      value: 'grafit-struktura',
      material: 'mdf',
      isActive: false
    },
    {
      id: 5,
      name: confTableTop.confTableTopMdf.confTableTopMdf3,
      value: 'nobela-silk',
      material: 'mdf',
      isActive: false
    },
    {
      id: 6,
      name: confTableTop.confTableTopMdf.confTableTopMdf8,
      value: 'morsky-siniy',
      material: 'mdf',
      isActive: false
    },
    {
      id: 7,
      name: confTableTop.confTableTopMdf.confTableTopMdf4,
      value: 'dub-naturalny',
      material: 'mdf',
      isActive: false
    },
    {
      id: 8,
      name: confTableTop.confTableTopMdf.confTableTopMdf9,
      value: 'dub-rustikalny',
      material: 'mdf',
      isActive: false
    },
    {
      id: 9,
      name: confTableTop.confTableTopMdf.confTableTopMdf5,
      value: 'lancelot',
      material: 'mdf',
      isActive: false
    },
    {
      id: 10,
      name: confTableTop.confTableTopMdf.confTableTopMdf10,
      value: 'dub-yantarny',
      material: 'mdf',
      isActive: false
    },
  ])
  const [ tableTopThickness, setTableTopThickness ] = useState([
    {
      id: 1,
      name: confTableTop.confTableTopMaterialThinkness.confTableTopMaterialThinknessOne,
      value: '20mm',
      isActive: true
    },
    {
      id: 2,
      name: confTableTop.confTableTopMaterialThinkness.confTableTopMaterialThinknessTwo,
      value: '40mm',
      isActive: false
    },
  ])
  const [ tableTopDepth, tableTopSetDepth ] = useState('')
  const [ tableTopLength, tableTopSetLength ] = useState('')

  const [ tableTopDepthStart, tableTopSetDepthStart ] = useState(82)
  const [ tableTopLengthStart, tableTopSetLengthStart ] = useState(150)
  const [ tableTopTonning, setTableTopTonning ] = useState([
    {
      id: 1,
      name: confTableTop.confTableTopMaterialTone.confTableTopMaterialToneOne,
      value: 'tone-without',
      isActive: true
    },
    {
      id: 2,
      name: confTableTop.confTableTopMaterialTone.confTableTopMaterialToneTwo,
      value: 'tone-oil',
      isActive: false
    },
    {
      id: 3,
      name: confTableTop.confTableTopMaterialTone.confTableTopMaterialToneThree,
      value: 'tone-lak',
      isActive: false
    },
    {
      id: 4,
      name: confTableTop.confTableTopMaterialTone.confTableTopMaterialToneFour,
      value: 'tone-lak-ton',
      isActive: false
    }
  ])

  const changeTableTopMaterial = id => {
    setTableTopMaterial(tableTopMaterial.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeTableTopBreed = id => {
    setTableTopBreed(tableTopBreed.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeTableTopColorDsp = id => {
    setTableTopDspColor(tableTopDspColor.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeTableTopColorMdf = id => {
    setTableTopMdfColor(tableTopMdfColor.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeTableTopThickness = id => {
    setTableTopThickness(tableTopThickness.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeTableTopTone = id => {
    setTableTopTonning(tableTopTonning.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }
  
  // Options
  const [ holesPosition, setHolesPosition ] = useState([
    {
      id: 1,
      name: confOpt.confHolesPos.confHolesPos1,
      value: 'hole-center-2',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confHolesPos.confHolesPos2,
      value: 'hole-left-1',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confHolesPos.confHolesPos3,
      value: 'hole-right-1',
      isActive: false
    },
    {
      id: 4,
      name: confOpt.confHolesPos.confHolesPos4,
      value: 'hole-without',
      isActive: true
    },
  ])
  const [ holesKind, setHolesKind ] = useState([
    {
      id: 1,
      name: confOpt.confHolesKind.confHolesKind1,
      value: 'metal-chorome',
      isActive: true
    },
    {
      id: 2,
      name: confOpt.confHolesKind.confHolesKind2,
      value: 'metal-white',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confHolesKind.confHolesKind3,
      value: 'metal-black',
      isActive: false
    },
    {
      id: 4,
      name: confOpt.confHolesKind.confHolesKind4,
      value: 'plastic-white',
      isActive: false
    },
    {
      id: 5,
      name: confOpt.confHolesKind.confHolesKind5,
      value: 'plastic-black',
      isActive: false
    },
  ])
  const [ incline, setIncline ] = useState(false)
  const [ systemBlock, setSystemBlock ] = useState([
    {
      id: 1,
      name: confOpt.confSystem.confSystem1,
      value: 'system-block-left',
      isActive: false,
    },
    {
      id: 2,
      name: confOpt.confSystem.confSystem2,
      value: 'system-block-right',
      isActive: false,
    },
    {
      id: 3,
      name: confOpt.confSystem.confSystem3,
      value: 'system-block-without',
      isActive: true,
      price: 0,
    },
  ])
  const [ monitor, setMonitor ] = useState([
    {
      id: 1,
      name: confOpt.confMonitor.confMonitor1,
      value: 'dsp',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confMonitor.confMonitor2,
      value: 'mdf',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confMonitor.confMonitor3,
      value: 'wood',
      isActive: false
    },
    {
      id: 4,
      name: confOpt.confMonitor.confMonitor4,
      value: 'monitor-without',
      isActive: true
    },
  ])
  const [ cableManagement, setCableManagement ] = useState(false)
  
  const [ charging, setCharging ] = useState([
    {
      id: 1,
      name: confOpt.confCharging.confCharging1,
      value: 'charging-left-top',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confCharging.confCharging2,
      value: 'charging-left-center',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confCharging.confCharging3,
      value: 'charging-left-bottom',
      isActive: false
    },
    {
      id: 4,
      name: confOpt.confCharging.confCharging4,
      value: 'charging-right-top',
      isActive: false
    },
    {
      id: 5,
      name: confOpt.confCharging.confCharging5,
      value: 'charging-right-center',
      isActive: false
    },
    {
      id: 7,
      name: confOpt.confCharging.confCharging6,
      value: 'charging-right-bottom',
      isActive: false
    },
    {
      id: 8,
      name: confOpt.confCharging.confCharging7,
      value: 'charging-without',
      isActive: true
    },
  ])
  const [ rosette, setRosette ] = useState([
    {
      id: 1,
      name: confOpt.confRosette.confRosette1,
      value: 'rosette-left',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confRosette.confRosette2,
      value: 'rosette-right',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confRosette.confRosette3,
      value: 'rosette-without',
      isActive: true
    },
  ])
  const [ headphoneHook, setHeadphoneHook ] = useState([
    {
      id: 1,
      name: confOpt.confHeadphone.confHeadphone1,
      value: 'headphone-left',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confHeadphone.confHeadphone2,
      value: 'headphone-right',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confHeadphone.confHeadphone3,
      value: 'headphone-without',
      isActive: true
    },
  ])
  const [ coaster, setCoaster ] = useState([
    {
      id: 1,
      name: confOpt.confCoaster.confCoaster1,
      value: 'coaster-left',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confCoaster.confCoaster2,
      value: 'coaster-right',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confCoaster.confCoaster3,
      value: 'coaster-without',
      isActive: true
    },
  ])
  const [ barKind, setBarKind ] = useState([
    {
      id: 1,
      name: confOpt.confBar.confBar1,
      value: 'bar-with-light',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confBar.confBar2,
      value: 'bar-without-light',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confBar.confBar3,
      value: 'bar-without',
      isActive: true
    },
  ])
  const [ barPosition, setBarPosition ] = useState([
    {
      id: 1,
      name: confOpt.confBarPos.confBarPos1,
      value: 'bar-left',
      isActive: true,
    },
    {
      id: 2,
      name: confOpt.confBarPos.confBarPos2,
      value: 'bar-right',
      isActive: false,
    },
  ])
  const [ twoDrawersKind, setTwoDrawersKind ] = useState([
    {
      id: 1,
      name: confOpt.confTwodrawes.confTwodrawes1,
      value: 'dsp',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confTwodrawes.confTwodrawes2,
      value: 'mdf',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confTwodrawes.confTwodrawes3,
      value: 'wood',
      isActive: false
    },
    {
      id: 4,
      name: confOpt.confTwodrawes.confTwodrawes4,
      value: 'drawers-without',
      isActive: true
    },
  ])
  const [ twoDrawersPosition, setTwoDrawersPosition ] = useState([
    {
      id: 1,
      name: confOpt.confTwodrawesPos.confTwodrawesPos1,
      value: 'drawers-left',
      isActive: true,
    },
    {
      id: 2,
      name: confOpt.confTwodrawesPos.confTwodrawesPos2,
      value: 'drawers-right',
      isActive: false,
    },
  ])
  const [ plywoodBoxKind, setPlywoodBoxKind ] = useState([
    {
      id: 1,
      name: confOpt.confPlywoodbox.confPlywoodbox1,
      value: 'a4',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confPlywoodbox.confPlywoodbox2,
      value: 'a5',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confPlywoodbox.confPlywoodbox3,
      value: 'plywoodbox-without',
      isActive: true
    },
  ])
  const [ plywoodBoxPosition, setPlywoodBoxPosition ] = useState([
    {
      id: 1,
      name: confOpt.confPlywoodboxPos.confPlywoodboxPos1,
      value: 'plywood-left',
      isActive: true,
    },
    {
      id: 2,
      name: confOpt.confPlywoodboxPos.confPlywoodboxPos2,
      value: 'plywood-right',
      isActive: false,
    },
  ])
  const [ tonePlywoodBox, setTonePlywoodBox ] = useState(false)
  const [ bagHook, setBagHook ] = useState([
    {
      id: 1,
      name: confOpt.confBaghook.confBaghook1,
      value: 'baghook-left',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confBaghook.confBaghook2,
      value: 'baghook-right',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confBaghook.confBaghook3,
      value: 'baghook-without',
      isActive: true
    },
  ])
  const [ bracket, setBracket ] = useState([
    {
      id: 1,
      name: confOpt.confCronhs.confCronhs1,
      value: 'mech-1-mon',
      isActive: false
    },
    {
      id: 2,
      name: confOpt.confCronhs.confCronhs2,
      value: 'elec-1-mon',
      isActive: false
    },
    {
      id: 3,
      name: confOpt.confCronhs.confCronhs3,
      value: 'mech-2-mon',
      isActive: false
    },
    {
      id: 4,
      name: confOpt.confCronhs.confCronhs4,
      value: 'elec-2-mon',
      isActive: false
    },
    {
      id: 5,
      name: confOpt.confCronhs.confCronhs5,
      value: 'bracket-without',
      isActive: true
    },
  ])

  const changeHolesPosition = id => {
    setHolesPosition(holesPosition.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }
  const changeHolesKind = id => {
    setHolesKind(holesKind.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeSystemBlock = id => {
    setSystemBlock(systemBlock.map(item => ({
      ...item,
      isActive: item.id === id
    })))

    setSystemBlock((state) => {
      const activeSystemBlock = state.filter(item => item.isActive)[0].value,
            activeBarKind = barKind.filter(item => item.isActive)[0].value,
            activeCharging = charging.filter(item => item.isActive)[0].value

      switch (activeSystemBlock) {
        case 'system-block-left': {
          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-right',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-right',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-right',
          })))

          if (activeBarKind !== 'bar-without') {
            setCharging(charging.map(item => ({
              ...item,
              isActive: activeCharging === 'charging-without' ? item.isActive : item.value === activeCharging.replace('right', 'left')
            })))
          }

          break
        }
        case 'system-block-right': {
          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-left',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-left',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-left',
          })))

          if (activeBarKind !== 'bar-without') {
            setCharging(charging.map(item => ({
              ...item,
              isActive: activeCharging === 'charging-without' ? item.isActive : item.value === activeCharging.replace('left', 'right')
            })))
          }
          
          break
        }
        default: {
          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.isActive,
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.isActive,
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.isActive,
          })))

          break
        }
      }

      return state
    })
  }

  const changeMonitor = id => {
    setMonitor(monitor.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeCoaster = id => {
    setCoaster(coaster.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }
  const changeHeadphodeHook = id => {
    setHeadphoneHook(headphoneHook.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }
  const changeBageHook = id => {
    setBagHook(bagHook.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeCharging = id => {
    setCharging(charging.map(item => ({
      ...item,
      isActive: item.id === id
    })))

    setCharging((state) => {
      const activeCharging = state.filter(item => item.isActive)[0].value,
            activeBarKind = barKind.filter(item => item.isActive)[0].value,
            activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value

      switch (activeCharging) {
        case 'charging-left-top': {
          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-right'
          })))

          if (activeBarKind !== 'bar-without') {
            setSystemBlock(systemBlock.map(item => ({
              ...item,
              isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-left',
            })))

            setTwoDrawersPosition(twoDrawersPosition.map(item => ({
              ...item,
              isActive: item.value === 'drawers-left',
            })))
          }

          break
        }
        case 'charging-left-center': {
          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-right'
          })))

          if (activeBarKind !== 'bar-without') {
            setSystemBlock(systemBlock.map(item => ({
              ...item,
              isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-left',
            })))

            setTwoDrawersPosition(twoDrawersPosition.map(item => ({
              ...item,
              isActive: item.value === 'drawers-left',
            })))
          }

          break
        }
        case 'charging-left-bottom': {
          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-right'
          })))

          if (activeBarKind !== 'bar-without') {
            setSystemBlock(systemBlock.map(item => ({
              ...item,
              isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-left',
            })))

            setTwoDrawersPosition(twoDrawersPosition.map(item => ({
              ...item,
              isActive: item.value === 'drawers-left',
            })))
          }

          break
        }
        case 'charging-right-top': {
          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-left'
          })))

          if (activeBarKind !== 'bar-without') {
            setSystemBlock(systemBlock.map(item => ({
              ...item,
              isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-right',
            })))

            setTwoDrawersPosition(twoDrawersPosition.map(item => ({
              ...item,
              isActive: item.value === 'drawers-right',
            })))
          }

          break
        }
        case 'charging-right-center': {
          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-left'
          })))

          if (activeBarKind !== 'bar-without') {
            setSystemBlock(systemBlock.map(item => ({
              ...item,
              isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-right',
            })))

            setTwoDrawersPosition(twoDrawersPosition.map(item => ({
              ...item,
              isActive: item.value === 'drawers-right',
            })))
          }

          break
        }
        case 'charging-right-bottom': {
          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-left'
          })))

          if (activeBarKind !== 'bar-without') {
            setSystemBlock(systemBlock.map(item => ({
              ...item,
              isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-right',
            })))

            setTwoDrawersPosition(twoDrawersPosition.map(item => ({
              ...item,
              isActive: item.value === 'drawers-right',
            })))
          }

          break
        }
      }

      return state
    })
  }

  const changeRosette = id => {
    setRosette(rosette.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  const changeBarKind = id => {
    setBarKind(barKind.map(item => ({
      ...item,
      isActive: item.id === id
    })))

    setBarKind((state) => {
      const activeBarKind = state.filter(item => item.isActive)[0].value,
            activeBarPostition = barPosition.filter(item => item.isActive)[0].value,
            activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value

      if (activeBarKind === 'bar-without') {
        setSystemBlock(systemBlock.map(item => ({
          ...item,
          isActive: item.isActive,
        })))

        setTwoDrawersPosition(twoDrawersPosition.map(item => ({
          ...item,
          isActive: item.isActive,
        })))

        setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
          ...item,
          isActive: item.isActive,
        })))
      }

      switch (activeBarPostition) {
        case 'bar-left': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-right',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-right',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-right',
          })))

          break
        }
        case 'bar-right': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-left',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-left',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-left',
          })))
          
          break
        }
      }

      return state
    })
  }
  const changeBarPosition = id => {
    setBarPosition(barPosition.map(item => ({
      ...item,
      isActive: item.id === id
    })))


    setBarPosition((state) => {
      const activeBarPostition = state.filter(item => item.isActive)[0].value,
            activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value,
            activeCharging = charging.filter(item => item.isActive)[0].value

      switch (activeBarPostition) {
        case 'bar-left': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-right',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-right',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-right',
          })))

          setCharging(charging.map(item => ({
            ...item,
            isActive: activeCharging === 'charging-without' ? item.isActive : item.value === activeCharging.replace('left', 'right')
          })))

          break
        }
        case 'bar-right': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-left',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-left',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-left',
          })))

          setCharging(charging.map(item => ({
            ...item,
            isActive: activeCharging === 'charging-without' ? item.isActive : item.value === activeCharging.replace('right', 'left')
          })))

          break
        }
      }

      return state
    })
  }

  const changeTwoDrawersKind = id => {
    setTwoDrawersKind(twoDrawersKind.map(item => ({
      ...item,
      isActive: item.id === id
    })))


    setTwoDrawersKind((state) => {
      const activeTwoDrawersKind = state.filter(item => item.isActive)[0].value,
            activeTwoDrawersPosition = twoDrawersPosition.filter(item => item.isActive)[0].value,
            activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value

      if (activeTwoDrawersKind === 'drawers-without') {
        setSystemBlock(systemBlock.map(item => ({
          ...item,
          isActive: item.isActive,
        })))

        setBarPosition(barPosition.map(item => ({
          ...item,
          isActive: item.isActive,
        })))

        setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
          ...item,
          isActive: item.isActive,
        })))
      }

      switch (activeTwoDrawersPosition) {
        case 'drawers-left': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-right',
          })))

          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-right',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-right',
          })))
          
          break
        }
        case 'drawers-right': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-left',
          })))

          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-left',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-left',
          })))

          break
        }
      }

      return state
    })
  }
  const changeTwoDrawersPosition = id => {
    setTwoDrawersPosition(twoDrawersPosition.map(item => ({
      ...item,
      isActive: item.id === id
    })))

    setTwoDrawersPosition((state) => {
      const activeTwoDrawersPosition = state.filter(item => item.isActive)[0].value,
            activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value,
            activeBarKind = barKind.filter(item => item.isActive)[0].value,
            activeCharging = charging.filter(item => item.isActive)[0].value

      switch (activeTwoDrawersPosition) {
        case 'drawers-left': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-right',
          })))

          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-right',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-right',
          })))

          if (activeBarKind !== 'bar-without') {
            setCharging(charging.map(item => ({
              ...item,
              isActive: activeCharging === 'charging-without' ? item.isActive : item.value === activeCharging.replace('right', 'left')
            })))
          }
          
          break
        }
        case 'drawers-right': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-left',
          })))

          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-left',
          })))

          setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
            ...item,
            isActive: item.value === 'plywood-left',
          })))

          if (activeBarKind !== 'bar-without') {
            setCharging(charging.map(item => ({
              ...item,
              isActive: activeCharging === 'charging-without' ? item.isActive : item.value === activeCharging.replace('left', 'right')
            })))
          }

          break
        }
      }

      return state
    })
  }
  const changePlywoodBoxKind = id => {
    setPlywoodBoxKind(plywoodBoxKind.map(item => ({
      ...item,
      isActive: item.id === id
    })))


    setPlywoodBoxKind((state) => {
      const activePlywoodBoxKind = state.filter(item => item.isActive)[0].value,
            activePlywoodBoxPosition = plywoodBoxPosition.filter(item => item.isActive)[0].value,
            activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value

      if (activePlywoodBoxKind === 'plywoodbox-without') {
        setSystemBlock(systemBlock.map(item => ({
          ...item,
          isActive: item.isActive,
        })))

        setBarPosition(barPosition.map(item => ({
          ...item,
          isActive: item.isActive,
        })))

        setTwoDrawersPosition(twoDrawersPosition.map(item => ({
          ...item,
          isActive: item.isActive,
        })))
      }

      switch (activePlywoodBoxPosition) {
        case 'plywood-left': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-right',
          })))

          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-right',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-right',
          })))
          
          break
        }
        case 'plywood-right': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-left',
          })))

          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-left',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-left',
          })))

          break
        }
      }


      return state
    })
  }
  const changePlywoodBoxPosition = id => {
    setPlywoodBoxPosition(plywoodBoxPosition.map(item => ({
      ...item,
      isActive: item.id === id
    })))

    setPlywoodBoxPosition((state) => {
      const activePlywoodBoxPosition = state.filter(item => item.isActive)[0].value,
            activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value

      switch (activePlywoodBoxPosition) {
        case 'plywood-left': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-right',
          })))

          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-right',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-right',
          })))
          
          break
        }
        case 'plywood-right': {
          setSystemBlock(systemBlock.map(item => ({
            ...item,
            isActive: activeSystemBlock === 'system-block-without' ? item.isActive : item.value === 'system-block-left',
          })))

          setBarPosition(barPosition.map(item => ({
            ...item,
            isActive: item.value === 'bar-left',
          })))

          setTwoDrawersPosition(twoDrawersPosition.map(item => ({
            ...item,
            isActive: item.value === 'drawers-left',
          })))

          break
        }
      }

      return state
    })
  }

  const changeBracket = id => {
    setBracket(bracket.map(item => ({
      ...item,
      isActive: item.id === id
    })))
  }

  useEffect(() => {
    disableOverflow(intro)

    if (!detectLighthouse()) return null

    let contiguratorTl = gsap.timeline()

    contiguratorTl
      .from('.configurator-model__inner', .5, { delay: .6, opacity: 0, onComplete() {
        contiguratorTl.set(this.targets(), { clearProps: 'all' })
      } })
      .from('.configurator__title', .5, { y: '100%', onComplete() {
        contiguratorTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.configurator__wrapper > *', .6, { y: 50, opacity: 0, stagger: .05, onComplete() {
        contiguratorTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
  }, [])

  useEffect(() => {
    const activeFrameCount = frameCount.filter(item => item.isActive)[0].value

    if (activeFrameCount === 'frame-count-4') {
      setSystemBlock(systemBlock.map(item => ({
        ...item,
        isActive: item.value === 'system-block-without'
      })))
      setBarKind(barKind.map(item => ({
        ...item,
        isActive: item.value === 'bar-without'
      })))
      setTwoDrawersKind(twoDrawersKind.map(item => ({
        ...item,
        isActive: item.value === 'drawers-without'
      })))
      setPlywoodBoxKind(plywoodBoxKind.map(item => ({
        ...item,
        isActive: item.value === 'plywoodbox-without'
      })))
    }
  }, [frameCount])

  useEffect(() => {
    const activeTableTopMaterial = tableTopMaterial.filter(item => item.isActive)[0].value

    if (activeTableTopMaterial === 'dsp' || activeTableTopMaterial === 'mdf') {
      setTableTopTonning(tableTopTonning.map(item => ({
        ...item,
        isActive: item.value === 'tone-without'
      })))
    }
  }, [tableTopMaterial])

  useEffect(() => {
    if (tableTopLength <= 139) {
      setSystemBlock(systemBlock.map(item => ({
        ...item,
        isActive: item.value === 'system-block-without'
      })))
    }
    if (tableTopLength <= 164) {
      setBarKind(barKind.map(item => ({
        ...item,
        isActive: item.value === 'bar-without'
      })))
      setTwoDrawersKind(twoDrawersKind.map(item => ({
        ...item,
        isActive: item.value === 'drawers-without'
      })))
    }
    if (tableTopLength <= 120 || tableTopLength >= 140) {
      setPlywoodBoxKind(plywoodBoxKind.map(item => ({
        ...item,
        isActive: item.value === 'plywoodbox-without'
      })))
    }
  }, [tableTopLength])

  return (
    <div className="intro configurator" ref={intro}>
      <div className="container">
        <div className="configurator__inner">
          <ConfiguratorModel
            name={name}
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
          <ConfiguratorFilter
            name={name}
            frameCount={frameCount}
            changeFrameCount={changeFrameCount}
            frameHeight={frameHeight}
            changeFrameHeight={changeFrameHeight}
            colorFrame={colorFrame}
            setColorFrame={setColorFrame}
            colorsFrame={colorsFrame}
            setColorsFrame={setColorsFrame}
            isColorpickerVisible={isColorpickerVisible}
            setIsColorpickerVisible={setIsColorpickerVisible}
            wasColorPickerClicked={wasColorPickerClicked}
            setWasColorPickerClicked={setWasColorPickerClicked}
            frameWheels={frameWheels}
            changeFrameWheels={changeFrameWheels}
            tableTopMaterial={tableTopMaterial}
            changeTableTopMaterial={changeTableTopMaterial}
            tableTopBreed={tableTopBreed}
            changeTableTopBreed={changeTableTopBreed}
            tableTopDspColor={tableTopDspColor}
            changeTableTopColorDsp={changeTableTopColorDsp}
            tableTopMdfColor={tableTopMdfColor}
            changeTableTopColorMdf={changeTableTopColorMdf}
            tableTopThickness={tableTopThickness}
            changeTableTopThickness={changeTableTopThickness}
            tableTopDepth={tableTopDepth}
            tableTopSetDepth={tableTopSetDepth}
            tableTopLength={tableTopLength}
            tableTopSetLength={tableTopSetLength}
            tableTopDepthStart={tableTopDepthStart}
            tableTopSetDepthStart={tableTopSetDepthStart}
            tableTopLengthStart={tableTopLengthStart}
            tableTopSetLengthStart={tableTopSetLengthStart}
            tableTopTonning={tableTopTonning}
            changeTableTopTone={changeTableTopTone}
            holesPosition={holesPosition}
            changeHolesPosition={changeHolesPosition}
            holesKind={holesKind}
            changeHolesKind={changeHolesKind}
            incline={incline}
            setIncline={setIncline}
            systemBlock={systemBlock}
            changeSystemBlock={changeSystemBlock}
            monitor={monitor}
            changeMonitor={changeMonitor}
            cableManagement={cableManagement}
            setCableManagement={setCableManagement}
            charging={charging}
            changeCharging={changeCharging}
            rosette={rosette}
            changeRosette={changeRosette}
            headphoneHook={headphoneHook}
            changeHeadphodeHook={changeHeadphodeHook}
            coaster={coaster}
            changeCoaster={changeCoaster}
            barKind={barKind}
            changeBarKind={changeBarKind}
            barPosition={barPosition}
            changeBarPosition={changeBarPosition}
            twoDrawersKind={twoDrawersKind}
            changeTwoDrawersKind={changeTwoDrawersKind}
            twoDrawersPosition={twoDrawersPosition}
            changeTwoDrawersPosition={changeTwoDrawersPosition}
            plywoodBoxKind={plywoodBoxKind}
            changePlywoodBoxKind={changePlywoodBoxKind}
            plywoodBoxPosition={plywoodBoxPosition}
            changePlywoodBoxPosition={changePlywoodBoxPosition}
            tonePlywoodBox={tonePlywoodBox}
            setTonePlywoodBox={setTonePlywoodBox}
            bagHook={bagHook}
            changeBageHook={changeBageHook}
            bracket={bracket}
            changeBracket={changeBracket}
            counter={counter}
            setCounter={setCounter}
            price={price}
            message={message}
            setMessage={setMessage}
            id={id}
            isAddingToCart={isAddingToCart}
            setIsAddingToCart={setIsAddingToCart}
            isAddedToCart={isAddedToCart}
            setIsAddedToCart={setIsAddedToCart}
            addToCartBtn={addToCartBtn}
            addedCartToBtn={addedCartToBtn}
            constFrame={constFrame}
            confTableTop={confTableTop}
            confOpt={confOpt}
            confField={confField}
          />
        </div>
      </div>
    </div>
  )
}

export default ConfigiratorIntro
