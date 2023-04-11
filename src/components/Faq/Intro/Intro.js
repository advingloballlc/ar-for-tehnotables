import React, { useState, useEffect, useCallback, useRef } from 'react'
import gsap from 'gsap'

import './Intro.scss'

import IntroAccordion from './IntroAccordion'
import IntroForm from './IntroForm'

import { disableOverflow } from './../../../utils/disableOveflow'
import { detectLighthouse } from './../../../utils/detectLighthouse'

const FaqIntro = ({ title, faqPageFields, questionFormFields, validateErrors }) => {
  const intro = useRef(null)

  const [ list, setList ] = useState(faqPageFields.faqRepeater)

  const toggleOpen = useCallback(id => {
    setList(list.map(item => {
      return {
        ...item,
        isOpen: item.id === id ? !item.isOpen : item.isOpen
      }
    }))
  }, [list])

  useEffect(() => {
    disableOverflow(intro)

    let faqIntroTl = gsap.timeline()

    new Promise((resolve, reject) => {
      resolve(setList(list.map((item, index) => {
        return {
          ...item,
          id: index,
          isOpen: index === 0
        }
      })))
    })
      .then(() => {
        if (!detectLighthouse()) return null
        
        faqIntroTl
          .from('.faq-intro__title', .5, { delay: .2, y: '100%', onComplete() {
            faqIntroTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.faq-intro-accordion__item', .6, { y: 20, opacity: 0, stagger: .1, onComplete() {
            faqIntroTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.faq-intro-form', .6, { opacity: 0, x: 50, onComplete() {
            faqIntroTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.5')
      })

    return () => {
      faqIntroTl.kill()
    }
  }, [])

  return (
    <section className="intro faq-intro" ref={intro}>
      <div className="container">
        <div className="faq-intro__title-wrapper title-wrapper">
          <h1 className="faq-intro__title title title--big">{title}</h1>
        </div>
        <div className="faq-intro__inner">
          <IntroAccordion list={list} toggleOpen={toggleOpen} />
          <IntroForm questionFormFields={questionFormFields} validateErrors={validateErrors} />
        </div>
      </div>
    </section>
  )
}

export default FaqIntro