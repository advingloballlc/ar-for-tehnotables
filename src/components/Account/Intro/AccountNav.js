import React, { useContext } from "react"
import { Link } from 'gatsby'

import { PrefixContext } from '../../../context/PrefixProvider'

import { logoutUser } from '../../../auth/logoutUser'

import sprite from '../../../icons/sprite.svg'

const AccountNav = ({ logoutText, orderHistoryTitle, personalInfoTitle }) => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="account-intro-tabs__nav">
      <div className="account-intro-tabs__nav-item">
        <Link
          className="account-intro-tabs__nav-inner"
          activeClassName="active"
          to={`${prefix}account`}
        >
          <span className="account-intro-tabs__nav-icon">
            <svg>
              <use href={`${sprite}#user`} />
            </svg>
          </span>
          <span className="account-intro-tabs__nav-text">{personalInfoTitle}</span>
        </Link>
      </div>
      <div className="account-intro-tabs__nav-item">
        <Link
          className="account-intro-tabs__nav-inner"
          activeClassName="active"
          to={`${prefix}account/history`}
        >
          <span className="account-intro-tabs__nav-icon">
            <svg>
              <use href={`${sprite}#history`} />
            </svg>
          </span>
          <span className="account-intro-tabs__nav-text">{orderHistoryTitle}</span>
        </Link>
      </div>
      <div className="account-intro-tabs__nav-item">
        <span className="account-intro-tabs__nav-text" onClick={() => logoutUser(prefix)}>
          {logoutText}
        </span>
      </div>
    </div>
  )
}

export default AccountNav