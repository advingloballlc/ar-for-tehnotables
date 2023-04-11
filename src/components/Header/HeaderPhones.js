import React from 'react'

import { getHrefPhone } from '../../utils/getHrefPhone'
import { phoneGoal } from '../../utils/phoneGoal'

const HeaderPhones = ({ phones }) => {
  return (
    <div className="header__top-phones header-phones">
      { phones.map((phone, index) => {
        return (
          <a 
            className="header-phones__item" 
            href={getHrefPhone(phone.number)} key={index++}
            onClick={() => phoneGoal(phone.number)}
          >
            {phone.number}
          </a>
        )
      }) }
    </div>
  )
}

export default HeaderPhones