import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../../context/PrefixProvider'

const CategoryItem = ({ name, slug, imgDesc, imgMobile }) => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="intro-category-list__item">
      <Link
        className="intro-category-list__item-link"
        to={`${prefix}${slug}`}
        activeClassName="active"
        partiallyActive={true}
      />
      <div className="intro-category-list__item-wrapper">
        <div className="intro-category-list__item-inner">
          { imgDesc.map((img, index) => {
            return (
              <div className="intro-category-list__item-elem" key={img.id}>
                <img src={img.url} alt={`${name} ${index + 1}`} width={88} height={88} loading="eager" />
              </div>
            )
          }) }
        </div>
        <div className="intro-category-list__item-mobile">
          <div className="intro-category-list__item-mobile-preview">
            <img src={imgMobile} alt={name} width={88} height={88} loading="lazy" />
          </div>
        </div>
        <div className="intro-category-list__item-title">{name}</div>
      </div>
    </div>
  )
}

export default CategoryItem