import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../../context/PrefixProvider'

const DeliveryItem = ({ id, productKey, name, slug, category, quantity, price, imgSrc, deleteBtn, removeFromCartHandler }) => {
  let prefix = useContext(PrefixContext)
  
  return (
    <div className="intro-checkout-delivery__item">
      <div className="intro-checkout-delivery__item-inner">
        <div className="intro-checkout-delivery__item-side">
          <Link className="intro-checkout-delivery__item-title" to={`${prefix}${slug !== 'constructor' ? slug : 'configurator'}`}>{name}</Link>
           { category && <div className="intro-checkout-delivery__item-category">{category}</div> }
          <div className="intro-checkout-delivery__item-count">х<span>{quantity}</span></div>
          <div className="intro-checkout-delivery__item-price"><span>{price}</span> uah</div>
        </div>
        <div className="intro-checkout-delivery__item-side">
          <div className="intro-checkout-delivery__item-photo">
            <img src={imgSrc} alt={name} width={70} height={60} />
          </div>
          <button
            className="intro-checkout-delivery__item-btn"
            type="button"
            onClick={() => removeFromCartHandler(productKey)}
          >
            {deleteBtn}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeliveryItem