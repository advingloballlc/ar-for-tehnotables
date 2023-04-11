import React from 'react'
import gsap from 'gsap'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

const InovationSlider = ({ innovationListItems }) => {
  return (
    <Swiper
      className="about-inovation__slider about-inovation-slider"
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      speed={500}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      navigation={{
        prevEl: '.about-inovation__slider-prev',
        nextEl: '.about-inovation__slider-next',
      }}
      onSlideChange={() => {
        let sliderTl = gsap.timeline()

        sliderTl
          .from('.about-inovation-slider__item.swiper-slide-next + * + * .about-inovation-slider__item-inner', .5, {
            scaleY: 0, delay: .2, onComplete() {
              sliderTl.set(this.targets(), { clearProps: 'all' })
            }
          })
          .from('.about-inovation-slider__item.swiper-slide-next + * + * .about-inovation-slider__item-inner *', .4, {
            opacity: 0, y: -20, stagger: .15, onComplete() {
              sliderTl.set(this.targets(), { clearProps: 'all' })
            }
          }, '-=.3')
      }}
    >
      { innovationListItems.map((slide, index) => {
          return (
            <SwiperSlide className="about-inovation-slider__item" key={index++}>
              <div className="about-inovation-slider__item-inner">
                <div className="about-inovation-slider__item-title">{slide.itemName}</div>
                <p className="about-inovation-slider__item-desc">{slide.itemDescription}</p>
              </div>
            </SwiperSlide>
          )
      }) }
    </Swiper>
  )
}

export default InovationSlider