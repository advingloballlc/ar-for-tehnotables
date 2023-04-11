import { isBrowser } from './isBrowser'

export const copyText = textContainer => {
  if (!isBrowser()) return null
  
  textContainer.select()
  textContainer.setSelectionRange(0, 99999)

  window.navigator.clipboard.writeText(textContainer.value)
}