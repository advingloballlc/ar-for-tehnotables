import React from 'react'

const Info = ({ date, category }) => {
  return (
    <div className="single-post-intro__info">
      <div className="single-post-intro__info-date local-title local-title--grey">{date}</div>
      <div className="single-post-intro__info-category local-title local-title--grey">{category}</div>
    </div>
  )
}

export default Info