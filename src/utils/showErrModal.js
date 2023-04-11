import gsap from 'gsap'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import { isBrowser } from './isBrowser'
import { getScrollbarWidth } from './getScrollbarWidth'

export const showErrModal = () => {
  if (isBrowser()) {
    let errorModalTl = null

    Fancybox.show(
      [{ src: "#error-modal", type: 'inline' }],
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
            errorModalTl = gsap.timeline()

            errorModalTl
              .from('.modal-thanks__title', .5, { delay: .8, y: 20, opacity: 0, onComplete() {
                errorModalTl.set(this.targets(), { clearProps: 'all' })
              }})
              .from('.modal-thanks__btn-wrapper', .5, { y: 20, opacity: 0, onComplete() {
                errorModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
          },
          destroy: () => {
            errorModalTl.kill()

            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
            if (document.querySelector('.header__bot')) document.querySelector('.header__bot').style.paddingRight = '0'
          }
        }
      }
    )
  }
}