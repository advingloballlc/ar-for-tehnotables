import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import IntroCategories from './IntroCategories'
import IntroList from './IntroList'

import Pagination from '../../Pagination/Pagination'

import './Intro.scss'

import { detectLighthouse } from '../../../utils/detectLighthouse'

const Intro = ({ 
  pageTitle, 
  blogCategoriesTitle, 
  categoriesList,
  posts,
  pageInfo
}) => {
  const [ categories, setCategories ] = useState(categoriesList.map(category => ({
    id: category.databaseId,
    ...category,
    isActive: false
  })))
  
  const [ postsList, setPostsList ] = useState(posts.map(post => ({
    date: post.node.date,
    featuredImage: post.node.featuredImage,
    slug: post.node.slug,
    terms: post.node.terms,
    title: post.node.title
  })))

  const [ isFilteredPost, setIsFilteredPost ] = useState(false)

  useEffect(() => {
    if (!detectLighthouse()) return null
    
    gsap.registerPlugin(ScrollTrigger)

    let blogPaginationTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro-blog-pagination',
        start: 'bottom bottom'
      }
    })

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
          gsap.from('.intro-blog__title', .5, { delay: .2, y: '100%', onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.intro-blog__categories-title', .5, { delay: .5, y: -20, opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.intro-blog__categories-item', .5, { delay: 1, x: -20, opacity: 0, stagger: .05, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.fromTo('.intro-blog__item-inner', 1.1, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }, { delay: 1.5, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: .1, ease: 'Expo.easeInOut', onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.intro-blog__item-inner .gatsby-image-wrapper', .5, { delay: 1.8, scale: 1.3, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})

        blogPaginationTl
          .from('.intro-blog-pagination', .5, { opacity: 0, y: '100%', onComplete() {
            blogPaginationTl.set(this.targets(), { clearProps: 'all' })
          }})
      },
      '(max-width: 1024px)': () => {
          gsap.from('.intro-blog__title', .5, { delay: .2, y: '100%', onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.intro-blog__categories-title', .5, { delay: .5, y: -20, opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.intro-blog__categories-item', .6, { delay: 1, x: -20, opacity: 0, stagger: .05, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.fromTo('.intro-blog__item-preview', 1.2, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },  { delay: 1.5, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: .1, ease: 'Expo.easeInOut', onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.intro-blog__item-inner .gatsby-image-wrapper', .6, { delay: 1.8, scale: 1.3, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.intro-blog__item-info > *', .5, { delay: 2, y: -30, opacity: 0, stagger: .05, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
        
        blogPaginationTl
          .from('.intro-blog-pagination', .5, { opacity: 0, y: '100%', onComplete() {
            blogPaginationTl.set(this.targets(), { clearProps: 'all' })
          }})
      }
    })

    return () => {
      blogPaginationTl.kill()
    }
  }, [])

  const toggleIsActive = (categoryId, categorySlug) => {
    new Promise((resolve, reject) => {
      setCategories(categories.map(item => {
        return {
          ...item,
          isActive: categoryId === item.id
        }
      }))
  
      setIsFilteredPost(true)
      
      setPostsList(categories.filter(cat => cat.slug === categorySlug)[0].posts.nodes)
      resolve()
    })
      .then(() => {
        ScrollTrigger.refresh()

        ScrollTrigger.matchMedia({
          '(min-width: 1025px)': () => {
            gsap.fromTo('.intro-blog__item-inner', 1.1,
              { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
              { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: .1, ease: 'Expo.easeInOut'}
            )
            gsap.from('.intro-blog__item-inner .gatsby-image-wrapper', .5, { delay: .4, scale: 1.3, stagger: .1, onComplete() {
              gsap.set(this.targets(), { clearProps: 'all' })
            }})
          },
          '(max-width: 1024px)': () => {
            gsap.fromTo('.intro-blog__item-preview', 1.2, 
              { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
              { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: .1, ease: 'Expo.easeInOut' }
            )
            gsap.from('.intro-blog__item-inner .gatsby-image-wrapper', .6, { delay: .4, scale: 1.3, stagger: .1, onComplete() {
              gsap.set(this.targets(), { clearProps: 'all' })
            }})
            gsap.from('.intro-blog__item-info > *', .5, { delay: .6, y: -30, opacity: 0, stagger: .05, onComplete() {
              gsap.set(this.targets(), { clearProps: 'all' })
            }})
          }
        })
      })
  }

  return (
    <section className="intro intro-blog">
      <div className="container">
        <div className="intro-blog__wrapper">
          <div className="intro-blog__title-wrapper title-wrapper">
            <h1 className="intro-blog__title title title--big">{pageTitle}</h1>
          </div>
          <IntroCategories
            categories={categories}
            toggleIsActive={toggleIsActive}
            blogCategoriesTitle={blogCategoriesTitle}
          />
          <IntroList 
            posts={postsList} 
            blogCategoriesTitle={blogCategoriesTitle}
          />
        </div>
        { pageInfo.pageCount > 1 && !isFilteredPost && <Pagination 
            className="intro-blog-pagination" 
            pageInfo={pageInfo} 
            isLoading={false}
            slug="blog"
          /> 
        }
      </div>
    </section>
  )
}

export default Intro