import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Intro.scss'

import Preview from './Preview'
import Article from './Article'
import Info from './Info'
import Title from './Title'
import Video from './Video'
import Share from './Share'

import { isBrowser } from '../../../utils/isBrowser'
import { detectLighthouse } from '../../../utils/detectLighthouse'

const SinglePostIntro = ({ title, date, img, video, category, content, shareTitle }) => {
  useEffect(() => {
    if (!detectLighthouse()) return null
    
    gsap.registerPlugin(ScrollTrigger)

    let previewTl = gsap.timeline()

    let articleStartTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-post-intro__container',
        start: '200px bottom'
      }
    })

    let videoEndTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-post-intro__video',
        start: 'center bottom'
      }
    })

    let articleEndTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-post-intro__container',
        start: 'bottom bottom'
      }
    })

    videoEndTl
      .from('.single-post-intro__video', .5, { opacity: 0, y: 70, onComplete() {
        videoEndTl.set(this.targets(), { clearProps: 'all' })
      } })

    previewTl
      .fromTo('.single-post-intro__preview', 1.5, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }, { delay: .2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'Expo.easeInOut', onComplete() {
        previewTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-post-intro__preview > *', .8, { scale: 1.3, stagger: .1, onComplete() {
        previewTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=1')

    articleStartTl
      .from('.single-post-intro__info > *', .6, { x: -70, opacity: 0, stagger: .05, onComplete() {
        articleStartTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-post-intro__title',.5, { y: '100%', onComplete() {
        articleStartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.single-post-intro__article', .6, { opacity: 0, y: 100, onComplete() {
        articleStartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.1')

    articleEndTl
      .from('.single-post-intro__share-text', .6, { x: -70, opacity: 0, stagger: .05, onComplete() {
        articleEndTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-post-intro__share-btn', .5, { x: 50, opacity: 0, stagger: .1, onComplete() {
        articleEndTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    return () => {
      previewTl.kill()
      articleStartTl.kill()
      articleEndTl.kill()
    }
  }, [])

  return (
    <section className="intro single-post-intro">
      <div className="container">
        <div className="single-post-intro__inner">
          <Preview title={title} img={img} />
          <div className="single-post-intro__container">
            <Info date={date} category={category} />
            <Title title={title} />
            <Article article={content} />
            { video && <Video video={video} /> }
            <Share title={title} article={content} shareTitle={shareTitle} pageLnk={isBrowser() && window.location.href} />
          </div>
          <span />
        </div>
      </div>
    </section>
  )
}

export default SinglePostIntro