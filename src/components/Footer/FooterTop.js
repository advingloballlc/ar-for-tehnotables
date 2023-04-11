import React from 'react'

import FooterTopLeft from './FooterTopLeft'
import FooterTopLinks from './FooterTopLinks'
import FooterInfo from './FooterInfo'

const FooterTop = ({
  footerLogo,
  youtubeLink,
  facebookLink,
  instagramLink,
  catalog,
  support,
  explore,
  contactsTitle,
  contactsSchedule,
  contactsPhones,
  contactsEmail,
  categoryList
}) => {
  return (
    <div className="footer__top footer-top">
      <div className="container">
        <div className="footer-top__inner">
          <FooterTopLeft
            footerLogo={footerLogo}
            youtubeLink={youtubeLink}
            facebookLink={facebookLink}
            instagramLink={instagramLink}
          />
          <FooterTopLinks
            catalog={catalog}
            support={support}
            explore={explore}
            categoryList={categoryList}
          />
        </div>
        <FooterInfo
          contactsTitle={contactsTitle}
          contactsSchedule={contactsSchedule}
          contactsPhones={contactsPhones}
          contactsEmail={contactsEmail}
        />
      </div>
    </div>
  )
}

export default FooterTop