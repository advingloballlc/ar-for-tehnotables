import api from '../api/api'
import { getCookie } from '../utils/getCookie'

export const checkout = (
  firstName, 
  lastName, 
  phone, 
  email, 
  delivery, 
  payment,
  store,
  branchRegion,
  branchCity,
  branchWarehouse,
  street,
  build,
  apart,
  address,
  lang
) => {
  let deliveryObj

  switch (delivery) {
    case 'local_pickup': {
      deliveryObj = {
        store: store
      }

      break
    }
    case 'nova_poshta_department': {
      deliveryObj = {
        branchRegion: branchRegion,
        branchCity: branchCity,
        branchWarehouse: branchWarehouse
      }

      break
    }
    case 'nova_poshta_courier': {
      deliveryObj = {
        branchRegion: branchRegion,
        branchCity: branchCity,
        street: street,
        build: build,
        apart: apart
      }

      break
    }
    case 'international_delivery': {
      deliveryObj = {
        address: address
      }

      break
    }
  }

  return api({
    method: 'post',
    url: `${process.env.GATSBY_WP_BASE_URL}/wp-json/tehnotable/v1/checkout`,
    headers: {
      'X-Language': lang,
    },
    data: {
      user_id: parseInt(getCookie('user_id')),
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      delivery: delivery,
      payment: payment,
      ...deliveryObj
    }
  })
}