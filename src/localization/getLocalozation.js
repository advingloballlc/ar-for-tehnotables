import * as axios from 'axios'

export const getLocalozation = () => {
  return axios({
    method: 'get',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/geolocate`
  })
}