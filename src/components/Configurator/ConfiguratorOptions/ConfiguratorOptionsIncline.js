import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsIncline = ({ 
  incline, 
  setIncline,
  confInc
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className="configurator-filter__subitem configurator-filter__incline">
      <div 
        className={`configurator-filter__subitem-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confInc.confIncTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          <div className="configurator-filter__subitem-check">
            <input 
              className="configurator-filter__subitem-check-inp" 
              name="options-inclines" 
              id="options-inclines-1" 
              type="radio"
              value="positive"
              checked={incline}
              onChange={() => setIncline(true)}
            />
            <label className="configurator-filter__subitem-check-label" htmlFor="options-inclines-1">
              <span className="configurator-filter__subitem-check-icon">
                <span className="configurator-filter__subitem-check-icon-inner"></span>
              </span>
              <span className="configurator-filter__subitem-check-text">{confInc.confInc1}</span>
            </label>
          </div>
          <div className="configurator-filter__subitem-check">
            <input 
              className="configurator-filter__subitem-check-inp" 
              name="options-inclines" 
              id="options-inclines-2" 
              type="radio"
              value="neganive"
              checked={!incline}
              onChange={() => setIncline(false)}
            />
            <label className="configurator-filter__subitem-check-label" htmlFor="options-inclines-2">
              <span className="configurator-filter__subitem-check-icon">
                <span className="configurator-filter__subitem-check-icon-inner"></span>
              </span>
              <span className="configurator-filter__subitem-check-text">{confInc.confInc2}</span>
            </label>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorOptionsIncline