import React from 'react'

const MainOrderPhoto = ({ aboutTablesTitle, aboutTablesImage }) => {
  return (
    <div className="main-order__photo main-order-photo">
      <div className="main-order-content__title-mobile title title--small" dangerouslySetInnerHTML={{ __html: aboutTablesTitle }} />
      <div className="main-order-photo__inner">
        <video 
          muted={true} 
          loop={true} 
          autoPlay={true} 
          controls={false} 
          width={355} 
          height={410}
          preload="none"
          playsInline={true}
        >
          <source src={aboutTablesImage.mediaItemUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default  MainOrderPhoto