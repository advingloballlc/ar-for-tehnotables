import React from 'react'
import {
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share'

import sprite from '../../../icons/sprite.svg'

const Share = ({ title, article, shareTitle, pageLnk }) => {
  return (
    <div className="single-post-intro__share">
      <p className="single-post-intro__share-text">{shareTitle}</p>
      <div className="single-post-intro__share-inner">
        <EmailShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          subject={title}
          body={article}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#at`} /></svg>
          </span>
        </EmailShareButton>
        <TwitterShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#twitter`} /></svg>
          </span>
        </TwitterShareButton>
        <FacebookShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          quote={title}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#facebook`} /></svg>
          </span>
        </FacebookShareButton>
        <TelegramShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#telegram`} /></svg>
          </span>
        </TelegramShareButton>
        <ViberShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#viber`} /></svg>
          </span>
        </ViberShareButton>
        <WhatsappShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
          separator=":: "
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#whats-app`} /></svg>
          </span>
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default Share