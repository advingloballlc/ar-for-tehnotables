import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorTopTableMaterial = ({ 
  tableTopMaterial, 
  changeTableTopMaterial,
  confTableTopMaterial 
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className="configurator-filter__subitem configurator-filter__material">
      <div 
        className={`configurator-filter__subitem-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confTableTopMaterial.confTableTopMaterialTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          { tableTopMaterial.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="toptable-material" 
                  id={`toptable-material-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeTableTopMaterial(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`toptable-material-${index + 1}`}>
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

export default ConfiguratorTopTableMaterial;
