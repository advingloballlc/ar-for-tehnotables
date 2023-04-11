import React from 'react'
import { Link } from 'gatsby'

import { Collapse } from 'react-collapse'

import { getPageName } from '../../utils/getPageName'

const HeaderSwitcherDropdown = ({ isOpen, prefix }) => {
  return (
    <div className="header-switcher__dropdown">
      <Collapse isOpened={isOpen}>
        {
          prefix === '/'
            ? <div className="header-switcher__dropdown-inner">
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={getPageName() ? `/ru/${getPageName()}` : '/ru'}
                >
                  RUS
                </Link>
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={getPageName() ? `/en/${getPageName()}` : '/en'}
                >
                  ENG
                </Link>
              </div>
          : prefix === '/ru/'
            ? <div className="header-switcher__dropdown-inner">
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={`/${getPageName()}`}
                >
                  UKR
                </Link>
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={getPageName() ? `/en/${getPageName()}` : '/en'}
                >
                  ENG
                </Link>
              </div>
            : <div className="header-switcher__dropdown-inner">
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={`/${getPageName()}`}
                >
                  UKR
                </Link>
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={getPageName() ? `/ru/${getPageName()}` : '/ru'}
                >
                  RUS
                </Link>
              </div>
        }

      </Collapse>
    </div>
  )
}

export default HeaderSwitcherDropdown