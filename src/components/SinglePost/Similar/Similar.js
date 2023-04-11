import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Title from './Title'
import List from './List'

import './Similar.scss'

const Similar = ({ title, posts }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let similarTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-post-similar',
        start: 'center bottom'
      }
    })

    ScrollTrigger.matchMedia({
      '(min-width: 769px)': () => {
        similarTl
          .from('.single-post-similar__title', .5, { y: '100%', onComplete() {
            similarTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.single-post-similar__nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
            similarTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.single-post-similar__item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
            similarTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
      },
      '(max-width: 768px)': () => {
        similarTl
          .from('.single-post-similar__title', .5, { y: '100%', onComplete() {
            similarTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.single-post-similar__item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
            similarTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.single-post-similar__nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
            similarTl.set(this.targets(), { clearProps: 'all' })
          }})
      }
    })



    return () => {
      similarTl.kill()
    }
  }, [])

  return (
    <section className="single-post-similar">
      <div className="container">
        <Title title={title} />
        <List posts={posts} />
      </div>
    </section>
  )
}

export default Similar