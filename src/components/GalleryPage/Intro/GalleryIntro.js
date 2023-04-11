import React, { useEffect, useRef } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './GalleryIntro.scss'

import { isBrowser } from './../../../utils/isBrowser'
import { detectLighthouse } from '../../../utils/detectLighthouse'

const GalleryIntro = ({ images }) => {
  const gallery = useRef()
  const forGallery = -.5
  const speed = .05

  let positionX = 0,
      positionY = 0,
      coordXpercent = 0,
      coordYpercent = 0

  const setMouseParallaxStyle = () => {
    const disX = coordXpercent - positionX
    const disY = coordYpercent - positionY

    positionX = positionX + (disX * speed)
    positionY = positionY + (disY * speed)

    if (gallery.current) gallery.current.style = `transform: translate(${positionX / forGallery}%, ${positionY / forGallery}%) scale(2)`

    requestAnimationFrame(setMouseParallaxStyle)
  }

  const calculateParallax = e => {
    if (isBrowser()) {
      const parallaxWidth = window.innerWidth
      const parallaxHeight = window.innerHeight

      const coordX = e.pageX - parallaxWidth / 2
      const coordY = e.pageY - parallaxHeight / 2

      coordXpercent = coordX / parallaxWidth * 100
      coordYpercent = coordY / parallaxHeight * 100
    }
  }

  useEffect(() => {
    if (!detectLighthouse()) return null
    
    gsap.registerPlugin(Draggable, ScrollTrigger)

    gsap.from('.gallery-intro__wrapper', 3, { delay: .5, opacity: 0, scale: .9 })

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        if (isBrowser() && !document.documentElement.classList.contains('has-touch')) {
          setMouseParallaxStyle()

          window.addEventListener('mousemove', calculateParallax)
        } else {
          Draggable.create('.gallery-intro__inner', { bounds: '.gallery-intro' })
        }
      },
      '(max-width: 1024px)': () => { Draggable.create('.gallery-intro__inner', { type: 'x,y', bounds: '.gallery-intro' }) }
    })
  }, [])

  return (
    <section className="intro gallery-intro">
      <div className="gallery-intro__wrapper">
        <div className="gallery-intro__inner" ref={gallery}>
          { images.map((item, index) => {
            const image = getImage(item.itemImg.localFile)
              
            return (
              <div className="gallery-intro__item" key={index++}>
                <div className="gallery-intro__item-inner">
                  { item.itemTitle && <div className="gallery-intro__item-title">
                    <span>{item.itemTitle}</span>
                  </div> }
                  <GatsbyImage image={image} alt={item.itemTitle ? item.itemTitle : `Gallery ${index + 1}`} loading="eager" />
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    </section>
  )
}

export default GalleryIntro