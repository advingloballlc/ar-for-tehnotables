import React, { useContext } from 'react'
import { Link } from 'gatsby'

import './Logo.scss'

import { PrefixContext } from '../../context/PrefixProvider'

import logo1 from '../../images/logo.svg'

const Logo = ({ className, logo }) => {
  let prefix = useContext(PrefixContext)

  return (
    <div className={`logo ${className}`}>
      <Link className="logo__link" to={prefix === '/' ? prefix : prefix.slice(0, -1)}>
        <img src={logo ? logo.sourceUrl : logo1} alt="Logo" width={180} height={25} loading="eager" />
      </Link>
    </div>
  )
}

export default Logo