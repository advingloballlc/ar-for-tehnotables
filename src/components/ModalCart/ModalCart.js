import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import './ModalCart.scss'

import { PrefixContext } from './../../context/PrefixProvider'

import sprite from '../../icons/sprite.svg'

const ModalCart = ({ desc, btn, btnChck }) => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="modal-cart modal" id="cart-modal" style={{ display: 'none' }}>
      <div className="modal-cart__icon">
        <svg><use href={`${sprite}#cart`}></use></svg>
        <span className="modal-cart__check check-icon">
          <svg viewBox="0 0 133 133" version="1.1">
            <g id="check-group-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <circle id="filled-circle-1" fill="#133BFE" cx="66.5" cy="66.5" r="54.5" />
              <circle id="white-circle-1" fill="#000" cx="66.5" cy="66.5" r="55.5" />
              <circle id="outline-1" stroke="#133BFE" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
              <polyline id="check-1" stroke="#fff" strokeWidth="4" points="41 70 56 85 92 49" />
            </g>
          </svg>
        </span>
      </div>
      <div className="modal-cart__title title title--small">{desc}</div>
      <div className="modal-cart__btns">
        <div className="modal-cart__btn-wrapper">
          <button
            className="modal-cart__btn form-btn"
            onClick={() => Fancybox.close()}
          >
            <span>{btn}</span>
            <span>{btn}</span>
          </button>
        </div>
        <div className="modal-cart__btn-wrapper">
          <Link 
            className="modal-cart__btn form-btn"
            onClick={() => Fancybox.close()}
            to={`${prefix}checkout`}
          >
            <span>{btnChck}</span>
            <span>{btnChck}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ModalCart