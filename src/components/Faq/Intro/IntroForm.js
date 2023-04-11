import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import { showThxModal } from '../../../utils/showThxModal'
import { showErrModal } from '../../../utils/showErrModal'
import { checkSidebarHeight } from '../../../utils/checkSidebarHeight'

import { sendForm } from '../../../api/wordpress'

const IntroForm = ({ questionFormFields, validateErrors }) => {
  const sidebar = useRef(null)
  const [ isSentForm, setIsSentForm ] = useState(false)
  
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
    getValues
  } = useForm({
    mode: 'onBlur'
  })

  const formSubmit = (data, e) => {
    NProgress.start()

    sendForm(getValues('name'), getValues('email'), ' ', getValues('question'))
      .then(() => setIsSentForm(true))
      .then(() => {
        NProgress.done()

        showThxModal()
        reset()
      })
      .catch(() => {
        showErrModal()
        NProgress.done()
        reset()
      })
  }

  const formError = (error, e) => {
    console.error(error)
  }

  useEffect(() => checkSidebarHeight(sidebar))

  return (
    <form className="faq-intro__form faq-intro-form" onSubmit={handleSubmit(formSubmit, formError)}>
      <div className="faq-intro-form__inner" ref={sidebar}>
        <div className="faq-intro-form__title title title--small">{questionFormFields.questionForm.title}</div>
        <div className="faq-intro-form__inps">
          <div className="faq-intro-form__inp-wrapper">
            <label className="faq-intro-form__label local-title local-title--black" htmlFor="faq-name">
              {questionFormFields.questionForm.inputUsernameLabel}
            </label>
            <div className="faq-intro-form__inp-inner">
              <input
                className="faq-intro-form__inp"
                id="faq-name"
                type="text"
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
              {errors?.name && <span className="faq-intro-form__error form-error">{errors?.name?.message || 'Error'}</span>}
            </div>
          </div>
          <div className="faq-intro-form__inp-wrapper">
            <label className="faq-intro-form__label local-title local-title--black" htmlFor="faq-email">
              {questionFormFields.questionForm.inputEmailLabel}
              </label>
            <div className="faq-intro-form__inp-inner">
              <input
                className="faq-intro-form__inp"
                id="faq-email"
                type="text"
                autoComplete="off"
                {...register('email', {
                  required: validateErrors.errEmptyEmail,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: validateErrors.errInvalidEmail
                  }
                })}
              />
              {errors?.email && <span className="faq-intro-form__error form-error">{errors?.email?.message || 'Error'}</span>}
            </div>
          </div>
          <div className="faq-intro-form__textarea-wrapper">
            <label className="faq-intro-form__label local-title local-title--black" htmlFor="faq-question">
              {questionFormFields.questionForm.inputMessageLabel}
              </label>
            <div className="faq-intro-form__textarea-inner">
              <textarea
                className="faq-intro-form__textarea"
                id="faq-question"
                autoComplete="off"
                {...register('question', {
                  required: validateErrors.errEmptyMessage,
                  minLength: {
                    value: 5,
                    message: validateErrors.errShortMessage
                  }
                })}
              />
              {errors?.question && <span className="callback-form__error form-error">{errors?.question?.message || 'Error'}</span>}
            </div>
          </div>
          <div className="faq-intro-form__btn-wrapper">
            <button
              className={`faq-intro-form__btn form-btn ${isSubmitSuccessful || isSentForm ? 'disabled' : ''}`}
              type="submit"
              disabled={isSubmitSuccessful || isSentForm}
            >
              <span>{questionFormFields.questionForm.sendButton}</span>
              <span>{questionFormFields.questionForm.sendButton}</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default IntroForm