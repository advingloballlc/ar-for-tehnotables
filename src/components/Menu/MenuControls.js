import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import { getCookie } from './../../utils/getCookie'

import sprite from '../../icons/sprite.svg'

const MenuControls = ({ prefix, isCartOpen, cartOpen, cartCount }) => {
  const [ isLoggedIn, setIsLoggetIn ] = useState(!!getCookie('user_id'))

  useEffect(() => {
    setIsLoggetIn(!!getCookie('user_id'))
  }, [getCookie('user_id')])

  return (
    <div className="menu__controls menu-controls">
      <div className="menu-controls__item">
        <button
          className={`menu-controls__link ${isCartOpen ? 'active' : ''}`}
          onClick={() => cartOpen(false)}
        >
          <svg><use href={`${sprite}#cart`} /></svg>
        </button>
        { cartCount && parseInt(cartCount) !== 0 && <span className="menu-controls__count">{cartCount}</span> }
      </div>
      <div className="menu-controls__item">
        <Link 
          className="menu-controls__link" 
          activeClassName="active" 
          partiallyActive={true}
          to={isLoggedIn ? `${prefix}account` : `${prefix}login`}
        >
          <svg><use href={`${sprite}#user`} /></svg>
        </Link>
      </div>
    </div>
  )
}

export default MenuControls