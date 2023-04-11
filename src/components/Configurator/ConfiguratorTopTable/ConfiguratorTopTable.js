import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import ConfiguratorTopTableMaterial from './ConfiguratorTopTableMaterial'
import ConfiguratorTopTableBreed from './ConfiguratorTopTableBreed'
import ConfiguratorTopTableDspColor from './ConfiguratorTopTableDspColor'
import ConfiguratorTopTableMdfColor from './ConfiguratorTopTableMdfColor'
import ConfiguratorTopTableThickness from './ConfiguratorTopTableThickness'
import ConfiguratorTopTableSize from './ConfiguratorTopTableSize'
import ConfiguratorTopTableToning from './ConfiguratorTopTableToning'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorTopTable = ({ 
  tableTopMaterial,
  changeTableTopMaterial,
  tableTopBreed,
  changeTableTopBreed,
  tableTopDspColor,
  changeTableTopColorDsp,
  tableTopMdfColor,
  changeTableTopColorMdf,
  tableTopThickness,
  changeTableTopThickness,
  tableTopDepth,
  tableTopSetDepth,
  tableTopLength,
  tableTopSetLength,
  tableTopDepthStart,
  tableTopSetDepthStart,
  tableTopLengthStart,
  tableTopSetLengthStart,
  tableTopTonning,
  changeTableTopTone,
  confTableTop
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className="configurator-filter__item configurator-filter__toptable">
      <div 
        className={`configurator-filter__item-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__item-btn-text">{confTableTop.confTableTopTitle}</span>
        <span className="configurator-filter__item-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__item-inner ${isOpen ? 'open' : ''}`}>
          <ConfiguratorTopTableMaterial 
            tableTopMaterial={tableTopMaterial} 
            changeTableTopMaterial={changeTableTopMaterial}
            confTableTopMaterial={confTableTop.confTableTopMaterial}
          />
          <ConfiguratorTopTableBreed 
            tableTopBreed={tableTopBreed} 
            changeTableTopBreed={changeTableTopBreed}
            tableTopMaterial={tableTopMaterial}
            confTableTopBreed={confTableTop.confTableTopBreed}
          />
          <ConfiguratorTopTableMdfColor 
            tableTopMdfColor={tableTopMdfColor} 
            changeTableTopColorMdf={changeTableTopColorMdf}
            tableTopMaterial={tableTopMaterial}
            confTableTopMdf={confTableTop.confTableTopMdf}
          />
          <ConfiguratorTopTableDspColor 
            tableTopDspColor={tableTopDspColor} 
            changeTableTopColorDsp={changeTableTopColorDsp}
            tableTopMaterial={tableTopMaterial}
            confTableTopDsp={confTableTop.confTableTopDsp}
          />
          <ConfiguratorTopTableThickness 
            tableTopThickness={tableTopThickness} 
            changeTableTopThickness={changeTableTopThickness}
            tableTopMaterial={tableTopMaterial}
            confTableTopMaterialThinkness={confTableTop.confTableTopMaterialThinkness}
          />
          <ConfiguratorTopTableSize
            tableTopMaterial={tableTopMaterial}
            tableTopDepth={tableTopDepth}
            tableTopSetDepth={tableTopSetDepth}
            tableTopLength={tableTopLength}
            tableTopSetLength={tableTopSetLength}
            tableTopDepthStart={tableTopDepthStart}
            tableTopSetDepthStart={tableTopSetDepthStart}
            tableTopLengthStart={tableTopLengthStart}
            tableTopSetLengthStart={tableTopSetLengthStart}
            confTableTopMaterialSize={confTableTop.confTableTopMaterialSize}
          />
          <ConfiguratorTopTableToning
            tableTopMaterial={tableTopMaterial}
            tableTopTonning={tableTopTonning} 
            changeTableTopTone={changeTableTopTone}
            confTableTopMaterialTone={confTableTop.confTableTopMaterialTone}
          />
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorTopTable