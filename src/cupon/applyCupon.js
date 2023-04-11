import api from '../api/api'

export const applyCupon = code => {
  return api({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/cart/coupons/apply`,
    data: {
      code: code
    }
  })
}