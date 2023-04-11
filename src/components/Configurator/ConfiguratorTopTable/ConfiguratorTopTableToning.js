import React, { useState } from "react"
import { Collapse } from "react-collapse"

import sprite from "../../../icons/sprite.svg"

const ConfiguratorTopTableToning = ({
  tableTopMaterial,
  tableTopTonning, 
  changeTableTopTone,
  confTableTopMaterialTone
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const activeTableTopMaterial = tableTopMaterial.filter(item => item.isActive)[0].value

  return (
    <div className={`configurator-filter__subitem configurator-filter__toning ${activeTableTopMaterial === 'dsp' || activeTableTopMaterial === 'mdf' ? 'disabled' : ''}`}>
      <div
        className={`configurator-filter__subitem-btn ${isOpen && activeTableTopMaterial !== 'dsp' && activeTableTopMaterial !== 'mdf' ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confTableTopMaterialTone.confTableTopMaterialToneTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg>
            <use href={`${sprite}#header-arrow`} />
          </svg>
        </span>
      </div>
      <Collapse isOpened={isOpen && activeTableTopMaterial !== 'dsp' && activeTableTopMaterial !== 'mdf'}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          { tableTopTonning.map((item, index) => {
            return (
              <div className="configurator-filter__subitem-check" key={item.id}>
                <input
                  className="configurator-filter__subitem-check-inp"
                  name="toptable-toning"
                  id={`toptable-toning-${index + 1}`}
                  type="radio"
                  value={item.value}
                  checked={item.isActive}
                  onChange={() => changeTableTopTone(item.id)}
                />
                <label
                  className="configurator-filter__subitem-check-label"
                  htmlFor={`toptable-toning-${index + 1}`}
                >
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

export default ConfiguratorTopTableToning
