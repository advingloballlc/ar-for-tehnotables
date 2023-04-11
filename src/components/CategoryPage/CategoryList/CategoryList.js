import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import CategoryItem from './CategoryItem'

import './CategoryList.scss'

import { detectLighthouse } from '../../../utils/detectLighthouse'

const CategoryList = ({ categoryList }) => {
  useEffect(() => {
    if (!detectLighthouse()) return null
    
    gsap.registerPlugin(ScrollTrigger)

    let categoryListTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro-category-list',
        start: '200px bottom'
      }
    })
 
    categoryListTl
      .from('.intro-category-list__item', .5, { x: -50, opacity: 0, stagger: .1, onComplete() {
        categoryListTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.intro-category-list__item-title', .5, { y: 30, opacity: 0, stagger: .1, onComplete() {
        categoryListTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    return () => {
      categoryListTl.kill()
    }
  }, [])
  
  return (
    <section className="intro-category-list">
      <div className="container">
        <div className="intro-category-list__inner">
          {
            categoryList.map(category => category.image && <CategoryItem
              name={category.name}
              slug={category.slug}
              imgDesc={category.acf.term_products_img}
              imgMobile={category.image.src}
              key={category.id}
            />)
          }
        </div>
      </div>
    </section>
  )
}

export default CategoryList