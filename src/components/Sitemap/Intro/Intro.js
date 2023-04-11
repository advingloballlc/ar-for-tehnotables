import React, { useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'

import './Sitemap.scss'

import { PrefixContext } from '../../../context/PrefixProvider'
import { detectLighthouse } from './../../../utils/detectLighthouse'

const SitemapIntro = ({ title, pages, posts, productCategories }) => {
  let prefix = useContext(PrefixContext)
  
  useEffect(() => {
    if (!detectLighthouse()) return null
    
    gsap.registerPlugin(CSSRulePlugin)

    let sitemapTl = gsap.timeline()

    sitemapTl
      .from('.sitemap-intro__title', .5, { delay: .2, y: '100%', onComplete() {
        sitemapTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.sitemap-intro-list__link', .6, { x: 40, opacity: 0, stagger: .01, onComplete() {
        sitemapTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from(CSSRulePlugin.getRule('.sitemap-intro-list__link::before'),{
        duration: .5,
        cssRule: {
          scaleX: 0
        }
      })
      .from(CSSRulePlugin.getRule('.sitemap-intro-list::before'),{
        duration: 1.2,
        cssRule: {
          scaleY: 0
        }
      })
      .from(CSSRulePlugin.getRule('.sitemap-intro-list::after'),{
        duration: .5,
        cssRule: {
          scaleX: 0
        }
      })

    return () => sitemapTl.kill()
  })

  const filteredPages = pages.filter(page => 
    page.node.slug !== 'configurator' && 
    page.node.slug !== 'sitemap' && 
    page.node.slug !== 'thank-you' && 
    page.node.slug !== 'search' && 
    page.node.slug !== 'checkout' && 
    page.node.slug !== 'profile' && 
    page.node.slug !== 'blog' &&
    page.node.slug !== 'goods'
  )

  const blogPage = pages.filter(page => page.node.slug === 'blog')[0]
  const catalogPage = pages.filter(page => page.node.slug === 'goods')[0]

  return (
    <section className="intro sitemap-intro text-page">
      <div className="container">
        <div className="sitemap-intro__title-wrapper title-wrapper">
          <h1 className="sitemap-intro__title title title--big">{title}</h1>
        </div>
        <div className="sitemap-intro__inner">
          <ul className="sitemap-intro__list sitemap-intro-list">
            { filteredPages.map(page => {
              return (
                <li className="sitemap-intro-list__item" key={page.node.databaseId}>
                  <Link 
                    className="sitemap-intro-list__link" 
                    to={page.node.slug === 'home' ? prefix : `${prefix}${page.node.slug}`}
                  >
                    {page.node.title}
                  </Link>
                </li>
              )
            }) }
            <li className="sitemap-intro-list__item">
              <Link 
                className="sitemap-intro-list__link" 
                to={`${prefix}${blogPage.node.slug}`}
              >
                {blogPage.node.title}
              </Link>
              <ul className="sitemap-intro__list sitemap-intro-list">
                { posts.map(post => {
                  return (
                    <li className="sitemap-intro-list__item" key={post.node.databaseId}>
                      <Link 
                        className="sitemap-intro-list__link" 
                        to={`${prefix}${post.node.slug}`}
                      >
                        {post.node.title}
                      </Link>
                    </li>
                  )
                }) }
              </ul>
            </li>
            <li className="sitemap-intro-list__item">
              <Link 
                className="sitemap-intro-list__link" 
                to={`${prefix}${catalogPage.node.slug}`}
              >
                {catalogPage.node.title}
              </Link>
              <ul className="sitemap-intro__list sitemap-intro-list">
                { productCategories.map(cat => {
                  return (
                    <li className="sitemap-intro-list__item" key={cat.node.databaseId}>
                      <Link className="sitemap-intro-list__link" to={`${prefix}${cat.node.slug}`}>
                        {cat.node.name}
                      </Link>
                      <ul className="sitemap-intro__list sitemap-intro-list">
                        { cat.node.products.nodes.map(product => {
                          return (
                            <li className="sitemap-intro-list__item" key={product.id}>
                              <Link className="sitemap-intro-list__link" to={`${prefix}${product.slug}`}>
                                {product.name}
                              </Link>
                            </li>
                          )
                        }) }
                      </ul>
                    </li>
                  )
                }) }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SitemapIntro