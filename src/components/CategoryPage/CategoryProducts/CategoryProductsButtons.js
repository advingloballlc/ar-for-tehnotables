import React from 'react'

import sprite from '../../../icons/sprite.svg'

const CategoryProductsButtons = ({ 
  isMobileFilterOpen, 
  openMobileFilter, 
  isMobileSortOpen, 
  openMobileSort, 
  filterProductFields,
  isEmtyFilterList,
  slug
}) => {
  return (
    <div className={`category-products__btns category-products-btns ${slug !== 'height-adjustable-tables' ? 'single' : ''}`}>
      { slug === 'height-adjustable-tables' && <div
        className={`category-products-btns__item ${isMobileFilterOpen ? 'active' : ''}`}
        onClick={openMobileFilter}
      >
        <div className="category-products-btns__item-inner">
          <div className="category-products-btns__item-icon"><svg><use href={`${sprite}#filter`} /></svg></div>
          <div className="category-products-btns__item-text">{filterProductFields.filterTitle}</div>
        </div>
      </div> }
      <div
        className={`category-products-btns__item ${isEmtyFilterList ? 'disabled' : ''} ${isMobileSortOpen ? 'active' : ''}`}
        onClick={openMobileSort}
      >
        <div className="category-products-btns__item-inner">
          <div className="category-products-btns__item-icon"><svg><use href={`${sprite}#sort`} /></svg></div>
          <div className="category-products-btns__item-text">{filterProductFields.sortTitle}</div>
        </div>
      </div>
    </div>
  )
}

export default CategoryProductsButtons