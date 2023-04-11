import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorTopTableThickness = ({ 
  tableTopThickness, 
  changeTableTopThickness, 
  tableTopMaterial,
  confTableTopMaterialThinkness
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const activeMaterial = tableTopMaterial.filter(item => item.isActive)[0].value
  
  return (
    <div className={`configurator-filter__subitem configurator-filter__thickness ${activeMaterial !== 'wood' ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeMaterial === 'wood' ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confTableTopMaterialThinkness.confTableTopMaterialThinknessTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeMaterial === 'wood'}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          { tableTopThickness.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="toptable-thickness" 
                  id={`toptable-thickness-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeTableTopThickness(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`toptable-thickness-${index + 1}`}>
                  <span className="configurator-filter__subitem-check-icon">
                    <span className="configurator-filter__subitem-check-icon-inner" />
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

export default ConfiguratorTopTableThickness