import { isBrowser } from './isBrowser'

export const phoneGoal = phone => {
  if (!isBrowser()) return

  let phoneCode = phone.split(' ')[1]

  window.gtag('event', 'clickzvonok', {
    'event_category' : 'zvonok',
    'event_label' : `tel${phoneCode}`
  })
}