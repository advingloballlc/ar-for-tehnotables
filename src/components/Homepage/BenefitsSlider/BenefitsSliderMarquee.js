import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BenefitsSliderMarquee = ({ healthySlider }) => {
  return (
    <div className="benefits-slider__marquee">
      { healthySlider.map((slide, index) => {
          const image = getImage(slide.slideImg.localFile)

          return (
            <div className="benefits-slider__marquee-item benefits-slider-item" key={index++}>
              <div className="benefits-slider-item__title title title--small" dangerouslySetInnerHTML={{ __html: slide.slideTitle }} />
              <p className="benefits-slider-item__desc">{slide.slideDescription}</p>
              <div className="benefits-slider-item__photo">
                <GatsbyImage image={image} alt={slide.slideTitle} loading="lazy" />
              </div>
            </div>
          )
      }) }
    </div>
  )
}

export default BenefitsSliderMarquee