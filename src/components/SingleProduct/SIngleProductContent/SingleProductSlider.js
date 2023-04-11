import React, { useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

import sprite from '../../../icons/sprite.svg'

const SingleProductSlider = ({ interiorGalleryTitle, interiorGallery }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let singleProductSliderTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-product-content__slider-wrapper',
        start: 'center bottom'
      }
    })

    singleProductSliderTl
      .from('.single-product-content__slider-title', .5, { y: '100%', onComplete() {
        singleProductSliderTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-product-content__slider-nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
        singleProductSliderTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      singleProductSliderTl.kill()
    }
  }, [])

  return (
    <div className="single-product-content__slider-wrapper">
      <div className="single-product-content__slider-top">
        <div className="single-product-content__slider-title-wrapper title-wrapper">
          <div className="single-product-content__slider-title title title--small">{interiorGalleryTitle}</div>
        </div>
        <div className="single-product-content__slider-nav">
          <div className="single-product-content__slider-btn single-product-content__slider-prev">
            <svg>
              <use href={`${sprite}#prev-arrow`} />
            </svg>
          </div>
          <div className="single-product-content__slider-btn single-product-content__slider-next">
            <svg>
              <use href={`${sprite}#next-arrow`} />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        className="single-product-content__slider single-product-content-slider"
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        speed={500}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        navigation={{
          prevEl: '.single-product-content__slider-prev',
          nextEl: '.single-product-content__slider-next',
        }}
      >
        { interiorGallery.map((slide, index) => {
          const image = getImage(slide.localFile)

          return (
            <SwiperSlide className="single-product-content-slider__item" key={index++}>
              {
                slide.localFile
                  ? <GatsbyImage image={image} alt={`${interiorGalleryTitle} ${index + 1}`} loading="lazy" />
                  : <img src={slide.sourceUrl} alt={`${interiorGalleryTitle} ${index + 1}`} width={860} height={630} loading="lazy" />
              }
              
            </SwiperSlide>
          )
        }) }
      </Swiper>
    </div>
  )
}

export default React.memo(SingleProductSlider)