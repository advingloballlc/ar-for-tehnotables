import React, { useEffect, useRef } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Navigation, Parallax } from 'swiper'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'

import 'swiper/scss'
import 'swiper/scss/mousewheel'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/parallax'

import { isBrowser } from '../../../utils/isBrowser'

const FullpageSlider = ({ isMobile, setIsHideHeaderFullpage, setIsDraw, fullScreenSlider }) => {
  const slider = useRef(null)

  let startSlider = useRef(true),
      endSlider = useRef(false)

  const checkFullpage = () => {
    if (!isBrowser()) return null

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        if ((slider.current.parentElement.offsetTop - window.scrollY) === 0) {

          if (startSlider.current) {
            if (document.documentElement.classList.contains('use-mouse')) {
              gsap.to(window, {duration: 1, scrollTo: '.work-position-wrapper', ease: "Power1.easeInOut"})

              setTimeout(() => {
                document.body.style.overflow = ''
                slider.current.parentElement.previousElementSibling.style.overflowY = ''
                slider.current.parentElement.nextElementSibling.style.overflowY = ''
  
                setIsHideHeaderFullpage(false)
                setIsDraw(false)
              }, 1000)
            }
          }
          if (endSlider.current) {
            if (document.documentElement.classList.contains('use-mouse')) {
              gsap.to(window, {duration: 1, scrollTo: '.discount-wrapper', ease: "Power1.easeInOut"})
              
              setTimeout(() => {
                document.body.style.overflow = ''
                slider.current.parentElement.previousElementSibling.style.overflowY = ''
                slider.current.parentElement.nextElementSibling.style.overflowY = ''
  
                setIsHideHeaderFullpage(false)
                setIsDraw(false)
              }, 1000)
            }
          }
        }
      }
    })
  }

  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener('wheel', checkFullpage, {passive: true})
      window.addEventListener('touchmove', checkFullpage)
      window.addEventListener('touchstart', checkFullpage)
    }

    return () => {
      if (isBrowser()) {
        window.removeEventListener('wheel', checkFullpage, {passive: true})
        window.removeEventListener('touchmove', checkFullpage)
        window.removeEventListener('touchstart', checkFullpage)
      }
    }
  }, [])

  return (
    <Swiper
      className='fullpage__slider fullpage-slider'
      modules={[Mousewheel, Pagination, Navigation, Parallax]}
      ref={slider}
      spaceBetween={0}
      slidesPerView={1}
      direction='vertical'
      speed={1500}
      allowTouchMove={false}
      mousewheel={true}
      parallax={true}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: '.fullpage-slider__prev',
        nextEl: '.fullpage-slider__next'
      }}
      breakpoints={{
        1025: {
          allowTouchMove: false,
        },
        481: {
          direction: 'vertical',
          allowTouchMove: true,
        },
        0: {
          allowTouchMove: true,
          direction: 'horizontal'
        }
      }}
      onInit={() => ScrollTrigger.refresh()}
      onSlideChangeTransitionEnd={swiper => {
        if (swiper.initialized || swiper.runCallbacksOnInit) {
          startSlider.current = swiper.isBeginning
          endSlider.current = swiper.isEnd
        }
      }}
      onSlideChangeTransitionStart={swiper => {
        if (swiper.initialized || swiper.runCallbacksOnInit) {
          startSlider.current = false
          endSlider.current = false
        }
      }}
    >
      {
        fullScreenSlider.map((slide, index) => {
          const image = getImage(slide.slideImg.localFile)

          return (
            <SwiperSlide className='fullpage-slider__item' key={index++}>
              <div className="fullpage-slider__item-photo">
                <GatsbyImage image={image} alt={slide.slideTitle} loading="lazy" />
              </div>
              <div className='fullpage-slider__item-content' data-swiper-parallax={!isMobile ? '-300%' : '-100%'}>
                <div className='fullpage-slider__item-title'>{slide.slideTitle}</div>
                <p className='fullpage-slider__item-desc'>{slide.slideText}</p>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default FullpageSlider