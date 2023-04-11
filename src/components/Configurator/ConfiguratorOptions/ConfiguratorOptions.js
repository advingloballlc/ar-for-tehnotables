import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import ConfiguratorOptionsHolesPosition from './ConfiguratorOptionsHolesPosition'
import ConfiguratorOptionsHolesKind from './ConfiguratorOptionsHolesKind'
import ConfiguratorOptionsIncline from './ConfiguratorOptionsIncline'
import ConfiguratorOptionsSystemBlock from './ConfiguratorOptionsSystemBlock'
import ConfiguratorOptionsMonitor from './ConfiguratorOptionsMonitor'
import ConfiguratorOptionsManagements from './ConfiguratorOptionsManagements'
import ConfiguratorOptionsCharging from './ConfiguratorOptionsCharging'
import ConfiguratorOptionsRosette from './ConfiguratorOptionsRosette'
import ConfiguratorOptionsHook from './ConfiguratorOptionsHook'
import ConfiguratorOptionsCoaster from './ConfiguratorOptionsCoaster'
import ConfiguratorOptionsBarKind from './ConfiguratorOptionsBarKind'
import ConfiguratorOptionsBarPosition from './ConfiguratorOptionsBarPosition'
import ConfiguratorOptionsTwoDrawersKind from './ConfiguratorOptionsTwoDrawersKind'
import ConfiguratorOptionsTwoDrawersPosition from './ConfiguratorOptionsTwoDrawersPosition'
import ConfiguratorOptionsPlywoodBoxKind from './ConfiguratorOptionsPlywoodBoxKind'
import ConfiguratorOptionsTonePlywoodBoxPosition from './ConfiguratorOptionsTonePlywoodBoxPosition'
import ConfiguratorOptionsTonePlywoodBox from './ConfiguratorOptionsTonePlywoodBox'
import ConfiguratorOptionsBagHook from './ConfiguratorOptionsBagHook'
import ConfiguratorOptionsBracket from './ConfiguratorOptionsBracket'

import sprite from '../../../icons/sprite.svg'

