import React, { useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const QuoteSlider = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let quoteSliderTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.quote-about',
        scrub: 0.5,
      }
    })

    quoteSliderTl.to('.quote-about__slider-inner', {
      xPercent: -120,
      ease: "none",
    })

    return () => {
      quoteSliderTl.kill()
    }
  }, [])

  return (
    <div className="quote-about__slider">
      <div className="quote-about__slider-inner">
        <div className="quote-about__text">TEHNOTABLE</div>
        <div className="quote-about__text">TEHNOTABLE</div>
        <div className="quote-about__text">TEHNOTABLE</div>
        <div className="quote-about__text">TEHNOTABLE</div>
        <div className="quote-about__text">TEHNOTABLE</div>
        <div className="quote-about__text">TEHNOTABLE</div>
        <div className="quote-about__text">TEHNOTABLE</div>
        <div className="quote-about__text">TEHNOTABLE</div>
      </div>
    </div>
  )
}

export default QuoteSlider