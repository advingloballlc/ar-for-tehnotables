import { isBrowser } from './isBrowser'

export const refreshURL = searchQuery => isBrowser() && window.history.replaceState(null, null, `?s=${searchQuery || window.localStorage.getItem('searchQuery')}`)
