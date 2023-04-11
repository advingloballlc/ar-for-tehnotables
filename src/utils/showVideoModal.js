import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

import { isBrowser } from './isBrowser'
import { getScrollbarWidth } from './getScrollbarWidth'

export const showVideoModal = (src, poster) => {
  if (isBrowser()) {
    Fancybox.show(
      [
        {
          src: src,
          thumb: poster.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(' ')[0],
          type: 'html5video'
        }
      ],
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
          destroy: () => {
            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
            document.querySelector('.header__bot').style.paddingRight = '0'
          }
        }
      }
    )
  }
}