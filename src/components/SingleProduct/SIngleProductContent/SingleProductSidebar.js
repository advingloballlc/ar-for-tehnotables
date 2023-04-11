import React, { useEffect, useRef } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { fieldChange } from './../../../utils/fieldChange'
import { fieldBlur } from './../../../utils/fieldBlur'
import { incremementCount } from '../../../utils/incremementCount'
import { decrementCount } from '../../../utils/decrementCount'
import { checkInp } from '../../../utils/checkInp'
import { checkSidebarHeight } from './../../../utils/checkSidebarHeight'

import sprite from '../../../icons/sprite.svg'

const SingleProductSidebar = ({
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
  cartInfo,
  featuredImage,
  productTitle,
  mdfVariabilaty,
  avaliableColors,
  price,
  addToCartHandler,
  isAddingToCart,
  isVariation,
  isColored,
  dropdowns,
  toggleDropdown,
  selectDropdownItem,
  colorTitle,
  isAddedToCart,
  slug
}) => {
  const sidebar = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let singleProductSidebarTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-product-content-sidebar',
        start: '500px bottom'
      }
    })

    singleProductSidebarTl
      .from('.single-product-content-sidebar__title', .5, { delay: .2, y: '100%', onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-product-content-sidebar__preview-wrapper', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.single-product-content-sidebar__link', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-content-sidebar__chars', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-content-sidebar__price', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-content-sidebar__controls', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-content-sidebar__list', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')

    

    return () => {
      singleProductSidebarTl.kill()
    }
  }, [])

  useEffect(() => checkSidebarHeight(sidebar))

  return (
    <aside className="single-product-content__sidebar single-product-content-sidebar">
      <div className="single-product-content-sidebar__inner" ref={sidebar}>
        <div className="single-product-content-sidebar__title-wrapper title-wrapper">
          <div className="single-product-content-sidebar__title title title--big">{productTitle}</div>
        </div>
        <div className="single-product-content-sidebar__preview-wrapper">
          <div className={`single-product-content-sidebar__preview`}>
            <img src={featuredImage} alt={productTitle} width={195} height={170} itemprop="image" loading="lazy" />
          </div>
        </div>
        { mdfVariabilaty && <a
          className="single-product-content-sidebar__link"
          href={mdfVariabilaty.localFile.publicURL}
          download
        >
          {variabilatyText}
        </a> }
        { isVariation && <div className="single-product-content-sidebar__chars">
          { isColored && <div className="single-product-content-sidebar__chars-item single-product-content-sidebar__chars-item--color">
            <div className="single-product-content-sidebar__chars-title local-title local-title--grey">{colorTitle}</div>
            <div className="single-product-content-sidebar__chars-inner">
              { color.map(item => {
                return (
                  <div 
                    className={`single-product-content-sidebar__chars-elem ${item.isActive ? 'active' : ''}`}
                    key={item.id}
                    onClick={() => changeColor(item.id)}
                  >
                    <div className="single-product-content-sidebar__chars-elem-inner">
                      <span 
                        style={{ 
                          backgroundColor: item.color[1] === '#000000' ? '#1d1d1d' : item.color[1], 
                          borderColor: item.color[1] === '#ffffff' ? '#ccc' : item.color[1]
                        }} 
                      />
                    </div>
                  </div>
                )
              }) }
              { avaliableColors && <div 
                className={`single-product-content-sidebar__chars-elem ${isVisibleColorCode ? 'active' : ''}`}
                onClick={changeColorCode}
              >
                <div className="single-product-content-sidebar__chars-elem-inner">
                  <span style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <svg>
                      <use href={`${sprite}#multicolor`} />
                    </svg>
                  </span>
                </div>
              </div> }
            </div>
          </div> }
          { isVisibleColorCode && avaliableColors && <div className="single-product-content-sidebar__chars-item single-product-content-sidebar__chars-item--code">
            <a
              className="single-product-content-sidebar__link" 
              href={avaliableColors.localFile.publicURL}
              download
            >
              {avaliableColorsText}
            </a>
            <div className="single-product-content-sidebar__chars-inner">
              <div className="single-product-content-sidebar__chars-title local-title local-title--grey">{colorTitle}</div>
              <div className="single-product-intro-info__chars-inp-wrapper">
                <input 
                  className="single-product-content-sidebar__chars-inp" 
                  id="color-code-sidebar" 
                  autoComplete="off" 
                  name="color-code"
                  value={colorCode}
                  onChange={e => {
                    checkColorCode(e)
                    fieldChange(e)
                  }}
                  onBlur={fieldBlur}
                />
                <label 
                  className={`single-product-content-sidebar__chars-placeholder ${colorCode ? 'focused' : ''}`} 
                  htmlFor="color-code-sidebar"
                >
                  2000
                </label>
              </div>
            </div>
          </div> }
          { dropdowns && dropdowns.length !== 0 && <div className="single-product-content-sidebar__chars-item single-product-content-sidebar__chars-item--select">
            <div className={`single-product-content-sidebar__chars-inner ${dropdowns.length % 2 !== 0 ? 'odd' : ''}`}>
              { dropdowns.map(dropdown => {
                return (
                  <div className="single-product-content-sidebar__chars-elem" key={dropdown.attributeId}>
                    <div className="single-product-content-sidebar__chars-elem-inner">
                      <div className="single-product-content-sidebar__chars-title local-title local-title--grey">{dropdown.name}</div>
                      <div className={`single-product-content-sidebar__chars-dropdown dropdown ${dropdown.terms.length === 1 ? 'disabled' : ''}`}>
                        <div
                          className={
                            `single-product-content-sidebar__chars-dropdown-current
                            dropdown__current
                            ${dropdown.isOpen ? 'open' : ''}`
                          }
                          onClick={() => toggleDropdown(dropdown.attributeId)}
                        >
                          <span className="single-product-content-sidebar__chars-dropdown-text dropdown__text">
                          { 
                            dropdown.terms.some(term => term.isActive) 
                              ? dropdown.terms.filter(term => term.isActive)[0].name 
                              : 'Виберіть опцію' 
                          }
                          </span>
                          { dropdown.terms.length > 1  && <span className="single-product-content-sidebar__chars-dropdown-icon dropdown__icon">
                            <svg>
                              <use href={`${sprite}#header-arrow`} />
                            </svg>
                          </span>}
                        </div>
                        <div className={`single-product-content-sidebar__chars-dropdown-list dropdown__list ${dropdown.isOpen ? 'open' : ''}`}>
                          {
                            slug === 'height-adjustable-desk-model-strong' && dropdown.slug === 'pa_tabletop-size'
                              ? <div 
                                  className="single-product-content-sidebar__chars-dropdown-inner dropdown__inner"
                                  autoHide={false}
                                >
                                  {
                                    dropdown.terms.map(term => {
                                      return (
                                        <div
                                          className={`single-product-content-sidebar__chars-dropdown-item dropdown__item ${term.isActive ? 'active' : ''}`}
                                          onClick={e => selectDropdownItem(dropdown.attributeId, term.databaseId, e)}
                                          key={term.databaseId}
                                        >
                                          {term.name}
                                        </div>
                                      )
                                    })
                                  }
                                </div>
                              : <SimpleBar 
                                  className="single-product-content-sidebar__chars-dropdown-inner dropdown__inner"
                                  autoHide={false}
                                >
                                  {
                                    dropdown.terms.map(term => {
                                      return (
                                        <div
                                          className={`single-product-content-sidebar__chars-dropdown-item dropdown__item ${term.isActive ? 'active' : ''}`}
                                          onClick={e => selectDropdownItem(dropdown.attributeId, term.databaseId, e)}
                                          key={term.databaseId}
                                        >
                                          {term.name}
                                        </div>
                                      )
                                    })
                                  }
                                </SimpleBar>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }) }
            </div>
          </div> }
        </div> }
        <div className={`single-product-content-sidebar__price`}>{price} UAH</div>
        <div className="single-product-content-sidebar__controls">
          <div className="single-product-content-sidebar__controls-inner">
            <div className="single-product-content-sidebar__controls-item">
              <div className="single-product-content-sidebar__controls-counter">
                <button
                  className="single-product-content-sidebar__controls-minus"
                  type="button"
                  onClick={e => decrementCount(e, counter, setCounter)}
                >
                  -
                </button>
                <input
                  className="single-product-content-sidebar__controls-inp"
                  type="text"
                  value={counter}
                  onInput={e => checkInp(e, setCounter, 1, 99999)}
                />
                <button
                  className="single-product-content-sidebar__controls-plus"
                  type="button"
                  onClick={e => incremementCount(e, counter, setCounter)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="single-product-content-sidebar__controls-item">
              <button 
                className={`single-product-content-sidebar__controls-btn form-btn ${isAddingToCart ? 'disabled' : ''}`} 
                type="button"
                onClick={addToCartHandler}
              >
                <div className={`single-product-content-sidebar__controls-btn-inner ${isAddedToCart ? 'fade' : ''}`}>
                  <span>{addToCartBtn}</span>
                  <span>{addToCartBtn}</span>
                </div>
                <div className={`single-product-content-sidebar__controls-btn-inner ${!isAddedToCart ? 'fade' : ''}`}>
                  <span>{addedCartToBtn}</span>
                  <span>{addedCartToBtn}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <ul className="single-product-content-sidebar__list">
          { cartInfo.map((item, index) => {
            return (
              <li className="single-product-content-sidebar__list-item" key={index++}>
                <div className="single-product-content-sidebar__list-item-icon">
                  <svg>
                    <use href={`${sprite}#check`} />
                  </svg>
                </div>
                <div className="single-product-content-sidebar__list-item-text">{item.text}</div>
              </li>
            )
          }) }
        </ul>
      </div>
    </aside>
  )
}

export default SingleProductSidebar