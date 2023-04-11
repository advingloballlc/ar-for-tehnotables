import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixProvider'

import { logoutUser } from '../../auth/logoutUser'

import sprite from '../../icons/sprite.svg'

const HeaderControls = (props) => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="header-controls">
      <div className={`header-controls__item ${props.isLoggedIn ? 'logged-in' : ''}`}>
        <Link
          className="header-controls__link"
          to={props.isLoggedIn ? `${prefix}account` : `${prefix}login`}
          activeClassName="active"
          partiallyActive={true}
        >
          <svg><use href={`${sprite}#user`} /></svg>
        </Link>
        { props.isLoggedIn &&
          <div className="controls-dropdown">
            <Link
              className="controls-dropdown__link"
              activeClassName="active"
              to={`${prefix}account`}
            >
              {props.auth.personalInfo}
            </Link>
            <Link
              className="controls-dropdown__link"
              activeClassName="active"
              to={`${prefix}account/history`}
            >
              {props.auth.orderHistory}
            </Link>
            <button 
              className="controls-dropdown__link"
              onClick={() => logoutUser(prefix)}
            >
              {props.auth.logout}
            </button>
        </div> }
      </div>
      <div className="header-controls__item">
        <button
          className="header-controls__link search-btn search-close"
          onClick={props.toggleSearchOpen}
          style={{display: props.isSearchOpen ? 'block' : 'none'}}
        >
          <svg><use href={`${sprite}#close`} /></svg>
        </button>
        <button
          className="header-controls__link search-btn search-open"
          onClick={props.toggleSearchOpen}
          style={{display: !props.isSearchOpen ? 'block' : 'none'}}
        >
          <svg><use href={`${sprite}#search`} /></svg>
        </button>
      </div>
      <div className="header-controls__item">
        <button
          className={`header-controls__link ${props.isCartOpen ? 'active' : ''}`}
          onClick={() => props.cartOpen(true)}
        >
          <svg><use href={`${sprite}#cart`} /></svg>
          { props.cartCount && parseInt(props.cartCount) !== 0 && <span className="header-controls__count">{props.cartCount}</span> }
        </button>
      </div>
      <div className="header-controls__item">
        <button
          className={`header-controls__link ${props.isContactsOpen ? 'active' : ''}`}
          onClick={props.contactsOpen}
        >
          <svg><use href={`${sprite}#phone`} /></svg>
        </button>
      </div>
    </div>
  )
}

export default HeaderControls