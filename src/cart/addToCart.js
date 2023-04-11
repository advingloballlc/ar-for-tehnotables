import api from '../api/api'

export const addToCart = (id, quantity = 1, variationId, colorCode, lang) => {
  if (variationId) {
    return api({
      method: 'post',
      url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/cart/add-item`,
      headers: {
        'X-Language': lang,
      },
      data: {
        id: id,
        quantity: quantity,
        variation: variationId,
        custom_color: colorCode,
      }
    })
  } else {
    return api({
      method: 'post',
      url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/cart/add-item`,
      headers: {
        'X-Language': lang,
      },
      data: {
        id: id,
        quantity: quantity,
        custom_color: colorCode,
      }
    })
  }
}