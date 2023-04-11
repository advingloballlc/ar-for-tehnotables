import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Tabs, Nav, Content } from 'react-tiny-tabs'

import 'react-tiny-tabs/dist/index.css'

import SingleProductTabDesc from './SingleProductTabDesc'
import SingleProductTabInfo from './SingleProductTabInfo'
import SingleProductTabPayment from './SingleProductTabPayment'
import SingleProductTabReviews from './SingleProductTabReviews'
import SingleProductTabVideo from './SingleProductTabVideo'

import { isBrowser } from '../../../utils/isBrowser'

const SingleProductTabs = ({ 
  productTabs, 
  reviewBtn,
  porductDefaultLongDesc,
  productDeliveryDesc,
  reviewCount,
  reviews,
  productTechInfo,
  productVideo,
  productDescriptionChildrenStyle,
  productDescriptionGamingStyle,
  productTypeTemplate,
  reviewForm
}) => {
  const marker = useRef(null)
  const firtNavElement = useRef(null)

  useEffect(() => {
    marker.current.classList.remove('tab-nav-item')
    // marker?.current?.style?.width = `${firtNavElement.current.offsetWidth}px`

    gsap.registerPlugin(ScrollTrigger)

    let singleProductTabsTl = null

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => {
        singleProductTabsTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.single-product-content-tabs',
            start: '300px bottom'
          }
        })

        singleProductTabsTl
          .from('.single-product-content-tabs__nav-item', .5, { x: -30, opacity: 0, stagger: .1, onComplete() {
            singleProductTabsTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('#marker', .1, { width: 0, onComplete() {
            singleProductTabsTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-content-tabs__body-item.active', .4, { y: 70, opacity: 0, onComplete() {
            singleProductTabsTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
      },
      '(max-width: 991px)': () => {
        singleProductTabsTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.single-product-intro',
            start: '300px bottom'
          }
        })

        singleProductTabsTl
          .from('.single-product-content-box', .5, { delay: .1, y: 50, opacity: 0, onComplete() {
            singleProductTabsTl.set(this.targets(), { clearProps: 'all' })
          }})
      }
    })

    return () => {
      singleProductTabsTl.kill()
    }
  }, [])

  const markerMove = e => {
    marker.current.style.width = `${e.currentTarget.clientWidth}px`
    marker.current.style.left = `${e.currentTarget.offsetLeft}px`

    if (isBrowser()) setTimeout(() => ScrollTrigger.refresh(), 250)
  }

  return (
    <Tabs className="single-product-content__tabs single-product-content-tabs" settings={{fadeTime: '200'}}>
      <Nav className="single-product-content-tabs__nav">
        {
          porductDefaultLongDesc || productDescriptionChildrenStyle || productDescriptionGamingStyle
            ? <div className="single-product-content-tabs__nav-item">
                <div
                  className="single-product-content-tabs__nav-item-inner"
                  onClick={markerMove}
                  ref={firtNavElement}
                >
                  {productTabs.labelDescription}
                </div>
              </div>
            : <div className="single-product-content-tabs__nav-item single-product-content-tabs__nav-item--hidden"></div>
        }
        { 
          productTechInfo
            ? <div className="single-product-content-tabs__nav-item">
                <div
                  className="single-product-content-tabs__nav-item-inner"
                  onClick={markerMove}
                >
                  {productTabs.labelTechnicalInfo}
                </div>
              </div>
            : <div className="single-product-content-tabs__nav-item single-product-content-tabs__nav-item--hidden"></div>
        }
        {
          productDeliveryDesc
            ? <div className="single-product-content-tabs__nav-item">
                <div
                  className="single-product-content-tabs__nav-item-inner"
                  onClick={markerMove}
                >
                  {productTabs.labelPaymentAndDelivery}
                </div>
              </div>
            : <div className="single-product-content-tabs__nav-item single-product-content-tabs__nav-item--hidden"></div>
        }
        <div className="single-product-content-tabs__nav-item">
          <div
            className="single-product-content-tabs__nav-item-inner"
            onClick={markerMove}

          >
            {productTabs.labelReviews} (<span>{reviewCount}</span>)
          </div>
        </div>
        {
          productVideo
            ? <div className="single-product-content-tabs__nav-item">
                <div
                  className="single-product-content-tabs__nav-item-inner"
                  onClick={markerMove}
      
                >
                  {productTabs.labelVideo}
                </div>
              </div>
            : <div className="single-product-content-tabs__nav-item single-product-content-tabs__nav-item--hidden"></div>
        }
        
        <div id="marker" ref={marker} />
      </Nav>
      <Content className="single-product-content-tabs__body">
        {
          porductDefaultLongDesc || productDescriptionChildrenStyle || productDescriptionGamingStyle
            ? <div className="single-product-content-tabs__body-item">
                <SingleProductTabDesc 
                  porductDefaultLongDesc={porductDefaultLongDesc} 
                  productDescriptionChildrenStyle={productDescriptionChildrenStyle}
                  productDescriptionGamingStyle={productDescriptionGamingStyle}
                  productTypeTemplate={productTypeTemplate}
                />
              </div>
            : <div className="single-product-content-tabs__body-item single-product-content-tabs__body-item--hidden"></div>
        }
        {
          productTechInfo
            ? <div className="single-product-content-tabs__body-item">
                <SingleProductTabInfo productTechInfo={productTechInfo} />
              </div>
            : <div className="single-product-content-tabs__body-item single-product-content-tabs__body-item--hidden"></div>
        }
        {
          productDeliveryDesc
            ? <div className="single-product-content-tabs__body-item">
                <SingleProductTabPayment productDeliveryDesc={productDeliveryDesc} />
              </div>
            : <div className="single-product-content-tabs__body-item single-product-content-tabs__body-item--hidden"></div>
        }
        <div className="single-product-content-tabs__body-item">
          <SingleProductTabReviews
            reviewBtn={reviewBtn} 
            reviews={reviews}
            reviewForm={reviewForm}
            reviewCount={reviewCount}
          />
        </div>
        {
          productVideo
            ? <div className="single-product-content-tabs__body-item">
                <SingleProductTabVideo productVideo={productVideo} />
              </div>
            : <div className="single-product-content-tabs__body-item single-product-content-tabs__body-item--hidden"></div>
        }
      </Content>
    </Tabs>
  )
}

export default React.memo(SingleProductTabs)