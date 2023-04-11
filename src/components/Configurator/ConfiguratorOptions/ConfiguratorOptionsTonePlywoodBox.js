import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsTonePlywoodBox = ({ 
  tonePlywoodBox, 
  setTonePlywoodBox, 
  plywoodBoxKind,
  confPlywoodboxTone 
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const activePlywoodBoxKind = plywoodBoxKind.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__toneplywoodbox ${activePlywoodBoxKind === 'plywoodbox-without' ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activePlywoodBoxKind !== 'plywoodbox-without' ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confPlywoodboxTone.confPlywoodboxToneTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activePlywoodBoxKind !== 'plywoodbox-without'}>
        <div className={`configurator-filter__subitem-inner ${isOpen && activePlywoodBoxKind !== 'plywoodbox-without' ? 'open' : ''}`}>
          <div className="configurator-filter__subitem-check">
            <input 
              className="configurator-filter__subitem-check-inp" 
              name="options-toneplywoodbox" 
              id="options-toneplywoodbox-1" 
              type="radio"
              value="positive"
              checked={tonePlywoodBox}
              onChange={() => setTonePlywoodBox(true)}
            />
            <label className="configurator-filter__subitem-check-label" htmlFor="options-toneplywoodbox-1">
              <span className="configurator-filter__subitem-check-icon">
                <span className="configurator-filter__subitem-check-icon-inner"></span>
              </span>
              <span className="configurator-filter__subitem-check-text">{confPlywoodboxTone.confPlywoodboxTone1}</span>
            </label>
          </div>
          <div className="configurator-filter__subitem-check">
            <input 
              className="configurator-filter__subitem-check-inp" 
              name="options-toneplywoodbox" 
              id="options-toneplywoodbox-2" 
              type="radio"
              value="neganive"
              checked={!tonePlywoodBox}
              onChange={() => setTonePlywoodBox(false)}
            />
            <label className="configurator-filter__subitem-check-label" htmlFor="options-toneplywoodbox-2">
              <span className="configurator-filter__subitem-check-icon">
                <span className="configurator-filter__subitem-check-icon-inner"></span>
              </span>
              <span className="configurator-filter__subitem-check-text">{confPlywoodboxTone.confPlywoodboxTone2}</span>
            </label>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorOptionsTonePlywoodBox