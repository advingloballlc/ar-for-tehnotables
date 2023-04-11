import React, { useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const CategoryPreview = ({ title, preview }) => {
  const image = getImage(preview)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let introBgTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro-category__preview",
        start: "top top",
        toggleActions: "restart none none reverse",
        scrub: true,
        duration: 1,
      }
    })
    .to(".intro-category__preview .gatsby-image-wrapper", { 
        y: "+=120",
        transformOrigin: "center"
      },
      0
    )
  }, [])
  
  return (
    <div className="intro-category__preview intro-category-preview">
      <GatsbyImage image={image} alt={title} loading="eager" />
      <div className="container">
        <div className="intro-category__title-wrapper title-wrapper">
          <h1 className="intro-category__title title title--big">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default CategoryPreview