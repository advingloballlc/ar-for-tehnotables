import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsTonePlywoodBoxPosition = ({ 
  plywoodBoxPosition, 
  changePlywoodBoxPosition,
  plywoodBoxKind,
  confPlywoodboxPos
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const activePlywoodBoxKind = plywoodBoxKind.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__plywoodbox ${activePlywoodBoxKind === 'plywoodbox-without' ? 'disabled' : ''}`}
    >
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activePlywoodBoxKind !== 'plywoodbox-without' ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confPlywoodboxPos.confPlywoodboxPosTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activePlywoodBoxKind !== 'plywoodbox-without'}>
        <div className={`configurator-filter__subitem-inner ${isOpen && activePlywoodBoxKind !== 'plywoodbox-without' ? 'open' : ''}`}>
          { plywoodBoxPosition.map((item, index) => {
            return (
              <div 
                className={`configurator-filter__subitem-check`} 
                key={item.id}
              >
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-plywoodbox-position" 
                  id={`options-plywoodbox-position-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changePlywoodBoxPosition(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-plywoodbox-position-${index + 1}`}>
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

export default ConfiguratorOptionsTonePlywoodBoxPosition