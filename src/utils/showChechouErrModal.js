import gsap from 'gsap'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import { isBrowser } from './isBrowser'
import { getScrollbarWidth } from './getScrollbarWidth'

export const showCheckoutErrModal = () => {
  if (isBrowser()) {
    let checkoutErrModalTl = null

    Fancybox.show(
      [{ src: "#checkout-err-modal", type: 'inline' }],
      {
        showClass: 'fancybox-fadeIn',
        hideClass: 'fancybox-fadeOut',
        dragToClose: false,
        parentEl: document.querySelector('#___gatsby'),
        on: {
          init: () => {
            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = getScrollbarWidth()
          },
          ready: () => {
            checkoutErrModalTl = gsap.timeline()

            checkoutErrModalTl
              .from('.modal-checkout-err__icon', .5, { delay: .3, y: 20, opacity: 0, onComplete() {
                checkoutErrModalTl.set(this.targets(), { clearProps: 'all' })
              }})
              .from('.modal-checkout-err__title', .5, { y: 20, opacity: 0, onComplete() {
                checkoutErrModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
              .from('.modal-checkout-err__btn-wrapper', .5, { y: 20, opacity: 0, onComplete() {
                checkoutErrModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
          },
          destroy: () => {
            checkoutErrModalTl.kill()

            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
          }
        }
      }
    )
  }
}