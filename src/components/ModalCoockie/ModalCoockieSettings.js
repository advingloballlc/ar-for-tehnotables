import React, { useState } from 'react'
import SimpleBar from 'simplebar-react'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'
import 'simplebar/dist/simplebar.min.css'

import './ModalCoockie.scss'

const ModalCoockieSettings = ({ 
  title, 
  subtitle, 
  required, 
  analitics, 
  personalization, 
  advertisment, 
  btnAccept, 
  btnAcceptAll 
}) => {
  const [ isReqeuired, setIsRequired ] = useState(true)
  const [ isAnalithics, setIsAnalithics ] = useState(true)
  const [ isPersonalization, setIsPersonalization ] = useState(true)
  const [ isAdvertisement, setIsAdvertisement ] = useState(true)

  const accept = () => {
    setIsRequired(true)
    Fancybox.close()
  }

  const acceptAll = () => {
    setIsRequired(true)
    setIsAnalithics(true)
    setIsPersonalization(true)
    setIsAdvertisement(true)
    Fancybox.close()
  }

  return (
    <div 
      className="modal coockie-settings-modal coockie-settings coockie-modal" 
      id="coockie-settings-modal" 
      style={{ display: 'none' }}
    >
      <div className="coockie-modal__top">
        <div className="coockie-modal__title title title--big">{title}</div>
        <div className="coockie-modal__subtitle">{subtitle}</div>
      </div>
      <SimpleBar 
        className="coockie-modal__rules"
        autoHide={false}
      >
        <div className="coockie-modal__rules-inner">
          { required && required.requiredTitle && <div className="coockie-modal__rules-item">
            <div className="coockie-modal__rules-head">
              <div className="coockie-modal__rules-title">{required.requiredTitle}</div>
            </div>
            <div className="coockie-modal__rules-body">
              <article className="coockie-modal__rules-article">{required.requiredDesc}</article>
              <div className="coockie-modal__rules-switcher">
                <input 
                  className="coockie-modal__rules-check" 
                  id="coockie-required" 
                  type="checkbox" 
                  value={required.requiredTitle}
                  name="coockie-required"
                  checked={isReqeuired}
                  onChange={() => setIsRequired(true)}
                />
                <label className="coockie-modal__rules-label" htmlFor="coockie-required" />
              </div>
            </div>
          </div> }
          { analitics && analitics.analithicsTitle && <div className="coockie-modal__rules-item">
            <div className="coockie-modal__rules-head">
              <div className="coockie-modal__rules-title">{analitics.analithicsTitle}</div>
            </div>
            <div className="coockie-modal__rules-body">
              <article className="coockie-modal__rules-article">{analitics.analithicsDesc}</article>
              <div className="coockie-modal__rules-switcher">
                <input 
                  className="coockie-modal__rules-check" 
                  id="coockie-analithics" 
                  type="checkbox" 
                  value="Аналітика"
                  name="coockie-analithics"
                  checked={isAnalithics}
                  onChange={() => setIsAnalithics(prev => !prev)}
                />
                <label className="coockie-modal__rules-label" htmlFor="coockie-analithics" />
              </div>
            </div>
          </div> }
          { personalization && personalization.personalizationTitle && <div className="coockie-modal__rules-item">
            <div className="coockie-modal__rules-head">
              <div className="coockie-modal__rules-title">{personalization.personalizationTitle}</div>
            </div>
            <div className="coockie-modal__rules-body">
              <article className="coockie-modal__rules-article">{personalization.personalizationDesc}</article>
              <div className="coockie-modal__rules-switcher">
                <input 
                  className="coockie-modal__rules-check" 
                  id="coockie-personalization" 
                  type="checkbox" 
                  value={personalization.personalizationTitle} 
                  name="coockie-personalization"
                  checked={isPersonalization}
                  onChange={() => setIsPersonalization(prev => !prev)}
                />
                <label className="coockie-modal__rules-label" htmlFor="coockie-personalization" />
              </div>
            </div>
          </div> }
          { advertisment && advertisment.advertismentTitle && <div className="coockie-modal__rules-item">
            <div className="coockie-modal__rules-head">
              <div className="coockie-modal__rules-title">{advertisment.advertismentTitle}</div>
            </div>
            <div className="coockie-modal__rules-body">
              <article className="coockie-modal__rules-article">{advertisment.advertismentDesc}</article>
              <div className="coockie-modal__rules-switcher">
                <input 
                  className="coockie-modal__rules-check" 
                  id="coockie-advertisement" 
                  type="checkbox" 
                  value={advertisment.advertismentTitle} 
                  name="coockie-advertisement"
                  checked={isAdvertisement}
                  onChange={() => setIsAdvertisement(prev => !prev)}
                />
                <label className="coockie-modal__rules-label" htmlFor="coockie-advertisement" />
              </div>
            </div>
          </div> }
        </div>
      </SimpleBar>
      <div className="coockie-modal__btns">
        <div className="coockie-modal__btn-wrapper">
          <button 
            className="coockie-modal__btn coockie-modal__btn--main form-btn"
            onClick={acceptAll}
          >
            <span>{btnAcceptAll}</span>
            <span>{btnAcceptAll}</span>
          </button>
        </div>
        <div className="coockie-modal__btn-wrapper">
          <button 
            className="coockie-modal__btn coockie-modal__btn--transparent"
            onClick={accept}
          >
            {btnAccept}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalCoockieSettings