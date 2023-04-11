import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import sprite from '../../../icons/sprite.svg'

const TeamItem = ({ imgSrc, social, name, position }) => {
  const image = getImage(imgSrc)
  
  return (
    <div className="team__item team-item">
      <div className="team-item__inner">
        <div className="team-item__photo">
          <GatsbyImage image={image} alt={name} loading="lazy" />
           { (social.linkedin || social.twitter || social.facebook || social.instagram) && <ul className="team-item__list">
              { social.linkedin && <li className="team-item__list-item">
                <a className="team-item__list-link" href={social.linkedin} rel="noreferrer" target="_blank">
                  <svg>
                    <use href={`${sprite}#social-linked-in`} />
                  </svg>
                </a>
              </li> }
              { social.twitter && <li className="team-item__list-item">
                <a className="team-item__list-link" href={social.twitter} rel="noreferrer" target="_blank">
                  <svg>
                    <use href={`${sprite}#social-twitter`} />
                  </svg>
                </a>
              </li> }
              { social.facebook && <li className="team-item__list-item">
                <a className="team-item__list-link" href={social.facebook} rel="noreferrer" target="_blank">
                  <svg>
                    <use href={`${sprite}#social-facebook`} />
                  </svg>
                </a>
              </li> }
              { social.instagram && <li className="team-item__list-item">
                <a className="team-item__list-link" href={social.instagram} rel="noreferrer" target="_blank">
                  <svg>
                    <use href={`${sprite}#social-instagram`} />
                  </svg>
                </a>
              </li> }
            </ul> }
        </div>
        <div className="team-item__name">{name}</div>
        <div className="team-item__position">{position}</div>
      </div>
    </div>
  )
}

export default TeamItem