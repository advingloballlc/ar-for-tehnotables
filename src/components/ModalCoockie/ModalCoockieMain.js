import React from 'react'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import './ModalCoockie.scss'

import { isBrowser } from '../../utils/isBrowser'
import { showModalCoockieSettings } from '../../utils/showModalCoockieSettings'

const ModalCoockieMain = ({ title, desc, btnSettings, btnAccept }) => {
  const accept = () => {
    Fancybox.close()
  }

  const openSetting = () => {
    Fancybox.close()

    if (isBrowser()) setTimeout(() => showModalCoockieSettings(), 200)
  }

  return (
    <div 
      className="modal coockie-main-modal coockie-main coockie-modal" 
      id="coockie-main-modal" 
      style={{ display: 'none' }}
    >
      <div className="coockie-modal__title title title--big">{title}</div>
      <div className="coockie-modal__desc-wrapper">
        <article className="coockie-modal__article article" dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
      <div className="coockie-modal__btns">
        <div className="coockie-modal__btn-wrapper">
          <button 
            className="coockie-modal__btn coockie-modal__btn--transparent"
            onClick={openSetting}
          >
            {btnSettings}
          </button>
        </div>
        <div className="coockie-modal__btn-wrapper">
          <button 
            className="coockie-modal__btn coockie-modal__btn--main form-btn"
            onClick={accept}
          >
            <span>{btnAccept}</span>
            <span>{btnAccept}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalCoockieMain