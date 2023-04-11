import gsap from 'gsap'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import { isBrowser } from './isBrowser'
import { getScrollbarWidth } from './getScrollbarWidth'

export const showThxModal = () => {
  if (isBrowser()) {
    let thanksModalTl = null

    Fancybox.show(
      [{ src: "#thanks-modal", type: 'inline' }],
      {
        showClass: 'fancybox-fadeIn',
        hideClass: 'fancybox-fadeOut',
        dragToClose: false,
        parentEl: document.querySelector('#___gatsby'),
        on: {
          init: () => {
            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = getScrollbarWidth()
            document.querySelector('.header__bot').style.paddingRight = getScrollbarWidth()
          },
          ready: () => {
            thanksModalTl = gsap.timeline()

            thanksModalTl
              .from('.modal-thanks__title', .5, { delay: .8, y: 20, opacity: 0, onComplete() {
                thanksModalTl.set(this.targets(), { clearProps: 'all' })
              }})
              .from('.modal-thanks__btn-wrapper', .5, { y: 20, opacity: 0, onComplete() {
                thanksModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
              .from('.modal-thanks__desc', .5, { delay: .8, y: 20, opacity: 0, onComplete() {
                thanksModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=1.4')
          },
          destroy: () => {
            thanksModalTl.kill()

            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
            document.querySelector('.header__bot').style.paddingRight = '0'
          }
        }
      }
    )
  }
}