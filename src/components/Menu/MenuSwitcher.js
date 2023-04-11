import React from 'react'
import { Link } from 'gatsby'

import { getPageName } from '../../utils/getPageName'

import sprite from '../../icons/sprite.svg'

const MenuSwitcher = () => {
  return (
    <div className="menu__switcher menu-switcher">
      <div className="menu-switcher__item">
        <Link
          className="menu-switcher__link"
          activeClassName="active"
          to={`/${getPageName()}`}
        >
          <span className="menu-switcher__icon">
            <svg><use href={`${sprite}#globus`} /></svg>
          </span>
          <span className="menu-switcher__text">UKR</span>
        </Link>
      </div>
      <div className="menu-switcher__item">
        <Link
          className="menu-switcher__link"
          activeClassName="active"
          to={getPageName() ? `/ru/${getPageName()}` : '/ru'}
        >
          <span className="menu-switcher__icon">
            <svg><use href={`${sprite}#globus`} /></svg>
          </span>
          <span className="menu-switcher__text">RUS</span>
        </Link>
      </div>
      <div className="menu-switcher__item">
        <Link
          className="menu-switcher__link"
          activeClassName="active"
          to={getPageName() ? `/en/${getPageName()}` : '/en'}
        >
          <span className="menu-switcher__icon">
            <svg><use href={`${sprite}#globus`} /></svg>
          </span>
          <span className="menu-switcher__text">ENG</span>
        </Link>
      </div>
    </div>
  )
}

export default MenuSwitcher