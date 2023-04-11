import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsHolesKind = ({ 
  holesPosition, 
  holesKind, 
  changeHolesKind,
  confHolesKind
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const activePosition = holesPosition.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__holes ${activePosition === 'hole-without' ? 'disabled' : ''}`}
    >
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activePosition !== 'hole-without' ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confHolesKind.confHolesKindTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activePosition !== 'hole-without'}>
        <div className={`configurator-filter__subitem-inner ${isOpen && activePosition !== 'hole-without' ? 'open' : ''}`}>
          { holesKind.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-holes-kind" 
                  id={`options-holes-kind-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeHolesKind(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-holes-kind-${index + 1}`}>
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

export default ConfiguratorOptionsHolesKind