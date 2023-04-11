import React from 'react'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import './ModalThanks.scss'

const ModalThanks = ({ desc, btn, text }) => {
  return (
    <div className="modal-thanks modal" id="thanks-modal" style={{ display: 'none' }}>
      <div className="modal-thanks__icon check-icon">
        <svg viewBox="0 0 133 133" version="1.1">
          <g id="check-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="filled-circle" fill="#133BFE" cx="66.5" cy="66.5" r="54.5" />
            <circle id="white-circle" fill="#000" cx="66.5" cy="66.5" r="55.5" />
            <circle id="outline" stroke="#133BFE" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
            <polyline id="check" stroke="#fff" strokeWidth="4" points="41 70 56 85 92 49" />
          </g>
        </svg>
      </div>
      <div className="modal-thanks__title title title--small">{desc}</div>
      { text && <p className="modal-thanks__desc">{text}</p> }
      <div className="modal-thanks__btn-wrapper">
        <button
          className="modal-thanks__btn form-btn"
          onClick={() => Fancybox.close()}
        >
          <span>{btn}</span>
          <span>{btn}</span>
        </button>
      </div>
    </div>
  )
}

export default ModalThanks