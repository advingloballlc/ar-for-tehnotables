import * as axios from 'axios'

export const forgotPassword = email => {
  return axios({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/forgot_password`,
    data: {
      email: email
    }
  })
}