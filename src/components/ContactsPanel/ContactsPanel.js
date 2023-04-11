import React from 'react'
import { Collapse } from 'react-collapse'

import './ContactsPanel.scss'

import Logo from '../Logo/Logo'

import { getHrefPhone } from '../../utils/getHrefPhone'
import { phoneGoal } from '../../utils/phoneGoal'

import sprite from '../../icons/sprite.svg'

const ContactsPanel = ({ 
  isContactsOpen, 
  contactsClose,
  contactsPhones,
  contactsEmail,
  contactsScheduleTime,
  youtubeLink,
  facebookLink,
  instagramLink,
  logo,
  footerLabels
}) => {
  return (
    <div className="contacts-panel">
      <Collapse isOpened={isContactsOpen}>
        <div className="contacts-panel__wrapper">
          <div className="contacts-panel__top">
            <Logo className='logo-header' logo={logo} />
            <div
              className="contacts-panel__close"
              onClick={contactsClose}
            >
              <span /><span />
            </div>
          </div>
          <div className="contacts-panel__content">
            <div className="contacts-panel__item">
              <div className="contacts-panel__title local-title local-title--grey">{footerLabels.phoneTitle}</div>
              <div className="contacts-panel__inner">
                { contactsPhones.map((phone, index) => {
                  return (
                    <a 
                      className="contacts-panel__text contacts-panel__link" 
                      href={getHrefPhone(phone.number)} 
                      key={index++}
                      onClick={() => phoneGoal(phone.number)}
                    >
                      {phone.number}
                    </a>
                  )
                }) }
              </div>
            </div>
            <div className="contacts-panel__item">
              <div className="contacts-panel__title local-title local-title--grey">{footerLabels.emailTitle}</div>
              <div className="contacts-panel__inner">
                <a className="contacts-panel__text contacts-panel__link" href={`mailto:${contactsEmail}`}>
                  {contactsEmail}
                </a>
              </div>
            </div>
            <div className="contacts-panel__item">
              <div className="contacts-panel__title local-title local-title--grey">{footerLabels.scheduleTitle}</div>
              <div className="contacts-panel__inner">
                <span className="contacts-panel__text">{contactsScheduleTime}</span>
              </div>
            </div>
            <div className="contacts-panel__item">
              <div className="contacts-panel__title local-title local-title--grey">{footerLabels.subscribeTitle}</div>
              <ul className="contacts-panel__social">
                { youtubeLink && <li className="contacts-panel__social-item">
                  <a 
                    className="contacts-panel__social-link" 
                    href={youtubeLink} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <svg><use href={`${sprite}#youtube`} /></svg>
                  </a>
                </li> }
                { facebookLink && <li className="contacts-panel__social-item">
                  <a 
                    className="contacts-panel__social-link" 
                    href={facebookLink} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <svg><use href={`${sprite}#facebook`} /></svg>
                  </a>
                </li> }
                { instagramLink && <li className="contacts-panel__social-item">
                  <a 
                    className="contacts-panel__social-link" 
                    href={instagramLink} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <svg><use href={`${sprite}#instagram`} /></svg>
                  </a>
                </li> }
              </ul>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default React.memo(ContactsPanel)