import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsTwoDrawersKind = ({ 
  twoDrawersKind, 
  changeTwoDrawersKind, 
  tableTopMaterial, 
  frameCount,
  tableTopLength,
  systemBlock,
  barKind,
  plywoodBoxKind,
  confTwodrawes
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const activeMaterial = tableTopMaterial.filter(item => item.isActive)[0].value,
        activeDrawersKind = twoDrawersKind.filter(item => item.isActive)[0].value,
        activeFrameCount = frameCount.filter(item => item.isActive)[0].value,
        activeSystemBlock = systemBlock.filter(item => item.isActive)[0].value,
        activeBarKind = barKind.filter(item => item.isActive)[0].value,
        activePlywoodBoxKind = plywoodBoxKind.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__twodrawers ${activeFrameCount !== 'frame-count-2' || tableTopLength <= 164 ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 165 ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confTwodrawes.confTwodrawesTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 165}>
        <div className={`configurator-filter__subitem-inner ${isOpen && activeFrameCount === 'frame-count-2' && tableTopLength >= 165 ? 'open' : ''}`}>
          { twoDrawersKind.map((item, index) => {
            return (
              <div 
                className={`configurator-filter__subitem-check ${
                  item.value !== activeMaterial && 
                  item.value !== 'drawers-without' ||
                  ((activeSystemBlock !== 'system-block-without' && activeBarKind !== 'bar-without') ||
                  (activeSystemBlock !== 'system-block-without' && activePlywoodBoxKind !== 'plywoodbox-without') ||
                  (activeBarKind !== 'bar-without' && activePlywoodBoxKind !== 'plywoodbox-without'))
                    ? 'disabled' 
                    : '' 
                }`} 
                key={item.id}
              >
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-twodrawers-kind" 
                  id={`options-twodrawers-kind-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={activeDrawersKind === 'drawers-without' ? item.isActive : item.value === activeMaterial}
                  onChange={() => changeTwoDrawersKind(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-twodrawers-kind-${index + 1}`}>
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

export default ConfiguratorOptionsTwoDrawersKind