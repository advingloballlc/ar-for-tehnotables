import React, { useState, useContext }  from 'react'
import { Link, navigate } from 'gatsby'
import { useForm } from 'react-hook-form'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import LoginSocial from '../../LoginCommon/LoginSocial'

import { getUser } from '../../../auth/getUser'
import { loginUser } from '../../../auth/loginUser'

import { showErrModal } from '../../../utils/showErrModal'
import { setCookie } from '../../../utils/setCookie'
import { deleteCookie } from '../../../utils/deleteCookie'

import { PrefixContext } from '../../../context/PrefixProvider'

const LoginContent = ({ 
  loginForm, 
  resetPasswordLink, 
  beforeButtonsText,
  afterButtonsText,
  facebookButton,
  googleButton,
  createAccountLink,
  validateErrors
}) => {
  const [ isUserLoggenin, setIsUserLoggenin ] = useState(false)
  let prefix = useContext(PrefixContext)
  
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
    
    loginUser(getValues('email'), getValues('password'))
      .then(({ data }) => {
        getUser(data)
          .then(({ data }) => {
            setCookie('user_id', data.id, {secure: true, 'max-age': 3600})
            setCookie('user_info', JSON.stringify(data), {secure: true, 'max-age': 3600})
            deleteCookie('cart_count')
            navigate(`${prefix}account`)
          })
          .then(() => setIsUserLoggenin(true))
          .then(() => NProgress.done())
          .catch(() => {
            showErrModal()
            reset()
            NProgress.done()
          })
      })
      .catch(() => {
        showErrModal()
        reset()
        NProgress.done()
      })
  }

  const formError = (error, e) => {
    console.error(error)
  }

  return (
    <div className="intro-login__content intro-login-content">
      <div className="intro-login-content__inner">
        <div className="intro-login__title-wrapper title-wrapper">
          <h1 className="intro-login__title title title--big">{loginForm.title}</h1>
        </div>
        <LoginSocial 
          beforeButtonsText={beforeButtonsText} 
          facebookButton={facebookButton}
          afterButtonsText={afterButtonsText}
          googleButton={googleButton}
        />
        <form className="intro-login__form" onSubmit={handleSubmit(formSubmit, formError)}>
          <div className="intro-login__inp-wrapper">
            <label className="intro-login__label local-title local-title--black" htmlFor="login-email">{loginForm.inputEmailLabel}</label>
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
            <label className="intro-login__label local-title local-title--black" htmlFor="login-password">{loginForm.inputPasswordLabel}</label>
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
              className={`intro-login__btn form-btn ${isSubmitSuccessful || isUserLoggenin ? 'disabled' : ''}`} 
              type="submit" 
              disabled={isSubmitSuccessful || isUserLoggenin}
            >
              <span>{loginForm.button}</span>
              <span>{loginForm.button}</span>
            </button>
          </div>
        </form>
        <div className="intro-login__links intro-login__links--login">
          <Link className="intro-login__link intro-login__link--login" to={`${prefix}recovery`}>{resetPasswordLink.title}</Link>
          <Link className="intro-login__link intro-login__link--login" to={`${prefix}registration`}>{createAccountLink.title}</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginContent