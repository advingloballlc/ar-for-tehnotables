import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import BenefitsSliderMarquee from './BenefitsSliderMarquee'
import BenefitsSliderSwiper from './BenefitsSliderSwiper'
import BenefitsSliderNav from './BenefitsSliderNav'

const BenefitsSlider = ({ healthySlider }) => {
  const [ isMobileSlider, setMobileSlider ] = useState(false)
  const slider = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let tlBenefitsSlider = null

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        tlBenefitsSlider = gsap.timeline({
          scrollTrigger: {
            trigger: '.benefits-slider__marquee',
            start: '107% bottom',
            scrub: 0.5,
            pin: true
          }
        })

        setMobileSlider(false)

        slider.current && tlBenefitsSlider.to('.benefits-slider__marquee', {
          x: -(slider.current.scrollWidth - window.innerWidth),
          ease: "none",
        })
      },
      '(max-width: 1024px)': () => setMobileSlider(true)
    })

    return () => tlBenefitsSlider && tlBenefitsSlider.kill()
  }, [])

  return (
    <section className="benefits-slider" ref={slider}>
      {
        !isMobileSlider
          ? <BenefitsSliderMarquee healthySlider={healthySlider} />
          : <BenefitsSliderSwiper healthySlider={healthySlider} />
      }
      { isMobileSlider && <BenefitsSliderNav /> }
    </section>
  )
}

export default React.memo(BenefitsSlider)