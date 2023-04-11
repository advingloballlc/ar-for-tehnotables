import React from 'react'
import Logo from '../Logo/Logo'

import sprite from '../../icons/sprite.svg'

const FooterTopLeft = ({ footerLogo, youtubeLink, facebookLink, instagramLink }) => {
  return (
    <div className="footer-top__left">
      <Logo className='logo-footer' logo={footerLogo} />
      <ul className="footer-top__social">
        { youtubeLink && <li className="footer-top__social-item">
          <a 
            className="footer-top__social-link" 
            href={youtubeLink} 
            rel="noreferrer" 
            target="_blank"
          >
            <span className="footer-top__social-icon">
              <svg>
                <use href={`${sprite}#youtube`}/>
              </svg>
            </span>
          </a>
        </li> }
        { facebookLink && <li className="footer-top__social-item">
          <a 
            className="footer-top__social-link" 
            href={facebookLink} 
            rel="noreferrer" 
            target="_blank"
          >
            <span className="footer-top__social-icon">
              <svg>
                <use href={`${sprite}#facebook`}/>
              </svg>
            </span>
          </a>
        </li> }
        { instagramLink && <li className="footer-top__social-item">
          <a 
            className="footer-top__social-link" 
            href={instagramLink} 
            rel="noreferrer" 
            target="_blank"
          >
           <span className="footer-top__social-icon">
              <svg>
                <use href={`${sprite}#instagram`}/>
              </svg>
            </span>
          </a>
        </li> }
      </ul>
    </div>
  )
}

export default FooterTopLeft