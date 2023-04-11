import React  from 'react'

import IntroCategoriesItem from './IntroCategoriesItem'

const IntroCategories = ({ 
  categories, 
  toggleIsActive, 
  blogCategoriesTitle 
}) => {
  return (
    <div className="intro-blog__categories">
      <div className="intro-blog__categories-title">{blogCategoriesTitle.blogCatTitle}</div>
      <div className="intro-blog__categories-inner">
        {
          categories.map(category => {
            return <IntroCategoriesItem
              id={category.id}
              slug={category.slug}
              isActive={category.isActive}
              name={category.name}
              count={category.count}
              toggleIsActive={toggleIsActive}
              key={category.id}
            />
          })
        }
      </div>
    </div>
  )
}

export default IntroCategories