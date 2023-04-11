import React, { useContext } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { PrefixContext } from '../../../context/PrefixProvider'

const ListItem = ({ title, img, category, date, slug }) => {
  let prefix = useContext(PrefixContext)
  const image = getImage(img)
  
  return (
    <div className="single-post-similar__item">
      <div className="single-post-similar__item-inner">
        <Link className="single-post-similar__item-link" to={`${prefix}${slug}`} />
        <div className="single-post-similar__item-preview">
          <GatsbyImage image={image} alt={title} loading="lazy" />
        </div>
        <div className="single-post-similar__item-info">
          <div className="single-post-similar__item-date local-title local-title--grey">{date}</div>
          <div className="single-post-similar__item-category local-title local-title--grey">{category}</div>
        </div>
        <div className="single-post-similar__item-title">{title}</div>
      </div>
    </div>
  )
}

export default ListItem