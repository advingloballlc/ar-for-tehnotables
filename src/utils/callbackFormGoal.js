import { isBrowser } from './isBrowser'

export const callbackFormGoal = () => {
  if (!isBrowser()) return
  
  window.gtag('event', 'Submit', {
    'event_category' : 'Form',
  })
}