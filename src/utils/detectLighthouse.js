import { isBrowser } from './isBrowser'

export const detectLighthouse = () => isBrowser() && window.navigator.userAgent.indexOf('Chrome-Lighthouse') === -1