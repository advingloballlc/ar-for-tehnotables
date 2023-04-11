import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Intro.scss'

import SingleProductInfo from './SingleProductInfo'
import SingleProductSlider from './SingleProductSlider'
import SingleProductMobile from './SingleProductMobile'

import { disableOverflow } from '../../../utils/disableOveflow'
import { detectLighthouse } from '../../../utils/detectLighthouse'

import cloud1 from '../../../images/cloud-1.svg'
import cloud2 from '../../../images/cloud-2.svg'
import cloud3 from '../../../images/cloud-3.svg'
import cloud4 from '../../../images/cloud-4.svg'
import cloud5 from '../../../images/cloud-5.svg'
import cloud6 from '../../../images/cloud-6.svg'
import cloud7 from '../../../images/cloud-7.svg'
import cloud8 from '../../../images/cloud-8.svg'

const SingleProductIntro = ({
  gallerySlider,
  counter,
  setCounter,
  colorCode,
  checkColorCode,
  isVisibleColorCode,
  changeColorCode,
  color,
  changeColor,
  addToCartBtn,
  addedCartToBtn,
  variabilatyText,
  avaliableColorsText,
  downloadText,
  instructionText,
  cartInfo,
  productTitle,
  productShortDesc,
  mdfVariabilaty,
  avaliableColors,
  pdfInstruction,
  price,
  addToCartHandler,
  isAddingToCart,
  isVariation,
  isColored,
  is3d,
  slug,
  productSloganText,
  productTypeTemplate,
  dropdowns,
  toggleDropdown,
  selectDropdownItem,
  colorTitle,
  isAddedToCart
}) => {
  let intro = useRef(null)

  useEffect(() => {
    disableOverflow(intro)

    if (!detectLighthouse()) return null

    let singleProductInfo = gsap.timeline()

    gsap.from('.single-product-intro__bg > *', .5, { opacity: 0, delay: 2, stagger: .1, onComplete() {
      gsap.set(this.targets(), { clearProps: 'all' })
    } })

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => {
        singleProductInfo
          .from('.single-product-intro-info__title', .5, { delay: .2, y: '100%', onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.single-product-intro-info__desc', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.single-product-intro-info__link', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.single-product-intro-info__chars', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__price', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__controls', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__list', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro__slider-inner', .5, { opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro__slider-pagination', .6, { y: -40, opacity: 0 }, '-=.3')
          .from('.single-product-intro__slider', .5, { opacity: 0, pointerEvents: 'none', onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.single-product-intro-slider__controls-elem', .5, { opacity: 0, stagger: .1, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.1')
      },
      '(max-width: 991px) and (min-width: 481px)': () => {
        singleProductInfo
          .from('.single-product-intro__mobile-title', .5, { delay: .2, y: '100%', onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.single-product-intro__desc-mobile', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.single-product-intro__slider-pagination', .6, { y: -40, opacity: 0, stagger: -.05}, '-=.3')
          .from('.single-product-intro__slider', .5, { opacity: 0, pointerEvents: 'none', onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.single-product-intro-slider__controls-elem', .5, { opacity: 0, stagger: .1, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.1')
          .from('.single-product-intro-info__link', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.single-product-intro-info__chars', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__price', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__controls', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__list', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
      },
      '(max-width: 480px)': () => {
        singleProductInfo
          .from('.single-product-intro__mobile-title', .5, { delay: .2, y: '100%', onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.single-product-intro__slider-pagination', .6, { y: -40, opacity: 0, stagger: -.05 })
          .from('.single-product-intro__slider', .5, { opacity: 0, pointerEvents: 'none', onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.single-product-intro-slider__nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.1')
          .from('.single-product-intro-info__desc', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.single-product-intro-info__link', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__chars', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__price', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__controls', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__instruction', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
          .from('.single-product-intro-info__list', .5, { y: 40, opacity: 0, onComplete() {
            singleProductInfo.set(this.targets(), { clearProps: 'all' })
          }}, '-=.4')
      }
    })

    return () => singleProductInfo.kill()
  }, [])

  return (
    <section className="single-product-intro intro" ref={intro}>
      { productTypeTemplate === 'child' && <div className="single-product-intro__clouds single-product-intro__bg">
        <img
          src={cloud1}
          alt="Cloud 1"
          width={62}
          height={39}
          loading="lazy"
        />
        <img
          src={cloud2}
          alt="Cloud 2"
          width={95}
          height={68}
          loading="lazy"
        />
        <img
          src={cloud3}
          alt="Cloud 3"
          width={92}
          height={53}
          loading="lazy"
        />
        <img
          src={cloud4}
          alt="Cloud 4"
          width={55}
          height={37}
          loading="lazy"
        />
        <img
          src={cloud5}
          alt="Cloud 5"
          width={102}
          height={63}
          loading="lazy"
        />
        <img
          src={cloud6}
          alt="Cloud 6"
          width={49}
          height={30}
          loading="lazy"
        />
        <img
          src={cloud7}
          alt="Cloud 7"
          width={85}
          height={54}
          loading="lazy"
        />
        <img
          src={cloud8}
          alt="Cloud 8"
          width={79}
          height={46}
        />
      </div> }
      { productTypeTemplate === 'gaming' && <div className="single-product-intro__particles single-product-intro__bg">
        <div className="single-product-intro__particles-item">
          <svg width="152" height="23" viewBox="0 0 152 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.35889 22.987H10.6272L22.214 12.1478L9.24917 -0.000488281H0.966797L13.9457 12.1478L2.35889 22.987Z" fill="#FC0012"/>
            <path d="M15.2817 22.987H23.55L35.1369 12.1478L22.172 -0.000488281H13.8896L26.8545 12.1478L15.2817 22.987Z" fill="#FC0012"/>
            <path d="M28.1905 22.987H36.4729L48.0597 12.1478L35.0808 -0.000488281H26.8125L39.7774 12.1478L28.1905 22.987Z" fill="#FC0012"/>
            <path d="M41.1134 22.987H49.3957L60.9685 12.1478L48.0036 -0.000488281H39.7354L52.7002 12.1478L41.1134 22.987Z" fill="#FC0012"/>
            <path d="M54.0357 22.987H62.3039L73.8908 12.1478L60.9259 -0.000488281H52.6436L65.6225 12.1478L54.0357 22.987Z" fill="#FC0012"/>
            <path d="M66.9585 22.987H75.2268L86.8136 12.1478L73.8488 -0.000488281H65.5664L78.5313 12.1478L66.9585 22.987Z" fill="#FC0012"/>
            <path d="M79.8673 22.987H88.1496L99.7365 12.1478L86.7576 -0.000488281H78.4893L91.4541 12.1478L79.8673 22.987Z" fill="#FC0012"/>
            <path d="M92.7901 22.987H101.072L112.645 12.1478L99.6804 -0.000488281H91.4121L104.377 12.1478L92.7901 22.987Z" fill="#FC0012"/>
            <path d="M105.712 22.987H113.981L125.568 12.1478L112.603 -0.000488281H104.32L117.299 12.1478L105.712 22.987Z" fill="#FC0012"/>
            <path d="M118.635 22.987H126.904L138.49 12.1478L125.526 -0.000488281H117.243L130.208 12.1478L118.635 22.987Z" fill="#FC0012"/>
            <path d="M131.544 22.987H139.826L151.413 12.1478L138.434 -0.000488281H130.166L143.131 12.1478L131.544 22.987Z" fill="#FC0012"/>
          </svg>
        </div>
        <div className="single-product-intro__particles-item">
          <svg width="198" height="21" viewBox="0 0 198 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.774 20.084H178.297L197.177 0.458984H184.666L165.774 20.084Z" fill="#FC0012"/>
            <path d="M142.188 20.084H154.699L173.591 0.458984H161.068L142.188 20.084Z" fill="#FC0012"/>
            <path d="M118.589 20.084H131.1L149.992 0.458984H137.48L118.589 20.084Z" fill="#FC0012"/>
            <path d="M94.9912 20.084H107.514L126.405 0.458984H113.883L94.9912 20.084Z" fill="#FC0012"/>
            <path d="M71.4033 20.084H83.9149L102.806 0.458984H90.2948L71.4033 20.084Z" fill="#FC0012"/>
            <path d="M47.8057 20.084H60.328L79.2195 0.458984H66.6971L47.8057 20.084Z" fill="#FC0012"/>
            <path d="M24.2178 20.084H36.7293L55.6207 0.458984H43.1092L24.2178 20.084Z" fill="#FC0012"/>
            <path d="M0.620117 20.084H13.1424L32.0231 0.458984H19.5116L0.620117 20.084Z" fill="#FC0012"/>
          </svg>
        </div>
        <div className="single-product-intro__particles-item">
          <svg width="165" height="26" viewBox="0 0 165 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.26 25.6896H24.9485L0.354492 0.140137H16.652L41.26 25.6896Z" fill="#FC0012"/>
            <path d="M71.9986 25.6896H55.6871L31.0791 0.140137H47.3907L71.9986 25.6896Z" fill="#FC0012"/>
            <path d="M102.724 25.6896H86.4264L61.8184 0.140137H78.1159L102.724 25.6896Z" fill="#FC0012"/>
            <path d="M133.463 25.6896H117.151L92.543 0.140137H108.855L133.463 25.6896Z" fill="#FC0012"/>
            <path d="M164.188 25.6896H147.89L123.282 0.140137H139.58L164.188 25.6896Z" fill="#FC0012"/>
          </svg>
        </div>
        <div className="single-product-intro__particles-item">
          <svg width="165" height="26" viewBox="0 0 165 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.26 25.6896H24.9485L0.354492 0.140137H16.652L41.26 25.6896Z" fill="#FC0012"/>
            <path d="M71.9986 25.6896H55.6871L31.0791 0.140137H47.3907L71.9986 25.6896Z" fill="#FC0012"/>
            <path d="M102.724 25.6896H86.4264L61.8184 0.140137H78.1159L102.724 25.6896Z" fill="#FC0012"/>
            <path d="M133.463 25.6896H117.151L92.543 0.140137H108.855L133.463 25.6896Z" fill="#FC0012"/>
            <path d="M164.188 25.6896H147.89L123.282 0.140137H139.58L164.188 25.6896Z" fill="#FC0012"/>
          </svg>
        </div>
        <div className="single-product-intro__particles-item">
          <svg width="152" height="23" viewBox="0 0 152 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.35889 22.987H10.6272L22.214 12.1478L9.24917 -0.000488281H0.966797L13.9457 12.1478L2.35889 22.987Z" fill="#FC0012"/>
            <path d="M15.2817 22.987H23.55L35.1369 12.1478L22.172 -0.000488281H13.8896L26.8545 12.1478L15.2817 22.987Z" fill="#FC0012"/>
            <path d="M28.1905 22.987H36.4729L48.0597 12.1478L35.0808 -0.000488281H26.8125L39.7774 12.1478L28.1905 22.987Z" fill="#FC0012"/>
            <path d="M41.1134 22.987H49.3957L60.9685 12.1478L48.0036 -0.000488281H39.7354L52.7002 12.1478L41.1134 22.987Z" fill="#FC0012"/>
            <path d="M54.0357 22.987H62.3039L73.8908 12.1478L60.9259 -0.000488281H52.6436L65.6225 12.1478L54.0357 22.987Z" fill="#FC0012"/>
            <path d="M66.9585 22.987H75.2268L86.8136 12.1478L73.8488 -0.000488281H65.5664L78.5313 12.1478L66.9585 22.987Z" fill="#FC0012"/>
            <path d="M79.8673 22.987H88.1496L99.7365 12.1478L86.7576 -0.000488281H78.4893L91.4541 12.1478L79.8673 22.987Z" fill="#FC0012"/>
            <path d="M92.7901 22.987H101.072L112.645 12.1478L99.6804 -0.000488281H91.4121L104.377 12.1478L92.7901 22.987Z" fill="#FC0012"/>
            <path d="M105.712 22.987H113.981L125.568 12.1478L112.603 -0.000488281H104.32L117.299 12.1478L105.712 22.987Z" fill="#FC0012"/>
            <path d="M118.635 22.987H126.904L138.49 12.1478L125.526 -0.000488281H117.243L130.208 12.1478L118.635 22.987Z" fill="#FC0012"/>
            <path d="M131.544 22.987H139.826L151.413 12.1478L138.434 -0.000488281H130.166L143.131 12.1478L131.544 22.987Z" fill="#FC0012"/>
          </svg>
        </div>
        <div className="single-product-intro__particles-item">
          <svg width="457" height="11" viewBox="0 0 457 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M451.488 6.28415H9.95016C9.55643 6.28415 9.24707 5.97446 9.24707 5.58031C9.24707 5.18615 9.55643 4.87646 9.95016 4.87646H451.488C451.882 4.87646 452.191 5.18615 452.191 5.58031C452.191 5.97446 451.882 6.28415 451.488 6.28415Z" fill="#FC0012"/>
            <path d="M5.97058 10.9718C8.94498 10.9718 11.3562 8.55798 11.3562 5.58038C11.3562 2.60278 8.94498 0.188965 5.97058 0.188965C2.99617 0.188965 0.584961 2.60278 0.584961 5.58038C0.584961 8.55798 2.99617 10.9718 5.97058 10.9718Z" fill="#FC0012"/>
            <path d="M451.488 10.9718C454.463 10.9718 456.874 8.55798 456.874 5.58038C456.874 2.60278 454.463 0.188965 451.488 0.188965C448.514 0.188965 446.103 2.60278 446.103 5.58038C446.103 8.55798 448.514 10.9718 451.488 10.9718Z" fill="#FC0012"/>
          </svg>
        </div>
        <div className="single-product-intro__particles-item">
          <svg width="439" height="90" viewBox="0 0 439 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M112.212 89.7736H1.47648C0.70309 89.7736 0.0703125 89.1402 0.0703125 88.3659C0.0703125 87.5917 0.70309 86.9582 1.47648 86.9582H111.045L179.189 18.7469H419.18L436 0.778935C436.549 0.229939 437.434 0.229939 437.983 0.778935C438.531 1.32793 438.531 2.21477 437.983 2.76377L420.348 21.5482H180.356L112.212 89.7595V89.7736Z" fill="#FC0012"/>
          </svg>
        </div>
        <div className="single-product-intro__particles-item">
          <svg width="484" height="79" viewBox="0 0 484 79" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M2.3413 78.8925C1.99115 78.8925 1.65448 78.7517 1.38513 78.4843C0.859904 77.9353 0.859904 77.0484 1.38513 76.4994L74.2301 0.35791H304.226L367.63 66.6316H482.439C483.18 66.6316 483.786 67.2651 483.786 68.0393C483.786 68.8135 483.18 69.447 482.439 69.447H366.512L303.108 3.17327H75.3479L3.28399 78.4984C3.01465 78.7799 2.67797 78.9066 2.32782 78.9066L2.3413 78.8925Z" fill="#FC0012"/>
          </svg>
        </div>
        <div className="single-product-intro__particles-item">
          <svg width="439" height="90" viewBox="0 0 439 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M112.212 89.7736H1.47648C0.70309 89.7736 0.0703125 89.1402 0.0703125 88.3659C0.0703125 87.5917 0.70309 86.9582 1.47648 86.9582H111.045L179.189 18.7469H419.18L436 0.778935C436.549 0.229939 437.434 0.229939 437.983 0.778935C438.531 1.32793 438.531 2.21477 437.983 2.76377L420.348 21.5482H180.356L112.212 89.7595V89.7736Z" fill="#FC0012"/>
          </svg>
        </div>
      </div> }
      <div className="container">
        <SingleProductMobile
          productTitle={productTitle}
          productShortDesc={productShortDesc}
        />
        <div className="single-product-intro__inner">
          <SingleProductSlider 
            gallerySlider={gallerySlider}
            downloadText={downloadText}
            instructionText={instructionText}
            pdfInstruction={pdfInstruction}
            is3d={is3d}
            slug={slug}
            productSloganText={productSloganText}
            productTypeTemplate={productTypeTemplate}
            color={color}
            dropdowns={dropdowns}
          />
          <SingleProductInfo
            counter={counter}
            setCounter={setCounter}
            colorCode={colorCode}
            checkColorCode={checkColorCode}
            isVisibleColorCode={isVisibleColorCode}
            changeColorCode={changeColorCode}
            color={color}
            changeColor={changeColor}
            addToCartBtn={addToCartBtn}
            addedCartToBtn={addedCartToBtn}
            variabilatyText={variabilatyText}
            avaliableColorsText={avaliableColorsText}
            downloadText={downloadText}
            instructionText={instructionText}
            cartInfo={cartInfo}
            productTitle={productTitle}
            productShortDesc={productShortDesc}
            mdfVariabilaty={mdfVariabilaty}
            avaliableColors={avaliableColors}
            pdfInstruction={pdfInstruction}
            price={price}
            addToCartHandler={addToCartHandler}
            isAddingToCart={isAddingToCart}
            isVariation={isVariation}
            isColored={isColored}
            is3d={is3d}
            slug={slug}
            dropdowns={dropdowns}
            toggleDropdown={toggleDropdown}
            selectDropdownItem={selectDropdownItem}
            colorTitle={colorTitle}
            isAddedToCart={isAddedToCart}
          />
        </div>
      </div>
    </section>
  )
}

export default SingleProductIntro