import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsPlywoodBoxKind = ({ 
  plywoodBoxKind, 
  changePlywoodBoxKind, 
  frameCount,
  systemBlock,
  barKind,
  twoDrawersKind,
  tableTopLength,
  confPlywoodbox
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const activeFrameCount = frameCount.filter(item => item.isActive)[0].value,
        activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value,
        activeBarKind = barKind.filter(item => item.isActive)[0].value,
        activeTwoDrawersKind = twoDrawersKind.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__plywoodbox ${tableTopLength <= 120 || tableTopLength >= 140 || activeFrameCount !== 'frame-count-2' ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 121 && tableTopLength <= 139 ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confPlywoodbox.confPlywoodboxTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 121 && tableTopLength <= 139}>
        <div className={`configurator-filter__subitem-inner ${isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 121 && tableTopLength <= 139 ? 'open' : ''}`}>
          { plywoodBoxKind.map((item, index) => {
            return (
              <div 
                className={`configurator-filter__subitem-check ${
                  ((activeSystemBlock !== 'system-block-without' && activeBarKind !== 'bar-without') ||
                  (activeSystemBlock !== 'system-block-without' && activeTwoDrawersKind !== 'drawers-without') ||
                  (activeBarKind !== 'bar-without' && activeTwoDrawersKind !== 'drawers-without'))
                    ? 'disabled' 
                    : '' 
                }`} 
                key={item.id}
              >
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-plywoodbox-kind" 
                  id={`options-plywoodbox-kind-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changePlywoodBoxKind(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-plywoodbox-kind-${index + 1}`}>
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

export default ConfiguratorOptionsPlywoodBoxKind