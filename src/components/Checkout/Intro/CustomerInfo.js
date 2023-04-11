import React from 'react'
import InputMask from 'react-input-mask'
import { Controller } from 'react-hook-form'

import { fieldChange } from '../../../utils/fieldChange'
import { fieldBlur } from '../../../utils/fieldBlur'
import { phoneBlur } from '../../../utils/phoneBlur'

const CustomerInfo = ({ register, errors, control, customerInfo, userInfo, validateErrors }) => {
  return (
    <div className="intro-checkout-content__item">
      <div className="intro-checkout-content__item-title-wrapper title-wrapper">
        <div className="intro-checkout-content__item-title title title--small">{customerInfo.formTitle}</div>
      </div>
      <div className="intro-checkout-content__item-inner">
        <div className="intro-checkout-content__inp-wrapper">
          <label 
            className="intro-checkout-content__label local-title local-title--black" 
            htmlFor="checkout-firstname"
          >
            {customerInfo.customerFirstNameLabel} <span>*</span>
          </label>
          <div className="intro-checkout-content__inp-inner">
            <input
              className="intro-checkout-content__inp"
              disabled={userInfo?.first_name}
              id="checkout-firstname"
              type="text"
              autoComplete="off"
              {...register('firstname', {
                required: validateErrors.errEmptyName,
                minLength: {
                  value: 3,
                  message: validateErrors.errShortName
                },
                maxLength: {
                  value: 15,
                  message: validateErrors.errInvalidName
                },
                pattern: {
                  value: /^[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ'][a-zA-Z-а-яА-ЯёЁэЭіІїЇєЄ' ]+[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ']?$/u,
                  message: validateErrors.errInvalidName
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span 
              className={`intro-checkout-content__placeholder ${userInfo?.first_name ? 'focused' : ''}`}
            >
                {customerInfo.customerFirstNamePlaceholder}
              </span>
            {errors?.firstname && <span className="intro-checkout-content__error form-error">{errors?.firstname?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="intro-checkout-content__inp-wrapper">
          <label 
            className="intro-checkout-content__label local-title local-title--black" 
            htmlFor="checkout-lastname"
          >
            {customerInfo.customerLastNameLabel} <span>*</span>
          </label>
          <div className="intro-checkout-content__inp-inner">
            <input
              className="intro-checkout-content__inp"
              disabled={userInfo?.last_name}
              id="checkout-lastname"
              type="text"
              autoComplete="off"
              {...register('lastname', {
                required: validateErrors.errEmptyLastname,
                minLength: {
                  value: 3,
                  message: validateErrors.errShortLastname
                },
                maxLength: {
                  value: 15,
                  message: validateErrors.errInvalidLastname
                },
                pattern: {
                  value: /^[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ'][a-zA-Z-а-яА-ЯёЁэЭіІїЇєЄ' ]+[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ']?$/u,
                  message: validateErrors.errInvalidLastname
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span 
              className={`intro-checkout-content__placeholder ${userInfo?.last_name ? 'focused' : ''}`}
            >
              {customerInfo.customerLastNamePlaceholder}
            </span>
            {errors?.lastname && <span className="intro-checkout-content__error form-error">{errors?.lastname?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="intro-checkout-content__inp-wrapper">
          <label 
            className="intro-checkout-content__label local-title local-title--black" 
            htmlFor="checkout-phone"
          >
            {customerInfo.customerPhoneLabel} <span>*</span>
          </label>
          <div className="intro-checkout-content__inp-inner">
            <Controller
              control={control}
              name="phone"
              defaultValue=""
              render={({ field }) => {
                return <InputMask
                  mask="+380 (99) 999-99-99"
                  maskPlaceholder={null}
                  className="intro-checkout-content__inp"
                  disabled={userInfo?.billing?.phone}
                  type="tel"
                  id="checkout-phone"
                  autoComplete="off"
                  {...register('phone', {
                    required: validateErrors.errEmptyPhone,
                    onChange: fieldChange,
                    onBlur: phoneBlur
                  })}
                />
              }}
            />
            <span 
              className={`intro-checkout-content__placeholder ${userInfo?.billing?.phone ? 'focused' : ''}`}
            >
              +380
            </span>
            {errors?.phone && <span className="intro-checkout-content__error form-error">{errors?.phone?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="intro-checkout-content__inp-wrapper">
          <label 
            className="intro-checkout-content__label local-title local-title--black" 
            htmlFor="checkout-email"
            >
              {customerInfo.customerEmailLabel}
          </label>
          <div className="intro-checkout-content__inp-inner">
            <input
              className="intro-checkout-content__inp"
              disabled={userInfo?.email}
              id="checkout-email"
              type="text"
              autoComplete="off"
              {...register('email', {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: validateErrors.errInvalidEmail
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span 
              className={`intro-checkout-content__placeholder ${userInfo?.email ? 'focused' : ''}`}
            >
              mail@mail.com
            </span>
            {errors?.email && <span className="intro-checkout-content__error form-error">{errors?.email?.message || 'Error'}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerInfo