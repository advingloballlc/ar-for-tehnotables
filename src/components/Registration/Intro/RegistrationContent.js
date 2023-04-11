import React, { useState, useContext }  from 'react'
import { Link } from 'gatsby'
import { useForm } from 'react-hook-form'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import LoginSocial from '../../LoginCommon/LoginSocial'

import { PrefixContext } from '../../../context/PrefixProvider'

import { registerUser } from '../../../auth/registerUser'

import { showThxModal } from '../../../utils/showThxModal'
import { showErrModal } from '../../../utils/showErrModal'

const RegistrationContent = ({
  registerForm,
  loginPageUrl,
  textBeforeLoginPageUrl,
  beforeButtonsText,
  afterButtonsText,
  facebookButton,
  googleButton,
  validateErrors
}) => {
  let prefix = useContext(PrefixContext)

  const [ isUserRegistered, setIsUserRegistered ] = useState(false)

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

    registerUser(getValues('name'), getValues('email'), getValues('password'))
      .then(() => setIsUserRegistered(true))
      .then(() => NProgress.done())
      .then(() => showThxModal())
      .then(() => reset())
      .catch(() => {
        showErrModal()
        setIsUserRegistered(false)
        NProgress.done()
        reset()
      })
  }

  const formError = (error, e) => {
    console.error(error)
  }

  return (
    <div className="intro-login__content intro-login-content">
      <div className="intro-login-content__inner">
        <div className="intro-login__title-wrapper title-wrapper">
          <h1 className="intro-login__title title title--big">{registerForm.title}</h1>
        </div>
        <LoginSocial 
          beforeButtonsText={beforeButtonsText} 
          facebookButton={facebookButton}
          afterButtonsText={afterButtonsText}
          googleButton={googleButton}
        />
        <form className="intro-login__form" onSubmit={handleSubmit(formSubmit, formError)}>
          <div className="intro-login__inp-wrapper">
            <label className="intro-login__label local-title local-title--black" htmlFor="login-name">{registerForm.inputUsernameLabel}</label>
            <div className="intro-login__inp-inner">
              <input
                className="intro-login__inp"
                id="login-name"
                type="text"
                autoComplete="off"
                {...register('name', {
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
                  }
                })}
              />
              {errors?.name && <span className="intro-login__error form-error">{errors?.name?.message}</span>}
            </div>
          </div>
          <div className="intro-login__inp-wrapper">
            <label className="intro-login__label local-title local-title--black" htmlFor="login-email">{registerForm.inputEmailLabel}</label>
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
          <div className="intro-login__inp-wrapper">
            <label className="intro-login__label local-title local-title--black" htmlFor="login-password">{registerForm.inputPasswordLabel}</label>
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
              className={`intro-login__btn form-btn ${isSubmitSuccessful || isUserRegistered ? 'disabled' : ''}`} 
              type="submit" 
              disabled={isSubmitSuccessful || isUserRegistered}
            >
              <span>{registerForm.button}</span>
              <span>{registerForm.button}</span>
            </button>
          </div>
        </form>
        <div className="intro-login__links intro-login__links--registration">
          <span className="intro-login__text">{textBeforeLoginPageUrl}</span>
          <Link className="intro-login__link intro-login__link--registration" to={`${prefix}login`}>{loginPageUrl.title}</Link>
        </div>
      </div>
    </div>
  )
}

export default RegistrationContent