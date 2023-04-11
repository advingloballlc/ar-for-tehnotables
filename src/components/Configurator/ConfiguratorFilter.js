import React from 'react'

import ConfiguratorFrame from './ConfiguratorFrame/ConfiguratorFrame'
import ConfiguratorTopTable from './ConfiguratorTopTable/ConfiguratorTopTable'
import ConfiguratorOptions from './ConfiguratorOptions/ConfiguratorOptions'
import ConfiguratorTextarea from './ConfiguratorTextarea'
import ConfiguratorControls from './ConfiguratorControls'

const ConfiguratorFilter = ({
  name,
  frameCount,
  changeFrameCount,
  frameHeight,
  changeFrameHeight,
  colorFrame,
  setColorFrame,
  colorsFrame,
  setColorsFrame,
  isColorpickerVisible,
  setIsColorpickerVisible,
  wasColorPickerClicked,
  setWasColorPickerClicked,
  frameWheels,
  changeFrameWheels,
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
  counter,
  setCounter,
  price,
  message,
  setMessage,
  id,
  isAddingToCart,
  setIsAddingToCart,
  isAddedToCart,
  setIsAddedToCart,
  addToCartBtn,
  addedCartToBtn,
  constFrame,
  confTableTop,
  confOpt,
  confField
}) => {
  return (
    <div className="configurator-filter intro-configurator__filter configurator__item">
      <div className="configurator__title-wrapper title-wrapper">
        <h1 className="configurator__title title title--big">{name}</h1>
      </div>
      <div className="configurator__wrapper">
        <ConfiguratorFrame
          frameCount={frameCount}
          changeFrameCount={changeFrameCount}
          frameHeight={frameHeight}
          changeFrameHeight={changeFrameHeight}
          colorFrame={colorFrame}
          setColorFrame={setColorFrame}
          colorsFrame={colorsFrame}
          setColorsFrame={setColorsFrame}
          isColorpickerVisible={isColorpickerVisible}
          setIsColorpickerVisible={setIsColorpickerVisible}
          setWasColorPickerClicked={setWasColorPickerClicked}
          frameWheels={frameWheels}
          changeFrameWheels={changeFrameWheels}
          constFrame={constFrame}
        />
        <ConfiguratorTopTable
          tableTopMaterial={tableTopMaterial}
          changeTableTopMaterial={changeTableTopMaterial}
          tableTopBreed={tableTopBreed}
          changeTableTopBreed={changeTableTopBreed}
          tableTopDspColor={tableTopDspColor}
          changeTableTopColorDsp={changeTableTopColorDsp}
          tableTopMdfColor={tableTopMdfColor}
          changeTableTopColorMdf={changeTableTopColorMdf}
          tableTopThickness={tableTopThickness}
          changeTableTopThickness={changeTableTopThickness}
          tableTopDepth={tableTopDepth}
          tableTopSetDepth={tableTopSetDepth}
          tableTopLength={tableTopLength}
          tableTopSetLength={tableTopSetLength}
          tableTopDepthStart={tableTopDepthStart}
          tableTopSetDepthStart={tableTopSetDepthStart}
          tableTopLengthStart={tableTopLengthStart}
          tableTopSetLengthStart={tableTopSetLengthStart}
          tableTopTonning={tableTopTonning}
          changeTableTopTone={changeTableTopTone}
          confTableTop={confTableTop}
        />
        <ConfiguratorOptions
          frameCount={frameCount}
          tableTopLength={tableTopLength}
          holesPosition={holesPosition}
          changeHolesPosition={changeHolesPosition}
          holesKind={holesKind}
          changeHolesKind={changeHolesKind}
          incline={incline}
          setIncline={setIncline}
          systemBlock={systemBlock}
          changeSystemBlock={changeSystemBlock}
          monitor={monitor}
          changeMonitor={changeMonitor}
          cableManagement={cableManagement}
          setCableManagement={setCableManagement}
          charging={charging}
          changeCharging={changeCharging}
          rosette={rosette}
          changeRosette={changeRosette}
          headphoneHook={headphoneHook}
          changeHeadphodeHook={changeHeadphodeHook}
          coaster={coaster}
          changeCoaster={changeCoaster}
          barKind={barKind}
          changeBarKind={changeBarKind}
          barPosition={barPosition}
          changeBarPosition={changeBarPosition}
          twoDrawersKind={twoDrawersKind}
          changeTwoDrawersKind={changeTwoDrawersKind}
          twoDrawersPosition={twoDrawersPosition}
          changeTwoDrawersPosition={changeTwoDrawersPosition}
          plywoodBoxKind={plywoodBoxKind}
          changePlywoodBoxKind={changePlywoodBoxKind}
          plywoodBoxPosition={plywoodBoxPosition}
          changePlywoodBoxPosition={changePlywoodBoxPosition}
          tonePlywoodBox={tonePlywoodBox}
          setTonePlywoodBox={setTonePlywoodBox}
          bagHook={bagHook}
          changeBageHook={changeBageHook}
          bracket={bracket}
          changeBracket={changeBracket}
          tableTopMaterial={tableTopMaterial}
          confOpt={confOpt}
        />
        <ConfiguratorTextarea
          message={message}
          setMessage={setMessage}
          confField={confField}
        />
        <ConfiguratorControls
          message={message}
          counter={counter}
          setCounter={setCounter}
          price={price}
          frameCount={frameCount}
          frameHeight={frameHeight}
          colorFrame={colorFrame}
          isColorpickerVisible={isColorpickerVisible}
          wasColorPickerClicked={wasColorPickerClicked}
          frameWheels={frameWheels}
          tableTopMaterial={tableTopMaterial}
          tableTopBreed={tableTopBreed}
          tableTopMdfColor={tableTopMdfColor}
          tableTopDspColor={tableTopDspColor}
          tableTopThickness={tableTopThickness}
          tableTopLength={tableTopLength}
          tableTopDepth={tableTopDepth}
          tableTopTonning={tableTopTonning}
          holesKind={holesKind}
          holesPosition={holesPosition}
          incline={incline}
          systemBlock={systemBlock}
          monitor={monitor}
          cableManagement={cableManagement}
          charging={charging}
          rosette={rosette}
          headphoneHook={headphoneHook}
          coaster={coaster}
          barKind={barKind}
          barPosition={barPosition}
          twoDrawersKind={twoDrawersKind}
          twoDrawersPosition={twoDrawersPosition}
          plywoodBoxKind={plywoodBoxKind}
          plywoodBoxPosition={plywoodBoxPosition}
          tonePlywoodBox={tonePlywoodBox}
          bagHook={bagHook}
          bracket={bracket}
          id={id}
          isAddingToCart={isAddingToCart}
          setIsAddingToCart={setIsAddingToCart}
          isAddedToCart={isAddedToCart}
          setIsAddedToCart={setIsAddedToCart}
          addToCartBtn={addToCartBtn}
          addedCartToBtn={addedCartToBtn}
          constFrame={constFrame}
          confTableTop={confTableTop}
          confOpt={confOpt}
        />
      </div>
    </div>
  )
}

export default ConfiguratorFilter