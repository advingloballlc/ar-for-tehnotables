import React from 'react'

import CategoryItem from './CategoryItem'

const CategoryList = ({ list }) => {
  return (
    <div className="category__inner">
      {
        list.map(item => item.node.image && <CategoryItem 
          imgSrc={item.node.image.localFile} 
          name={item.node.name} 
          slug={item.node.slug} 
          key={item.node.databaseId} 
        /> )
      }
    </div>
  )
}

export default CategoryList

