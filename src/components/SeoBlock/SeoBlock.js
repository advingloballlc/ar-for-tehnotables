import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './SeoBlock.scss'

import { isBrowser } from '../../utils/isBrowser'

const SeoBlock = ({ seoBlock }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ isBigArticle, setIsBigArticle ] = useState(true)

  const article = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let seoBlockTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.seo-block',
        start: 'center bottom'
      }
    })

    seoBlockTl
      .from('.seo-block__title', .5, { y: '100%', onComplete() {
        seoBlockTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.seo-block__article', .5, { y: 50, opacity: 0, onComplete() {
        seoBlockTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.seo-block__btn-wrapper', .5, { y: 50, opacity: 0, onComplete() {
        seoBlockTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')

    setIsBigArticle(article.current.scrollHeight <= article.current.offsetHeight ? false : true)

    return () => {
      seoBlockTl.kill()
    }
  }, [])

  const toggleIsOpen = e => {
    if (!isBrowser()) return

    setIsOpen(prev => !prev)

    let target = e.currentTarget,
        btn = target.querySelector('span span'),
        article = target.parentElement.previousElementSibling;

    if (!isOpen) {
      btn.style.opacity = 0

      setTimeout(() => {
        btn.textContent = seoBlock.buttonCollapse
      }, 210)

      setTimeout(() => {
        btn.style.opacity = 1
      }, 220)

      article.style.maxHeight = `${article.scrollHeight}px`;
    } else {
      btn.style.opacity = 0

      setTimeout(() => {
        btn.textContent = seoBlock.buttonExpand
      }, 210)

      setTimeout(() => {
        btn.style.opacity = 1
      }, 220)

      article.style.maxHeight = '';
    }
  }

  return (
    <section className="seo-block">
      <div className="container">
        <div className="seo-block__inner">
          <div className="seo-block__title-wrapper title-wrapper">
            <h2 className="seo-block__title title title--small">{seoBlock.seoTitle}</h2>
          </div>
          <article 
            className={`seo-block__article article ${isOpen || !isBigArticle ? 'open' : ''}`} 
            dangerouslySetInnerHTML={{ __html: seoBlock.seoText }} 
            ref={article}
          />
          { isBigArticle && <div className="seo-block__btn-wrapper">
            <button className="seo-block__btn" onClick={toggleIsOpen}>
              <span className="seo-block__btn-inner">
                <span>{seoBlock.buttonExpand}</span>
              </span>
            </button>
          </div> }
        </div>
      </div>
    </section>
  )
}

export default React.memo(SeoBlock)