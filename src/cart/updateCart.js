import api from '../api/api'

export const updateCart = (key, quantity, lang) => {
  return api({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/cart/update-item`,
    headers: {
      'X-Language': lang
    },
    data: {
      key: key,
      quantity: quantity
    }
  })
}