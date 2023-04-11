import React, { useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Intro.scss'

import SearchList from './SearchList'

import { isBrowser } from '../../../utils/isBrowser'
import { getRandom } from '../../../utils/getRandom'

const SearchIntro = ({ searchQuery, title, errTitle, products }) => {
  const [ list, setList ] = useState([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()

    gsap.from('.search-intro__title', .5, { delay: .4, y: '100%', onComplete() {
      gsap.set(this.targets(), { clearProps: 'all' })
    }})

    if (searchQuery.trim() !== '') {
      let filteredProducts = products.filter(item => item.node.name && item.node.name.toLowerCase().indexOf(searchQuery) !== -1)

      new Promise((resolve, reject) => {
        setList(filteredProducts.map(product => {
          return {
            id: product.node.id,
            title: product.node.name,
            price: product.node.price,
            slug: product.node.slug,
            imgSrc: product.node.featuredImage.node.sourceUrl,
            variability: product.node.variations && product.node.variations.reduce((o, i) => {
              if (!o.find(v => v.color[1] === i.color[1])) {
                o.push({id: getRandom(1, 10000), ...i, isActive: false})
              }
              return o
            }, []).filter(item => item.color && item.color.length !== 0)
          }
        }))

        resolve()
      })
        .then(() => {
          gsap.to('.search-intro-item', .6, { y: 0, opacity: 1, stagger: .05, delay: .4})
        })
    } else {
      setList([])
    }
  }, [])

  useEffect(() => {
    ScrollTrigger.refresh()

    if (searchQuery.trim() !== '') {
      let filteredProducts = products.filter(item => item.node.name && item.node.name.toLowerCase().indexOf(searchQuery) !== -1)

      new Promise((resolve, reject) => {
        setList(filteredProducts.map(product => {
          return {
            id: product.node.id,
            title: product.node.name,
            price: product.node.price,
            slug: product.node.slug,
            imgSrc: product.node.featuredImage.node.localFile.publicURL,
            variability: product.node.variations && product.node.variations.reduce((o, i) => {
              if (!o.find(v => v.color[1] === i.color[1])) {
                o.push({id: getRandom(1, 10000), ...i, isActive: false})
              }
              return o
            }, []).filter(item => item.color && item.color.length !== 0)
          }
        }))

        resolve()
      })
        .then(() => {
          gsap.fromTo('.search-intro-item', .6, { y: 100, opacity: 0}, { y: 0, opacity: 1, stagger: .05})
        })
    } else {
      setList([])
    }
  }, [searchQuery])

  const changeVariability = useCallback((parentId, childId, event) => {
    let img = event.currentTarget.parentElement.parentElement,
        newImg = event.currentTarget.dataset.imgSrc

    img.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        img.classList.remove('fade')
      }, 250)

      setTimeout(() => {
        setList(list.map(item => {
          return {
            ...item,
            imgSrc: parentId === item.id ? newImg : item.imgSrc,
            variability: item.variability && item.variability.map(itemVar => {
              return {
                ...itemVar,
                isActive: parentId === item.id ? itemVar.id === childId : itemVar.isActive
              }
            })
          }
        }))
      }, 150)
    }
  }, [list])

  if (!isBrowser()) return null

  return (
    <section className="intro search-intro">
      <div className="container">
        <div className="search-intro__title-wrapper title-wrapper">
          {
            list.length !== 0
              ? <h1 className="search-intro__title title title--big">{title} <span>“{searchQuery || window.localStorage.getItem('searchQuery')}”</span></h1>
              : <h1 className="search-intro__title title title--big">{errTitle}</h1>
          }
        </div>
        {
          <SearchList
            list={list}
            changeVariability={changeVariability}
          />
        }
      </div>
    </section>
  )
}

export default SearchIntro