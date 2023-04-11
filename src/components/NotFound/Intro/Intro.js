import React, { useEffect, useRef, useContext } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Intro.scss'

import { PrefixContext } from '../../../context/PrefixProvider'

import { isBrowser } from '../../../utils/isBrowser'
import { detectLighthouse } from '../../../utils/detectLighthouse'

const ErrorIntro = ({ btnInfo }) => {
  let prefix = useContext(PrefixContext)

  const bg = useRef()
  const tableBg = useRef()
  const forIntro = 17
  const forTable = 5
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
    if (tableBg.current) tableBg.current.style = `transform: translate(${positionX / forTable}%, ${positionY / forTable}%)`

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

    let errorIntroTl = gsap.timeline()

    errorIntroTl
      .set('.error-intro__btn', { visibility: 'visible', delay: .3 })
      .from('.error-intro__btn', .5, { delay: .4, y: 30, opacity: 0 })

    if (isBrowser()) {
      if (window.innerWidth > 1024) window.addEventListener('mousemove', calculateParallax)
    }

    return () => {
      errorIntroTl.kill()

      if (isBrowser()) window.removeEventListener('mousemove', calculateParallax)
    }
  }, [])

  return (
    <section className="intro error-intro general-page section">
      <div className="error-intro__bg general-page__bg" ref={bg}>
        <StaticImage
          src="../../../images/wall.jpg"
          alt="Not Found Background"
          placeholder="blurred"
          quality={95}
          width={1920}
          height={885}
          formats={['auto', 'webp', 'avif']}
          loading="eager"
        />
      </div>
      <div className="container">
        <div className="error-intro__inner general-page__inner">
          <svg className="error-intro__title" viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">404</text>
          </svg>
          <Link className="error-intro__btn form-btn" to={prefix === '/' ? prefix : prefix.slice(0, -1)}>
            <span>{btnInfo.title}</span>
            <span>{btnInfo.title}</span>
          </Link>
          <div 
            className="error-intro__front"
            ref={tableBg}
          >
            <StaticImage
              src="../../../images/tabel.png"
              alt="Not Found Table"
              placeholder="blurred"
              quality={95}
              width={900}
              height={540}
              formats={['auto', 'webp', 'avif']}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorIntro