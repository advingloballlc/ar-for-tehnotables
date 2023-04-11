import React, { useEffect, useRef, useContext } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Intro.scss'

import { PrefixContext } from '../../../context/PrefixProvider'

import { isBrowser } from '../../../utils/isBrowser'
import { detectLighthouse } from '../../../utils/detectLighthouse'

const ThanksIntro = ({ 
  deliveryCode, 
  thankYouMessage, 
  thankYouGoHome, 
  thankYouAdditionalyMessage, 
  thankyouBackgroundImage 
}) => {
  let prefix = useContext(PrefixContext)
  const image = getImage(thankyouBackgroundImage.localFile)

  const bg = useRef()
  const forIntro = 17
  const speed = .05

  let positionX = 0,
      positionY = 0,
      coordXpercent = 0,
      coordYpercent = 0

  const setMouseParallaxStyle = () => {
    const disX = coordXpercent - positionX
    const disY = coordYpercent - positionY

    positionX = positionX + (disX * speed)
    positionY = positionY + (disY * speed)

    if (bg.current) bg.current.style = `transform: translate(${positionX / forIntro}%, ${positionY / forIntro}%) scale(1.1)`

    requestAnimationFrame(setMouseParallaxStyle)
  }

  const calculateParallax = e => {
    if (isBrowser()) {
      const parallaxWidth = window.innerWidth
      const parallaxHeight = window.innerHeight

      const coordX = e.pageX - parallaxWidth / 2
      const coordY = e.pageY - parallaxHeight / 2

      coordXpercent = coordX / parallaxWidth * 100
      coordYpercent = coordY / parallaxHeight * 100
    }
  }

  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => setMouseParallaxStyle()
    })

    if (!detectLighthouse()) return null

    let thanksIntroTl = gsap.timeline()

    thanksIntroTl
      .set('.thanks-intro__inner', { visibility: 'visible', delay: .3 })
      .from('.thanks-intro__inner > *', .5, { delay: .4, y: 50, opacity: 0, stagger: .1, onComplete() {
        thanksIntroTl.set(this.targets(), { clearProps: 'all' })
      }})

    if (isBrowser()) {
      if (window.innerWidth > 1024) window.addEventListener('mousemove', calculateParallax)
    }

    return () => {
      thanksIntroTl.kill()

      if (isBrowser()) window.removeEventListener('mousemove', calculateParallax)
    }
  }, [])

  return (
    <section className="intro thanks-intro general-page section">
      <div className="thanks-intro__bg general-page__bg" ref={bg}>
        <GatsbyImage image={image} alt="Thanks" loading="eager" />
      </div>
      <div className="container">
        <div className="thanks-intro__inner general-page__inner">
          <h1 className="thanks-intro__title" dangerouslySetInnerHTML={{ __html: thankYouMessage }} />
          <div className="thanks-intro__number">
            № <span>{deliveryCode || 'Some delivery code'}</span>
          </div>
          <p className="thanks-intro__desc">{thankYouAdditionalyMessage}</p>
          <Link className="thanks-intro__btn form-btn" to={prefix}>
            <span>{thankYouGoHome.title}</span>
            <span>{thankYouGoHome.title}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ThanksIntro