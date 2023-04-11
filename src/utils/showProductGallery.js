import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import { isBrowser } from './isBrowser'
import { getScrollbarWidth } from './getScrollbarWidth'

export const showProductGallery = () => {
  Fancybox.bind("[data-fancybox='gallery']", {
    showClass: 'fancybox-fadeIn',
    hideClass: 'fancybox-fadeOut',
    dragToClose: true,
    infinite: false,
    preload: false,
    type: 'image',
    Image: {
      zoom: false,
    },
    parentEl: isBrowser() && document.querySelector('#___gatsby'),
    on: {
      init: () => {
        if (isBrowser()) {
          if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = getScrollbarWidth()
          document.querySelector('.header__bot').style.paddingRight = getScrollbarWidth()
        }
      },
      destroy: () => {
        if (isBrowser()) {
          if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
          document.querySelector('.header__bot').style.paddingRight = '0'
        }
      }
    }
  })
}