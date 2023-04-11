import api from '../api/api'

export const getCart = lang => {
  return api({
    method: 'get',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/cart`,
    headers: {
      'X-Language': lang
    },
  })
}