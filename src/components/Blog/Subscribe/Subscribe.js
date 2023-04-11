import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import './Subscribe.scss'

import { fieldChange } from '../../../utils/fieldChange'
import { fieldBlur } from '../../../utils/fieldBlur'
import { showThxModal } from '../../../utils/showThxModal'
import { showErrModal } from '../../../utils/showErrModal'

import { newsSubscribe } from '../../../api/wordpress'

const Subscribe = ({ subscribeForm, validateErrors }) => {
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

    newsSubscribe(getValues('email'))
      .then(() => setIsSentForm(true))
      .then(() => {
        NProgress.done()

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let subscribeTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.subscribe',
        start: 'center bottom'
      }
    })

    subscribeTl
      .from('.subscribe__form-label', .5, { y: -30, opacity: 0, onComplete() {
          subscribeTl.set(this.targets(), { clearProps: 'all' })
        }})
      .from('.subscribe__form-inp-inner', .5, { y: -30, opacity: 0, onComplete() {
          subscribeTl.set(this.targets(), { clearProps: 'all' })
        }}, '-=.4')
      .from('.subscribe__form-btn-wrapper', .5, { y: -30, opacity: 0, onComplete() {
          subscribeTl.set(this.targets(), { clearProps: 'all' })
        }}, '-=.5')
      .from('.subscribe__desc', .5, { y: -30, opacity: 0, onComplete() {
          subscribeTl.set(this.targets(), { clearProps: 'all' })
        }}, '-=.4')

    return () => {
      subscribeTl.kill()
    }
  }, [])

  return (
    <section className="subscribe" onSubmit={handleSubmit(formSubmit, formError)}>
      <div className="container">
        <div className="subscribe__inner">
          <div className="subscribe__side">
            <form className="subscribe__form">
              <div className="subscribe__form-inp-wrapper">
                <label className="subscribe__form-label local-title local-title--grey" htmlFor="subscribe-email">
                  {subscribeForm.subscribeForm.title}
                </label>
                <div className="subscribe__form-inp-inner">
                  <input
                    className="subscribe__form-inp"
                    id="subscribe-email"
                    type="text"
                    name="email"
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
                  <span className="subscribe__form-placeholder">{subscribeForm.subscribeForm.inputPlaceholder}</span>
                  {errors?.email && <span className="subscribe__form-error form-error">{errors?.email?.message || 'Error'}</span>}
                </div>
              </div>
              <div className="subscribe__form-btn-wrapper">
                <button
                  className={`subscribe__form-btn form-btn ${isSubmitSuccessful || isSentForm ? 'disabled' : ''}`}
                  type="submit"
                  disabled={isSubmitSuccessful || isSentForm}
                >
                  <span>{subscribeForm.subscribeForm.submitButtonText}</span>
                  <span>{subscribeForm.subscribeForm.submitButtonText}</span>
                </button>
              </div>
            </form>
            <p className="subscribe__desc">{subscribeForm.subscribeForm.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe