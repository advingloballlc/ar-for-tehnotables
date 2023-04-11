import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import { useForm } from 'react-hook-form'
import gsap from 'gsap'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { PrefixContext } from './../../../context/PrefixProvider'

import { forgotPassword } from '../../../auth/forgotPassword'
import { resetPassword } from '../../../auth/resetPassword'

import { isBrowser } from '../../../utils/isBrowser'

const RecoveryContent = ({
  resetPasswordForm,
  textBeforeLink,
  backToHome,
  successMessage,
  loginPageUrl,
  errMessage,
  successPasswordMessage,
  validateErrors
}) => {
  let prefix = useContext(PrefixContext)

  const [ isFormSent, setIsFormSent ] = useState(false)
  const [ isFormErr, setIsFormErr ] = useState(false)
  const [ isSubmitedEmail, setIsSubmitedEmail ] = useState(false)

  useEffect(() => {
    if (!isBrowser()) return null

    if (window.location.search.match('key=') && window.location.search.match('id=')) {
      setIsSubmitedEmail(true)
    }
  }, [])
  
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    getValues
  } = useForm({
    mode: 'onBlur'
  })

  const formSubmit = (data, e) => {
    NProgress.start()

    const id = isBrowser() && window.location.search.match('key=') && window.location.search.match('id=') && window.location.search.slice(1).split('&')[1].split('=')[1]
    const key = isBrowser() && window.location.search.match('key=') && window.location.search.match('id=') && window.location.search.slice(1).split('&')[0].split('=')[1]
    
    !isSubmitedEmail
      ? forgotPassword(getValues('email'))
        .then(() => setIsFormSent(true))
        .then(() => {
          gsap.from('.intro-login__link-back-wrapper', .5, { y: 60, opacity: 0, delay: .5, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          .then(() => NProgress.done())
        })
        .catch(() => {
          setIsFormErr(true)
          NProgress.done()
        })
      : resetPassword(id, key, getValues('password'))
        .then(() => setIsFormSent(true))
        .then(() => {
          gsap.from('.intro-login__link-back-wrapper', .5, { y: 60, opacity: 0, delay: .5, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          .then(() => NProgress.done())
        })
        .catch(() => {
          setIsFormErr(true)
          NProgress.done()
        })
  }

  const formError = (error, e) => {
    console.error(error)
  }

  return (
    <div className="intro-login__content intro-login-content">
      <div className="intro-login-content__inner">
        {
          (isFormSent || isFormErr) && <div className="intro-login__sent">
            <div className="intro-login__sent-icon check-icon">
              <svg viewBox="0 0 133 133" version="1.1">
                <g id="check-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <circle id="filled-circle" fill="#000" cx="66.5" cy="66.5" r="54.5" />
                  <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5" />
                  <circle id="outline" stroke="#000" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
                  { !isFormErr && <polyline id="check" stroke="#FFFFFF" strokeWidth="4" points="41 70 56 85 92 49" /> }
                </g>
              </svg>
              { isFormErr && <><span></span><span></span></> }
            </div>
            <div className="intro-login__sent-title-wrapper title-wrapper">
              <div className="intro-login__sent-title title title--big">
                {!isFormErr ? !isSubmitedEmail ? successMessage : successPasswordMessage : errMessage}
              </div>
            </div>
          </div>
        }
        {
          (!isFormSent && !isFormErr) && <div className="intro-login__title-wrapper title-wrapper">
            <h1 className="intro-login__title title title--big">{resetPasswordForm.title}</h1>
          </div>
        }
        {
          !isSubmitedEmail
            ? (!isFormSent && !isFormErr) && <form className="intro-login__form" onSubmit={handleSubmit(formSubmit, formError)}>
                <div className="intro-login__inp-wrapper">
                  <label className="intro-login__label local-title local-title--black" htmlFor="login-email">{resetPasswordForm.inputEmailLabel}</label>
                  <div className="intro-login__inp-inner">
                    <input
                      className="intro-login__inp"
                      id="login-email"
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
                    {errors?.email && <span className="intro-login__error form-error">{errors?.email?.message}</span>}
                  </div>
                </div>
                <div className="intro-login__btn-wrapper">
                  <button
                    className={`intro-login__btn form-btn ${isSubmitSuccessful ? 'disabled' : ''}`} type="submit" disabled={isSubmitSuccessful}
                  >
                    <span>{resetPasswordForm.buttonEmail}</span>
                    <span>{resetPasswordForm.buttonEmail}</span>
                  </button>
                </div>
              </form>
            : (!isFormSent && !isFormErr) && <form className="intro-login__form" onSubmit={handleSubmit(formSubmit, formError)}>
                <div className="intro-login__inp-wrapper">
                  <label className="intro-login__label local-title local-title--black" htmlFor="login-password">{resetPasswordForm.inputPasswordLabel}</label>
                  <div className="intro-login__inp-inner">
                    <input
                      className="intro-login__inp"
                      id="login-password"
                      type="password"
                      autoComplete="off"
                      {...register('password', {
                        required: validateErrors.errEmptyPassword,
                        minLength: {
                          value: 5,
                          message: validateErrors.errShortPassword
                        }
                      })}
                    />
                    {errors?.password && <span className="intro-login__error form-error">{errors?.password?.message}</span>}
                  </div>
                </div>
                <div className="intro-login__btn-wrapper">
                  <button
                    className={`intro-login__btn form-btn ${isSubmitSuccessful ? 'disabled' : ''}`} type="submit" disabled={isSubmitSuccessful}>
                    <span>{resetPasswordForm.button}</span>
                    <span>{resetPasswordForm.button}</span>
                  </button>
                </div>
              </form>
        }
        {
          (!isFormSent && !isFormErr) && <div className="intro-login__links intro-login__links--recovery">
            <span className="intro-login__text">{textBeforeLink}</span>
            <Link className="intro-login__link intro-login__link--recovery" to={`${prefix}login`}>{loginPageUrl.title}</Link>
          </div>
        }
        <div className="intro-login__link-back-wrapper">
          <Link className="intro-login__link-back" to={`${prefix}`}>{backToHome}</Link>
        </div>
      </div>
    </div>
  )
}

export default RecoveryContent