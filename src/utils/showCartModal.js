import gsap from 'gsap'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import { isBrowser } from './isBrowser'
import { getScrollbarWidth } from './getScrollbarWidth'

export const showCartModal = () => {
  if (isBrowser()) {
    let cartModalTl = null

    Fancybox.show(
      [{ src: "#cart-modal", type: 'inline' }],
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
            cartModalTl = gsap.timeline()

            cartModalTl
              .from('.modal-cart__icon > svg', .5, { delay: .3, opacity: 0, x: -30, onComplete() {
                cartModalTl.set(this.targets(), { clearProps: 'all' })
              }})
              .from('.modal-cart__title', .5, { y: 20, opacity: 0, onComplete() {
                cartModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
              .from('.modal-cart__btn-wrapper', .5, { y: 20, opacity: 0, onComplete() {
                cartModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
          },
          destroy: () => {
            cartModalTl.kill()

            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
            if (document.querySelector('.header__bot')) document.querySelector('.header__bot').style.paddingRight = '0'
          }
        }
      }
    )
  }
}