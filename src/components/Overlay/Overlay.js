import React from 'react'

import './Overlay.scss'

const Overlay = (props) => {
  return (
    <div
      className={`overlay ${!props.isMeuOpen && (props.isItemHover || props.isSearchOpen || props.isCartOpen || props.isContactsOpen) ? 'open' : ''}`}
      onClick={e => {
        props.closeSearch(e)
        props.closeCart()
      }}
    />
  )
}

export default Overlay