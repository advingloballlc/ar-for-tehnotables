import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import { fieldChange } from '../../../utils/fieldChange'
import { fieldBlur } from '../../../utils/fieldBlur'
import { phoneBlur } from '../../../utils/phoneBlur'
import { showThxModal } from '../../../utils/showThxModal'
import { showErrModal } from '../../../utils/showErrModal'
import { callbackFormGoal } from '../../../utils/callbackFormGoal'

import { sendForm } from '../../../api/wordpress'

const CallBackForm = ({
  acceptConditionText,
  buttonText,
  inputEmailPlaceholder,
  inputEmailTitle,
  inputMessagePlaceholder,
  inputMessageTitle,
  inputPhoneTitle,
  inputUsernamePlaceholder,
  inputUsernameTitle,
  validateErrors
}) => {
  const [ isSentForm, setIsSentForm ] = useState(false)
  
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
    control,
    getValues
  } = useForm({
    mode: 'onBlur'
  })

  const formSubmit = (data, e) => {
    NProgress.start()

    sendForm(getValues('name'), getValues('email'), getValues('phone'), getValues('message'))
      .then(() => setIsSentForm(true))
      .then(() => {
        NProgress.done()

        callbackFormGoal()
        showThxModal()
        reset()

        for (let i = 0; i < e.target.length; i++) {
          e.target[i].nextElementSibling && e.target[i].nextElementSibling.classList.remove('focused')
        }
      })
      .catch(() => {
        showErrModal()
        NProgress.done()
        reset()

        for (let i = 0; i < e.target.length; i++) {
          e.target[i].nextElementSibling && e.target[i].nextElementSibling.classList.remove('focused')
        }
      })
  }

  const formError = (error, e) => {
    console.error(error)
  }

  return (
    <form className="callback__form callback-form" onSubmit={handleSubmit(formSubmit, formError)}>
      <div className="callback-form__top">
        <div className="callback-form__inp-wrapper">
          <label className="callback-form__label" htmlFor="callback-name">{inputUsernameTitle}</label>
          <div className="callback-form__inp-inner">
            <input
              className="callback-form__inp"
              type="text"
              id="callback-name"
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
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span className="callback-form__placeholder">{inputUsernamePlaceholder}</span>
            {errors?.name && <span className="callback-form__error form-error">{errors?.name?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="callback-form__inp-wrapper">
          <label className="callback-form__label" htmlFor="callback-email">{inputEmailTitle}</label>
          <div className="callback-form__inp-inner">
            <input
              className="callback-form__inp"
              type="text"
              id="callback-email"
              autoComplete="off"
              {...register('email', {
                required: validateErrors.errEmptyEmail,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: validateErrors.errInvalidEmail
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span className="callback-form__placeholder">{inputEmailPlaceholder}</span>
            {errors?.email && <span className="callback-form__error form-error">{errors?.email?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="callback-form__inp-wrapper">
          <label className="callback-form__label" htmlFor="callback-phone">{inputPhoneTitle}</label>
          <div className="callback-form__inp-inner">
            <Controller
              control={control}
              name="phone"
              defaultValue=""
              render={({ field }) => {
                return <InputMask
                  mask="+380 (99) 999-99-99"
                  maskPlaceholder={null}
                  className="callback-form__inp"
                  type="tel"
                  id="callback-phone"
                  autoComplete="off"
                  {...register('phone', {
                    required: validateErrors.errEmptyPhone,
                    onChange: fieldChange,
                    onBlur: phoneBlur
                  })}
                />
              }}
            />
            <span className="callback-form__placeholder callback-form__placeholder--phone">+380 (--) ---_--_--</span>
            {errors?.phone && <span className="callback-form__error form-error">{errors?.phone?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="callback-form__textarea-wrapper">
          <label className="callback-form__label" htmlFor="callback-message">{inputMessageTitle}</label>
          <div className="callback-form__textarea-inner">
            <textarea
              className="callback-form__textarea"
              id="callback-message"
              autoComplete="off"
              {...register('message', {
                required: validateErrors.errEmptyMessage,
                minLength: {
                  value: 5,
                  message: validateErrors.errShortMessage
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span className="callback-form__placeholder">{inputMessagePlaceholder}</span>
            {errors?.message && <span className="callback-form__error form-error">{errors?.message?.message || 'Error'}</span>}
          </div>
        </div>
      </div>
      <div className="callback-form__bot">
        <p className="callback-form__text">{acceptConditionText}</p>
        <div className="callback-form__btn-wrapper">
          <button 
            className={`callback-form__btn form-btn ${isSubmitSuccessful || isSentForm ? 'disabled' : ''}`} 
            type="submit" 
            disabled={isSubmitSuccessful || isSentForm}
          >
            <span>{buttonText}</span>
            <span>{buttonText}</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default CallBackForm