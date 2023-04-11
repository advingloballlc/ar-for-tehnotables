import React, { useContext } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

import { PrefixContext } from '../../context/PrefixProvider'

const RecomendedSlider = ({ slider, changeVariability }) => {
  let prefix = useContext(PrefixContext)
  
  return (
    <Swiper
      className="recomended__slider recomended-slider"
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      speed={500}
      watchSlidesProgress={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      navigation={{
        prevEl: '.recomended__slider-prev',
        nextEl: '.recomended__slider-prev-next',
      }}
      breakpoints={{
        991: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        0: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }}
    >
      {
        slider.map(slide => {
          const image = getImage(slide.imgSrc)

          return (
            <SwiperSlide className="recomended-slider__item sample-item" key={slide.id}>
              <div className="recomended-slider__item-inner sample-item__inner">
                <Link className="recomended-slider__item-link sample-item__link" to={`${prefix}${slide.link}`} />
                <div className="recomended-slider__item-preview sample-item__preview">
                  { 
                    slide.isChanged
                      ? <img src={slide.imgSrc} alt={slide.title} width={350} height={405} />
                      : <GatsbyImage image={image} alt={slide.title} loading="lazy" />
                  }
                </div>
                <div className="recomended-slider__item-controls sample-item__controls">
                  <div className="recomended-slider__item-cat sample-item__cat">{slide.cat}</div>
                  {
                    slide.variability && slide.variability.length !== 0 && <div className="recomended-slider__item-variability sample-item__variability">
                      {
                        slide.variability.map(item => {
                          return (
                            <div
                              className={`recomended-slider__item-variability-elem sample-item__variability-elem ${ item.isActive ? 'active' : '' }`}
                              data-img-src={item.image.localFile.publicURL}
                              key={item.id}
                              onClick={e => changeVariability(slide.id, item.id, e)}
                            >
                              <span style={{
                                backgroundColor: item.color[1], 
                                borderColor: item.color[1] === '#ffffff' ? '#ccc' : item.color[1]
                              }} />
                            </div>
                          )
                        })
                      }
                    </div>
                  }
                </div>
                <div className="recomended-slider__item-title sample-item__title">{slide.title}</div>
                <div className="recomended-slider__item-price sample-item__price">{slide.price} uah</div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default RecomendedSlider