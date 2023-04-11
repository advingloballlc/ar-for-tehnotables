import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Preview = ({ title, img }) => {
  const image = getImage(img)
  
  return (
    <div className="single-post-intro__preview"><GatsbyImage image={image} alt={title} loading="eager" /></div>
  )
}

export default Preview