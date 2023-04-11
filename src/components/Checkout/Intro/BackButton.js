import React from 'react'
import { Link } from 'gatsby'

import sprite from '../../../icons/sprite.svg'


const BackButton = ({ prefix, checkoutBackBtn }) => {
  return (
    <Link className="intro-checkout__back" to={prefix}>
      <span className="intro-checkout__back-icon">
        <svg><use href={`${sprite}#header-arrow`} /></svg>
      </span>
      <span className="intro-checkout__back-text">{checkoutBackBtn}</span>
    </Link>
  )
}

export default BackButton