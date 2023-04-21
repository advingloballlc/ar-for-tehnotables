import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'

import { fieldChange } from './../../../utils/fieldChange'
import { fieldBlur } from './../../../utils/fieldBlur'
import { checkInp } from '../../../utils/checkInp'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorTopTableSize = ({
  tableTopMaterial,
  tableTopDepth,
  tableTopSetDepth,
  tableTopLength,
  tableTopSetLength,
  tableTopDepthStart,
  tableTopSetDepthStart,
  tableTopLengthStart,
  tableTopSetLengthStart,
  confTableTopMaterialSize
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const activeTableTopMaterial = tableTopMaterial.filter(item => item.isActive)[0].value

  return (
    <div className="configurator-filter__subitem configurator-filter__size">
      <div 
        className={`configurator-filter__subitem-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__subitem-btn-text">{confTableTopMaterialSize.confTableTopMaterialTitle}</span>
        <span className="configurator-filter__subitem-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__subitem-inner ${isOpen ? 'open' : ''}`}>
          <div className="configurator-filter__subitem-elem">
            <div className="configurator-filter__subitem-title">{confTableTopMaterialSize.confTableTopMaterialOne}</div>
            <div className="configurator-filter__subitem-controls">
              <div className="configurator-filter__subitem-inps">
                <div className="configurator-filter__subitem-inp-wrapper">
                  <input 
                    className="configurator-filter__subitem-inp" 
                    autoComplete="off"
                    name="depth-max"
                    id="depth-max"
                    value={tableTopDepth}
                    onChange={e => {
                      fieldChange(e)
                      checkInp(e, tableTopSetDepth, 60, activeTableTopMaterial === 'mdf' ? 90 : 85)
                    }}
                    onBlur={fieldBlur}
                  />
                  <label 
                    className={`configurator-filter__subitem-placeholder ${tableTopDepth ? 'focused' : ''}`} 
                    htmlFor="depth-max"
                  >
                    {`min/max 60/${activeTableTopMaterial === 'mdf' ? 90 : 85}`}
                  </label>
                </div>
              </div>
              <div className="configurator-filter__subitem-btn-wrapper">
                <button 
                  className="configurator-filter__subitem-okbtn form-btn"
                  onClick={() => tableTopSetDepthStart(parseInt(tableTopDepth))}
                >
                  <span>OK</span>
                  <span>OK</span>
                </button>
              </div>
            </div>
            <Nouislider 
              range={{ min: 60, max: activeTableTopMaterial === 'mdf' ? 90 : 85 }} 
              start={tableTopDepthStart} 
              step={1}
              connect={[true, false]}
              onUpdate={value => tableTopSetDepth(parseInt(value[0]))}
            />
          </div>
          <div className="configurator-filter__subitem-elem">
            <div className="configurator-filter__subitem-title">{confTableTopMaterialSize.confTableTopMaterialTwo}</div>
            <div className="configurator-filter__subitem-controls">
              <div className="configurator-filter__subitem-inps">
                <div className="configurator-filter__subitem-inp-wrapper">
                  <input 
                    className="configurator-filter__subitem-inp" 
                    autoComplete="off"
                    name="length-max"
                    id="length-max"
                    value={tableTopLength}
                    onChange={e => {
                      fieldChange(e)
                      checkInp(e, tableTopSetLength, 100, 180)
                    }}
                    onBlur={fieldBlur}
                  />
                  <label 
                    className={`configurator-filter__subitem-placeholder ${tableTopLength ? 'focused' : ''}`} 
                    htmlFor="length-max"
                  >
                    min/max 100/180
                  </label>
                </div>
              </div>
              <div className="configurator-filter__subitem-btn-wrapper">
                <button 
                  className="configurator-filter__subitem-okbtn form-btn"
                  onClick={() => tableTopSetLengthStart(parseInt(tableTopLength))}
                >
                  <span>OK</span>
                  <span>OK</span>
                </button>
              </div>
            </div>
            <Nouislider 
              range={{ min: 100, max: 180 }} 
              start={tableTopLengthStart} 
              step={1}
              connect={[true, false]}
              onUpdate={value => tableTopSetLength(parseInt(value[0]))}
            />
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorTopTableSize