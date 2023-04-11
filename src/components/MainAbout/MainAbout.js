import React, { useEffect } from 'react'

import './MainAbout.scss'

import MainAboutContent from './MainAboutContent'
import MainAboutPhoto from './MainAboutPhoto'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const MainAbout = ({ isBtn, title, desc, img, video, link, playBtnText, mainHeading }) =>  {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let mainAboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-about',
        start: 'center bottom'
      }
    })

    ScrollTrigger.matchMedia({
      '(min-width: 745px)': () => {
        mainAboutTl
          .from('.main-about__content > *', .6, { y: -70, opacity: 0, stagger: -.1, onComplete() {
            mainAboutTl.set(this.targets(), { clearProps: 'all' })
          }})
          .to('.main-about__photo-inner', 1.2, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'Expo.easeInOut'})
          .from('.main-about__photo-inner .gatsby-image-wrapper', .6, { scale: 1.3, onComplete() {
            mainAboutTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.8')
          .to('.main-about > span', 2, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'Expo.easeInOut'}, '-=.7')
          .from('.main-about__photo-btn > *', .5, { opacity: 0, x: -100, stagger: -.15, onComplete() {
            mainAboutTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=1.2')
          .from('.main-about__marquee', .6, { opacity: 0, onComplete() {
            mainAboutTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.8')
      },
      '(max-width: 744px)': () => {
        mainAboutTl
          .from('.main-about__marquee', .6, { opacity: 0, onComplete() {
            mainAboutTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.main-about__title-mobile', .6, { opacity: 0, y: -50, onComplete() {
            mainAboutTl.set(this.targets(), { clearProps: 'all' })
          }})
          .to('.main-about__photo-inner', 1.2, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'Expo.easeInOut'})
          .from('.main-about__photo-inner .gatsby-image-wrapper', .6, { scale: 1.3, onComplete() {
            mainAboutTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.8')
          .from('.main-about__photo-btn > *', .5, { opacity: 0, y: -50, stagger: -.15, onComplete() {
            mainAboutTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.main-about__content > *', .6, { y: 50, opacity: 0, stagger: -.1, onComplete() {
            mainAboutTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
      }
    })

    return () => {
      mainAboutTl.kill()
    }
  }, [])

  return (
    <section className="main-about">
      <span />
      <div className="container">
        <div className="main-about__inner">
          <MainAboutContent 
            isBtn={isBtn} 
            title={title} 
            desc={desc} 
            link={link} 
            mainHeading={mainHeading}
          />
          <MainAboutPhoto 
            title={title} 
            img={img} 
            video={video} 
            playBtnText={playBtnText} 
          />
        </div>
      </div>
    </section>
  )
}

export default MainAbout