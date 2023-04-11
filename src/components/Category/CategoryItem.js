import React, { useContext } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixProvider'

const CategoryItem = ({ imgSrc, name, slug }) => {
  let prefix = useContext(PrefixContext)
  const image = getImage(imgSrc)
  
  return (
    <div className="category__item category-item sample-item">
      <div className="category-item__inner sample-item__inner">
        <Link className="category-item__link sample-item__link" to={`${prefix}${slug}`} />
        <div className="category-item__preview sample-item__preview">
          <GatsbyImage image={image} alt={name} loading="eager" />
        </div>
        <div className="category-item__title sample-item__title">{name}</div>
      </div>
    </div>
  )
}

export default CategoryItem

