import React from 'react'

import sprite from '../../../icons/sprite.svg'

const Title = ({ title }) => {
  return (
    <div className="single-post-similar__top">
      <div className="single-post-similar__title-wrapper title-wrapper">
        <div className="single-post-similar__title title title--small">{title}</div>
      </div>
      <div className="single-post-similar__nav">
        <div className="single-post-similar__btn single-post-similar__prev">
          <svg><use href={`${sprite}#prev-arrow`} /></svg>
        </div>
        <div className="single-post-similar__btn single-post-similar__next">
          <svg><use href={`${sprite}#next-arrow`} /></svg>
        </div>
      </div>
    </div>
  )
}

export default Title