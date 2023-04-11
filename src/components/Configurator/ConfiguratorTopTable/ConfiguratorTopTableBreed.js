import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorTopTableBreed = ({ 
  tableTopBreed, 
  changeTableTopBreed, 
  tableTopMaterial,
  confTableTopBreed
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const activeMaterial = tableTopMaterial.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__breed ${activeMaterial !== 'wood' ? 'disabled' : ''}`}
    >
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeMaterial === 'wood' ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confTableTopBreed.confTableTopBreedTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeMaterial === 'wood'}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          { tableTopBreed.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="toptable-breed" 
                  id={`toptable-breed-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeTableTopBreed(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`toptable-breed-${index + 1}`}>
                  <span className="configurator-filter__subitem-check-icon no-border">
                    <svg><use href={`${sprite}#check`} /></svg>
                  </span>
                  <span className="configurator-filter__subitem-check-text no-border">{item.name}</span>
                </label>
              </div>
            )
          }) }
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorTopTableBreed;
