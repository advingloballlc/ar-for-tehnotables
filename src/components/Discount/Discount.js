import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Discount.scss'

import DiscountContent from './DiscountContent'
import DiscountSlider from './DiscountSlider'

const Discount = ({ 
  productBundle, 
  productBundleInfo,
  isAddingToCart, 
  setIsAddingToCart,
  isAddedToCart,
  setIsAddedToCart
}) => {
  let [ isHiddenSlider, setHiddenSlider ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let discountTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.discount',
        start: 'center bottom'
      }
    })

    ScrollTrigger.matchMedia({
      '(min-width: 991px)': () => {
        setHiddenSlider(false)

        discountTl
          .from('.discount__slider-wrapper', .6, { opacity: 0, delay: .2, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.discount-slider__pagination-item', .5, { opacity: 0, stagger: .05, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.discount-content__title', .6, { y: -70, opacity: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.8')
          .from('.discount-content__desc', .6, { y: -70, opacity: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.discount-content__item', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.discount-content__products-title', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.discount-content__products-price', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.discount-content__btn', .5, { opacity: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.discount-content__btn-border--long', .5, { scaleX: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.discount-content__btn-border--short', .5, { scaleY: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.discount-content__sale', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.5')
          .from('.discount-content__sale span', {
            textContent: 0, duration: 1.5, ease: "power1.inOut", snap: {textContent: 1}, stagger: {
              each: 0, onUpdate: function () {
                this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
              },
            },
            onComplete() {
              discountTl.set(this.targets(), { clearProps: 'all' })
            }
          }, '-=.5')
      },
      '(max-width: 990px)': () => {
        setHiddenSlider(true)

        discountTl
          .from('.discount-content__title', .6, { y: -70, opacity: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.discount-content__desc', .6, { y: -70, opacity: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.discount-content__item', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.discount-content__products-title', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.discount-content__products-price', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.discount-content__btn', .5, { opacity: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.discount-content__btn-border--long', .5, { scaleX: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.discount-content__btn-border--short', .5, { scaleY: 0, onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.discount-content__sale', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
            discountTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.5')
          .from('.discount-content__sale span', {
            textContent: 0, duration: 1.5, ease: "power1.inOut", snap: {textContent: 1}, stagger: {
              each: 0, onUpdate: function () {
                this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
              },
            },
            onComplete() {
              discountTl.set(this.targets(), { clearProps: 'all' })
            }
          }, '-=.5')
      }
    })

    return () => {
      discountTl.kill()
    }
  }, [])

  return (
    <section className="discount">
      <div className="container">
        <div className="discount__inner">
          { !isHiddenSlider && <DiscountSlider title={productBundle.bundleTitle} gallery={productBundle.bundleGallery} /> }
          <DiscountContent 
            title={productBundle.bundleTitle} 
            desc={productBundle.bundleDesc}
            btn={productBundle.bundleBtn}
            btnAdded={productBundle.bundleBtnAdded}
            productBundleInfo={productBundleInfo}
            isAddingToCart={isAddingToCart} 
            setIsAddingToCart={setIsAddingToCart}
            isAddedToCart={isAddedToCart}
            setIsAddedToCart={setIsAddedToCart}
          />
        </div>
      </div>
    </section>
  )
}

export default Discount