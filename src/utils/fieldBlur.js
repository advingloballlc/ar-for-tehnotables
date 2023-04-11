export const fieldBlur = e =>
  e.currentTarget.value
    ? e.currentTarget.nextElementSibling.classList.add('focused')
    : e.currentTarget.nextElementSibling.classList.remove('focused')