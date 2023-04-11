import React from 'react'
import YouTube from 'react-youtube'

const SingleProductTabVideo = ({ productVideo }) => {
  return (
    <YouTube
      videoId={productVideo} 
      opts={{
        height: '500',
        width: '860',
        playerVars: {
          autoplay: 0,
        },
      }}
      className="single-product-content-tabs__body-video" 
      iframeClassName="single-product-content-tabs__body-iframe"
      onReady={e => e.target.pauseVideo()} 
    />
  )
}

export default SingleProductTabVideo