import React from 'react'

import CategoryProductsDropdown from './CategoryProductsDropdown'
import CategoryProductsItem from './CategoryProductsItem'
import CategoryProductsButtons from './CategoryProductsButtons'
import Pagination from '../../Pagination/Pagination'

const CategoryProductsList = ({
  list,
  secSortList,
  isOpenDropdown,
  setIsOpenDropdown,
  changeSort,
  changeVariability,
  isMobileFilterOpen,
  openMobileFilter,
  isMobileSortOpen,
  openMobileSort,
  closeMobileSort,
  filterProductFields,
  pageInfo,
  slug,
  isEmtyFilterList,
  isFilteredProducts
}) => {
  return (
    <div className="category-products__list-wrapper category-products-list-wrapper">
      <CategoryProductsDropdown
        secSortList={secSortList}
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
        changeSort={changeSort}
        isMobileSortOpen={isMobileSortOpen}
        closeMobileSort={closeMobileSort}
        filterProductFields={filterProductFields}
        isEmtyFilterList={isEmtyFilterList}
      />
      <CategoryProductsButtons
        isMobileFilterOpen={isMobileFilterOpen}
        openMobileFilter={openMobileFilter}
        isMobileSortOpen={isMobileSortOpen}
        openMobileSort={openMobileSort}
        filterProductFields={filterProductFields}
        isEmtyFilterList={isEmtyFilterList}
        slug={slug}
      />
      {
        !isEmtyFilterList  
          ? <div className="category-products__list category-products-list">
              {
                list.map(item => {
                  return <CategoryProductsItem
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    slug={item.slug}
                    imgSrc={item.imgSrc}
                    isChanged={item.isChanged}
                    variability={item.variability}
                    changeVariability={changeVariability}
                    key={item.id}
                  />
                })
              }
            </div>
          : <div className="category-products-list__err-wrapper title-wrapper">
              <div className="category-products-list__err-title title title--small">Тут поки немає товарів</div>
            </div>
      }
      { pageInfo.pageCount > 1 && !isFilteredProducts && <Pagination 
          className="category-products-pagination"
          pageInfo={pageInfo} 
          isLoading={false}
          slug={slug} /> }
    </div>
  )
}

export default CategoryProductsList