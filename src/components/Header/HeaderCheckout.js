import React from 'react'

import Logo from '../Logo/Logo'
import HeaderSwitcher from './HeaderSwitcher'
import HeaderPhones from './HeaderPhones'

const HeaderCheckout = ({ logo, phones }) => {
  return (
    <div className="header__checkout header-checkout">
      <div className="container">
        <div className="header-checkout__inner">
          <Logo className='logo-header' logo={logo} />
          <HeaderSwitcher />
          <HeaderPhones phones={phones} />
        </div>
      </div>
    </div>
  )
}

export default HeaderCheckout