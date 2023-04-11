import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Category.scss'

import CategoryList from './CategoryList'

import { detectLighthouse } from '../../utils/detectLighthouse'

const Category = ({ title, list }) => {
  useEffect(() => {
    if (!detectLighthouse()) return null
    
    gsap.registerPlugin(ScrollTrigger)

    let categoryTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.category',
        start: '20% bottom'
      }
    })

    categoryTl
      .from('.category__title', .5, { y: '100%', onComplete() {
        categoryTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.category__item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
        categoryTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      categoryTl.kill()
    }
  }, [])

  return (
    <section className="category">
      <div className="container">
        <div className="category__title-wrapper title-wrapper">
          <div className="category__title title title--big">{title}</div>
        </div>
        <CategoryList list={list} />
      </div>
    </section>
  )
}

export default Category