import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import './Intro.scss'

import CategoryPreview from './CategoryPreview'

import { disableOverflow } from '../../../utils/disableOveflow'
import { detectLighthouse } from '../../../utils/detectLighthouse'

const CategoryIntro = ({ title, preview }) => {
  let intro = useRef(null)

  useEffect(() => {
    disableOverflow(intro)

    if (!detectLighthouse()) return null

    let categoryIntroTl = gsap.timeline()

    categoryIntroTl
      .from('.intro-category__title', .5, { delay: .2, y: '100%', onComplete() {
        categoryIntroTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      categoryIntroTl.kill()
    }
  }, [])

  return (
    <section className="intro intro-category" ref={intro}>
      <CategoryPreview title={title} preview={preview} />
    </section>
  )
}

export default CategoryIntro