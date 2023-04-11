import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorFrameWheel = ({ 
  frameWheels, 
  changeFrameWheels,
  confFrameWheels
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className="configurator-filter__subitem configurator-filter__wheel">
      <div 
        className={`configurator-filter__subitem-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confFrameWheels.confFrameWheelsTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          { frameWheels.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="frame-wheels" 
                  id={`frame-wheels-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeFrameWheels(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`frame-wheels-${index + 1}`}>
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

export default ConfiguratorFrameWheel