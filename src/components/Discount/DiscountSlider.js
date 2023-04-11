import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import './Discount.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'

const DiscountSlider = ({ title, gallery }) => {
  return (
    <div className="discount__slider-wrapper">
      <Swiper
        className="discount__slider discount-slider"
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        speed={500}
        autoplay={{
          delay: 5000
        }}
        pagination={{
          clickable: true,
          el: '.discount-slider__pagination',
          bulletClass: 'discount-slider__pagination-item',
          bulletActiveClass: 'active',
          renderBullet: (index, className) => {
            return (`
              <div class="${className}"></div>
            `)
          }
        }}
      >
        { gallery.map((slide, index) => {
            const image = getImage(slide.localFile)
          
            return (
              <SwiperSlide className="discount-slider__item" key={index++}>
                <GatsbyImage image={image} alt={`${title} ${index + 1}`} loading="lazy" />
              </SwiperSlide>
            )
        }) }
      </Swiper>
      { gallery.length > 1 && <div className="discount-slider__pagination" /> }
    </div>
  )
}

export default DiscountSlider