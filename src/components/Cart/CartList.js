import React, { useEffect, useRef, useState, useContext } from 'react'
import { Link } from 'gatsby'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import { PrefixContext } from './../../context/PrefixProvider'

import sprite from '../../icons/sprite.svg'

const CartList = ({ 
  deleteBtn,
  errTitle,
  cartItems, 
  removeFromCartHandler,
  incremementCount,
  decrementCount,
  checkCounter,
  isCartLoading
}) => {
  const list = useRef(null)
  let prefix = useContext(PrefixContext)

  const [ isPadding, setIsPadding ] = useState(false)

  useEffect(() => {
    let children = [...list.current.el.children]
    children.forEach(child => {
      if (child.classList.contains('simplebar-vertical')) {
        child.style.visibility !== 'hidden' ? setIsPadding(true) : setIsPadding(false)
      }
    })
  })

  return (
    <SimpleBar
      className={`cart__list cart-list ${isPadding ? 'has-padding' : ''} ${isCartLoading ? 'disabled' : ''}`}
      autoHide={false}
      ref={list}
    >
      { 
        cartItems && cartItems.length !== 0 
          ? cartItems.map(item => {
            return (
              <div className="cart__item cart-item" key={item.id}>
                <div className="cart-item__inner">
                  <div className="cart-item__info">
                    <Link className="cart-item__title" to={`${prefix}${item.slug !== 'constructor' ? item.slug : 'configurator'}`}>{item.name}</Link>
                    { item.categories && item.categories.length !== 0 && <div className="cart-item__category">{item.categories[0].name}</div> }
                    <div className="cart-item__price">{item.prices.price} uah</div>
                    <div className="cart-item__counter">
                      <button 
                        className="cart-item__counter-btn cart-item__counter-btn--minus" 
                        type="button"
                        onClick={e => decrementCount(item.key, e)}
                      >
                          -
                        </button>
                      <input
                        className="cart-item__counter-inp"
                        type="text"
                        autoComplete="off"
                        value={item.quantity}
                        onChange={e => checkCounter(item.key, e.currentTarget.value)}
                      />
                      <button 
                        className="cart-item__counter-btn cart-item__counter-btn--plus" 
                        type="button"
                        onClick={e => incremementCount(item.key, e)}
                        >
                          +
                        </button>
                    </div>
                  </div>
                  <div className="cart-item__photo-wrapper">
                    <div className="cart-item__photo">
                      <img src={item.thumbnail} alt={item.name} width={140} height={115}/>
                    </div>
                    <button 
                      className="cart-item__btn" 
                      type="button"
                      onClick={e => removeFromCartHandler(item.key, e)}
                    >
                      <span className="cart-item__btn-icon">
                        <svg><use href={`${sprite}#thrash`} /></svg>
                      </span>
                      <span className="cart-item__btn-text">{deleteBtn}</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          }) 
        : <div className="cart-list__err-title-wrapper title-wrapper">
            <div className="cart-list__err-title title title--small">{errTitle}</div>
          </div> 
      }
    </SimpleBar>
  )
}

export default CartList