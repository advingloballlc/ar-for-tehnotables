import React, { useState, useEffect } from 'react'
import { Collapse } from 'react-collapse'
import { HexColorPicker } from "react-colorful"

import { copyText } from '../../../utils/copyText'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorFrameColor = ({
  colorFrame,
  setColorFrame,
  colorsFrame,
  setColorsFrame,
  isColorpickerVisible,
  setIsColorpickerVisible,
  setWasColorPickerClicked,
  confFrameColor
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ isCopied, setIsCopied ] = useState(false)

  useEffect(() => {
    setIsCopied(false)
  }, [colorFrame])

  const changeColor = (id, color) => {
    setIsColorpickerVisible(false)
    setWasColorPickerClicked(false)
    setColorFrame(color)
    setColorsFrame(colorsFrame.map(color => {
      return {
        ...color,
        isActive: id === color.id
      }
    }))
  }

  const changeMulticolor = () => {
    setWasColorPickerClicked(true)
    setColorsFrame(colorsFrame.map(color => {
      return {
        ...color,
        isActive: false
      }
    }))

    setIsColorpickerVisible(prev => !prev)
  }
  
  return (
    <div className="configurator-filter__subitem configurator-filter__color">
      <div 
        className={`configurator-filter__subitem-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confFrameColor.confFrameColorTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          <div className="configurator-filter__subitem-colors">
            { colorsFrame.map(color => {
              return (
                <div 
                  className="configurator-filter__subitem-color" key={color.id}
                  onClick={() => changeColor(color.id, color.backgroundColor)}
                >
                  <div className={`configurator-filter__subitem-color-inner ${color.isActive ? 'active' : ''}`}>
                    <span style={{ borderColor: color.borderColor, backgroundColor: color.backgroundColor }}></span>
                  </div>
                </div>
              )
            }) }
            <div 
              className="configurator-filter__subitem-color"
              onClick={changeMulticolor}
            >
              <div className={`configurator-filter__subitem-color-inner ${isColorpickerVisible ? 'active' : ''}`}>
                <span style={{ borderColor: 'transparent', backgroundColor: 'transparent' }}>
                  <svg><use href={`${sprite}#multicolor`}></use></svg>
                </span>
              </div>
            </div>
          </div>
          { isColorpickerVisible && <div className="configurator-filter__subitem-colorpicker">
            <HexColorPicker color={colorFrame} onChange={setColorFrame} />
            <div className="configurator-filter__subitem-colorpicker-inp-wrapper">
              <input 
                className="configurator-filter__subitem-colorpicker-inp" 
                autoComplete="off"
                value={colorFrame}
                onChange={e => setColorFrame(e.currentTarget.value)}
              />
              {
                !isCopied
                  ? <span 
                      className="configurator-filter__subitem-colorpicker-icon"
                      onClick={e => {
                        copyText(e.currentTarget.previousElementSibling)
                        setIsCopied(true)
                      }}
                    >
                      <svg><use href={`${sprite}#copy`}></use></svg>
                    </span> 
                  : <span 
                      className="configurator-filter__subitem-colorpicker-icon copied"
                    >
                      <svg><use href={`${sprite}#check`}></use></svg>
                    </span> 
              }
            </div>
          </div> }
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorFrameColor