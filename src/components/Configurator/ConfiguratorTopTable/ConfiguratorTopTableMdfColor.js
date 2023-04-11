import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorTopTableMdfColor = ({ 
  tableTopMdfColor, 
  changeTableTopColorMdf, 
  tableTopMaterial,
  confTableTopMdf
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const activeMaterial = tableTopMaterial.filter(item => item.isActive)[0].value

  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__mdf-color ${activeMaterial !== 'mdf' ? 'disabled' : ''}`}
    >
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeMaterial === 'mdf' ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confTableTopMdf.confTableTopMdfTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeMaterial === 'mdf'}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          { tableTopMdfColor.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="toptable-mdf-color" 
                  id={`toptable-mdf-color-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeTableTopColorMdf(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`toptable-mdf-color-${index + 1}`}>
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

export default ConfiguratorTopTableMdfColor