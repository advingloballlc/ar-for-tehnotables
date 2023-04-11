import React, { useState, useEffect, useContext } from 'react'

import HeaderSwitcherCurrent from './HeaderSwitcherCurrent'
import HeaderSwitcherDropdown from './HeaderSwitcherDropdown'

import { PrefixContext } from '../../context/PrefixProvider'

import { isBrowser } from '../../utils/isBrowser'

const HeaderSwitcher = () => {
  let [ isOpen, setIsOpen ] = useState(false)
  let prefix = useContext(PrefixContext)

  useEffect(() => {
    const closeDropdown = e => {
      if (isBrowser()) {
        (!e.target.closest('.header-switcher__current')
          && document.querySelector('.header-switcher__current').classList.contains('open'))
        && setIsOpen(false)
      }
    }

    if (isBrowser()) window.addEventListener('click', closeDropdown)

    return () => {
      if (isBrowser()) window.removeEventListener('click', closeDropdown)
    }
  }, [])

  return (
    <div className="header__top-switcher header-switcher">
      <HeaderSwitcherCurrent isOpen={isOpen} setIsOpen={setIsOpen} prefix={prefix} />
      <HeaderSwitcherDropdown isOpen={isOpen} prefix={prefix} />
    </div>
  )
}

export default HeaderSwitcher