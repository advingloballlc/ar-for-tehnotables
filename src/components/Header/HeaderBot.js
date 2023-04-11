import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Burger from '../Burger/Burger'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import SearchPanel from '../SearchPanel/SearchPanel'
import ContactsPanel from '../ContactsPanel/ContactsPanel'
import HeaderControls from './HeaderControls'
import MenuOverlay from '../Menu/MenuOverlay'

const HeaderBot = (props) => {
  const [ isMobile, setIsMobile ] = useState(false)
  const [ isSmallMobile, setIsSmallMobile ] = useState(false)

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
    <div className={
      `header__bot 
      ${props.isHideHeaderFullpage && props.isHideHeaderFullpage ? 'hide' : ''}
      ${props.isHideCategoryHeader && props.isHideCategoryHeader ? 'hide' : ''}`
    }>
      <div className="container">
        <div className="header__bot-inner">
          { isMobile && <Burger 
            isMeuOpen={props.isMeuOpen} 
            toggleMenuOpen={props.toggleMenuOpen} 
            closeBtn={props.closeBtn}
          /> }
          <Logo 
            className='logo-header' 
            logo={props.logo}
          />
          <Menu
            setIsItemHover={props.setIsItemHover}
            isMeuOpen={props.isMeuOpen}
            toggleSearchOpen={props.toggleSearchOpen}
            isCartOpen={props.isCartOpen}
            cartOpen={props.cartOpen}
            openSubmenu={props.openSubmenu}
            closeSubmenu={props.closeSubmenu}
            slider={props.slider}
            searchBtn={props.searchBtn}
            menu={props.menu}
            cartCount={props.cartCount}
          />
          { isMobile && <MenuOverlay isMeuOpen={props.isMeuOpen} toggleMenuOpen={props.toggleMenuOpen} /> }
          <HeaderControls
            isSearchOpen={props.isSearchOpen}
            setIsSearchOpen={props.setIsSearchOpen}
            toggleSearchOpen={props.toggleSearchOpen}
            isCartOpen={props.isCartOpen}
            cartOpen={props.cartOpen}
            isContactsOpen={props.isContactsOpen}
            contactsOpen={props.contactsOpen}
            auth={props.auth}
            cartCount={props.cartCount}
            isLoggedIn={props.isLoggedIn}
          />
        </div>
      </div>
      <SearchPanel
        isSearchOpen={props.isSearchOpen}
        setIsSearchOpen={props.setIsSearchOpen}
        searchPlaceholder={props.searchPlaceholder}
        closeBtn={props.closeBtn}
      />
      { isSmallMobile && <ContactsPanel 
          isContactsOpen={props.isContactsOpen} 
          contactsClose={props.contactsClose} 
          contactsPhones={props.contactsPhones}
          contactsEmail={props.contactsEmail}
          contactsScheduleTime={props.contactsScheduleTime}
          youtubeLink={props.youtubeLink}
          facebookLink={props.facebookLink}
          instagramLink={props.instagramLink}
          logo={props.logo}
          footerLabels={props.footerLabels}
      /> }
    </div>
  )
}

export default HeaderBot