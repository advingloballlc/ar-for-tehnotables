import React from 'react'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

import TeamItem from './TeamItem'

const TeamSlider = ({ ourTeamList }) => {
  return (
    <Swiper
      className="team__slider team-slider"
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      speed={500}
      loop={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      navigation={{
        prevEl: '.team-slider__prev',
        nextEl: '.team-slider__next',
      }}
    >
      {
        ourTeamList.map((item, index) => {
          return (
            <SwiperSlide className="team-slider__item" key={index++}>
              <TeamItem 
                imgSrc={item.photo.localFile} 
                social={{ 
                  linkedin: item.socialMedia.linkedinLink, 
                  twitter: item.socialMedia.twitterLink,
                  facebook: item.socialMedia.facebookLink,
                  instagram: item.socialMedia.instagramLink 
                }} 
                name={item.name} 
                position={item.position}
              />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default TeamSlider