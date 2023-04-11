import React from 'react'

const CategoryProductsOverlay = ({ isMobileFilterOpen, closeMobileFilter, isMobileSortOpen, closeMobileSort }) => {
  return (
    <div
      className={`category-overlay ${isMobileFilterOpen || isMobileSortOpen ? 'open' : ''}`}
      onClick={() => {
        closeMobileFilter()
        closeMobileSort()
      }}
    />
  )
}

export default CategoryProductsOverlay