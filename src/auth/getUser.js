import * as axios from 'axios'

export const getUser = id => {
  return axios({
    method: 'get',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/wc/v3/customers/${id}?consumer_key=${process.env.GATSBY_WOO_CONSUMER_KEY}&consumer_secret=${process.env.GATSBY_WOO_CONSUMER_SECRET}`
  })
}