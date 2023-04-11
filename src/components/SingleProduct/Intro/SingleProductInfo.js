import React, { useRef, useEffect } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import { fieldChange } from './../../../utils/fieldChange'
import { fieldBlur } from './../../../utils/fieldBlur'
import { getModelPath } from '../../../utils/getModelPath'
import { incremementCount } from './../../../utils/incremementCount'
import { decrementCount } from './../../../utils/decrementCount'
import { checkInp } from './../../../utils/checkInp'
import { checkSidebarHeight } from '../../../utils/checkSidebarHeight'

import sprite from '../../../icons/sprite.svg'

const SingleProductInfo = ({
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
  dropdowns,
  toggleDropdown,
  selectDropdownItem,
  colorTitle,
  isAddedToCart
}) => {
  const sidebar = useRef(null)
  
  useEffect(() => checkSidebarHeight(sidebar))

  return (
    <div className="single-product-intro__info single-product-intro-info">
      <div className="single-product-intro-info__inner" ref={sidebar}>
        <div className="single-product-intro-info__title-wrapper title-wrapper">
          <h1 className="single-product-intro-info__title title title--big" itemprop="name">{productTitle}</h1>
        </div>
        { productShortDesc && <p className="single-product-intro-info__desc" itemprop="description">{productShortDesc}</p> }
        { mdfVariabilaty && <a 
          className="single-product-intro-info__link" 
          href={mdfVariabilaty.localFile.publicURL}
          download
        >
          {variabilatyText}
        </a> }
        { isVariation && <div className="single-product-intro-info__chars">
          { isColored && <div className="single-product-intro-info__chars-item single-product-intro-info__chars-item--color">
            <div className="single-product-intro-info__chars-title local-title local-title--grey">{colorTitle}</div>
            <div className="single-product-intro-info__chars-inner">
              { color.map(item => {
                return (
                  <div 
                    className={`single-product-intro-info__chars-elem ${item.isActive ? 'active' : ''}`} 
                    key={item.id}
                    onClick={() => changeColor(item.id)}
                  >
                    <div className="single-product-intro-info__chars-elem-inner">
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
                className={`single-product-intro-info__chars-elem ${isVisibleColorCode ? 'active' : ''}`}
                onClick={changeColorCode}
              >
                <div className="single-product-intro-info__chars-elem-inner">
                  <span style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <svg>
                      <use href={`${sprite}#multicolor`}></use>
                    </svg>
                  </span>
                </div>
              </div> }
            </div>
          </div> }
          { isVisibleColorCode && avaliableColors && <div className="single-product-intro-info__chars-item single-product-intro-info__chars-item--code">
            <a
              className="single-product-intro-info__link" 
              href={avaliableColors.localFile.publicURL}
              download
            >
              {avaliableColorsText}
            </a>
            <div className="single-product-intro-info__chars-inner">
              <div className="single-product-intro-info__chars-title local-title local-title--grey">{colorTitle}</div>
              <div className="single-product-intro-info__chars-inp-wrapper">
                <input 
                  className="single-product-intro-info__chars-inp" 
                  id="color-code" 
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
                  className={`single-product-intro-info__chars-placeholder ${colorCode ? 'focused' : ''}`} 
                  htmlFor="color-code"
                >
                  2000
                </label>
              </div>
            </div>
          </div> }
          { dropdowns && dropdowns.length !== 0 && <div className="single-product-intro-info__chars-item single-product-intro-info__chars-item--select">
            <div className={`single-product-intro-info__chars-inner ${dropdowns.length % 2 !== 0 ? 'odd' : ''}`}>
              { dropdowns.map(dropdown => {
                return (
                  <div className="single-product-intro-info__chars-elem" key={dropdown.attributeId}>
                    <div className="single-product-intro-info__chars-elem-inner">
                      <div className="single-product-intro-info__chars-title local-title local-title--grey">{dropdown.name}</div>
                      <div className={`single-product-intro-info__chars-dropdown dropdown ${dropdown.terms.length === 1 ? 'disabled' : ''}`}>
                        <div
                          className={
                            `single-product-intro-info__chars-dropdown-current
                            dropdown__current 
                            ${dropdown.isOpen ? 'open' : ''}`
                          }
                          onClick={() => toggleDropdown(dropdown.attributeId)}
                        >
                          <span className="single-product-intro-info__chars-dropdown-text dropdown__text">
                            { 
                              dropdown.terms.some(term => term.isActive) 
                                ? dropdown.terms.filter(term => term.isActive)[0].name 
                                : 'Виберіть опцію'  
                            }
                          </span>
                          { dropdown.terms.length > 1 && <span className="single-product-intro-info__chars-dropdown-icon dropdown__icon">
                            <svg>
                              <use href={`${sprite}#header-arrow`} />
                            </svg>
                          </span> }
                        </div>
                        <div className={`single-product-intro-info__chars-dropdown-list dropdown__list ${dropdown.isOpen ? 'open' : ''}`}>
                          { 
                            slug === 'height-adjustable-desk-model-strong' && dropdown.slug === 'pa_tabletop-size' 
                            ? <div 
                                className="single-product-intro-info__chars-dropdown-inner dropdown__inner"
                                autoHide={false}
                              >
                                {
                                  dropdown.terms.map(term => {
                                    return (
                                      <div
                                        className={`single-product-intro-info__chars-dropdown-item dropdown__item ${term.isActive ? 'active' : ''}`}
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
                                className="single-product-intro-info__chars-dropdown-inner dropdown__inner"
                                autoHide={false}
                              >
                                {
                                  dropdown.terms.map(term => {
                                    return (
                                      <div
                                        className={`single-product-intro-info__chars-dropdown-item dropdown__item ${term.isActive ? 'active' : ''}`}
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
        <div 
          className={`single-product-intro-info__price`}
          itemprop="offers" 
          itemscope=''
          itemtype="http://schema.org/Offer"
        >
          <span itemprop="price" content={price.indexOf('-') !== -1 ? price.split(' - ')[0] : price}>{price}</span>
          <span itemprop="priceCurrency" content="UAH">&nbsp;uah</span>
        </div>
        <div className="single-product-intro-info__controls">
          <div className="single-product-intro-info__controls-inner">
            <div className="single-product-intro-info__controls-item">
              <div className="single-product-intro-info__controls-counter">
                <button
                  className="single-product-intro-info__controls-minus"
                  type="button"
                  onClick={e => decrementCount(e, counter, setCounter)}
                >
                  -
                </button>
                <input
                  className="single-product-intro-info__controls-inp"
                  type="text"
                  value={counter}
                  onChange={e => checkInp(e, setCounter, 1, 99999)}
                />
                <button
                  className="single-product-intro-info__controls-plus"
                  type="button"
                  onClick={e => incremementCount(e, counter, setCounter)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="single-product-intro-info__controls-item">
              <button 
                className={`single-product-intro-info__controls-btn form-btn ${isAddingToCart ? 'disabled' : ''}`} 
                type="button"
                onClick={addToCartHandler}
              >
                <div className={`single-product-intro-info__controls-btn-inner ${isAddedToCart ? 'fade' : ''}`}>
                  <span>{addToCartBtn}</span>
                  <span>{addToCartBtn}</span>
                </div>
                <div className={`single-product-intro-info__controls-btn-inner ${!isAddedToCart ? 'fade' : ''}`}>
                  <span>{addedCartToBtn}</span>
                  <span>{addedCartToBtn}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="single-product-intro-info__instruction">
          { (is3d || pdfInstruction) && <div className="single-product-intro-info__instruction-inner">
            { is3d && <a className="single-product-intro-info__instruction-item" download href={getModelPath(slug)}>
              <span className="single-product-intro-info__instruction-icon">
                <svg><use href={`${sprite}#download`} /></svg>
              </span>
              <span className="single-product-intro-info__instruction-text">{downloadText}</span>
            </a> }
            { pdfInstruction && <a
              className="single-product-intro-info__instruction-item" 
              href={pdfInstruction.localFile.publicURL}
              download
            >
              <span className="single-product-intro-info__instruction-icon">
                <svg><use href={`${sprite}#pdf`} /></svg>
              </span>
              <span className="single-product-intro-info__instruction-text">{instructionText}</span>
            </a> }
          </div> }
        </div>
        <ul className="single-product-intro-info__list">
          { cartInfo.map((item, index) => {
            return (
              <li className="single-product-intro-info__list-item" key={index++}>
                <div className="single-product-intro-info__list-item-icon">
                  <svg>
                    <use href={`${sprite}#check`}/>
                  </svg>
                </div>
                <div className="single-product-intro-info__list-item-text">{item.text}</div>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}

export default SingleProductInfo