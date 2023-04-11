import * as axios from 'axios'

export const sendForm = (name, email, phone, message) => {
  return axios({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/contact`,
    data: {
      name: name,
      email: email,
      phone: phone,
      message: message
    }
  })
}

export const newsSubscribe = email => {
  return axios({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/subscription`,
    data: {
      email: email
    }
  })
}

export const newsUnsubscribe = email => {
  return axios({
    method: 'delete',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/subscription`,
    data: {
      email: email
    }
  })
}