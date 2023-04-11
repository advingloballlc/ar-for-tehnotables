import React from 'react'

import sprite from '../../icons/sprite.svg'

const CartBotList = ({ additionalInfo }) => {
  return (
    <ul className="cart-bot__list">
      { additionalInfo.map((item, index) => {
        return (
          <li className="cart-bot__item" key={index++}>
            <span className="cart-bot__item-icon">
              <svg>
                <use href={`${sprite}#check`}/>
              </svg>
            </span>
            <span className="cart-bot__item-text">{item.text}</span>
          </li>
        )
      }) }
    </ul>
  )
}

export default CartBotList