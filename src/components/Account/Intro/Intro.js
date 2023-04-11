import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import './Intro.scss'

import AccountNav from './AccountNav'
import AccountContent from './AccountContent'

const AccountIntro = ({ 
  tabName, 
  userInfo,
  pageTitle,
  logoutText,
  emptyListTitle,
  orderHistoryFields,
  orderHistoryTitle,
  personalInfoFields,
  personalInfoTitle,
  orderList,
  validateErrors
}) => {
  let intro = useRef()

  useEffect(() => {
    intro.current.parentElement.parentElement.classList.add('disable-overflow')
    intro.current.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('disable-overflow')

    let accountInfoTl = gsap.timeline()

    accountInfoTl
      .from('.account-intro__title', .5, { delay: .2, y: '100%', onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.account-intro-tabs__nav-item', .5, { y: 20, opacity: 0, stagger: .1, onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.account-intro-tabs__content-title', .5, { y: '100%', onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    tabName === 'info' && accountInfoTl
      .from('.account-intro-tabs__content-elem-title', .5, { opacity: 0, stagger: .05, onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.account-intro-tabs__content-elem-value-wrapper', .5, { opacity: 0, x: 30, stagger: .05, onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.account-intro-tabs__content-btn-wrapper', .5, { opacity: 0, y: 30, onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

      tabName === 'history' && accountInfoTl
        .from('.account-intro-tabs__content-accordion-item', .5, { opacity: 0, y: 70, stagger: .05 }, '-=.1')

    return () => {
      accountInfoTl.kill()
    }
  }, [])

  return (
    <section className="intro account-intro" ref={intro}>
      <div className="container">
        <div className="account-intro__title-wrapper title-wrapper">
          <div className="account-intro__title title title--big">{pageTitle}</div>
        </div>
        <div className="account-intro__tabs account-intro-tabs">
          <AccountNav 
            logoutText={logoutText} 
            orderHistoryTitle={orderHistoryTitle} 
            personalInfoTitle={personalInfoTitle} 
          />
          <AccountContent 
            tabName={tabName} 
            userInfo={userInfo}
            personalInfoTitle={personalInfoTitle}
            personalInfoFields={personalInfoFields}
            orderHistoryTitle={orderHistoryTitle}
            orderHistoryFields={orderHistoryFields}
            emptyListTitle={emptyListTitle}
            orderList={orderList}
            validateErrors={validateErrors}
          />
        </div>
      </div>
    </section>
  )
}

export default AccountIntro