import gsap from 'gsap'

export const incremementCount = (e, state, setState) => {
  let input = e.currentTarget.previousElementSibling

  state < 99999 && gsap.to(input, .2, { force3D: true, y: -10, opacity: 0, ease: 'Power2.easeOut', onComplete: () => {
    gsap.to(input, .1, { force3D: true, y: 10 })
    setState(prev => parseInt(prev) + 1)
  }})
  gsap.to(input, .2, { force3D: true, y: 0, opacity: 1, ease: 'Power2.easeOut', delay: .4 })
}