const ConfiguratorOptions = ({
  frameCount,
  tableTopLength,
  holesPosition,
  changeHolesPosition,
  holesKind,
  changeHolesKind,
  incline,
  setIncline,
  systemBlock,
  changeSystemBlock,
  monitor,
  changeMonitor,
  cableManagement,
  setCableManagement,
  charging,
  changeCharging,
  rosette,
  changeRosette,
  headphoneHook,
  changeHeadphodeHook,
  coaster,
  changeCoaster,
  barKind,
  changeBarKind,
  barPosition,
  changeBarPosition,
  twoDrawersKind,
  changeTwoDrawersKind,
  twoDrawersPosition,
  changeTwoDrawersPosition,
  plywoodBoxKind,
  changePlywoodBoxKind,
  plywoodBoxPosition,
  changePlywoodBoxPosition,
  tonePlywoodBox,
  setTonePlywoodBox,
  bagHook,
  changeBageHook,
  bracket,
  changeBracket,
  tableTopMaterial,
  confOpt
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className="configurator-filter__item configurator-filter__options">
      <div 
        className={`configurator-filter__item-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="configurator-filter__item-btn-text">{confOpt.confOptTitle}</span>
        <span className="configurator-filter__item-btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`configurator-filter__item-inner ${isOpen ? 'open' : ''}`}>
          <ConfiguratorOptionsHolesPosition 
            holesPosition={holesPosition} 
            changeHolesPosition={changeHolesPosition}
            confHolesPos={confOpt.confHolesPos}
          />
          <ConfiguratorOptionsHolesKind 
            holesPosition={holesPosition}
            holesKind={holesKind} 
            changeHolesKind={changeHolesKind}
            confHolesKind={confOpt.confHolesKind}
          />
          <ConfiguratorOptionsIncline 
            incline={incline} 
            setIncline={setIncline}
            confInc={confOpt.confInc}
          />
          <ConfiguratorOptionsSystemBlock 
            systemBlock={systemBlock}
            barKind={barKind}
            twoDrawersKind={twoDrawersKind}
            plywoodBoxKind={plywoodBoxKind}
            changeSystemBlock={changeSystemBlock}
            frameCount={frameCount}
            tableTopLength={tableTopLength}
            confSystem={confOpt.confSystem}
          />
          <ConfiguratorOptionsMonitor 
            monitor={monitor} 
            changeMonitor={changeMonitor}
            bracket={bracket}
            tableTopMaterial={tableTopMaterial}
            confMonitor={confOpt.confMonitor}
          />
          <ConfiguratorOptionsManagements 
            cableManagement={cableManagement} 
            setCableManagement={setCableManagement}
            confCable={confOpt.confCable}
          />
          <ConfiguratorOptionsCharging 
            charging={charging} 
            changeCharging={changeCharging}
            confCharging={confOpt.confCharging}
          />
          <ConfiguratorOptionsRosette 
            rosette={rosette} 
            changeRosette={changeRosette}
            confRosette={confOpt.confRosette}
          />
          <ConfiguratorOptionsHook 
            headphoneHook={headphoneHook} 
            changeHeadphodeHook={changeHeadphodeHook}
            confHeadphone={confOpt.confHeadphone}
          />
          <ConfiguratorOptionsCoaster 
            coaster={coaster} 
            changeCoaster={changeCoaster}
            confCoaster={confOpt.confCoaster}
          />
          <ConfiguratorOptionsBarKind 
            barKind={barKind} 
            changeBarKind={changeBarKind}
            frameCount={frameCount}
            tableTopLength={tableTopLength}
            systemBlock={systemBlock}
            twoDrawersKind={twoDrawersKind}
            plywoodBoxKind={plywoodBoxKind}
            confBar={confOpt.confBar}
          />
          <ConfiguratorOptionsBarPosition 
            barKind={barKind}
            barPosition={barPosition} 
            changeBarPosition={changeBarPosition}
            frameCount={frameCount}
            tableTopLength={tableTopLength}
            confBarPos={confOpt.confBarPos}
          />
          <ConfiguratorOptionsTwoDrawersKind 
            twoDrawersKind={twoDrawersKind} 
            changeTwoDrawersKind={changeTwoDrawersKind} 
            tableTopMaterial={tableTopMaterial}
            frameCount={frameCount}
            tableTopLength={tableTopLength}
            systemBlock={systemBlock}
            barKind={barKind}
            plywoodBoxKind={plywoodBoxKind}
            confTwodrawes={confOpt.confTwodrawes}
          />
          <ConfiguratorOptionsTwoDrawersPosition 
            twoDrawersPosition={twoDrawersPosition} 
            changeTwoDrawersPosition={changeTwoDrawersPosition}
            twoDrawersKind={twoDrawersKind} 
            frameCount={frameCount}
            tableTopLength={tableTopLength}
            confTwodrawesPos={confOpt.confTwodrawesPos}
          />
          <ConfiguratorOptionsPlywoodBoxKind 
            plywoodBoxKind={plywoodBoxKind} 
            changePlywoodBoxKind={changePlywoodBoxKind}
            frameCount={frameCount}
            systemBlock={systemBlock}
            barKind={barKind}
            twoDrawersKind={twoDrawersKind}
            tableTopLength={tableTopLength}
            confPlywoodbox={confOpt.confPlywoodbox}
          />
          <ConfiguratorOptionsTonePlywoodBoxPosition 
            plywoodBoxPosition={plywoodBoxPosition} 
            changePlywoodBoxPosition={changePlywoodBoxPosition}
            plywoodBoxKind={plywoodBoxKind}
            confPlywoodboxPos={confOpt.confPlywoodboxPos}
          />
          <ConfiguratorOptionsTonePlywoodBox 
            tonePlywoodBox={tonePlywoodBox} 
            setTonePlywoodBox={setTonePlywoodBox}
            plywoodBoxKind={plywoodBoxKind}
            confPlywoodboxTone={confOpt.confPlywoodboxTone}
          />
          <ConfiguratorOptionsBagHook 
            bagHook={bagHook} 
            changeBageHook={changeBageHook} 
            frameCount={frameCount}
            systemBlock={systemBlock}
            barKind={barKind}
            twoDrawersKind={twoDrawersKind}
            plywoodBoxKind={plywoodBoxKind}
            confBaghook={confOpt.confBaghook}
            tableTopLength={tableTopLength}
          />
          <ConfiguratorOptionsBracket 
            bracket={bracket} 
            changeBracket={changeBracket}
            monitor={monitor}
            confCronhs={confOpt.confCronhs}
          />
        </div>
      </Collapse>
    </div>
  )
}

export default ConfiguratorOptions