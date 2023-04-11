import { isBrowser } from './isBrowser'
import { setCookie } from './setCookie'

export const deleteCookie = name => {
  if (!isBrowser()) return null
  
  setCookie(name, "", {
    'max-age': -1
  })
}