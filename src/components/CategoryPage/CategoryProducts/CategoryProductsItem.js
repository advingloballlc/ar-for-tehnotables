import React, { useContext } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { PrefixContext } from '../../../context/PrefixProvider'

const CategoryProductsItem = ({ 
  id, 
  title, 
  price, 
  slug, 
  imgSrc, 
  isChanged, 
  variability, 
  changeVariability 
}) => {
  let prefix = useContext(PrefixContext)
  const image = getImage(imgSrc)

  return (
    <div className="category-products-list__item sample-item">
      <div className="category-products-list__item-inner sample-item__inner">
        <Link className="category-products-list__item-link sample-item__link" to={`${prefix}${slug}`}/>
        <div className="category-products-list__item-preview sample-item__preview">
          { 
            isChanged
              ? <img src={imgSrc} alt={title} width={545} height={490}/>
              : <GatsbyImage image={image} alt={title} loading="eager" />
          }
          {
            variability && variability.length !== 0 && <div className="category-products-list__item-variability sample-item__variability">
              {
                variability.map(item => {
                  return (
                    <div
                      className={`category-products-list__item-variability-elem sample-item__variability-elem ${item.isActive ? 'active' : ''}`}
                      data-img-src={item.image.localFile.publicURL}
                      key={item.id}
                      onClick={e => changeVariability(id, item.id, e)}
                    >
                      <span style={{
                        backgroundColor: item.color[1], 
                        borderColor: item.color[1] === '#ffffff' ? '#ccc' : item.color[1]
                      }} />
                    </div>
                  )
                })
              }
            </div>
          }
        </div>
        <div className="category-products-list__item-title sample-item__title">{title}</div>
        <div className="category-products-list__item-price sample-item__price">{price} UAH</div>
      </div>
    </div>
  )
}

export default CategoryProductsItem