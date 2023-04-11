import React from 'react'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import './ModalError.scss'

const ModalError = ({ desc, btn }) => {
  return (
    <div className="modal-err modal" id="error-modal" style={{ display: 'none' }}>
      <div className="modal-err__icon check-icon">
        <svg viewBox="0 0 133 133" version="1.1">
          <g id="check-group-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="filled-circle-2" fill="#e80606" cx="66.5" cy="66.5" r="54.5" />
            <circle id="white-circle-2" fill="#000" cx="66.5" cy="66.5" r="55.5" />
            <circle id="outline-2" stroke="#e80606" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
          </g>
        </svg>
        <span /><span />
      </div>
      <div className="modal-err__title title title--small">{desc}</div>
      <div className="modal-thanks__btn-wrapper">
        <button
          className="modal-err__btn form-btn"
          onClick={() => Fancybox.close()}
        >
          <span>{btn}</span>
          <span>{btn}</span>
        </button>
      </div>
    </div>
  )
}

export default ModalError