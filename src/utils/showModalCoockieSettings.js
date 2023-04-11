import gsap from 'gsap'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import { isBrowser } from './isBrowser'
import { getScrollbarWidth } from './getScrollbarWidth'
import { setCookie } from './setCookie'

export const showModalCoockieSettings = () => {
  if (isBrowser()) {
    let coockieSettingsModalTl = null
    
    Fancybox.show(
      [{ src: "#coockie-settings-modal", type: 'inline' }],
      {
        showClass: 'fancybox-fadeIn',
        hideClass: 'fancybox-fadeOut',
        dragToClose: false,
        parentEl: document.querySelector('#___gatsby'),
        on: {
          init: () => {
            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = getScrollbarWidth()
            if (document.querySelector('.header__bot')) document.querySelector('.header__bot').style.paddingRight = getScrollbarWidth()
          },
          ready: () => {
            coockieSettingsModalTl = gsap.timeline()

            coockieSettingsModalTl
              .from('.coockie-settings > *', .5, { delay: .4, y: 20, opacity: 0, stagger: .05, onComplete() {
                coockieSettingsModalTl.set(this.targets(), { clearProps: 'all' })
              }})
          },
          destroy: () => {
            coockieSettingsModalTl.kill()

            setCookie('is_condensed_cookies', true, {secure: true, 'max-age': 172800})

            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
            if (document.querySelector('.header__bot')) document.querySelector('.header__bot').style.paddingRight = '0'
          }
        }
      }
    )
  }
}