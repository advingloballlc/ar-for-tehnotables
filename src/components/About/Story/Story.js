import React, { useEffect, useRef } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import './Story.scss'

import sprite from '../../../icons/sprite.svg'

const Story = ({ ourStoryTitle, ourStorySliderItems }) => {
  let curnum = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    curnum.current.innerHTML = ourStorySliderItems[0].itemDate

    let storyTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.story',
        start: 'center bottom'
      }
    })

    storyTl
      .from('.story__title', .5, { y: '100%', onComplete() {
        storyTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      storyTl.kill()
    }
  }, [])

  return (
    <section className="story">
      <div className="container">
        <div className="story__top">
          <div className="story__title-wrapper title-wrapper">
            <div className="story__title title title--small">{ourStoryTitle}</div>
          </div>
          <div className="story__slider-nav">
            <div className="story__slider-btn story__slider-prev">
              <svg><use href={`${sprite}#prev-arrow`} /></svg>
            </div>
            <div className="story__slider-btn story__slider-next">
              <svg><use href={`${sprite}#next-arrow`} /></svg>
            </div>
          </div>
        </div>
        <Swiper
          className="story__slider story-slider"
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          speed={700}
          autoplay={{
            delay: 10000
          }}
          navigation={{
            prevEl: '.story__slider-prev',
            nextEl: '.story__slider-next',
          }}
          pagination={{
            clickable: true,
            el: '.story-slider__pagination',
            bulletClass: 'story-slider__pagination-item',
            bulletActiveClass: 'active',
            renderBullet: (index, className) => {
              return (`
                <div class="${className}">${ourStorySliderItems[index].itemDate}</div>
              `)
            }
          }}
          onSlideChange={swiper => {
            if (swiper.initialized || swiper.runCallbacksOnInit) {
              let index = swiper.realIndex
              gsap.to(curnum.current, .2, { force3D: true, y: -10, opacity: 0, ease: 'Power2.easeOut', onComplete: () => {
                  gsap.to(curnum.current, .1, { force3D: true, y: 10 })
                  curnum.current.innerHTML = ourStorySliderItems[index].itemDate
                }})
              gsap.to(curnum.current, .2, { force3D: true, y: 0, opacity: 1, ease: 'Power2.easeOut', delay: .3 })
            }
          }}
        >
          {
            ourStorySliderItems.map((slide, index) => {
              const image = getImage(slide.itemImage.localFile)
              
              return (
                <SwiperSlide className="story-slider__item" key={index++}>
                  <div className="story-slider__item-inner">
                    <div className="story-slider__item-content">
                      <div className="story-slider__item-title title title--small">{slide.itemTitle}</div>
                      <p className="story-slider__item-desc">{slide.itemDescription}</p>
                    </div>
                    <div className="story-slider__item-photo">
                      <GatsbyImage image={image} alt={slide.itemTitle} loading="lazy" />
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <div className="story-slider__pagination" />
      </div>
      <div className="story__counter" ref={curnum} />
    </section>
  )
}

export default Story