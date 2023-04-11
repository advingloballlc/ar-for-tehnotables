import React from 'react'

const SingleProductTabInfo = ({ productTechInfo }) => {
  return (
    <div className="single-product-content-tabs__body-info">
      { productTechInfo.map((item, index) => {
        return (
          <div className="single-product-content-tabs__body-info-item" key={index++}>
            <div className="single-product-content-tabs__body-info-side">{item.title}</div>
            <div className="single-product-content-tabs__body-info-side">{item.desc}</div>
          </div>
        )
      }) }
    </div>
  )
}

export default SingleProductTabInfo