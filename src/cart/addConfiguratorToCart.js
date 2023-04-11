import api from '../api/api'

export const addConfiguratorToCart = (frame, tabletop, options, totalPrice, counter, message, lang) => {
  return api({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/cart/add-configurable`,
    headers: {
      'X-Language': lang,
    },
    data: {
      frame: frame,
      tabletop: tabletop,
      options: options,
      price: totalPrice.toString(),
      quantity: counter.toString(),
      note: message
    }
  })
}