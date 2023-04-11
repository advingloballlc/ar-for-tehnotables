import { isBrowser } from './isBrowser'

export const clickOutside = (classNames, setStates, state = null) => {
  if (!isBrowser()) return null

  window.addEventListener('click', e => {
    let target = e.target
    
    if (Array.isArray(classNames) && Array.isArray(setStates)) {
      classNames.forEach((className, index) => {
        if (!target.closest(`.${className}`)) 
          setStates[index](false)
      })
    } else {
      if (!target.closest(`.${classNames}`)) {
        state && setStates(state.map(item => ({
          ...item,
          isOpen: false,
        })))
      }
    }
  })
}