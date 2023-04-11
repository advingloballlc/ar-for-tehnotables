import * as axios from 'axios'

export const socialAuth = (email, firstName, lastName) => {
  return axios({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/social_auth`,
    data: {
      email: email,
      first_name: firstName,
      last_name: lastName,
    }
  })
}