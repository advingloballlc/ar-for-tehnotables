import React from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { enableScrollbar } from './src/utils/enableScrollbar'
import { showModalCoockieMain } from './src/utils/showModalCoockieMain'
import { getCookie } from './src/utils/getCookie'

NProgress.configure({ showSpinner: false })

export const onPreRouteUpdate = ({ prevLocation }) => {
  prevLocation && NProgress.start()
}

export const onRouteUpdateDelayed = () => {
  NProgress.start()
}

export const onRouteUpdate = () => {
  NProgress.done()
  enableScrollbar()
  window.scrollTo(0, 0)
}

let vh = window.innerHeight * 0.01
let scrollPos = 0

let isTrackPad
let eventCount = 0
let eventCountStart

const html = document.documentElement,
      navigator = window.navigator

document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

const visibleHeader = e => {
  let curPos = e.currentTarget.scrollY

  curPos > 300 || (document.documentElement.classList.contains('lock-scroll') && document.documentElement.getBoundingClientRect().top < 0)
    ? document.querySelector('.header__bot') && document.querySelector('.header__bot').classList.add('fixed')
    : document.querySelector('.header__bot') && document.querySelector('.header__bot').classList.remove('fixed')

  if (curPos > 800 || (document.documentElement.classList.contains('lock-scroll') && document.documentElement.getBoundingClientRect().top < 0)) {
    if (curPos > scrollPos) {
      document.querySelector('.header__bot') && document.querySelector('.header__bot').classList.remove('visible')
    } else {
      document.querySelector('.header__bot') && document.querySelector('.header__bot').classList.add('visible')
    }
  } else {
    document.querySelector('.header__bot') && document.querySelector('.header__bot').classList.remove('visible')
  }

  scrollPos = curPos
}

window.addEventListener('scroll', visibleHeader, {passive: true})
window.addEventListener('load', visibleHeader)
window.addEventListener('resize', visibleHeader)

const detectOS = () => {
  let osName = ''

  if (navigator.appVersion.indexOf('Win') != -1) 
    osName = 'windows'
  else if (navigator.appVersion.indexOf('Mac') != -1) 
    osName = 'mac'
  else if (navigator.appVersion.indexOf('Android') != -1)
    osName = 'android'
  else if (navigator.appVersion.indexOf('X11') != -1) 
    osName = 'unix' 
  else if (navigator.appVersion.indexOf('Linux') != -1) 
    osName = 'linux'
  else 
    osName = 'other'

  html.classList.add(osName)
}

const detectBrowser = () => {
  let browserName = ''
  
  if (navigator.userAgent.match(/chrome|chromium|crios/i)) 
    browserName = 'chrome'
  else if (navigator.userAgent.match(/firefox|fxios/i)) 
    browserName = 'firefox'
  else if (navigator.userAgent.match(/safari/i)) 
    browserName = 'safari'
  else if (navigator.userAgent.match(/opr\//i)) 
    browserName = 'opera'
  else if (navigator.userAgent.match(/edg/i)) 
    browserName = 'edge'
  else 
    browserName = 'other'

  html.classList.add(browserName)
}

const detectDevice = () => {
  let deviceType = ''

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) 
    deviceType = 'tablet'
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) 
    deviceType = 'mobile'
  else 
    deviceType = 'desktop'

  html.classList.add(deviceType)
}

const detectIsTouch = () => 'ontouchstart' in document.documentElement ? html.classList.add('has-touch') : html.classList.add('has-no-touch')

const detectTrackpad = () => {
  let isTrackPadDefined = isTrackPad || typeof isTrackPad !== 'undefined'
  
  if (isTrackPadDefined) return
  
  if (eventCount === 0) {
    eventCountStart = performance.now()
  }

  eventCount++

  if (performance.now() - eventCountStart > 66) {
    if (eventCount > 5) {
      isTrackPad = true
      document.documentElement.classList.add('use-trackpad')
    } else {
      isTrackPad = false
      document.documentElement.classList.add('use-mouse')
    }
    isTrackPadDefined = true
  }
}

document.addEventListener('wheel', detectTrackpad, {passive: true})
window.addEventListener('load', () => {
  if (!getCookie('is_condensed_cookies')) setTimeout(() => showModalCoockieMain(), 8000)
})

detectOS()
detectBrowser()
detectDevice()
detectIsTouch()