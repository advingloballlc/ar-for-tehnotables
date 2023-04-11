import React from 'react'

import IntroListItem from './introListItem'

const IntroList = ({ posts, blogCategoriesTitle }) => {  
  return (
    <div className="intro-blog__inner">
      {
        posts && posts.length !== 0 
          ? posts.map((post, index) => {
              return <IntroListItem
                imgSrc={post.featuredImage.node.localFile}
                slug={post.slug}
                date={post.date}
                category={post.terms.nodes[0].name}
                title={post.title}
                key={index++}
              />
            })
          : <div className="intro-blog__err-title-wrapper title-wrapper">
              <div className="intro-blog__err-title title title--small">{blogCategoriesTitle.blogErrTitle}</div>
            </div>
      }
    </div>
  )
}

export default IntroList