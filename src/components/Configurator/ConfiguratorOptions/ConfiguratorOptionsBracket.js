import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsBracket = ({ 
  bracket, 
  changeBracket, 
  monitor,
  confCronhs
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const activeMonitor = monitor.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__bracket ${activeMonitor !== 'monitor-without' ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeMonitor === 'monitor-without' ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confCronhs.confCronhsTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeMonitor === 'monitor-without'}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          { bracket.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-bracket" 
                  id={`options-bracket-${index + 1}`} 
                  type="radio"
                  value="positive"
                  checked={item.isActive}
                  onChange={() => changeBracket(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-bracket-${index + 1}`}>
                  <span className="configurator-filter__subitem-check-icon no-border">
                    <svg><use href={`${sprite}#check`}></use></svg>
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

export default ConfiguratorOptionsBracket