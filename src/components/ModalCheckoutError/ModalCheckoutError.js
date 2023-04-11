import React from 'react'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import './ModalCheckoutError.scss'

const ModalCheckoutError = ({ desc, btn }) => {
  return (
    <div className="modal-checkout-err modal" id="checkout-err-modal" style={{ display: 'none' }}>
      <div className="modal-checkout-err__icon">
        <span>!</span>
        <div className="modal-checkout-err__icon-inner" />
      </div>
      <div className="modal-checkout-err__title title title--small">{desc}</div>
      <div className="modal-checkout-err__btn-wrapper">
        <button
          className="modal-checkout-err__btn"
          onClick={() => Fancybox.close()}
        >
          <span className="modal-checkout-err__btn-inner">
            <span>{btn}</span>
            <span>{btn}</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default ModalCheckoutError