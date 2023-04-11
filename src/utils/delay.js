import { isBrowser } from './isBrowser'

export const delay = (promise, time) => {
  if (!isBrowser()) return null
  
  return promise.then(
    result => new Promise(resolve => setTimeout(() => resolve(result), time))
  )
}