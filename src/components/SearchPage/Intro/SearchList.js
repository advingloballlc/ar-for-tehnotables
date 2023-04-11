import React from 'react'

import SearchItem from './SearchItem'

const SearchList = ({ list, changeVariability }) => {
  return (
    list.length !== 0 && <div className="search-intro__inner-wrapper">
      <div className="search-intro__inner">
        {
          list.map(item => {
            return <SearchItem
              id={item.id}
              title={item.title}
              price={item.price}
              slug={item.slug}
              imgSrc={item.imgSrc}
              variability={item.variability}
              changeVariability={changeVariability}
              key={item.id}
            />
          })
        }
      </div>
    </div>
  )
}

export default SearchList