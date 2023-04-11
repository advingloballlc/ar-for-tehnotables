import React, { useEffect } from 'react'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'
import  { Pagination, Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Intro.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-fade'

import { showVideoModal } from '../../../utils/showVideoModal'
import { detectLighthouse } from './../../../utils/detectLighthouse'

import sprite from '../../../icons/sprite.svg'

const IntroSlider = ({ firstScreenSlider, playBtnText }) => {
  let introTl = gsap.timeline()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!detectLighthouse()) return null

    ScrollTrigger.matchMedia({
      '(min-width: 991px)': () => {
        introTl
          .from('.intro-slider__item.swiper-slide-active .intro-slider__item-title', .6, { opacity: 0, y: -120, delay: 5.2, onComplete() {
            introTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-slider__item.swiper-slide-active .intro-slider__item-btn > *', .5, { opacity: 0, x: -100, stagger: -.15, onComplete() {
            introTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-slider__pagination-item', .6, { opacity: 0, x: -50, stagger: .05, onComplete() {
            introTl.set(this.targets(), { clearProps: 'all' })
          }})
      },
      '(max-width: 990px)': () => {
        introTl
          .from('.intro-slider__item.swiper-slide-active .intro-slider__item-title', .6, { opacity: 0, y: -120, delay: 5.2, onComplete() {
            introTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-slider__item.swiper-slide-active .intro-slider__item-btn > *', .5, { opacity: 0, x: -100, stagger: -.15, onComplete() {
            introTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-slider__nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
            introTl.set(this.targets(), { clearProps: 'all' })
          }})
      }
    })

    return () => {
      introTl.kill()
    }
  }, [])

  return (
    <Swiper
      className="intro__slider intro-slider"
      modules={[Pagination, Navigation, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      speed={500}
      allowTouchMove={false}
      navigation={{
        prevEl: '.intro-slider__nav-prev',
        nextEl: '.intro-slider__nav-next',
      }}
      pagination={{
        clickable: true,
        el: '.intro-slider__pagination-inner',
        bulletClass: 'intro-slider__pagination-item',
        bulletActiveClass: 'active',
        renderBullet: (index, className) => {
          return (`
            <div class="${className}">
              <div class="intro-slider__pagination-item-inner">
                <div class="intro-slider__pagination-item-text">
                  ${firstScreenSlider[index].slideName}
                </div>
              </div>
            </div>
          `)
        }
      }}
      onInit={swiper => {
        swiper.slides.forEach(slide => {
          if (slide.firstElementChild.classList.contains('lazy')) {
            let video = slide.firstElementChild,
                source = video.children[0]

            video.poster = video.dataset.poster
            source.src = source.dataset.src

            video.removeAttribute('data-poster')
            source.removeAttribute('data-src')
          }
        })
      }}
    >
      {
        firstScreenSlider.map((slide, index) => {
          const img = withArtDirection(getImage(slide.slideBackgroungImg.localFile), [
            {
              media: "(max-width: 768px)",
              image: getImage(slide.slideBackgroungTabletImg.localFile),
            },
            {
              media: "(max-width: 480px)",
              image: getImage(slide.slideBackgroungMobileImg.localFile),
            },
          ])

          return (
            <SwiperSlide className="intro-slider__item" key={index++}>
              {
                slide.slideFileVideo?.mediaItemUrl
                  ? <video
                      className="lazy"
                      data-poster={slide.slideBackgroungImg.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(' ')[0]}
                      muted={true} 
                      loop={true} 
                      autoPlay={true} 
                      controls={false} 
                      width={1920} 
                      height={740}
                      preload="none"
                      playsInline={true}
                    >
                      <source data-src={slide.slideFileVideo?.mediaItemUrl} type="video/mp4" />
                    </video>
                  : <GatsbyImage image={img} alt={slide.slideName} loading={index++ === 1 ? 'eager' : 'lazy'} />
              }
              { (slide.slideFileVideo?.mediaItemUrl || slide.slideTitle) && <div className="container">
                {
                  slide.slideTitle && 
                    (index === 0
                      ? <div className="intro-slider__item-title" dangerouslySetInnerHTML={{ __html: slide.slideTitle }} />
                      : <div className="intro-slider__item-title" dangerouslySetInnerHTML={{ __html: slide.slideTitle }} />)
                }
                {
                  slide.slideFileVideo?.mediaItemUrl && <div 
                    className="intro-slider__item-btn video-btn"
                    onClick={() => 
                      showVideoModal(slide.slideFileVideo?.mediaItemUrl, slide.slideBackgroungImg)}
                  >
                    <div className="intro-slider__item-icon video-btn__icon">
                      <svg viewBox="0 0 65 65" width="65" height="65" className="intro-slider__item-shape video-btn__shape">
                        <circle r="32.5" cx="32.5" cy="32.5" />
                      </svg>
                      <svg className="intro-slider__item-play video-btn__play">
                        <use href={`${sprite}#play`} />
                      </svg>
                    </div>
                    <p className="intro-slider__item-text video-btn__text">{playBtnText}</p>
                  </div>
                }
              </div> }
            </SwiperSlide>
          )
        })
      }
      <div className="intro-slider__pagination">
        <div className="intro-slider__pagination-inner" />
      </div>
      <div className="intro-slider__nav">
        <div className="intro-slider__nav-btn intro-slider__nav-prev">
          <svg>
            <use href={`${sprite}#prev-arrow`} />
          </svg>
        </div>
        <div className="intro-slider__nav-btn intro-slider__nav-next">
          <svg>
            <use href={`${sprite}#next-arrow`} />
          </svg>
        </div>
      </div>
    </Swiper>
  )
}

export default IntroSlider