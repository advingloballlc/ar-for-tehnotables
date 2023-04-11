import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import GoogleMap from 'google-map-react'
import { Pagination, Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Intro.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-fade'

import { getHrefPhone } from '../../../utils/getHrefPhone'
import { phoneGoal } from '../../../utils/phoneGoal'

import Marker from './Marker'
import { styles } from '../../../utils/map-styles'

import sprite from '../../../icons/sprite.svg'
import { detectLighthouse } from '../../../utils/detectLighthouse'

const ContactsIntro = ({ 
  title, 
  headers,
  info,
  socialList, 
  contactsEmail, 
  contactsPhones, 
  contactsScheduleTime 
}) => {
  useEffect(() => {
    if (!detectLighthouse()) return null
    
    let contactIntroTl = gsap.timeline()

    ScrollTrigger.matchMedia({
      '(min-width: 481px)': () => {
        contactIntroTl
          .from('.contacts-intro__title', .5, { delay: .2, y: '100%', onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.contacts-intro__head-title', .5, { y: -20, opacity: 0, onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.contacts-intro-slider__pagination-item', .6, { x: -20, opacity: 0, stagger: .05, onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.contacts-intro__info-item', .6, { y: 20, opacity: 0, stagger: .05, onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.5')
          .from('.contacts-intro__slider', .5, { opacity: 0, onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
      },
      '(max-width: 480px)': () => {
        contactIntroTl
          .from('.contacts-intro__title', .5, { delay: .2, y: '100%', onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.contacts-intro__head-title', .5, { y: -20, opacity: 0, onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.contacts-intro-slider__pagination-item', .6, { x: -20, opacity: 0, stagger: .05, onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.contacts-intro__slider', .5, { opacity: 0, onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.contacts-intro-slider__nav-mobile > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.contacts-intro__info-item', .6, { y: 20, opacity: 0, stagger: .05, onComplete() {
            contactIntroTl.set(this.targets(), { clearProps: 'all' })
          }})
      }
    })

    return () => {
      contactIntroTl.kill()
    }
  }, [])

  return (
    <section className="intro contacts-intro">
      <div className="container">
        <div className="contacts-intro__wrapper">
          <div className="contacts-intro__title-wrapper title-wrapper">
            <h1 className="contacts-intro__title title title--big">{title}</h1>
          </div>
          <div className="contacts-intro__head">
            <div className="contacts-intro__head-title local-title local-title--grey">
              {headers.addressTitle}
              <div className="contacts-intro-slider__nav">
                <div className="contacts-intro-slider__btn contacts-intro-slider__prev">
                  <svg><use href={`${sprite}#prev-arrow`} /></svg>
                </div>
                <div className="contacts-intro-slider__btn contacts-intro-slider__next">
                  <svg><use href={`${sprite}#next-arrow`} /></svg>
                </div>
              </div>
            </div>
            <div className="contacts-intro-slider__pagination" />
          </div>
          <div className="contacts-intro__inner">
            <div className="contacts-intro__info">
              <div className="contacts-intro__info-inner">
                <div className="contacts-intro__info-item">
                  <div className="contacts-intro__info-title local-title local-title--grey">{headers.scheduleTitle}</div>
                  <p className="contacts-intro__info-text">{contactsScheduleTime}</p>
                </div>
                <div className="contacts-intro__info-item">
                  <div className="contacts-intro__info-title local-title local-title--grey">{headers.phonesTitle}</div>
                  <div className="contacts-intro__info-links">
                    { contactsPhones.map((phone, index) => {
                      return (
                        <a 
                          className="contacts-intro__info-link" 
                          href={getHrefPhone(phone.number)} 
                          key={index++}
                          onClick={() => phoneGoal(phone.number)}
                        >
                          {phone.number}
                        </a>
                      )
                    }) }
                  </div>
                </div>
                <div className="contacts-intro__info-item">
                  <div className="contacts-intro__info-title local-title local-title--grey">{headers.emailsTitle}</div>
                  <div className="contacts-intro__info-links">
                    <a className="contacts-intro__info-link" href={`mailto:${contactsEmail}`}>
                      {contactsEmail}
                    </a>
                  </div>
                </div>
                <div className="contacts-intro__info-item">
                  <div className="contacts-intro__info-title local-title local-title--grey">{socialList.blockTitle}</div>
                  <ul className="contacts-intro__info-social">
                    <li className="contacts-intro__info-social-item">
                      <a className="contacts-intro__info-social-link" href={socialList.youtubeLink} target="_blank" rel="noreferrer">
                        <svg><use href={`${sprite}#youtube`} /></svg>
                      </a>
                    </li>
                    <li className="contacts-intro__info-social-item">
                      <a className="contacts-intro__info-social-link" href={socialList.facebookLink} target="_blank" rel="noreferrer">
                        <svg><use href={`${sprite}#facebook`} /></svg>
                      </a>
                    </li>
                    <li className="contacts-intro__info-social-item">
                      <a className="contacts-intro__info-social-link" href={socialList.instagramLink} target="_blank" rel="noreferrer">
                        <svg><use href={`${sprite}#instagram`} /></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contacts-intro-slider__wrapper">
              <Swiper
                className="contacts-intro__slider contacts-intro-slider"
                modules={[Pagination, Navigation, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                speed={500}
                allowTouchMove={false}
                navigation={{
                  prevEl: '.contacts-intro-slider__prev',
                  nextEl: '.contacts-intro-slider__next'
                }}
                pagination={{
                  clickable: true,
                  el: '.contacts-intro-slider__pagination',
                  bulletClass: 'contacts-intro-slider__pagination-item',
                  bulletActiveClass: 'active',
                  renderBullet: (index, className) => {
                    return (`
                      <div class="${className}">
                        <div class="contacts-intro-slider__pagination-item-inner">
                          <div class="contacts-intro-slider__pagination-item-title">
                            ${info[index].city}
                          </div>
                          <div class="contacts-intro-slider__pagination-item-desc">
                            ${info[index].street}
                          </div>
                        </div>
                      </div>
                    `)
                  }
                }}
                breakpoints={{
                  489: {
                    navigation: {
                      nextEl: '.contacts-intro-slider__next',
                      prevEl: '.contacts-intro-slider__prev',
                    }
                  },
                  0: {
                    navigation: {
                      nextEl: '.contacts-intro-slider__next-mobile',
                      prevEl: '.contacts-intro-slider__prev-mobile',
                    }
                  }
                }}
                onSlideChange={swiper => {
                  let pagination = swiper.pagination.el,
                      activeEl = [...pagination.children].filter(item => item.classList.contains('active'))[0],
                      offsetLeft = activeEl.offsetLeft - 20
                  
                  pagination.scrollLeft = offsetLeft
                }}
              >
                {
                  info.map((item, index) => {
                    return (
                      <SwiperSlide className="contacts-intro-slider__item" key={index++}>
                        { 
                          detectLighthouse()  
                            ? <GoogleMap
                                bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP_API_KEY }}
                                defaultCenter={{ lat: item.map.latitude, lng: item.map.longitude }}
                                defaultZoom={9}
                                options={{ styles }}
                              >
                                <Marker
                                  lat={item.map.latitude}
                                  lng={item.map.longitude}
                                />
                              </GoogleMap>
                            : item.city
                        }
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
              <div className="contacts-intro-slider__nav-mobile">
                <div className="contacts-intro-slider__btn-mobile contacts-intro-slider__prev-mobile">
                  <svg><use href={`${sprite}#prev-arrow`} /></svg>
                </div>
                <div className="contacts-intro-slider__btn-mobile contacts-intro-slider__next-mobile">
                  <svg><use href={`${sprite}#next-arrow`} /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ContactsIntro)