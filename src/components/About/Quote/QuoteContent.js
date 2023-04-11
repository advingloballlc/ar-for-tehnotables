import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const QuoteContent = ({ firstInUkraineTitle, firstInUkraineSubtitle }) => {
  let title = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let titleText = title.current.textContent
    let characters = titleText.split('')
    title.current.textContent = ''
    characters.forEach(character => {
      let wrapperCharacter = `<span class="${character !== ' ' ? 'char' : 'empty'}">${character}</span>`
      title.current.innerHTML += wrapperCharacter
    })

    let quoteContentTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.quote-about__content',
        start: 'bottom bottom'
      }
    })

    quoteContentTl
      .from('.quote-about__title .char', .4, { y: '100%', stagger: .03, onComplete: () => {
        title.current.textContent = titleText
      }})
      .from('.quote-about__desc', .4, { opacity: 0, y: '100%', onComplete() {
        quoteContentTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      quoteContentTl.kill()
    }
  }, [])

  return (
    <div className="quote-about__content">
      <div className="container">
        <div className="quote-about__content-inner">
          <div className="quote-about__title" ref={title}>{firstInUkraineTitle}</div>
          <p className="quote-about__desc">{firstInUkraineSubtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default QuoteContent