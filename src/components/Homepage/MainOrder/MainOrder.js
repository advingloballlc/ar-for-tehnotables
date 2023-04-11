import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './MainOrder.scss'

import MainOrderContent from './MainOrderContent'
import MainOrderPhoto from './MainOrderPhoto'

const MainOrder = ({ aboutTablesImage, aboutTablesPageLink, aboutTablesText, aboutTablesTitle }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let mainOrderTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-order',
        start: 'center bottom'
      }
    })

    ScrollTrigger.matchMedia({
      '(min-width: 745px)': () => {
        mainOrderTl
          .from('.main-order-content > *', .6, { y: -70, opacity: 0, stagger: -.1, onComplete() {
            mainOrderTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.main-order-photo', .6, { x: 100, opacity: 0, onComplete() {
            mainOrderTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
      },
      '(max-width: 744px)': () => {
        mainOrderTl
          .from('.main-order-content__title-mobile',.6, { opacity: 0, y: -50, onComplete() {
            mainOrderTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.main-order-photo__inner', .6, { opacity: 0, y: -50, onComplete() {
            mainOrderTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.main-order-content > *', .6, { opacity: 0, y: 50, onComplete() {
            mainOrderTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
      }
    })


    return () => {
      mainOrderTl.kill()
    }
  }, [])

  return (
    <section className="main-order">
      <div className="container">
        <div className="main-order__inner">
          <MainOrderContent 
            aboutTablesPageLink={aboutTablesPageLink} 
            aboutTablesText={aboutTablesText} 
            aboutTablesTitle={aboutTablesTitle}
          />
          <MainOrderPhoto 
            aboutTablesTitle={aboutTablesTitle} 
            aboutTablesImage={aboutTablesImage} 
          />
        </div>
      </div>
    </section>
  )
}

export default React.memo(MainOrder)