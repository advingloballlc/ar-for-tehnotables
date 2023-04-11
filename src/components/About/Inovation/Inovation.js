import React, { useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Inovation.scss'

import InovationSlider from './InovationSlider'

import sprite from '../../../icons/sprite.svg'

const AboutInovation = ({ innovationTitle, innovationListItems }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let aboutInovationTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-inovation',
        start: 'center bottom'
      }
    })

    aboutInovationTl
      .from('.about-inovation__title', .5, { y: '100%', onComplete() {
        aboutInovationTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.about-inovation__slider-nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
        aboutInovationTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      aboutInovationTl.kill()
    }
  }, [])

  return (
    <section className="about-inovation">
      <div className="container">
        <div className="about-inovation__top">
          <div className="about-inovation__title-wrapper title-wrapper">
            <div className="about-inovation__title title">{innovationTitle}</div>
          </div>
          <div className="about-inovation__slider-nav">
            <div className="about-inovation__slider-btn about-inovation__slider-prev">
              <svg>
                <use href={`${sprite}#prev-arrow`} />
              </svg>
            </div>
            <div className="about-inovation__slider-btn about-inovation__slider-next">
              <svg>
                <use href={`${sprite}#next-arrow`} />
              </svg>
            </div>
          </div>
        </div>
        <InovationSlider innovationListItems={innovationListItems} />
      </div>
    </section>
  )
}

export default AboutInovation