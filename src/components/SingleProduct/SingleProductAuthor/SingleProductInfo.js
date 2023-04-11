import React from 'react'

const SingleProductInfo = ({ title, desc }) => {
  return (
    <div className="single-product-author__info single-product-author-info">
      <div className="single-product-author-info__title title title--small">{title}</div>
      <p className="single-product-author-info__desc">{desc}</p>
    </div>
  )
}

export default SingleProductInfo