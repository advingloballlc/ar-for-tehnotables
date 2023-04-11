import React from 'react'

import { fieldChange } from '../../../utils/fieldChange'
import { fieldBlur } from '../../../utils/fieldBlur'

const DeliveryInfo = React.forwardRef(({ 
  register, 
  errors, 
  isSubmitting, 
  coupons,
  orderForm,
  items,
  isCartLoading,
  applyCuponHandler,
  cartTotalSalePrice,
  validateErrors
}, cuponInp) => {
  let cartItemsSum = items.reduce((acc, cur) => acc + (parseInt(cur.prices.price * cur.quantity)), 0)
  const { ref } = register('code')

  return (
    <div className="intro-checkout-delivery__info">
      <div className="intro-checkout-delivery__info-title-wrapper title-wrapper">
        <div className="intro-checkout-delivery__info-title title title--small">{orderForm.orderSummary}</div>
      </div>
      <div className="intro-checkout-delivery__info-cost">
        <div className="intro-checkout-delivery__info-cost-inner">
          <div className="intro-checkout-delivery__info-cost-title">{orderForm.subtotal}</div>
          <div className="intro-checkout-delivery__info-cost-price">
            { cartItemsSum } uah
          </div>
        </div>
        <div className="intro-checkout-delivery__info-cost-inner">
          <div className="intro-checkout-delivery__info-cost-title">{orderForm.total}</div>
          <div className="intro-checkout-delivery__info-cost-price">
            { cartTotalSalePrice ? cartTotalSalePrice : cartItemsSum } uah
          </div>
        </div>
      </div>
      <div className="intro-checkout-delivery__info-discount">
        <label 
          className="intro-checkout-delivery__info-discount-title local-title local-title--black" 
          htmlFor="delivery-discount"
        >
          {coupons.formTitle}
        </label>
        <div className="intro-checkout-delivery__info-discount-inner">
          <div className="intro-checkout-delivery__info-discount-inp-wrapper">
            <input
              className="intro-checkout-delivery__info-discount-inp"
              type="text"
              id="delivery-discount"
              autoComplete="off"
              {...register('code', {
                pattern: {
                  value: /^[a-zA-Z0-9\s]+$/,
                  message: validateErrors.errInvalidCupon
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
              ref={e => {
                ref(e)
                cuponInp.current = e
              }}
            />
            <span className="intro-checkout-delivery__info-discount-placeholder">ac0913</span>
            {errors?.code && <span className="intro-checkout-content__error form-error">{errors?.code?.message || 'Error'}</span>}
          </div>
          <div className="intro-checkout-delivery__info-discount-btn-wrapper">
            <button 
              className={`intro-checkout-delivery__info-discount-btn form-btn 
              ${isCartLoading 
                  || parseInt(cartItemsSum) > (parseInt(cartTotalSalePrice ? cartTotalSalePrice : cartItemsSum))
                ? 'disabled' 
                : ''
              }`} 
              type="button"
              onClick={applyCuponHandler}
            >
              <span>{coupons.formBtnText}</span>
              <span>{coupons.formBtnText}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="intro-checkout-delivery__info-btn-wrapper">
        <button 
          className={`intro-checkout-delivery__info-btn form-btn ${isSubmitting || isCartLoading ? 'disabled' : ''}`} 
          type="submit" 
          disabled={isSubmitting}
        >
          <span>{orderForm.orderBtnText}</span>
          <span>{orderForm.orderBtnText}</span>
        </button>
      </div>
    </div>
  )
})

export default DeliveryInfo