import React, { useContext } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { update } from '../../../utils/3dHover'

import { PrefixContext } from '../../../context/PrefixProvider'


const IntroListItem = ({ imgSrc, slug, date, category, title }) => {
  let prefix = useContext(PrefixContext)
  const image = getImage(imgSrc)

  return (
    <div className="intro-blog__item">
      <div
        className="intro-blog__item-inner"
        onMouseOver={e => { update(e, 'in') }}
        onMouseOut={e => { update(e, 'out') }}
      >
        <Link className="intro-blog__item-link" to={`${prefix}${slug}`} />
        <div className="intro-blog__item-preview">
          <GatsbyImage image={image} alt={title} loading="eager" />
        </div>
        <div className="intro-blog__item-info">
          <div className="intro-blog__item-info-top">
            <div className="intro-blog__item-info-date">{date}</div>
            <div className="intro-blog__item-info-category">{category}</div>
          </div>
          <div className="intro-blog__item-info-title">{title}</div>
        </div>
      </div>
    </div>
  )
}

export default IntroListItem