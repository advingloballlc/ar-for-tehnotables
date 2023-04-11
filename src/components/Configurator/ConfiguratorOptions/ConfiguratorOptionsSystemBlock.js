import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsSystemBlock = ({ 
  systemBlock,
  barKind,
  twoDrawersKind,
  plywoodBoxKind,
  changeSystemBlock, 
  frameCount,
  tableTopLength,
  confSystem
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const activeFrameCount = frameCount.filter(item => item.isActive)[0].value,
        activeBarKind = barKind.filter(item => item.isActive)[0].value,
        activeTwoDrawersKind = twoDrawersKind.filter(item => item.isActive)[0].value,
        activePlywoodBoxKind = plywoodBoxKind.filter(item => item.isActive)[0].value

  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__block ${tableTopLength <= 139 || activeFrameCount !== 'frame-count-2' ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 140 ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confSystem.confSystemTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 140}>
        <div className={`configurator-filter__subitem-inner ${isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 140 ? 'open' : ''}`}>
          { systemBlock.map((item, index) => {
            return (
              <div 
                className={`configurator-filter__subitem-check ${
                  ((activeBarKind !== 'bar-without' && activeTwoDrawersKind !== 'drawers-without') ||
                  (activeBarKind !== 'bar-without' && activePlywoodBoxKind !== 'plywoodbox-without') ||
                  (activeTwoDrawersKind !== 'drawers-without' && activePlywoodBoxKind !== 'plywoodbox-without'))
                    ? 'disabled' 
                    : ''
                }`} 
                key={item.id}
              >
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-block" 
                  id={`options-block-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeSystemBlock(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-block-${index + 1}`}>
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

export default ConfiguratorOptionsSystemBlock