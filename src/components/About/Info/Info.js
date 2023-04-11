import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Info.scss'

const AboutInfo = ({ secondScreenTitle, secondScreenText }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let aboutInfoTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.info-about',
        start: '20% bottom'
      }
    })

    aboutInfoTl
      .from('.info-about__title', .6, { x: -100, opacity: 0, delay: .2, onComplete() {
        aboutInfoTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.info-about__side > *', .6, { x: -100, opacity: 0, stagger: .1, onComplete() {
        aboutInfoTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      aboutInfoTl.kill()
    }
  }, [])

  return (
    <section className="info-about">
      <div className="container">
        <div className="info-about__inner">
          <div className="info-about__title">{secondScreenTitle}</div>
          <div className="info-about__desc">
            <div className="info-about__side" dangerouslySetInnerHTML={{ __html: secondScreenText }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo