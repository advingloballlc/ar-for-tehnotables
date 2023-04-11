import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsBagHook = ({ 
  bagHook, 
  changeBageHook, 
  frameCount,
  systemBlock,
  barKind,
  twoDrawersKind,
  plywoodBoxKind,
  confBaghook,
  tableTopLength
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const activeFrameCount = frameCount.filter(item => item.isActive)[0].value,
        activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value,
        activeBarKind = barKind.filter(item => item.isActive)[0].value,
        activeTwoDrawersKind = twoDrawersKind.filter(item => item.isActive)[0].value,
        activePlywoodBoxKind = plywoodBoxKind.filter(item => item.isActive)[0].value
  
  return (
    <div className={`configurator-filter__subitem configurator-filter__baghook ${
      activeFrameCount !== 'frame-count-2'
        ? 'disabled' 
        : ''
    }`}>
      <div 
        className={`configurator-filter__subitem-btn ${
          isOpen && 
          activeFrameCount === 'frame-count-2'
            ? 'active' 
            : ''
          }`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confBaghook.confBaghookTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={
        isOpen && 
        activeFrameCount === 'frame-count-2'
      }>
        <div className={`configurator-filter__subitem-inner ${
          isOpen && 
          activeFrameCount === 'frame-count-2'
            ? 'open' 
            : ''
          }`}>
          { bagHook.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-baghook" 
                  id={`options-baghook-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeBageHook(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-baghook-${index + 1}`}>
                  <span className="configurator-filter__subitem-check-icon">
                    <span className="configurator-filter__subitem-check-icon-inner"></span>
                  </span>
                  <span className="configurator-filter__subitem-check-text">{item.name}</span>
                </label>
              </div>
            )
          }) }
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorOptionsBagHook