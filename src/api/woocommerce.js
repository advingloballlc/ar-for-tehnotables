import * as axios from 'axios'

export const getWooCategories = lang => {
  return axios({
    method: 'get',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/wc/v3/products/categories?&lang=${lang}&consumer_key=${process.env.GATSBY_WOO_CONSUMER_KEY}&consumer_secret=${process.env.GATSBY_WOO_CONSUMER_SECRET}`,
  })
}


export const createReview = (productId, review, reviewer, reviewerEmail, rating) => {
  return axios({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/wc/v3/products/reviews?consumer_key=${process.env.GATSBY_WOO_CONSUMER_KEY}&consumer_secret=${process.env.GATSBY_WOO_CONSUMER_SECRET}`,
    data: {
      product_id: productId,
      review: review,
      reviewer: reviewer,
      reviewer_email: reviewerEmail,
      rating: rating,
      status: 'hold'
    }
  })
}