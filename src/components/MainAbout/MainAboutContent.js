import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from './../../context/PrefixProvider'

const MainAboutContent = ({ isBtn, title, desc, link, mainHeading }) => {
  let prefix = useContext(PrefixContext)
  
  return (
    <div className="main-about__content">
      {
        mainHeading
          ? <h1 className="main-about__title title title--small">{title}</h1>
          : <div className="main-about__title title title--small">{title}</div>
      }
      
      <p className="main-about__desc">{desc}</p>
      { isBtn && <Link className="main-about__btn btn btn--big" to={`${prefix}about-us`}>
        <span className="main-about__btn-inner btn__inner">{link.title}</span>
      </Link> }
    </div>
  )
}

export default MainAboutContent