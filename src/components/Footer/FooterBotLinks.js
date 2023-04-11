import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from './../../context/PrefixProvider'

const FooterBotLinks = ({ bottomLinks }) => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="footer-bot__links">
      { bottomLinks.map((link, index) => {
        return (
          <Link
            className="footer-bot__link"
            activeClassName="active"
            to={`${prefix}${link.itemLink}`}
            key={index++}
          >
            {link.itemTitle}
          </Link>
        )
      }) }
    </div>
  )
}

export default FooterBotLinks