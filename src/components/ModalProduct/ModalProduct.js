import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Fancybox } from '@fancyapps/ui'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
import '@fancyapps/ui/dist/fancybox.css'

import { createReview } from '../../api/woocommerce'

import { isBrowser } from '../../utils/isBrowser'
import { showThxModal } from '../../utils/showThxModal'
import { showErrModal } from './../../utils/showErrModal'
import { getCookie } from '../../utils/getCookie'

import sprite from '../../icons/sprite.svg'

import './ModalProduct.scss'
import { showReviewModal } from '../../utils/showReviewModal'

const ModalProduct = ({ productMainId, validateErrors, reviewForm }) => {
  const [ rating, setRating ] = useState(0)
  const [ isSent, setIsSent ] = useState(false)

  const userInfo = getCookie('user_id') && JSON.parse(getCookie('user_info'))

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
    setValue,
    getValues
  } = useForm({
    mode: 'onBlur'
  })

  const formSubmit = (data, e) => {
    NProgress.start()

    createReview(productMainId, getValues('comment'), getValues('name'), getValues('email'), rating)
      .then(() => setIsSent(true))
      .then(() => NProgress.done())
      .then(() => {
        reset()
        setRating(0)
        Fancybox.close()

        if (isBrowser()) setTimeout(() => { showThxModal() }, 300)
      })
      .catch(() => {
        NProgress.done()
        Fancybox.close()

        if (isBrowser()) setTimeout(() => { showErrModal() }, 300)
      })
  }

  const formError = (error, e) => {
    console.error(error)
  }

  useEffect(() => {
    setValue('name', userInfo?.first_name)
    setValue('email', userInfo?.email)
    
    showReviewModal()
  }, [])
  
  return (
    <div className="modal product-modal" id="review-modal" style={{ display: 'none' }}>
      <div className="product-modal__title-wrapper title-wrapper">
        <div className="product-modal__title title title--big">{reviewForm.title}</div>
      </div>
      <form className="product-modal__form" onSubmit={handleSubmit(formSubmit, formError)}>
        <div className="product-modal__inp-wrapper">
          <label className="product-modal__label local-title local-title--white" htmlFor="review-name">{reviewForm.labelName}</label>
          <div className="product-modal__inp-inner field-inner">
            <input
              className="product-modal__inp"
              disabled={userInfo?.first_name}
              type="text"
              id="review-name"
              autoComplete="off"
              {...register('name', {
                required: validateErrors.errEmptyName,
                minLength: {
                  value: 3,
                  message: validateErrors.errShortName
                },
                pattern: {
                  value: /^[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ'][a-zA-Z-а-яА-ЯёЁэЭіІїЇєЄ' ]+[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ']?$/u,
                  message: validateErrors.errInvalidName
                }
              })}
            />
            {errors?.name && <span className="product-modal__error form-error">{errors?.name?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="product-modal__inp-wrapper">
          <label className="product-modal__label local-title local-title--white" htmlFor="review-email">{reviewForm.labelEmail}</label>
          <div className="product-modal__inp-inner field-inner">
            <input
              className="product-modal__inp"
              disabled={userInfo?.email}
              type="text"
              id="review-email"
              autoComplete="off"
              {...register('email', {
                required: validateErrors.errEmptyEmail,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: validateErrors.errInvalidEmail
                }
              })}
            />
            {errors?.email && <span className="product-modal__error form-error">{errors?.email?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="product-modal__textarea-wrapper">
          <label className="product-modal__label local-title local-title--white" htmlFor="review-message">{reviewForm.labelComment}</label>
          <div className="product-modal__textarea-inner field-inner">
            <textarea
              className="product-modal__textarea"
              id="review-message"
              autoComplete="off"
              {...register('comment', {
                required: validateErrors.errEmptyMessage,
                minLength: {
                  value: 5,
                  message: 'Comment length is less then 5 characters'
                }
              })}
            />
            {errors?.comment && <span className="product-modal__error form-error">{errors?.comment?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="product-modal__rating">
          <div className="product-modal__label local-title local-title--white">{reviewForm.labelRating}</div>
          <div className="product-modal__rating-inner" data-rating={rating}>
            {new Array(5).fill('', 0, 5).map((_, index) => {
              return <svg
                data-rating-item={5 - index}
                onClick={e => setRating(e.currentTarget.dataset.ratingItem)}
              >
                <use href={`${sprite}#star-big`} />
              </svg>
            })}
          </div>
        </div>
        <div className="product-modal__btn-wrapper">
          <button className={`product-modal__btn form-btn ${isSubmitSuccessful || isSent ? 'disabled' : ''}`} type="submit">
            <span>{reviewForm.btnText}</span>
            <span>{reviewForm.btnText}</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ModalProduct