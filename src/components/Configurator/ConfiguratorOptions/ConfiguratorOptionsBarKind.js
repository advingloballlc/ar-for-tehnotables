import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsBarKind = ({ 
  barKind, 
  changeBarKind, 
  frameCount, 
  tableTopLength,
  systemBlock,
  twoDrawersKind,
  plywoodBoxKind,
  confBar
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const activeFrameCount = frameCount.filter(item => item.isActive)[0].value,
        activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value,
        activeTwoDrawersKind = twoDrawersKind.filter(item => item.isActive)[0].value,
        activePlywoodBoxKind = plywoodBoxKind.filter(item => item.isActive)[0].value

  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__bar ${tableTopLength <= 164 || activeFrameCount !== 'frame-count-2' ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 165 ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confBar.confBarTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 165}>
        <div className={`configurator-filter__subitem-inner ${isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 165 ? 'open' : ''}`}>
          { barKind.map((item, index) => {
            return (
              <div 
                className={`configurator-filter__subitem-check ${
                  (activeSystemBlock !== 'system-block-without' && activeTwoDrawersKind !== 'drawers-without') ||
                  (activeSystemBlock !== 'system-block-without' && activePlywoodBoxKind !== 'plywoodbox-without') ||
                  (activeTwoDrawersKind !== 'drawers-without' && activePlywoodBoxKind !== 'plywoodbox-without')
                    ? 'disabled' 
                    : ''
                }`} 
                key={item.id}
              >
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-bar-kind" 
                  id={`options-bar-kind-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeBarKind(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-bar-kind-${index + 1}`}>
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

export default ConfiguratorOptionsBarKind