import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Menu.scss'

import SubMenu from './SubMenu'
import HeaderSlider from '../Header/HeaderSlider'
import MenuSwitcher from './MenuSwitcher'
import MenuSearch from './MenuSearch'
import MenuControls from './MenuControls'

import { PrefixContext } from '../../context/PrefixProvider'

import sprite from '../../icons/sprite.svg'

const Menu = (props) => {
  let prefix = useContext(PrefixContext)

  const [ isMobile, setIsMobile ] = useState(false)
  const [ iSmallMobile, setIsSmallMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => setIsMobile(false),
      '(max-width: 1024px)': () => setIsMobile(true),
      '(min-width: 481px)': () => setIsSmallMobile(false),
      '(max-width: 480px)': () => setIsSmallMobile(true)
    })
  }, [])

  return (
    <nav className={`menu ${props.isMeuOpen ? 'open' : ''}`}>
      { iSmallMobile && <MenuControls 
        prefix={prefix} 
        isCartOpen={props.isCartOpen} 
        cartOpen={props.cartOpen}
        cartCount={props.cartCount}
      /> }
      { iSmallMobile && <MenuSearch 
        toggleSearchOpen={props.toggleSearchOpen}
        searchBtn={props.searchBtn}
      /> }
      <ul className="menu__list menu-list">
        { props.menu.mainMenu.map((item, index) => {
            return (
              <li
                className={`menu-list__item ${item.submenu ? 'menu-list__item--has-children' : ''}`}
                onMouseEnter={() => item.submenu && props.setIsItemHover(true)}
                onMouseLeave={() => item.submenu && props.setIsItemHover(false)}
                key={index++}
              >
                <Link
                  to={`${prefix}${item.itemSlug}`}
                  className="menu-list__link"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  {item.itemName}
                  <div className="menu-list__border" />
                </Link>
                { item.submenu && <div className="menu-list__icon" onClick={props.openSubmenu}>
                  <svg><use href={`${sprite}#header-arrow`} /></svg>
                </div> }
                { item.submenu && <SubMenu 
                  closeSubmenu={props.closeSubmenu} 
                  backBtn={props.menu.mobileMenuControls.back} 
                  submenuList={item.submenu}
                /> }
              </li>
            )
        }) }
      </ul>
      { iSmallMobile && <MenuSwitcher /> }
      { isMobile && <HeaderSlider slider={props.slider} /> }
    </nav>
  )
}

export default React.memo(Menu)