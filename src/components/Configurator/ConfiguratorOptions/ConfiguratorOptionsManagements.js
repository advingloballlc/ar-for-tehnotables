import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsManagements = ({ 
  cableManagement, 
  setCableManagement,
  confCable
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className="configurator-filter__subitem configurator-filter__management">
      <div 
        className={`configurator-filter__subitem-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confCable.confCableTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          <div className="configurator-filter__subitem-check">
            <input 
              className="configurator-filter__subitem-check-inp" 
              name="options-management" 
              id="options-management-1" 
              type="radio"
              value="positive"
              checked={cableManagement}
              onChange={() => setCableManagement(true)}
            />
            <label className="configurator-filter__subitem-check-label" htmlFor="options-management-1">
              <span className="configurator-filter__subitem-check-icon">
                <span className="configurator-filter__subitem-check-icon-inner"></span>
              </span>
              <span className="configurator-filter__subitem-check-text">{confCable.confCable1}</span>
            </label>
          </div>
          <div className="configurator-filter__subitem-check">
            <input 
              className="configurator-filter__subitem-check-inp" 
              name="options-management" 
              id="options-management-2" 
              type="radio"
              value="neganive"
              checked={!cableManagement}
              onChange={() => setCableManagement(false)}
            />
            <label className="configurator-filter__subitem-check-label" htmlFor="options-management-2">
              <span className="configurator-filter__subitem-check-icon">
                <span className="configurator-filter__subitem-check-icon-inner"></span>
              </span>
              <span className="configurator-filter__subitem-check-text">{confCable.confCable2}</span>
            </label>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorOptionsManagements