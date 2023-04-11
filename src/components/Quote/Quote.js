import React, { useEffect, useContext } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Quote.scss'

import { PrefixContext } from '../../context/PrefixProvider'

const Quote = ({ promo }) => {
  let prefix = useContext(PrefixContext)
  const image = getImage(promo.promoImg.localFile)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.refresh()

    let quoteTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.quote',
        start: 'center bottom'
      }
    })

    quoteTl
      .from('.quote-content > *', .6, { y: -70, opacity: 0, stagger: -.1, onComplete() {
        quoteTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.quote__inner .gatsby-image-wrapper', .6, { x: 200, opacity: 0, onComplete() {
        quoteTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      quoteTl.kill()
    }
  })

  return (
    <section className="quote">
      <div className="container">
        <div className="quote__wrapper">
          <div className="quote__inner">
            <div className="quote__content quote-content">
              <h2 className="quote-content__title title title--big">{promo.promoText}</h2>
              <Link className="quote-content__btn btn btn--big" to={`${prefix}height-adjustable-tables`}>
                <span className="btn__inner">{promo.promoButton.title}</span>
              </Link>
            </div>
            <GatsbyImage image={image} alt={promo.promoAltText} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Quote)