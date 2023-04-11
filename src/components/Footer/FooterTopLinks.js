import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixProvider'

const FooterTopLinks = ({ catalog, support, explore, categoryList }) => {
  let prefix = useContext(PrefixContext)
  
  return (
    <React.Fragment>
      <div className="footer-top__links footer-top__links--catalog">
        <div className="footer-top__title footer-title local-title local-title--grey">{catalog.menuTitle}</div>
        <ul className="footer-top__list footer-list">
          { categoryList.map(item => {
            if (item.image) {
              return (
                <li className="footer-list__item" key={item.id}>
                  <Link 
                    className="footer-list__link" 
                    activeClassName="active" 
                    to={`${prefix}${item.slug}`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            }
          }) }
        </ul>
      </div>
      <div className="footer-top__links footer-top__links--support">
        <div className="footer-top__title footer-title local-title local-title--grey">{support.menuTitle}</div>
        <ul className="footer-top__list footer-list">
        { support.menuList.map((item, index) => {
            return (
              <li className="footer-list__item" key={index++}>
                <Link 
                  className="footer-list__link" 
                  activeClassName="active" 
                  partiallyActive={true} 
                  to={`${prefix}${item.itemLink}`}
                >
                  {item.itemName}
                </Link>
              </li>
            )
          }) }
        </ul>
      </div>
      <div className="footer-top__links footer-top__links--explore">
        <div className="footer-top__title footer-title local-title local-title--grey">{explore.menuTitle}</div>
        <ul className="footer-top__list footer-list">
        { explore.menuList.map((item, index) => {
            return (
              <li className="footer-list__item" key={index++}>
                <Link 
                  className="footer-list__link" 
                  activeClassName="active" 
                  partiallyActive={true}  
                  to={`${prefix}${item.itemLink}`}
                >
                  {item.itemName}
                </Link>
              </li>
            )
          }) }
        </ul>
      </div>
    </React.Fragment>
  )
}

export default FooterTopLinks