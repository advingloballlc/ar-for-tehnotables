import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import { updateUser } from '../../../auth/updateUser'

import { isBrowser } from '../../../utils/isBrowser'
import { getCookie } from '../../../utils/getCookie'
import { setCookie } from '../../../utils/setCookie'
import { showErrModal } from './../../../utils/showErrModal'


const AccountInfo = ({ userInfo, personalInfoTitle, personalInfoFields, validateErrors }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    getValues,
    setValue
  } = useForm({
    mode: 'onBlur'
  })

  const [ isEdit, setIsEdit ] = useState(false)
  const [ isChanging, setIsChanging ] = useState(false)

  useEffect(() => {
    setValue('name', userInfo.first_name)
    setValue('surname', userInfo.last_name)
    setValue('middlename', userInfo.meta_data.some(item => item.key === 'middle_name') ? userInfo.meta_data.filter(item => item.key === 'middle_name')[0].value : '')
    setValue('phone', userInfo.billing.phone)
    setValue('email', userInfo.email)
    setValue('birthday', userInfo.meta_data.some(item => item.key === 'birthday') ? userInfo.meta_data.filter(item => item.key === 'birthday')[0].value : '')
  }, [])

  const editInfo = target => {
    setIsEdit(true)

    target.classList.add('fade')

    if (isEdit) {
      if (isBrowser()) {
        setTimeout(() => {
          target.children[0].textContent = personalInfoFields.editText
        }, 200)

        setTimeout(() => {
          target.classList.remove('fade')
        }, 210)
      }

      setIsEdit(false)
    } else {
      if (isBrowser()) {
        setTimeout(() => {
          target.children[0].textContent = personalInfoFields.saveText
        }, 200)

        setTimeout(() => {
          target.classList.remove('fade')
        }, 210)
      }
    }
  }

  const formSubmit = (data, e) => {
    NProgress.start()
    setIsChanging(true)

    updateUser(getCookie('user_id'), getValues('name'), getValues('surname'), getValues('middlename'), getValues('phone'), getValues('email'), getValues('birthday'), getValues('password'))
      .then(({ data }) => {
        console.log(data)
        setCookie('user_id', getCookie('user_id'), {secure: true, 'max-age': 3600})
        setCookie('user_info', JSON.stringify(data), {secure: true, 'max-age': 3600})
      })
      .then(() => setIsChanging(false))
      .then(() => NProgress.done())
      .catch(() => {
        showErrModal()
        NProgress.done()
        setIsChanging(false)
      })
  }

  const formError = (error, e) => {
    console.error(error)
  }

  return (
    <div className="account-intro-tabs__content-item">
      <div className="account-intro-tabs__content-title-wrapper title-wrapper">
        <div className="account-intro-tabs__content-title title title--small">{personalInfoTitle}</div>
      </div>
      <form 
        className={`account-intro-tabs__content-info ${isChanging ? 'disabled' : ''}`} 
        onSubmit={handleSubmit(formSubmit, formError)}
      >
        <div className="account-intro-tabs__content-inner">
          <div className="account-intro-tabs__content-elem">
            <div className="account-intro-tabs__content-elem-inner">
              <label className="account-intro-tabs__content-elem-title" htmlFor="account-name">
                {personalInfoFields.firstNameText}
              </label>
              <div
                className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}
                style={{ transitionDelay: '0s' }}
              >
                <input
                  className="account-intro-tabs__content-elem-value"
                  type="text"
                  id="account-name"
                  autoComplete="off"
                  placeholder="-"
                  disabled={!isEdit}
                  {...register('name', {
                    required: false,
                    minLength: {
                      value: 3,
                      message: validateErrors.errInvalidName
                    },
                    pattern: {
                      value: /^[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ'][a-zA-Z-а-яА-ЯёЁэЭіІїЇєЄ' ]+[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ']?$/u,
                      message: validateErrors.errInvalidName
                    }
                  })}
                />
                {errors?.name && <span className="account-intro-tabs__content-error form-error">{errors?.name?.message}</span>}
              </div>
            </div>
          </div>
          <div className="account-intro-tabs__content-elem">
            <div className="account-intro-tabs__content-elem-inner">
              <label className="account-intro-tabs__content-elem-title" htmlFor="account-phone">
                {personalInfoFields.phoneText}
              </label>
              <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
                <Controller
                  control={control}
                  name="phone"
                  defaultValue=""
                  render={({ field }) => {
                    return <InputMask
                      mask="+380 (99) 999-99-99"
                      maskPlaceholder={null}
                      placeholder="-"
                      className="account-intro-tabs__content-elem-value"
                      type="tel"
                      disabled={!isEdit}
                      id="account-phone"
                      autoComplete="off"
                      {...register('phone', {
                        required: false
                      })}
                    />
                  }}
                />
                {errors?.phone && <span className="account-intro-tabs__content-error form-error">{errors?.phone?.message}</span>}
              </div>
            </div>
          </div>
          <div className="account-intro-tabs__content-elem">
            <div className="account-intro-tabs__content-elem-inner">
              <label className="account-intro-tabs__content-elem-title" htmlFor="account-last-name">
                {personalInfoFields.lastNameText}
              </label>
              <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
                <input
                  className="account-intro-tabs__content-elem-value"
                  type="text"
                  placeholder="-"
                  disabled={!isEdit}
                  id="account-last-name"
                  autoComplete="off"
                  {...register('surname', {
                    required: false,
                    minLength: {
                      value: 3,
                      message: validateErrors.errInvalidLastname
                    },
                    pattern: {
                      value: /^[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ'][a-zA-Z-а-яА-ЯёЁэЭіІїЇєЄ' ]+[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ']?$/u,
                      message: validateErrors.errInvalidLastname
                    }
                  })}
                />
                {errors?.surname && <span className="account-intro-tabs__content-error form-error">{errors?.surname?.message}</span>}
              </div>
            </div>
          </div>
          <div className="account-intro-tabs__content-elem">
            <div className="account-intro-tabs__content-elem-inner">
              <label className="account-intro-tabs__content-elem-title" htmlFor="account-email">
                {personalInfoFields.emailText}
              </label>
              <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
                <input
                  className="account-intro-tabs__content-elem-value"
                  type="text"
                  placeholder="-"
                  disabled={!isEdit}
                  id="account-email"
                  autoComplete="off"
                  {...register('email', {
                    required: validateErrors.errEmptyEmail,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: validateErrors.errInvalidEmail
                    }
                  })}
                />
                {errors?.email && <span className="account-intro-tabs__content-error form-error">{errors?.email?.message}</span>}
              </div>
            </div>
          </div>
          <div className="account-intro-tabs__content-elem">
            <div className="account-intro-tabs__content-elem-inner">
              <label className="account-intro-tabs__content-elem-title" htmlFor="account-mid-name">
                {personalInfoFields.middleNameText}
              </label>
              <div 
                className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}
              >
                <input
                  className="account-intro-tabs__content-elem-value"
                  type="text"
                  placeholder="-"
                  disabled={!isEdit}
                  id="account-mid-name"
                  autoComplete="off"
                  {...register('middlename', {
                    required: false,
                    minLength: {
                      value: 3,
                      message: validateErrors.errInvalidMiddlename
                    },
                    pattern: {
                      value: /^[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ'][a-zA-Z-а-яА-ЯёЁэЭіІїЇєЄ' ]+[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ']?$/u,
                      message: validateErrors.errInvalidMiddlename
                    }
                  })}
                />
                {errors?.middlename && <span className="account-intro-tabs__content-error form-error">{errors?.middlename?.message}</span>}
              </div>
            </div>
          </div>
          <div className="account-intro-tabs__content-elem">
            <div className="account-intro-tabs__content-elem-inner">
              <label className="account-intro-tabs__content-elem-title" htmlFor="account-birthday">
                {personalInfoFields.birthdayText}
              </label>
              <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
                <Controller
                  control={control}
                  name="birthday"
                  defaultValue=""
                  render={({ field }) => {
                    return <InputMask
                      mask="99/99/9999"
                      maskPlaceholder={null}
                      className="account-intro-tabs__content-elem-value"
                      type="text"
                      placeholder="-"
                      disabled={!isEdit}
                      id="account-birthday"
                      autoComplete="off"
                      {...register('birthday', {
                        required: false
                      })}
                    />
                  }}
                />
                {errors?.birthday && <span className="account-intro-tabs__content-error form-error">{errors?.birthday?.message}</span>}
              </div>
            </div>
          </div>
          <div className="account-intro-tabs__content-elem">
            <div className="account-intro-tabs__content-elem-inner">
              <label className="account-intro-tabs__content-elem-title" htmlFor="account-password">
                {personalInfoFields.passwordText}
              </label>
              <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
                <input
                  className="account-intro-tabs__content-elem-value"
                  id="account-password"
                  placeholder="-"
                  disabled={!isEdit}
                  type="password"
                  autoComplete="off"
                  {...register('password', {
                    required: false,
                    minLength: {
                      value: 5,
                      message: validateErrors.errShortPassword
                    }
                  })}
                />
                {errors?.password && <span className="account-intro-tabs__content-error form-error">{errors?.password?.message}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="account-intro-tabs__content-btns">
          <div className="account-intro-tabs__content-btn-wrapper">
            <button
              className="account-intro-tabs__content-btn"
              type={!isEdit ? 'submit' : 'button'}
              onClick={e => editInfo(e.currentTarget.parentElement)}
            >
              {personalInfoFields.editText}
            </button>
          </div>
          <div className={`account-intro-tabs__content-btn-wrapper ${isEdit ? 'visible' : ''}`}>
            <button 
              className="account-intro-tabs__content-btn"
              type="button"
              onClick={e => editInfo(e.currentTarget.parentElement.previousElementSibling)}
            >
              {personalInfoFields.cancelText}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AccountInfo