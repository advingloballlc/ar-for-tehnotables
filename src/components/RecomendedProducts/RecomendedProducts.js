import React, { useEffect, useState, useCallback } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './RecomendedProducts.scss'

import RecomendedSlider from './RecomendedSlider'

import { isBrowser } from '../../utils/isBrowser'
import { getRandom } from '../../utils/getRandom'

import sprite from '../../icons/sprite.svg'

const RecomendedProducts = ({ title, categoryList, recomendedProducts }) => {
  const [ slider, setSlider ] = useState(recomendedProducts.map((product, index) => {
    return {
      id: index,
      imgSrc: product.node.featuredImage.node.localFile,
      title: product.node.name,
      link: product.node.slug,
      cat: categoryList.filter(cat => cat.slug === product.node.productCategories.nodes[0].slug)[0].name,
      price: product.node.price,
      isChanged: false,
      variability: product.node.variations && product.node.variations.reduce((o, i) => {
        if (!o.find(v => v.color[1] === i.color[1])) {
          o.push({id: getRandom(1, 10000), ...i, isActive: false})
        }
        return o
      }, []).filter(item => item.color && item.color.length !== 0)
    }
  }))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let recomendedTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.recomended',
        start: 'center bottom'
      }
    })

    recomendedTl
      .from('.recomended__title', .5, { y: '100%', onComplete() {
        recomendedTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.recomended__slider-nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
        recomendedTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      recomendedTl.kill()
    }
  }, [])

  const changeVariability = useCallback((parentId, childId, event) => {
    let img = event.currentTarget.parentElement.parentElement.previousElementSibling,
        newImg = event.currentTarget.dataset.imgSrc

    img.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        img.classList.remove('fade')
      }, 350)

      setTimeout(() => {
        setSlider(slider.map(slide => {
          return {
            ...slide,
            imgSrc: parentId === slide.id ? newImg : slide.imgSrc,
            isChanged: parentId === slide.id ? true : slide.isChanged,
            variability: slide.variability && slide.variability.map(item => {
              return {
                ...item,
                isActive: parentId === slide.id ? item.id === childId : item.isActive
              }
            })
          }
        }))
      }, 200)
    }
  }, [slider])

  return (
    <section className="recomended">
      <div className="container">
        <div className="recomended__top">
          <div className="recomended__title-wrapper title-wrapper">
            <div className="recomended__title title title--small">{title}</div>
          </div>
          <div className="recomended__slider-nav">
            <div className="recomended__slider-btn recomended__slider-prev">
              <svg><use href={`${sprite}#prev-arrow`} /></svg>
            </div>
            <div className="recomended__slider-btn recomended__slider-prev-next">
              <svg><use href={`${sprite}#next-arrow`} /></svg>
            </div>
          </div>
        </div>
        <RecomendedSlider slider={slider} changeVariability={changeVariability} />
      </div>
    </section>
  )
}

export default React.memo(RecomendedProducts)