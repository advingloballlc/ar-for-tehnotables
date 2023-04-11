import api from '../api/api'


export const removeFromCart = (key, lang) => {
  return api({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/cart/remove-item`,
    headers: {
      'X-Language': lang
    },
    data: {
      key: key
    }
  })
}