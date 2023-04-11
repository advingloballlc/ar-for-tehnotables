import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'

import ListItem from './ListItem'

const List = ({ posts }) => {
  return (
    <Swiper
      className="single-post-similar__slider"
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      speed={500}
      navigation={{
        prevEl: '.single-post-similar__prev',
        nextEl: '.single-post-similar__next'
      }}
      breakpoints={{
        769: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }}
    >
      {
        posts.map((post, index) =>
          <SwiperSlide className="single-post-similar__slider-item">
            <ListItem
              title={post.title}
              img={post.featuredImage.node.localFile}
              category={post.terms.nodes[0].name}
              date={post.date}
              slug={post.slug}
              key={index++}
            />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}

export default List