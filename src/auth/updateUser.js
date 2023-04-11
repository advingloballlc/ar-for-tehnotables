import * as axios from 'axios'

export const updateUser = (id, firstName, lastName, middleName, phone, email, birthday, password) => {
  return axios({
    method: 'put',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/wc/v3/customers/${id}?consumer_key=${process.env.GATSBY_WOO_CONSUMER_KEY}&consumer_secret=${process.env.GATSBY_WOO_CONSUMER_SECRET}`,
    data: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      billing: {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        email: email,
      },
      shipping: {
        first_name: firstName,
        last_name: lastName,
      },
      meta_data: [
        {
          key: 'middle_name',
          value: middleName
        },
        {
          key: 'birthday',
          value: birthday
        }
      ]
    }
  })
}