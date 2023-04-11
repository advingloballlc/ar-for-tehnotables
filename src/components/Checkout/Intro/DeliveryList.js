import React, { useEffect, useRef, useState, useContext } from 'react'
import { Link } from 'gatsby'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import DeliveryItem from './DeliveryItem'

import { PrefixContext } from './../../../context/PrefixProvider'

const DeliveryList = ({ 
  deleteBtn, 
  checkoutEmptyListTitle, 
  items, 
  removeFromCartHandler,
  isCartLoading
}) => {
  let prefix = useContext(PrefixContext)
  const list = useRef()
  let [ isPadding, setIsPadding ] = useState(false)


  useEffect(() => {
    let children = [...list.current.el.children]

    children.forEach(child => {
      if (child.classList.contains('simplebar-vertical')) {
        child.style.visibility !== 'hidden' ? setIsPadding(true) : setIsPadding(false)
      }
    })
  })

  return (
    <SimpleBar
      className={`intro-checkout-delivery__list ${isPadding ? 'has-padding' : ''} ${isCartLoading ? 'disabled' : ''}`}
      autoHide={false}
      ref={list}
    >
      {
        items && items.length !== 0
          ? items.map(item => {
              return <DeliveryItem
                id={item.id}
                productKey={item.key}
                name={item.name}
                slug={item.slug}
                category={item.categories && item.categories.length !== 0 && item.categories[0].name}
                quantity={item.quantity}
                price={item.prices.price}
                imgSrc={item.thumbnail}
                deleteBtn={deleteBtn}
                removeFromCartHandler={removeFromCartHandler}
                key={item.id}
              />
            })
          : <div className="intro-checkout-delivery__empty-title-wrapper title-wrapper">
              <Link 
                className="intro-checkout-delivery__empty-title title title--small"
                to={`${prefix}goods`}
              >
                <span>{checkoutEmptyListTitle}</span>
                <span>{checkoutEmptyListTitle}</span>
              </Link>
            </div>
      }
    </SimpleBar>
  )
}

export default DeliveryList