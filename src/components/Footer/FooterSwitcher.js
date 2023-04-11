import React from 'react'
import { Link } from 'gatsby'

import { getPageName } from '../../utils/getPageName'

const FooterSwitcher = () => {
  return (
    <div className="footer-info__switcher footer-switcher">
      <Link
        className="footer-switcher__item"
        activeClassName="active"
        to={`/${getPageName()}`}
      >
        UKR
      </Link>
      <Link
        className="footer-switcher__item"
        activeClassName="active"
        to={getPageName() ? `/ru/${getPageName()}` : '/ru'}
      >
        RUS
      </Link>
      <Link
        className="footer-switcher__item"
        activeClassName="active"
        to={getPageName() ? `/en/${getPageName()}` : '/en'}
      >
        ENG
      </Link>
    </div>
  )
}

export default FooterSwitcher