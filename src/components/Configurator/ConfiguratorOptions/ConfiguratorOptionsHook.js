import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsHook = ({ 
  headphoneHook, 
  changeHeadphodeHook,
  confHeadphone
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className="configurator-filter__subitem configurator-filter__hook">
      <div 
        className={`configurator-filter__subitem-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confHeadphone.confHeadphoneTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          { headphoneHook.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-hook" 
                  id={`options-hook-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeHeadphodeHook(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-hook-${index + 1}`}>
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

export default ConfiguratorOptionsHook