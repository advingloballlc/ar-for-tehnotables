import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsBarPosition = ({ 
  barKind, 
  barPosition, 
  changeBarPosition, 
  frameCount, 
  tableTopLength,
  confBarPos
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const activeKind = barKind.filter(item => item.isActive)[0].value,
        activeFrameCount = frameCount.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__bar ${tableTopLength <= 164 || activeKind === 'bar-without' && tableTopLength >= 165 || activeFrameCount !== 'frame-count-2' ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeKind !== 'bar-without' && activeFrameCount === 'frame-count-2' && tableTopLength >= 165 ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confBarPos.confBarPosTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeKind !== 'bar-without' && activeFrameCount === 'frame-count-2' && tableTopLength >= 165}>
        <div className={`configurator-filter__subitem-inner ${isOpen && activeKind !== 'bar-without' && activeFrameCount === 'frame-count-2' && tableTopLength >= 165 ? 'open' : ''}`}>
          { barPosition.map((item, index) => {
            return (
              <div 
                className={`configurator-filter__subitem-check`} 
                key={item.id}
              >
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-bar-position" 
                  id={`options-bar-position-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeBarPosition(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-bar-position-${index + 1}`}>
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

export default ConfiguratorOptionsBarPosition