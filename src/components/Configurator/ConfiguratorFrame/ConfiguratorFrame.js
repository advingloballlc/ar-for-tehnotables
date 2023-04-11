import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import ConfiguratorFrameCount from './ConfiguratorFrameCount'
import ConfiguratorFrameHeight from './ConfiguratorFrameHeight'
import ConfiguratorFrameColor from './ConfiguratorFrameColor'
import ConfiguratorFrameWheel from './ConfiguratorFrameWheel'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorFrame = ({
  changeFrameCount,
  frameCount,
  frameHeight,
  changeFrameHeight,
  colorFrame,
  setColorFrame,
  colorsFrame,
  setColorsFrame,
  isColorpickerVisible,
  setIsColorpickerVisible,
  setWasColorPickerClicked,
  frameWheels,
  changeFrameWheels,
  constFrame
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className="configurator-filter__item configurator-filter__frame">
      <div 
        className={`configurator-filter__item-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__item-btn-text">{constFrame.constFrameTitle}</span>
        <span className="configurator-filter__item-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__item-inner ${isOpen ? 'open' : ''}`}>
          <ConfiguratorFrameCount
            frameCount={frameCount}
            changeFrameCount={changeFrameCount}
            confFrameCount={constFrame.confFrameCount}
          />
          <ConfiguratorFrameHeight
            frameHeight={frameHeight}
            changeFrameHeight={changeFrameHeight}
            confFrameHeight={constFrame.confFrameHeight}
          />
          <ConfiguratorFrameColor
            colorFrame={colorFrame}
            setColorFrame={setColorFrame}
            colorsFrame={colorsFrame}
            setColorsFrame={setColorsFrame}
            isColorpickerVisible={isColorpickerVisible}
            setIsColorpickerVisible={setIsColorpickerVisible}
            setWasColorPickerClicked={setWasColorPickerClicked}
            confFrameColor={constFrame.confFrameColor}
          />
          <ConfiguratorFrameWheel
            frameWheels={frameWheels}
            changeFrameWheels={changeFrameWheels}
            confFrameWheels={constFrame.confFrameWheels}
          />
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorFrame