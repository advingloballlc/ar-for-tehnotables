import React, { useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Gallery.scss'
import 'swiper/scss'
import 'swiper/scss/autoplay'



const Gallery = ({ gallery }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let galleryTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.gallery',
        start: 'center bottom'
      }
    })

    galleryTl
      .from('.gallery__title', .5, { y: '100%', onComplete() {
        galleryTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      galleryTl.kill()
    }
  }, [])

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__title-wrapper title-wrapper">
          <div className="gallery__title title title--small">{gallery.galleryTitle}</div>
        </div>
      </div>
      <div className="gallery__slider-wrapper">
        <Swiper
          className="gallery__slider gallery-slider"
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          spaceBetween={30}
          slidesPerView={'auto'}
          allowTouchMove={false}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 1,
          }}
          breakpoints={{
            991: {
              spaceBetween: 30
            },
            0: {
              spaceBetween: 20
            }
          }}
        >
          {
            gallery.galleryImages.map((img, index) => {
              const image = getImage(img.localFile)
              
              return (
                <SwiperSlide className="gallery-slider__item" key={index++}>
                  <GatsbyImage image={image} alt={`${gallery.galleryTitle} ${index}`} loading="lazy" />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default React.memo(Gallery)