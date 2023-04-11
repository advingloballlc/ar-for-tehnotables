import * as axios from 'axios'

export const loginUser = (email, password) => {
  return axios({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/login`,
    data: {
      email: email,
      password: password
    }
  })
}