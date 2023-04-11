import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const SingleProductPhoto = ({ photo, name, position }) => {
  const image = getImage(photo.localFile)
  
  return (
    <div className="single-product-author__photo single-product-author-photo">
      <div className="single-product-author-photo__inner">
        <div className="single-product-author-photo__preview">
          {
            photo.localFile
              ? <GatsbyImage image={image} alt={name} loading="lazy" />
              : <img src={photo.sourceUrl} alt={name} width={325} height={375} loading="lazy" />
          }
          
        </div>
        <div className="single-product-author-photo__name">{name}</div>
        <div className="single-product-author-photo__position">{position}</div>
      </div>
    </div>
  )
}

export default SingleProductPhoto