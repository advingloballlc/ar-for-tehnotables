import React from 'react'

import mastercard from '../../images/mastercard.svg'
import visa from '../../images/visa.svg'

const FooterPay = () => {
  return (
    <div className="footer-top__pay footer-pay">
      <div className="footer-pay__item">
        <img src={mastercard} alt="Mastercard" width={26} height={21} loading="lazy" />
      </div>
      <div className="footer-pay__item">
        <img src={visa} alt="Visa" width={38} height={13} loading="lazy" />
      </div>
    </div>
  )
}

export default FooterPay