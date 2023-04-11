import React, { useState, useEffect, useContext } from 'react'
import { navigate } from 'gatsby'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import { socialAuth } from '../../auth/socialAuth'
import { getUser } from '../../auth/getUser'

import { showErrModal } from '../../utils/showErrModal'
import { setCookie } from '../../utils/setCookie'
import { deleteCookie } from '../../utils/deleteCookie'

import { PrefixContext } from '../../context/PrefixProvider'

import loginFb from '../../images/login-fb.svg'
import loginGoogle from '../../images/login-google.svg'

const LoginSocial = ({ 
  beforeButtonsText,
  facebookButton,
  afterButtonsText,
  googleButton
 }) => {
  let prefix = useContext(PrefixContext)

  const [ isClicked, setIsClicked ] = useState(false)
  
  const responseGoogle = response => {
    NProgress.start()
    setIsClicked(true)

    socialAuth(response.profileObj.email, response.profileObj.givenName, response.profileObj.familyName)
      .then(({ data }) => {
        getUser(data)
          .then(({ data }) => {
            setCookie('user_id', data.id, {secure: true, 'max-age': 3600})
            setCookie('user_info', JSON.stringify(data), {secure: true, 'max-age': 3600})
            deleteCookie('cart_count')

            navigate(`${prefix}account`)
          })
          .then(() => NProgress.done())
          .catch(() => {
            showErrModal()
            NProgress.done()
          })
      })
      .catch(() => {
        showErrModal()
        NProgress.done()
        setIsClicked(false)
      })
  }

  const errGoogle = err => {
    showErrModal()
    NProgress.done()
    setIsClicked(false)
  }

  const responseFacebook = response => {
    NProgress.start()
    setIsClicked(true)

    socialAuth(response.email, response.first_name, response.last_name)
      .then(({ data }) => {
        getUser(data)
          .then(({ data }) => {
            setCookie('user_id', data.id, {secure: true, 'max-age': 3600})
            setCookie('user_info', JSON.stringify(data), {secure: true, 'max-age': 3600})
            deleteCookie('cart_count')

            navigate(`${prefix}account`)
          })
          .then(() => NProgress.done())
          .catch(() => {
            showErrModal()
            NProgress.done()
          })
      })
      .catch(() => {
        showErrModal()
        NProgress.done()
        setIsClicked(false)
      })
  }

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({clientId: process.env.GATSBY_GOOGLE_CLIEN_ID})
    })
  }, [])
  
  return (
    <div className="intro-login__social">
      <p className="intro-login__desc">{beforeButtonsText}</p>
      <div className={`intro-login__social-btns ${isClicked ? 'disabled' : ''}`}>
        <FacebookLogin
          appId={process.env.GATSBY_FB_APP_ID}
          fields='first_name,last_name,name,email,birthday,picture'
          autoLoad={false}
          callback={responseFacebook}
          render={renderProps => (
            <button 
              className="intro-login__social-btn" 
              id="facebook-btn"
              onClick={renderProps.onClick}
            >
              <span className="intro-login__social-btn-icon">
                <img src={loginFb} width={32} height={32} alt={facebookButton} />
              </span>
              <span className="intro-login__social-btn-text">{facebookButton}</span>
            </button>
          )}
        />
        <GoogleLogin
          clientId={process.env.GATSBY_GOOGLE_CLIEN_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={errGoogle}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <button 
              className="intro-login__social-btn" 
              id="google-btn"
              onClick={renderProps.onClick}
            >
              <span className="intro-login__social-btn-icon">
                <img src={loginGoogle} width={32} height={32} alt={googleButton} />
              </span>
              <span className="intro-login__social-btn-text">{googleButton}</span>
            </button>
          )}
        />
      </div>
      <p className="intro-login__desc">{afterButtonsText}</p>
    </div>
  )
}

export default LoginSocial
