import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const WorkPositionItem = ({ title, percentage, img }) => {
  const image = getImage(img.localFile)
  
  return (
    <div className="work-position__item">
      <div className="work-position__item-inner">
        <div className="work-position__item-photo">
          <GatsbyImage image={image} alt={title} loading="lazy" />
        </div>
        <div className="work-position__item-method">
          <div className="work-position__item-desc">{title}</div>
          <div className="work-position__item-percentage"><span>{percentage}</span>%</div>
        </div>
      </div>
    </div>
  )
}

export default WorkPositionItem