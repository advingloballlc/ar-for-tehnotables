import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from './../../../context/PrefixProvider'

const MainOrderContent = ({ aboutTablesPageLink, aboutTablesText, aboutTablesTitle }) => {
  let prefix = useContext(PrefixContext)
  
  return (
    <div className="main-order__content main-order-content">
      <h2 className="main-order-content__title title title--small" dangerouslySetInnerHTML={{ __html: aboutTablesTitle }} />
      <p className="main-order-content__desc">{aboutTablesText}</p>
      <Link className="main-order-content__btn btn btn--big" to={`${prefix}height-adjustable-tables`}>
        <span className="main-order-content__btn-inner btn__inner">{aboutTablesPageLink.title}</span>
      </Link>
    </div>
  )
}

export default MainOrderContent