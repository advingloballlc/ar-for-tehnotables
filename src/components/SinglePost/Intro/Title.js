import React from 'react'

const Title = ({ title }) => {
  return (
    <div className="single-post-intro__title-wrapper title-wrapper">
      <h1 className="single-post-intro__title title title--big">{title}</h1>
    </div>
  )
}

export default Title