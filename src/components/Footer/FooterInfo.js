import React from 'react'

import FooterSwitcher from './FooterSwitcher'
import FooterPay from './FooterPay'
import FooterContacts from './FooterContacts'

const FooterInfo = ({ contactsTitle, contactsSchedule, contactsPhones, contactsEmail }) => {
  return (
    <div className="footer-top__info footer-info">
      <FooterSwitcher />
      <FooterPay />
      <FooterContacts
        contactsTitle={contactsTitle}
        contactsSchedule={contactsSchedule}
        contactsPhones={contactsPhones}
        contactsEmail={contactsEmail}
      />
    </div>
  )
}

export default FooterInfo