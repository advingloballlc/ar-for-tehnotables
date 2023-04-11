import React, { useRef, useEffect } from 'react'

import Logo from '../../Logo/Logo'

import { checkSidebarHeight } from './../../../utils/checkSidebarHeight'

const CategoryProductsFilter = ({
  colorFilter,
  materialFilter,
  choice,
  toggleColorFilter,
  toggleMaterialFilter,
  deleteChoice,
  isMobileFilterOpen,
  closeMobileFilter,
  filterProductFields,
  logo,
  applyFilter,
  clearFilter
}) => {
  const sidebar = useRef(null)
  
  useEffect(() => checkSidebarHeight(sidebar))
  
  return (
    <aside className={`category-products__filter category-products-filter ${isMobileFilterOpen ? 'open' : ''}`}>
      <div className="category-products-filter__inner" ref={sidebar}>
        <div className="category-products-filter__top category-products__mobile-top">
          <button
            className="category-products-filter__close category-products__mobile-close"
            onClick={closeMobileFilter}
          >
            <span className="category-products-filter__close-icon category-products__mobile-close-icon"><span /><span /></span>
            <span className="category-products-filter__close-text category-products__mobile-close-text">{filterProductFields.filterCloseBtn}</span>
          </button>
          <Logo className="logo-header" logo={logo} />
        </div>
        <div className="category-products-filter__title category-products__mobile-title">{filterProductFields.filterTitle}</div>
        <div className="category-products-filter__overflow">
          <div className="category-products-filter__items">
          <div className="category-products-filter__item">
            <div className="category-products-filter__item-title local-title local-title--grey">
              {filterProductFields.filterColorTitle}
            </div>
            <div className="category-products-filter__item-inner">
              {
                colorFilter.map(item => {
                  return (
                    <div className="category-products-filter__item-elem" key={item.id}>
                      <div
                        className={`category-products-filter__item-elem-inner ${item.isActive ? 'active' : ''}`}
                        onClick={() => toggleColorFilter(item.id)}
                      >
                        <span style={{ backgroundColor: item.bgColor, borderColor: item.borderColor }} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="category-products-filter__item">
            <div className="category-products-filter__item-title local-title local-title--grey">
              {filterProductFields.filterMaterialTitle}
            </div>
            <div className="category-products-filter__item-inner">
              {
                materialFilter.map(item => {
                  return (
                    <div className="category-products-filter__item-elem" key={item.id}>
                      <div
                        className={`category-products-filter__item-elem-inner ${item.isActive ? 'active' : ''}`}
                        onClick={() => toggleMaterialFilter(item.id)}
                      >
                        <div className="category-products-filter__item-elem-title">{item.name}</div>
                        { item.desc && <p className="category-products-filter__item-elem-desc">{item.desc}</p> }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
          {
            choice.length !== 0 && <div className="category-products-filter__choice">
              <div className="category-products-filter__choice-title local-title local-title--grey">
                {filterProductFields.filterChoiceTitle}
              </div>
              <div className="category-products-filter__choice-inner">
                {
                  choice.map(item => {
                    return (
                      <div className="category-products-filter__choice-elem" key={item.id}>
                        <div className="category-products-filter__choice-elem-inner">
                          <p className="category-products-filter__choice-elem-title">{item.name}</p>
                          <div
                            className="category-products-filter__choice-elem-icon"
                            onClick={() => deleteChoice(item.id)}
                          >
                            <span/><span/>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          }
        </div>
        <div className="category-products-filter__btns">
          <div className="category-products-filter__btn-wrapper">
            <button
              className={`category-products-filter__btn category-products-filter__btn--apply form-btn ${choice.length === 0 ? 'disable' : ''}`}
              type="button"
              onClick={applyFilter}
            >
              <span>{filterProductFields.clearApplyBtn}</span>
              <span>{filterProductFields.clearApplyBtn}</span>
            </button>
          </div>
          <div className="category-products-filter__btn-wrapper">
            <button
              className={`category-products-filter__btn category-products-filter__btn--cancel form-btn ${choice.length === 0 ? 'disable' : ''}`}
              type="button"
              onClick={clearFilter}
            >
              <span>{filterProductFields.clearFilterBtn}</span>
              <span>{filterProductFields.clearFilterBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default CategoryProductsFilter