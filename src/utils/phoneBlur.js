export const phoneBlur = e =>
  e.currentTarget.value === '+380 (__) ___-__-__' || !e.currentTarget.value
    ? e.currentTarget.nextElementSibling.classList.remove('focused')
    : e.currentTarget.nextElementSibling.classList.add('focused')