import * as axios from 'axios'

export const resetPassword = (id, key, password) => {
  return axios({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/reset_password`,
    data: {
      id: parseInt(id),
      key: key,
      password: password
    }
  })
}