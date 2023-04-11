import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import LoginPhoto from '../../LoginCommon/LoginPhoto'
import LoginContent from './LoginContent'

import '../../LoginCommon/LoginCommon.scss'

import { detectLighthouse } from '../../../utils/detectLighthouse'

const LoginIntro = ({ 
  backgroundImage, 
  loginForm, 
  resetPasswordLink,
  beforeButtonsText,
  afterButtonsText,
  facebookButton,
  googleButton,
  createAccountLink,
  validateErrors
}) => {
  let [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    if (!detectLighthouse()) return null
    
    gsap.registerPlugin(ScrollTrigger)

    let introLoginTl = gsap.timeline()

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => {
        setIsMobile(false)

        introLoginTl
          .from('.intro-login__title', .5, { y: '100%', delay: 1, onComplete() {
            introLoginTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-login__social', .5, { y: 60, opacity: 0, onComplete() {
            introLoginTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.intro-login__form', .5, { y: 60, opacity: 0, onComplete() {
            introLoginTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.intro-login__links--login', .5, { y: 60, opacity: 0, onComplete() {
            introLoginTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
      },
      '(max-width: 991px)': () => {
        setIsMobile(true)

        introLoginTl
          .from('.intro-login__title', .5, { y: '100%', delay: .2, onComplete() {
            introLoginTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-login__social', .5, { y: 60, opacity: 0, onComplete() {
            introLoginTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.intro-login__form', .5, { y: 60, opacity: 0, onComplete() {
            introLoginTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.intro-login__links--login', .5, { y: 60, opacity: 0, onComplete() {
            introLoginTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
      }
    })
  }, [])

  return (
    <section className="intro intro-login">
      { !isMobile && <LoginPhoto title={loginForm.title} bgImg={backgroundImage} /> }
      <LoginContent 
        loginForm={loginForm} 
        resetPasswordLink={resetPasswordLink} 
        beforeButtonsText={beforeButtonsText}
        afterButtonsText={afterButtonsText}
        facebookButton={facebookButton}
        googleButton={googleButton}
        createAccountLink={createAccountLink}
        validateErrors={validateErrors}
      />
    </section>
  )
}

export default LoginIntro