import * as axios from 'axios'

export const registerUser = (name, email, password) => {  
  return axios({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/register`,
    data: {
      email: email,
      password: password,
      first_name: name
    }
  })
}