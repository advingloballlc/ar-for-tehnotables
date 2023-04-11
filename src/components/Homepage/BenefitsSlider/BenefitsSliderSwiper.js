import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './BenefitsSlider.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

const BenefitsSliderSwiper = ({ healthySlider }) => {
  return (
    <Swiper
      className="benefits-slider__marquee"
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      speed={500}
      navigation={{
        prevEl: '.benefits-slider__nav-prev',
        nextEl: '.benefits-slider__nav-next',
      }}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
    >
      {
        healthySlider.map((slide, index) => {
          const image = getImage(slide.slideImg.localFile)

          return (
            <SwiperSlide className="benefits-slider__marquee-item benefits-slider-item" key={index++}>
              <div className="benefits-slider-item__title title title--small" dangerouslySetInnerHTML={{ __html: slide.slideTitle }} />
              <p className="benefits-slider-item__desc">{slide.slideDescription}</p>
              <div className="benefits-slider-item__photo">
                <GatsbyImage image={image} alt={slide.slideTitle} loading="lazy" />
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default BenefitsSliderSwiper