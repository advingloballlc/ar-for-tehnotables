import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsTwoDrawersPosition = ({ 
  twoDrawersPosition, 
  changeTwoDrawersPosition, 
  twoDrawersKind, 
  frameCount,
  tableTopLength,
  confTwodrawesPos
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const activeTwoDrawersKind = twoDrawersKind.filter(item => item.isActive)[0].value,
        activeFrameCount = frameCount.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__twodrawers ${activeFrameCount !== 'frame-count-2' || activeTwoDrawersKind === 'drawers-without' || tableTopLength <= 164 ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeFrameCount === 'frame-count-2' && activeTwoDrawersKind !== 'drawers-without' && tableTopLength >= 165 ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confTwodrawesPos.confTwodrawesPosTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeFrameCount === 'frame-count-2' && activeTwoDrawersKind !== 'drawers-without' && tableTopLength >= 165}>
        <div className={`configurator-filter__subitem-inner ${isOpen && activeFrameCount === 'frame-count-2' && activeTwoDrawersKind !== 'drawers-without' && tableTopLength >= 165 ? 'open' : ''}`}>
          { twoDrawersPosition.map((item, index) => {
            return (
              <div 
                className={`configurator-filter__subitem-check`} 
                key={item.id}
              >
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-twodrawers-position" 
                  id={`options-twodrawers-position-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeTwoDrawersPosition(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-twodrawers-position-${index + 1}`}>
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

export default ConfiguratorOptionsTwoDrawersPosition