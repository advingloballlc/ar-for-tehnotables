import React from 'react'

const MenuSearch = ({ toggleSearchOpen, searchBtn }) => {
  return (
    <div
      className="menu__search menu-search"
      onClick={toggleSearchOpen}
    >
      {searchBtn}
    </div>
  )
}

export default MenuSearch