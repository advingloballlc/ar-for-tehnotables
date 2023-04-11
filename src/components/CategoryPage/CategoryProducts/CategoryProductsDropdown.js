import React from 'react'

import Logo from '../../Logo/Logo'

import sprite from '../../../icons/sprite.svg'

const CategoryProductsDropdown = ({
  secSortList,
  isOpenDropdown,
  setIsOpenDropdown,
  changeSort,
  isMobileSortOpen,
  closeMobileSort,
  filterProductFields,
  isEmtyFilterList
}) => {
  return (
    <div className={`category-products__dropdown category-products-dropdown dropdown ${isEmtyFilterList ? 'disabled' : ''} ${isMobileSortOpen ? 'open' : ''}`}>
      <div className="category-products-dropdown__top category-products__mobile-top">
        <button
          className="category-products-dropdown__close category-products__mobile-close"
          onClick={closeMobileSort}
        >
          <span className="category-products-dropdown__close-icon category-products__mobile-close-icon"><span /><span /></span>
          <span className="category-products-dropdown__close-text category-products__mobile-close-text">
            {filterProductFields.filterCloseBtn}
          </span>
        </button>
        <Logo className="logo-header" />
      </div>
      <div className="category-products-dropdown__title category-products__mobile-title">{filterProductFields.sortTitle}</div>
      <div
        className={`category-products-dropdown__current dropdown__current ${isOpenDropdown ? 'open' : ''}`}
        onClick={() => setIsOpenDropdown(prev => !prev)}
      >
        <span className="category-products-dropdown__text dropdown__text">
          { secSortList.some(item => item.isActive) ? secSortList.filter(item => item.isActive)[0].name : filterProductFields.sortTitle }
        </span>
        <span className="category-products-dropdown__icon dropdown__icon">
          <svg>
            <use href={`${sprite}#header-arrow`} />
          </svg>
        </span>
      </div>
      <div className={`category-products-dropdown__list dropdown__list ${isOpenDropdown ? 'open' : ''}`}>
        {
          secSortList.map(item => {
            return (
              <div
                className={`category-products-dropdown__item dropdown__item ${item.isActive ? 'active' : ''}`}
                onClick={e => changeSort(item.id, e, item.slug)}
                key={item.id}
              >
                <div className="category-products-dropdown__item-icon">
                  <svg><use href={`${sprite}#sort`} /></svg>
                </div>
                {item.name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CategoryProductsDropdown