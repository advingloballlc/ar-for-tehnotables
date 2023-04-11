import React from 'react'

import sprite from '../../../icons/sprite.svg'

const PaymentInfo = ({ 
  register, 
  errors, 
  changePayment, 
  paymentMethod, 
  validateErrors,
  paymentMethodList
}) => {
  return (
    <div className="intro-checkout-content__item">
      { errors?.payment && <span className="intro-checkout-content__item-error form-error">{errors?.payment?.message || 'Error'}</span> }
      <div className="intro-checkout-content__item-title-wrapper title-wrapper">
        <div className="intro-checkout-content__item-title title title--small">{paymentMethod}</div>
      </div>
      <div className="intro-checkout-content__item-inner">
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input 
            className="intro-checkout-content__item-radio checkout-elem__radio" 
            id="payment-1" 
            type="radio"
            value={'mono_gateway'}
            {...register('payment', {
              required: validateErrors.errEmptyPayment,
              onChange: changePayment
            })}
          />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="payment-1">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#card-pay`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">{paymentMethodList.oneTime}</span>
            </span>
          </label>
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input 
            className="intro-checkout-content__item-radio checkout-elem__radio" 
            id="payment-3" 
            type="radio"
            value={'mono_payment_installments'}
            {...register('payment', {
              required: validateErrors.errEmptyPayment,
              onChange: changePayment
            })} 
          />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="payment-3">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#monobank`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">{paymentMethodList.twoTime}</span>
            </span>
          </label>
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input 
            className="intro-checkout-content__item-radio checkout-elem__radio" 
            id="payment-4" 
            type="radio" 
            value={'bacs'}
            {...register('payment', {
              required: validateErrors.errEmptyPayment,
              onChange: changePayment
            })}
          />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="payment-4">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#portmoney`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">{paymentMethodList.threeTime}</span>
            </span>
          </label>
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input 
            className="intro-checkout-content__item-radio checkout-elem__radio" 
            id="payment-5" 
            type="radio" 
            value={'cod'}
            {...register('payment', {
              required: validateErrors.errEmptyPayment,
              onChange: changePayment
            })}
          />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="payment-5">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#cash-delivery`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">{paymentMethodList.fourTime}</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default PaymentInfo