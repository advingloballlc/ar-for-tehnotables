import React from 'react'

const SingleProductMobile = ({ productTitle, productShortDesc }) => {
  return (
    <div className="single-product-intro__mobile">
      <div className="single-product-intro__title-mobile-wrapper title-wrapper">
        <h3 className="single-product-intro__mobile-title title title--small">{productTitle}</h3>
      </div>
      <p className="single-product-intro__desc-mobile">{productShortDesc}</p>
    </div>
  )
}

export default SingleProductMobile