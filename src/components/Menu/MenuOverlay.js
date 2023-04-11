import React from 'react'

import './Menu.scss'

const MenuOverlay = ({ isMeuOpen, toggleMenuOpen }) => {
  return (
    <div
      className={`menu-overlay ${isMeuOpen ? 'open' : ''}`}
      onClick={toggleMenuOpen}
    />
  )
}

export default MenuOverlay