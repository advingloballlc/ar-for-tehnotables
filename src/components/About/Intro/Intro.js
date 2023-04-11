import React, { useRef, useState } from 'react'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'
import gsap from 'gsap'
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Intro.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/scrollbar'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-fade'

import { detectLighthouse } from '../../../utils/detectLighthouse'

const AboutIntro = ({ firstScreenSliderItems }) => {
  const [ play, setPlay ] = useState(true)

  let curnum = useRef()
  let slider = useRef()

  let sliderTl = gsap.timeline()

  const playSlider = () => {
    new Promise((resolve, reject) => {
      resolve(setPlay(prev => !prev))
    })
      .then(() => play ? slider.current.swiper.autoplay.stop() : slider.current.swiper.autoplay.start())
  }

  return (
    <div className="intro intro-about">
      <Swiper
        className="intro-about__slider intro-about-slider"
        ref={slider}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={600}
        allowTouchMove={false}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false
        }}
        scrollbar={{
          el: '.intro-about__slider-progress-bar',
          draggable: false,
        }}
        navigation={{
          prevEl: '.intro-about__slider-prev',
          nextEl: '.intro-about__slider-next'
        }}
        pagination={{
          el: '.intro-about__slider-counter-total',
          type: 'custom',
          renderCustom: (swiper, current, total) => {
            return total < 10 ? `0${total}` : total
          }
        }}
        onInit={() => {
          if (!detectLighthouse()) return null

          sliderTl
            .from('.intro-about-slider__item.swiper-slide-active img', .8, { delay: .5, opacity: 0, onComplete() {
              sliderTl.set(this.targets(), { clearProps: 'all' })
            }})
            .from('.intro-about-slider__item.swiper-slide-active .intro-about-slider__item-title', .6, { opacity: 0, y: -120, onComplete() {
              sliderTl.set(this.targets(), { clearProps: 'all' })
            }}, '-=.3')
            .from('.intro-about__slider-controls > *', .6, { opacity: 0, x: -50, stagger: .05, onComplete() {
              sliderTl.set(this.targets(), { clearProps: 'all' })
            }}, '-=.2')
        }}
        onSlideChange={swiper => {
          if (swiper.initialized || swiper.runCallbacksOnInit) {
            let index = swiper.realIndex + 1

            gsap.to(curnum.current, .2, { force3D: true, y: -10, opacity: 0, ease: 'Power2.easeOut', onComplete: () => {
              gsap.to(curnum.current, .1, { force3D: true, y: 10 })
              curnum.current.innerHTML = index < 10 ? `0${index}` : index
            }})
            gsap.to(curnum.current, .2, { force3D: true, y: 0, opacity: 1, ease: 'Power2.easeOut', delay: .3 })
          }
        }}
      >
        { firstScreenSliderItems.map((slide, index) => {
          const image = withArtDirection(getImage(slide.itemImage.localFile), [
            {
              media: "(max-width: 768px)",
              image: getImage(slide.itemImageTablet.localFile),
            },
            {
              media: "(max-width: 480px)",
              image: getImage(slide.itemImageMobile.localFile),
            },
          ])

          return (
            <SwiperSlide className="intro-about-slider__item" key={index++}>
              <GatsbyImage image={image} alt={slide.itemTitle || `About Hero ${index + 1}`} loading={index++ === 1 ? 'eager' : 'lazy'} />
              { slide.itemTitle && <div className="container">
                {
                  index === 0
                    ? <h1 className="intro-about-slider__item-title" dangerouslySetInnerHTML={{ __html: slide.itemTitle }} />
                    : <h3 className="intro-about-slider__item-title" dangerouslySetInnerHTML={{ __html: slide.itemTitle }} />
                }
              </div> }
            </SwiperSlide>
          )
        }) }
      </Swiper>
      <div className="intro-about__slider-controls">
        <div className="container">
          <div className="intro-about__slider-controls-inner">
            <div className="intro-about__slider-counter">
              <div className="intro-about__slider-counter-current" ref={curnum}>01</div>
              <div className="intro-about__slider-counter-separator">/</div>
              <div className="intro-about__slider-counter-total">04</div>
            </div>
            <div className="intro-about__slider-interactive">
              <div className={`intro-about__slider-btn intro-about__slider-prev ${!play ? 'swiper-button-disabled' : ''}`}>
                <span>Prev</span>
                <span>Prev</span>
              </div>
              <div className="intro-about__slider-progress">
                <div className="intro-about__slider-progress-bar" />
              </div>
              <div className={`intro-about__slider-btn intro-about__slider-next ${!play ? 'swiper-button-disabled' : ''}`}>
                <span>Next</span>
                <span>Next</span>
              </div>
            </div>
            <div className="intro-about__slider-btn-wrapper">
              <button
                className="intro-about__slider-play-btn"
                onClick={playSlider}
              >
                <span className={`intro-about__slider-play-btn-inner ${play ? 'rectangle-mode' : 'triangle-mode'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro