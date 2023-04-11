import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import sprite from '../../icons/sprite.svg'
import MainAboutMarquee from './MainAboutMarquee'

import { showVideoModal } from '../../utils/showVideoModal'


const MainAboutPhoto = ({ title, img, video, playBtnText }) => {
  const image = getImage(img.localFile) 

  return (
    <div className="main-about__photo">
      <MainAboutMarquee />
      <div className="main-about__title-mobile title title--small">{title}</div>
      <div className="main-about__photo-inner">
        <div 
          className="main-about__photo-btn video-btn"
          onClick={() => showVideoModal(video.mediaItemUrl, img)}
        >
          <div className="main-about__photo-icon video-btn__icon">
            <svg viewBox="0 0 65 65" width="65" height="65" className="main-about__photo-shape video-btn__shape">
              <circle r="32.5" cx="32.5" cy="32.5" />
            </svg>
            <svg className="main-about__photo-play video-btn__play">
              <use href={`${sprite}#play`} />
            </svg>
          </div>
          <p className="main-about__photo-text video-btn__text">{playBtnText}</p>
        </div>
        <GatsbyImage image={image} alt={title} loading="lazy" />
      </div>
    </div>
  )
}

export default MainAboutPhoto