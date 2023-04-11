import { isBrowser } from './isBrowser'

export const getScrollbarWidth = () => isBrowser() && `${window.innerWidth - document.documentElement.clientWidth}px`