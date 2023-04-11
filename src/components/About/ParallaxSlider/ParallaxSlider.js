import React, { useState, useRef, useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Parallax, Controller, Autoplay } from 'swiper'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './ParallaxSlider.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/parallax'

import DrawLogo from '../../DrawLogo/DrawLogo'

import sprite from '../../../icons/sprite.svg'

const ParallaxSlider = ({ secondScreenSliderItems }) => {
  let [ controlledSlider, setControlledSlider ] = useState(null)
  let [ isDraw, setIsDraw ] = useState(false)

  let curnum = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let parallaxSliderTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parallax-slider',
        start: 'center bottom',
        onEnter: () => {
          setIsDraw(true)
        }
      }
    })

    return () => {
      parallaxSliderTl.kill()
    }
  })

  return (
    <section className="parallax-slider">
      <div className="parallax-slider__pagination" />
      <div className="parallax-slider__interactive">
        <div className="parallax-slider__btn parallax-slider__prev">
          <svg><use href={`${sprite}#prev-arrow`} /></svg>
        </div>
        <div className="parallax-slider__counter">
          <div className="parallax-slider__counter-current" ref={curnum}>01</div>
          <div className="parallax-slider__counter-separator">/</div>
          <div className="parallax-slider__counter-total">05</div>
        </div>
        <div className="parallax-slider__btn parallax-slider__next">
          <svg><use href={`${sprite}#next-arrow`} /></svg>
        </div>
      </div>
      <DrawLogo isDraw={isDraw} />
      <Swiper
        className="parallax-slider__text"
        modules={[Pagination, Navigation, Controller, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1500}
        loop={true}
        waitForTransition={true}
        controller={{ control: controlledSlider }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        navigation={{
          prevEl: '.parallax-slider__prev',
          nextEl: '.parallax-slider__next'
        }}
        pagination={{
          clickable: true,
          el: '.parallax-slider__pagination',
          bulletClass: 'parallax-slider__pagination-item',
          bulletActiveClass: 'active',
          renderBullet: (index, className) => {
            return (`
              <div class="${className}"></div>
            `)
          }
        }}
      >
        {
          secondScreenSliderItems.map((slide, index) => {
            return (
              <SwiperSlide className="parallax-slider__text-item" key={index++}>
                <div className="parallax-slider__text-inner">
                  <div className="parallax-slider__text-side">
                    <div className="parallax-slider__text-title">{slide.itemContent.itemTitle}</div>
                    <div className="parallax-slider__text-desc">{slide.itemContent.itemText}</div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Swiper
        className="parallax-slider__img"
        modules={[Pagination, Parallax, Controller]}
        parallax={true}
        spaceBetween={0}
        slidesPerView={1}
        speed={1500}
        loop={true}
        waitForTransition={true}
        onSwiper={setControlledSlider}
        pagination={{
          el: '.parallax-slider__counter-total',
          type: 'custom',
          renderCustom: (swiper, current, total) => {
            return total < 10 ? `0${total}` : total
          }
        }}
        onSlideChange={(swiper) => {
          if (swiper.initialized || swiper.runCallbacksOnInit) {
            if (!curnum) return

            let index = swiper.realIndex + 1
            gsap.to(curnum.current, .2, { force3D: true, y: -10, opacity: 0, ease: 'Power2.easeOut', onComplete: () => {
              gsap.to(curnum.current, .1, { force3D: true, y: 10 })
              curnum.current.innerHTML = index < 10 ? `0${index}` : index
            }})
            gsap.to(curnum.current, .2, { force3D: true, y: 0, opacity: 1, ease: 'Power2.easeOut', delay: .3 })
          }
        }}
      >
        {
          secondScreenSliderItems.map((slide, index) => {
            const image = getImage(slide.itemImage.localFile)
            
            return (
              <SwiperSlide className="parallax-slider__img-item" key={index++}>
                <div
                  className="parallax-slider__img-photo"
                  data-swiper-parallax="30%"
                >
                  <GatsbyImage image={image} alt={slide.itemContent.itemTitle} loading="lazy" />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default ParallaxSlider