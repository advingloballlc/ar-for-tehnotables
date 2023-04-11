import { isBrowser } from './isBrowser'

const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' }
const classNames = ['in', 'out'].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(b))

const getDirectionKey = (ev, node) => {
  if (isBrowser()) {
    const { width, height, top, left } = node.getBoundingClientRect()
    const l = ev.pageX - (left + window.pageXOffset)
    const t = ev.pageY - (top + window.pageYOffset)
    const x = l - width / 2 * (width > height ? height / width : 1)
    const y = t - height / 2 * (height > width ? width / height : 1)
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
  }
}

export const update = (ev, prefix) => {
  if (isBrowser()) {
    if (window.innerWidth > 1024) {
      ev.currentTarget.classList.remove(...classNames)
      ev.currentTarget.classList.add(`${prefix}-${directions[getDirectionKey(ev, ev.currentTarget)]}`)
    }
  }
}