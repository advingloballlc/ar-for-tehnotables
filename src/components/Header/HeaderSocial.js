import React from 'react'

import sprite from '../../icons/sprite.svg'

const HeaderSocial = ({ social }) => {
  return (
    <div className="header__top-social header-social">
      { social.telegramLink && <div className="header-social__item">
        <a 
          className="header-social__link" 
          href={social.telegramLink} 
          target="_blank" 
          rel="noreferrer"
        >
          <svg><use href={`${sprite}#telegram`} /></svg>
        </a>
      </div> }
      { social.facebookLink && <div className="header-social__item">
        <a 
          className="header-social__link" 
          href={social.facebookLink} 
          target="_blank" 
          rel="noreferrer"
        >
          <svg><use href={`${sprite}#viber`} /></svg>
        </a>
      </div> }
      { social.whatsappLink && <div className="header-social__item">
        <a 
          className="header-social__link" 
          href={social.whatsappLink} 
          target="_blank" 
          rel="noreferrer"
        >
          <svg><use href={`${sprite}#whats-app`} /></svg>
        </a>
      </div> }
    </div>
  )
}

export default HeaderSocial