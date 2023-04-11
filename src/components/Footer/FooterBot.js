import React from 'react'

import Company from '../Company/Company'
import FooterBotLinks from './FooterBotLinks'
import Copyright from '../Copyright/Copyright'

const FooterBot = ({ bottomLinks, copyrightText }) => {
  return (
    <div className="footer__bot footer-bot">
      <div className="container">
        <div className="footer-bot__inner">
          <FooterBotLinks bottomLinks={bottomLinks} />
          <Copyright copyrightText={copyrightText} />
          <Company />
        </div>
      </div>
    </div>
  )
}

export default FooterBot