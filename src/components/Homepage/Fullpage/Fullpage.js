import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import './Fullpage.scss'

import DrawLogo from '../../DrawLogo/DrawLogo'
import FullpageSlider from './FullpageSlider'

import { isBrowser } from '../../../utils/isBrowser'
import sprite from '../../../icons/sprite.svg'

const Fullpage = ({ setIsHideHeaderFullpage, fullScreenSlider }) => {
  let fullpage = useRef(null)

  let [ isMobile, setIsMobile ] = useState(false)
  let [ isTablet, setIsTablet ] = useState(false)
  let [ isDraw, setIsDraw ] = useState(false)

  let startTl = null
  let endTl = null

  const scrollUp = () => {
    if (!isBrowser()) return null 
    
    gsap.to(window, {duration: 1, scrollTo: '.work-position-wrapper', ease: "Power1.easeInOut"})

    setTimeout(() => {
      document.body.style.overflow = ''
      fullpage.current.previousElementSibling.style.overflowY = ''
      fullpage.current.previousElementSibling.style.overflowY = ''

      setIsHideHeaderFullpage(false)
      setIsDraw(false)
    }, 1000)
  }

  const scrollDown = () => {
    if (!isBrowser()) return null 
    
    gsap.to(window, {duration: 1, scrollTo: '.discount-wrapper', ease: "Power1.easeInOut"})
              
    setTimeout(() => {
      document.body.style.overflow = ''
      fullpage.current.nextElementSibling.style.overflowY = ''
      fullpage.current.nextElementSibling.style.overflowY = ''

      setIsHideHeaderFullpage(false)
      setIsDraw(false)
    }, 1000)
  }

  useEffect(() => {
    if (!isBrowser()) return null 
    
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
    ScrollTrigger.refresh()
    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        startTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.work-position-wrapper',
            start: 'bottom bottom',
            onEnter: () => {
              if (document.documentElement.classList.contains('use-mouse')) {
                gsap.to(window, {duration: 1, scrollTo: '.fullpage', ease: "Power1.easeInOut"})

                document.body.style.overflow = 'hidden'
                if (fullpage.current) fullpage.current.previousElementSibling.style.overflowY = 'scroll'
                if (fullpage.current) fullpage.current.nextElementSibling.style.overflowY = 'scroll'

                setTimeout(() => {
                  setIsDraw(true)
                  setIsHideHeaderFullpage(true)
                }, 950)
              } else {
                setIsDraw(true)
              }
            }
          }
        })

        endTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.discount-wrapper',
            start: '-2px top',
            onLeaveBack: () => {
              if (document.documentElement.classList.contains('use-mouse')) {
                gsap.to(window, {duration: 1, scrollTo: '.fullpage', ease: "Power1.easeInOut"})

                document.body.style.overflow = 'hidden'
                if (fullpage.current) fullpage.current.previousElementSibling.style.overflowY = 'scroll'
                if (fullpage.current) fullpage.current.nextElementSibling.style.overflowY = 'scroll'

                setTimeout(() => {
                  setIsDraw(true)
                }, 950)

                setIsHideHeaderFullpage(true)
              }
            }
          }
        })

        setIsTablet(false)
      },
      '(max-width: 1024px)': () => setIsTablet(true),
      '(min-width: 481px)': () => setIsMobile(false),
      '(max-width: 480px)': () => setIsMobile(true)
    })

    return () => {
      startTl && startTl.kill()
      endTl && endTl.kill()
    }
  }, [])

  return (
    <section className='fullpage' id="fullpage" ref={fullpage}>
      { isBrowser() && !isTablet && <DrawLogo isDraw={isDraw} /> }
      <FullpageSlider 
        isMobile={isMobile} 
        setIsHideHeaderFullpage={setIsHideHeaderFullpage} 
        setIsDraw={setIsDraw}
        fullScreenSlider={fullScreenSlider}
      />
      <div className="fullpage-slider__nav">
        <div className="fullpage-slider__btn fullpage-slider__prev">
          <svg><use href={`${sprite}#prev-arrow`} /></svg>
        </div>
        <div className="fullpage-slider__btn fullpage-slider__next">
          <svg><use href={`${sprite}#next-arrow`} /></svg>
        </div>
      </div>
      <div 
        className="fullpage__btn fullpage__btn--up"
        onClick={scrollUp}
      >
        Scroll Up
      </div>
      <div 
        className="fullpage__btn fullpage__btn--down"
        onClick={scrollDown}
      >
        Scroll Down
      </div>
    </section>
  )
}

export default React.memo(Fullpage)