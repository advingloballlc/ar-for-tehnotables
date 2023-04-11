import { isBrowser } from './isBrowser'

export const checkSidebarHeight = sidebar => {
  if (!isBrowser()) return

  let windowHeight = window.innerHeight,
        sidebarHeight = sidebar.current.offsetHeight

  sidebarHeight > windowHeight ? sidebar.current.classList.add('static') : sidebar.current.classList.remove('static')
}