import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Collapse } from 'react-collapse'

import './Cart.scss'

import CartList from './CartList'
import CartBotList from './CartBotList'

import { PrefixContext } from '../../context/PrefixProvider'

const Cart = ({ 
  isCartOpen, 
  closeCart, 
  cart, 
  cartItems,
  cartTotalPrice,
  removeFromCartHandler,
  incremementCount,
  decrementCount,
  checkCounter,
  isCartLoading
}) => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="cart">
      <Collapse isOpened={isCartOpen}>
        <div className="cart__inner">
          <button
            className="cart__close"
            type="button"
            onClick={closeCart}
          >
            <span className="cart__close-inner">
              <span/><span/>
            </span>
          </button>
          <div className="cart__top cart-top">
            <div className="cart__title-wrapper title-wrapper">
              <div className="cart__title title title--small">{cart.cartTitle}</div>
            </div>
            <CartList 
              deleteBtn={cart.deleteProductFromCart}
              errTitle={cart.cartErrTitle}
              cartItems={cartItems}
              removeFromCartHandler={removeFromCartHandler}
              incremementCount={incremementCount}
              decrementCount={decrementCount}
              checkCounter={checkCounter}
              isCartLoading={isCartLoading}
            />
          </div>
          <div className="cart__bot cart-bot">
            <CartBotList additionalInfo={cart.additionalInfo} />
            <div className="cart-bot__info">
              <div className="cart-bot__info-price">
                <div className="cart-bot__info-title">{cart.totalPrice}</div>
                <div className="cart-bot__info-cost">
                  { cartItems && cartItems.length !== 0 ? cartTotalPrice : '0' } uah
                </div>
              </div>
              <div className="cart-bot__info-btn-wrapper">
                <Link 
                  className="cart-bot__info-btn btn btn--small" 
                  to={cartItems && cartItems.length !== 0 ? `${prefix}checkout` : `${prefix}goods`}
                  state={{ cartItems: cartItems, cartTotalPrice: cartTotalPrice }}
                >
                  <span className={`cart-bot__info-btn-inner btn__inner ${cartItems && cartItems.length === 0 ? 'fade' : ''}`}>
                    {cart.checkoutButton.title}
                  </span>
                  <span className={`cart-bot__info-btn-inner btn__inner ${cartItems && cartItems.length !== 0 ? 'fade' : ''}`}>
                    {cart.catalogButton.title}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default Cart