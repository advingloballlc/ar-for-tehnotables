import React, { useEffect, useState, useCallback } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { isBrowser } from '../../../utils/isBrowser'

const SingleProductDetails = ({ detailsTitle, productDetailsImg, productDetails }) => {
  const image = getImage(productDetailsImg.localFile)

  const [ details, setDetails ] = useState(productDetails.map((detail, index) => {
    return {
      id: index + 1,
      isActive: index === 0,
      ...detail,
    }
  }))

  const [ isInfoWindowClosed, setInfoWindowClose ] = useState(false)

  const changeDetails = useCallback((dotId, event) => {
    let parent = event.currentTarget.parentElement

    !isInfoWindowClosed && parent.classList.add('fade')

    if (isBrowser()) {
      if (isInfoWindowClosed) {
        setDetails(details.map(item => {
          return {
            ...item,
            isActive: dotId === item.id
          }
        }))
      } else {
        setTimeout(() => {
          setDetails(details.map(item => {
            return {
              ...item,
              isActive: dotId === item.id
            }
          }))
        }, 210)

        setTimeout(() => {
          parent.classList.remove('fade')
        }, 220)
      }
    }

    setInfoWindowClose(false)
  }, [details])

  const closeInfoWindow = useCallback(() => {
    if (isBrowser()) {
      setTimeout(() => {
        setDetails(details.map(item => {
          return {
            ...item,
            isActive: false
          }
        }))
      }, 210)
    }

    setInfoWindowClose(true)
  }, [isInfoWindowClosed])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let singleProductDetailsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-product-content-details',
        start: 'center bottom'
      }
    })

    singleProductDetailsTl
      .from('.single-product-content-details__title', .5, { y: '100%', onComplete() {
        singleProductDetailsTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-product-content-details__preview img', .5, { opacity: 0 }, '-=.1')
      .from('.single-product-content-details__dot', .3, { scale: 0, stagger: .1, ease: 'back' })
      .from('.single-product-content-details__info', .2, { opacity: 0, onComplete() {
        singleProductDetailsTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      singleProductDetailsTl.kill()
    }
  }, [])

  return (
    <div className="single-product-content__details single-product-content-details">
      <div className="single-product-content-details__title-wrapper title-wrapper">
        <div className="single-product-content-details__title title title--small">{detailsTitle}</div>
      </div>
      <div className="single-product-content-details__preview">
        <div className="single-product-content-details__photo">
          <GatsbyImage image={image} alt={detailsTitle} loading="lazy" />
          {
            details.map(item => {
              return (
                <span
                  className={`single-product-content-details__dot ${item.isActive ? 'active' : ''}`}
                  style={{ left: `${item.coordsX}%`, top: `${item.coordsY}%` }}
                  key={item.id}
                  onClick={e => changeDetails(item.id, e)}
                />
              )
            })
          }
        </div>
        <div className={`single-product-content-details__info ${isInfoWindowClosed ? 'closed' : ''}`}>
          <div className="single-product-content-details__info-title">
            { details.some(item => item.isActive) ? details.filter(item => item.isActive)[0].title : ' ' }
          </div>
          <p className="single-product-content-details__info-desc">
            { details.some(item => item.isActive) ? details.filter(item => item.isActive)[0].description : ' ' }
          </p>
          <span
            className="single-product-content-details__info-icon"
            onClick={closeInfoWindow}
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(SingleProductDetails)