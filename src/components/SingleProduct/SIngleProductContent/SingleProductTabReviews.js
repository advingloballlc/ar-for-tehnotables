import React from 'react'

import sprite from '../../../icons/sprite.svg'

const SingleProductTabReviews = ({ 
  reviewBtn, 
  reviews, 
  reviewForm,
  reviewCount
}) => {

  return (
    <div className="single-product-content-tabs__body-reviews">
      { 
        reviews.nodes.length !== 0
         ? reviews.nodes.map(review => {
            if (review.author.node.name.toLowerCase() !== 'expert tehnotable') {
              return (
                <div 
                  className="single-product-content-tabs__body-reviews-item"
                  itemprop="review" 
                  itemscope='' 
                  itemtype="http://schema.org/Review"
                  key={review.databaseId}
                >
                  <div className="single-product-content-tabs__body-reviews-info">
                    <div className="single-product-content-tabs__body-reviews-side">
                      <div 
                        className="single-product-content-tabs__body-reviews-name"
                        itemprop="author"
                      >
                        {review.author.node.name}
                      </div>
                      <div 
                        className="single-product-content-tabs__body-reviews-rating" 
                        itemprop="reviewRating" 
                        itemscope='' 
                        itemtype="http://schema.org/Rating"
                        data-rating={review.rating}
                      >
                        <meta itemprop="worstRating" content="1" />
                        <span itemprop="ratingValue" style={{ display: 'none' }}>{review.rating}</span>
                        <span itemprop="bestRating" style={{ display: 'none' }}>5</span>
                        { new Array(5).fill('', 0, 5).map(() => {
                          return <svg><use href={`${sprite}#star`} /></svg>
                        }) }
                      </div>
                    </div>
                    <div className="single-product-content-tabs__body-reviews-side">
                      <div 
                        className="single-product-content-tabs__body-reviews-date"
                        itemprop="datePublished" 
                        content={review.date}
                      >
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <article 
                    className="single-product-content-tabs__body-reviews-text article"
                    itemprop="reviewBody"
                    dangerouslySetInnerHTML={{ __html: review.content }} 
                  />
                  { review.replies.nodes.length !== 0 && <div className="single-product-content-tabs__body-reviews-replies">
                    { review.replies.nodes.map(reply => {
                      return (
                        <div className="single-product-content-tabs__body-reviews-reply" key={reply.id}>
                          <div className="single-product-content-tabs__body-reviews-info">
                            <div className="single-product-content-tabs__body-reviews-side">
                              <div className="single-product-content-tabs__body-reviews-name">
                                {reply.author.node.name}
                              </div>
                            </div>
                            <div className="single-product-content-tabs__body-reviews-side">
                              <div className="single-product-content-tabs__body-reviews-date">
                                {reply.date}
                              </div>
                            </div>
                          </div>
                          <article 
                            className="single-product-content-tabs__body-reviews-text article"
                            dangerouslySetInnerHTML={{ __html: reply.content }} 
                          />
                        </div>
                      )
                    }) }
                  </div> }
                </div>
              )
            }
          }) 
         : <div className="single-product-content-tabs__body-reviews-err">{reviewForm.reviewErrMessage}</div>
      }
      {
        reviews.nodes.length !== 0 &&
          <div 
            itemprop="aggregateRating" 
            itemscope='' 
            itemtype="https://schema.org/AggregateRating"
            style={{ display: 'none', }}
          >
            <span itemprop="reviewCount">{reviewCount}</span>
            <span itemprop="ratingValue">
              {(reviews.nodes.filter(review => review.author.node.name.toLowerCase() !== 'expert tehnotable').reduce((acc, cur) => acc + cur.rating, 0)) / reviewCount}
            </span>
          </div>
      }
      <div className="single-product-content-tabs__body-btn-wrapper">
        <button
          className="single-product-content-tabs__body-btn form-btn"
          type="button"
          data-fancybox="comment"
          data-src="#review-modal"
        >
          <span>{reviewBtn}</span>
          <span>{reviewBtn}</span>
        </button>
      </div>
    </div>
  )
}

export default SingleProductTabReviews