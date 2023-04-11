import React from 'react'

import { getHrefPhone } from '../../utils/getHrefPhone'
import { phoneGoal } from '../../utils/phoneGoal'

const FooterContacts = ({ contactsTitle, contactsSchedule, contactsPhones, contactsEmail }) => {
  return (
    <div className="footer-top__contacts footer-contacts">
      <div className="footer-contacts__title footer-title local-title local-title--grey">{contactsTitle}</div>
      <div className="footer-contacts__inner">
        <div className="footer-contacts__item">
          <div className="footer-contacts__schedule">{contactsSchedule}</div>
        </div>
        { contactsPhones.map((phone, index) => {
          return (
            <div className="footer-contacts__item" key={index++}>
              <a 
                className="footer-contacts__link" 
                href={getHrefPhone(phone.number)}
                onClick={() => phoneGoal(phone.number)}
              >
                {phone.number}
              </a>
            </div>
          )
        }) }
        <div className="footer-contacts__item">
          <a className="footer-contacts__link" href={`mailto:${contactsEmail}`}>{contactsEmail}</a>
        </div>
      </div>
    </div>
  )
}

export default FooterContacts