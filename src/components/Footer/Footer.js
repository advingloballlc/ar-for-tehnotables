import React from 'react'

import FooterTop from './FooterTop'
import FooterBot from './FooterBot'

import './Footer.scss'

const Footer = ({ isHiddenFooterTop, footer, categoryList }) => {
  return (
    <footer className="footer">
      {!isHiddenFooterTop && <FooterTop
        footerLogo={footer.footerLogo}
        youtubeLink={footer.youtubeLink}
        facebookLink={footer.facebookLink}
        instagramLink={footer.instagramLink}
        catalog={footer.firstColumn}
        support={footer.secondColumn}
        explore={footer.thirdColumn}
        contactsTitle={footer.contactsBlockTitle}
        contactsSchedule={footer.contactsScheduleTime}
        contactsPhones={footer.contactsPhones}
        contactsEmail={footer.contactsEmail}
        categoryList={categoryList}
      />}
      <FooterBot bottomLinks={footer.bottomLinks} copyrightText={footer.footerCopyrightText} />
    </footer>
  )
}

export default Footer