import gsap from 'gsap'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import { isBrowser } from './isBrowser'
import { getScrollbarWidth } from './getScrollbarWidth'

export const showReviewModal = () => {
  if (isBrowser()) {
    let commentModalTl = null

    Fancybox.bind("[data-fancybox='comment']", {
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
          commentModalTl = gsap.timeline()

          commentModalTl
            .from('.product-modal__title', .5, { delay: .2, y: '100%', onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }})
            .from('.field-inner', .5, { y: 20, opacity: 0, stagger: .1, onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
            .from('.product-modal__rating-inner > svg', .5, { x: -30, opacity: 0, stagger: .1, onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.3')
            .from('.product-modal__label', .5, { y: -20, opacity: 0, stagger: .1, onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.3')
            .from('.product-modal__btn-wrapper', .5, { y: 20, opacity: 0, onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
        },
        destroy: () => {
          commentModalTl.kill()

          if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
          document.querySelector('.header__bot').style.paddingRight = '0'
        }
      }
    })
  }
}