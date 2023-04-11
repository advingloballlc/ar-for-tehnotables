import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import { showThxModal } from './showThxModal'
import { showErrModal } from './showErrModal'
import { isBrowser } from './isBrowser'

import { newsUnsubscribe } from '../api/wordpress'

export const unsubscribingUser = () => {
  if (!isBrowser()) return null 

  if (window.location.search.match('unsubscribe_user=')) {
    let pattern = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/g
    let email = window.location.search.match(pattern)[0]

    NProgress.start()

    setTimeout(() => {
      newsUnsubscribe(email)
        .then(() => NProgress.done())
        .then(() => showThxModal())
        .then(() => window.history.pushState({}, document.title, window.location.pathname))
        .catch(() => showErrModal())
    }, 6500)
  }
}
