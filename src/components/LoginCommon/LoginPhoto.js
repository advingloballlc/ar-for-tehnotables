import React, { useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import gsap from 'gsap'


const LoginPhoto = ({ title, bgImg }) => {
  useEffect(() => {
    let LoginPhotoTl = gsap.timeline()

    LoginPhotoTl
      .to('.intro-login-photo', 1.5, { delay: .2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'Expo.easeInOut'})
      .from('.intro-login-photo .gatsby-image-wrapper', .8, { scale: 1.3, stagger: .1, onComplete() {
        LoginPhotoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=1')

    return () => {
      LoginPhotoTl.kill()
    }
  }, [])

  const image = getImage(bgImg.localFile)

  return (
    <div className="intro-login__photo intro-login-photo">
      <GatsbyImage image={image} alt={title} loading="eager" />
    </div>
  )
}

export default LoginPhoto