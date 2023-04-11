import React, { useEffect } from 'react'
import gsap from 'gsap'

import './Intro.scss'

const TextPageIntro = ({ title, content }) => {
  useEffect(() => {
    let textPageTl = gsap.timeline()

    textPageTl
      .from('.text-page-intro__title', .5, { delay: .2, y: '100%', onComplete() {
        textPageTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.text-page-intro__article', .6, { y: 100, opacity: 0, onComplete() {
        textPageTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.1')

    return () => {
      textPageTl.kill()
    }
  }, [])
  
  return (
    <section className="intro text-page-intro text-page">
      <div className="container">
        <div className="text-page-intro__title-wrapper title-wrapper">
          <h1 className="text-page-intro__title title title--big">{title}</h1>
        </div>
        <article className="text-page-intro__article article" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  )
}

export default TextPageIntro