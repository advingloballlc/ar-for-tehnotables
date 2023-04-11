import React, { useContext } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { PrefixContext } from '../../context/PrefixProvider'

import { addToCart } from '../../cart/addToCart'
import { getCart } from '../../cart/getCart'

import { setCookie } from '../../utils/setCookie'
import { showCartModal } from '../../utils/showCartModal'
import { showErrModal } from '../../utils/showErrModal'

import { isBrowser } from '../../utils/isBrowser'

const DiscountContent = ({ 
  title, 
  desc, 
  btn,
  btnAdded,
  productBundleInfo,
  isAddingToCart, 
  setIsAddingToCart,
  isAddedToCart,
  setIsAddedToCart
}) => {
  let prefix = useContext(PrefixContext)

  const addToCartHandler = () => {
    NProgress.start()
    setIsAddingToCart(true)
    addToCart(productBundleInfo.databaseId, 1, undefined, undefined)
    .then(() => {
      getCart()
        .then(({ data }) => {
          setCookie('cart_count', data.total_items, {secure: true, 'max-age': 172800})
          setIsAddingToCart(false)
          NProgress.done()
          showCartModal()
          setIsAddedToCart(data.items.some(item => item.product_id === productBundleInfo.databaseId))
          isBrowser() && window.fbq('track', 'AddToCart')
        })
    })
    .catch(() => {
      showErrModal()
      NProgress.done()
      setIsAddingToCart(false)
    })
  }


  return (
    <div className="discount__content discount-content">
      <div className="discount-content__title title title--big">{title}</div>
      <p className="discount-content__desc">{desc}</p>
      <div className="discount-content__inner">
        <div className="discount-content__sale">
          -<span>{100 - (parseInt(productBundleInfo.salePrice) * 100) / parseInt(productBundleInfo.regularPrice)}</span>%
        </div>
        { productBundleInfo.bundleItems.nodes.map(product => {
          const image = getImage(product.image.localFile)
          
          return (
            <div className="discount-content__item sample-item" key={product.databaseId}>
              <div className="discount-content__item-inner sample-item__inner">
                <Link className="discount-content__item-link sample-item__link" to={`${prefix}${product.slug}`} />
                { product.image && <div className="discount-content__item-preview sample-item__preview">
                  <GatsbyImage image={image} alt={product.name} loading="lazy" />
                </div> }
              </div>
            </div>
          )
        }) }
      </div>
      <div className="discount-content__products-title">{productBundleInfo.name}</div>
      <div className="discount-content__products-price">
        <div className="discount-content__products-price--old">{productBundleInfo.regularPrice} uah</div>
        <div className="discount-content__products-price--new">{productBundleInfo.salePrice} uah</div>
      </div>
      <div className="discount-content__btn-wrapper">
        <div className="discount-content__btn-borders">
          <button 
            className={`discount-content__btn btn btn--small ${isAddingToCart ? 'disabled' : ''}`}
            onClick={addToCartHandler}
          >
            <span className={`discount-content__btn-inner btn__inner ${isAddedToCart ? 'fade' : ''}`}>{btn}</span>
            <span className={`discount-content__btn-inner btn__inner ${!isAddedToCart ? 'fade' : ''}`}>{btnAdded}</span>
          </button>
        </div>
        <span className="discount-content__btn-border discount-content__btn-border--long" />
        <span className="discount-content__btn-border discount-content__btn-border--short" />
        <span className="discount-content__btn-border discount-content__btn-border--short" />
      </div>
    </div>
  )
}

export default DiscountContent