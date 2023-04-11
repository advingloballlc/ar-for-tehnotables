import { isBrowser } from './isBrowser'

export const disableOverflow = intro => {
  if (!isBrowser()) return null
  
  document.body.classList.add('disable-overflow')
  document.querySelector('.wrapper').classList.add('disable-overflow')
}