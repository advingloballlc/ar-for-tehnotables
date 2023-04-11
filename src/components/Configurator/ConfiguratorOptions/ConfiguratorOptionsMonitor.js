import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptionsMonitor = ({ 
  monitor, 
  changeMonitor, 
  bracket, 
  tableTopMaterial,
  confMonitor
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const activeBracket = bracket.filter(item => item.isActive)[0].value,
        activeMonitor = monitor.filter(item => item.isActive)[0].value,
        activeMaterial = tableTopMaterial.filter(item => item.isActive)[0].value
  
  return (
    <div 
      className={`configurator-filter__subitem configurator-filter__monitor ${activeBracket !== 'bracket-without' ? 'disabled' : ''}`}>
      <div 
        className={`configurator-filter__subitem-btn ${isOpen && activeBracket === 'bracket-without' ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confMonitor.confMonitorTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeBracket === 'bracket-without'}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          { monitor.map((item, index) => {
            return (
              <div 
                className={`configurator-filter__subitem-check ${item.value !== activeMaterial && item.value !== 'monitor-without' ? 'disabled' : ''}`} 
                key={item.id}
              >
                <input 
                  className="configurator-filter__subitem-check-inp" 
                  name="options-monitor" 
                  id={`options-monitor-${index + 1}`} 
                  type="radio"
                  value={item.value}
                  checked={activeMonitor === 'monitor-without' ? item.isActive : item.value === activeMaterial}
                  onChange={() => changeMonitor(item.id)}
                />
                <label className="configurator-filter__subitem-check-label" htmlFor={`options-monitor-${index + 1}`}>
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

export default ConfiguratorOptionsMonitor