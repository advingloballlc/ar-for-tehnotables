import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../../context/PrefixProvider'

const SearchItem = ({ id, title, price, slug, imgSrc, variability, changeVariability }) => {
  let prefix = useContext(PrefixContext)
  
  return (
    <div className="search-intro__item search-intro-item sample-item">
      <div className="search-intro-item__inner sample-item__inner">
        <Link className="search-intro-item__link sample-item__link" to={`${prefix}${slug}`}/>
        <div className="search-intro-item__preview sample-item__preview">
          <img src={imgSrc} alt={title} width={545} height={490}/>
          {
            variability && variability.length !== 0 && <div className="search-intro-item__variability sample-item__variability">
              {
                variability.map(item => {
                  return (
                    <div
                      className={`search-intro-item__variability-elem sample-item__variability-elem ${item.isActive ? 'active' : ''}`}
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
        <div className="search-intro-item__title sample-item__title">{title}</div>
        <div className="search-intro-item__price sample-item__price">{price} uah</div>
      </div>
    </div>
  )
}

export default SearchItem