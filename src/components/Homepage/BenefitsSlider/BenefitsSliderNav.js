import React from 'react'

import sprite from '../../../icons/sprite.svg'

const BenefitsSliderNav = () => {
  return (
    <div className="benefits-slider__nav">
      <div className="benefits-slider__nav-btn benefits-slider__nav-prev">
        <svg><use href={`${sprite}#prev-arrow`} /></svg>
      </div>
      <div className="benefits-slider__nav-btn benefits-slider__nav-next">
        <svg><use href={`${sprite}#next-arrow`} /></svg>
      </div>
    </div>
  )
}

export default BenefitsSliderNav