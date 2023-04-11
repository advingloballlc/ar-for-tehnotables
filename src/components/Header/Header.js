import React, { useEffect, useState, useCallback, useContext } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import './Header.scss'

import HeaderTop from './HeaderTop'
import HeaderBot from './HeaderBot'
import HeaderCheckout from './HeaderCheckout'
import Overlay from '../Overlay/Overlay'
import Cart from '../Cart/Cart'

import { LangCodeContext } from '../../context/LangCodeProvider'

import { isBrowser } from '../../utils/isBrowser'
import { disableScrollbar } from '../../utils/disableScrollbar'
import { enableScrollbar } from '../../utils/enableScrollbar'
import { getCookie } from '../../utils/getCookie'
import { setCookie } from '../../utils/setCookie'

import { getCart } from '../../cart/getCart'
import { removeFromCart } from '../../cart/removeFromCart'
import { updateCart } from '../../cart/updateCart'

const Header = (props) => {
  let langCode = useContext(LangCodeContext)

  const [ isItemHover, setIsItemHover ] = useState(false)
  const [ isSearchOpen, setIsSearchOpen ] = useState(false)
  const [ isCartOpen, setIsCartOpen ] = useState(false)
  const [ isMeuOpen, setIsMenuOpen ] = useState(false)
  const [ isContactsOpen, setIsContactsOpen ] = useState(false)
  const [ isOpenSubmenu, setIsOpenSubmenu ] = useState(false)

  const [ isMobile, setIsMobile ] = useState(false)

  const [ isCartLoading, setIsCartLoading ] = useState(false)
  const [ cartItems, setCartItems ] = useState([])
  const [ cartTotalPrice, setCartTotalPrice ] = useState('')
  const [ cartCount, setCartCount ] = useState(getCookie('cart_count'))
  const [ isLoggedIn, setIsLoggetIn ] = useState(!!getCookie('user_id'))

  useEffect(() => {
    getCart(langCode)
      .then(({ data }) => {
        setCartItems(data.items)
        setCartTotalPrice(data.totals.total_price)
        props.productId && props.setIsAddedToCart(data.items.some(item => item.product_id === props.productId))
        props.productBundleId && props.setIsAddedBundleToCart(data.items.some(item => item.product_id === props.productBundleId))
      })
  }, [props.isAddingToCart])

  useEffect(() => {
    setCartCount(getCookie('cart_count'))
  }, [props.isAddingToCart, cartItems])

  useEffect(() => {
    setIsLoggetIn(!!getCookie('user_id'))

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 481px)': () => setIsMobile(false),
      '(max-width: 480px)': () => setIsMobile(true)
    })
  }, [])

  const incremementCount = (key, elem) => {
    let input = elem.currentTarget.previousElementSibling,
        value = parseInt(input.value)

    if (value < 99999) {
      setIsCartLoading(true)
       NProgress.start()
      
      gsap.to(input, .2, { force3D: true, y: -10, opacity: 0, ease: 'Power2.easeOut', onComplete: () => {
        gsap.to(input, .1, { force3D: true, y: 10 })
        setCartItems(cartItems.map(item => {
          return {
            ...item,
            quantity: key === item.key ? item.quantity + 1 : item.quantity
          }
        }))
      }})
      gsap.to(input, .2, { force3D: true, y: 0, opacity: 1, ease: 'Power2.easeOut', delay: .4 })

      updateCart(key, value + 1, langCode)
        .then(() => { 
          getCart(langCode)
          .then(({ data }) => {
            setCookie('cart_count', data.total_items, {secure: true, 'max-age': 172800})
            setCartItems(data.items)
            setCartTotalPrice(data.totals.total_price)
            NProgress.done()
            setIsCartLoading(false)
            props.productId && props.setIsAddedToCart(data.items.some(item => item.product_id === props.productId))
            props.productBundleId && props.setIsAddedBundleToCart(data.items.some(item => item.product_id === props.productBundleId))
          })
        })
    }
  }

  const decrementCount = (key, elem) => {
    let input = elem.currentTarget.nextElementSibling,
          value = parseInt(input.value)
    
    if (value > 1) {
      setIsCartLoading(true)
      NProgress.start()

      gsap.to(input, .2, { force3D: true, y: 10, opacity: 0, ease: 'Power2.easeOut', onComplete: () => {
        gsap.to(input, .1, { force3D: true, y: -10 })
        setCartItems(cartItems.map(item => {
          return {
            ...item,
            quantity: key === item.key ? item.quantity - 1 : item.quantity
          }
        }))
      }})
      gsap.to(input, .2, { force3D: true, y: 0, opacity: 1, ease: 'Power2.easeOut', delay: .4 })

      updateCart(key, value - 1, langCode)
        .then(() => { 
          getCart(langCode)
          .then(({ data }) => {
            setCookie('cart_count', data.total_items, {secure: true, 'max-age': 172800})
            setCartItems(data.items)
            setCartTotalPrice(data.totals.total_price)
            NProgress.done()
            setIsCartLoading(false)
            props.productId && props.setIsAddedToCart(data.items.some(item => item.product_id === props.productId))
            props.productBundleId && props.setIsAddedBundleToCart(data.items.some(item => item.product_id === props.productBundleId))
          })
        })
    }
  }

  const checkCounter = (key, quantity) => {
    setIsCartLoading(true)
    NProgress.start()
    
    let value = quantity

    if (value.match(/[^0-9]/g)) value = value.replace(/[^0-9]/g, '')
    else value = value

    if (value === '') value = 1

    if (parseInt(value) > 99999) value = 99999

    setCartItems(cartItems.map(item => {
      return {
        ...item,
        quantity: key === item.key ? parseInt(value) : item.quantity
      }
    }))

    updateCart(key, parseInt(value), langCode)
      .then(() => { 
        getCart(langCode)
        .then(({ data }) => {
          setCookie('cart_count', data.total_items, {secure: true, 'max-age': 172800})
          setCartItems(data.items)
          setCartTotalPrice(data.totals.total_price)
          NProgress.done()
          setIsCartLoading(false)
          props.productId && props.setIsAddedToCart(data.items.some(item => item.product_id === props.productId))
          props.productBundleId && props.setIsAddedBundleToCart(data.items.some(item => item.product_id === props.productBundleId))
        })
      })
  }

  const removeFromCartHandler = key => {
    NProgress.start()
    setIsCartLoading(true)
    removeFromCart(key, langCode)
      .then(() => { 
        getCart(langCode)
        .then(({ data }) => {
          setCookie('cart_count', data.total_items, {secure: true, 'max-age': 172800})
          setCartItems(data.items)
          setCartTotalPrice(data.totals.total_price)
          NProgress.done()
          setIsCartLoading(false)
          props.productId && props.setIsAddedToCart(data.items.some(item => item.product_id === props.productId))
          props.productBundleId && props.setIsAddedBundleToCart(data.items.some(item => item.product_id === props.productBundleId))
        })
      })
  }

  const toggleSearchOpen = useCallback(e => {
    let parent = e.currentTarget.parentElement
    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setIsSearchOpen(prev => !prev)
      }, 190)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)
    }
  }, [isSearchOpen])

  const closeSearch = useCallback(e => {
    let parent = e.currentTarget.parentElement
    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setIsSearchOpen(false)
      }, 190)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)
    }
  }, [isSearchOpen])

  const toggleMenuOpen = useCallback(() => {
    setIsMenuOpen(prev => !prev)

    ScrollTrigger.matchMedia({
      '(min-width: 489px)': () => {
        if (!isMeuOpen) {
          gsap.from('.menu-list__link', .5, { delay: .6, y: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-list__icon', .5, { delay: .6, y: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.header-slider', .5, { opacity: 0, delay: .5, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          disableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            document.querySelector('.header__bot').classList.add('super-visible')
          }
        } else {
          gsap.to('.menu-list__link', .15, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-list__icon', .15, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.header-slider', .15, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          enableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            setTimeout(() => {
              document.querySelector('.header__bot').classList.add('visible')
            }, 10)

            setTimeout(() => {
              document.querySelector('.header__bot').classList.remove('super-visible')
            }, 1000)
          }
        }
      },
      '(max-width: 488px)': () => {
        if (!isMeuOpen) {
          gsap.from('.menu-controls__item', .3, { delay: .6, scale: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-search', .5, { delay: .7, opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-list__link', .5, { delay: .8, y: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-list__icon', .5, { delay: .8, y: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-switcher__item', .5, { delay: .8, x: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.header-slider', .5, { opacity: 0, delay: .9, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          disableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            document.querySelector('.header__bot').classList.add('super-visible')
          }
        } else {
          gsap.to('.menu-controls__item', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-search', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-list__link', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-list__icon', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-switcher__item', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.header-slider', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})

          enableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            setTimeout(() => {
              document.querySelector('.header__bot').classList.add('visible')
            }, 500)

            setTimeout(() => {
              document.querySelector('.header__bot').classList.remove('super-visible')
            }, 1000)
          }
        }
      }
    })
  }, [isMeuOpen])

  const cartOpen = useCallback(flag => {
    setIsCartOpen(true)

    let cartTl = gsap.timeline()

    cartTl
      .from('.cart__title', .5, { delay: .1, y: '100%', onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.cart-list', .5, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.cart-bot__list', .5, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.cart-bot__info', .5, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.cart__close', .3, { opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')

    ScrollTrigger.matchMedia({
      '(max-width: 1024px)': () => {
        if (isBrowser() && flag && document.documentElement.getBoundingClientRect().top < 0) {
          disableScrollbar()
          document.querySelector('.header__bot').classList.add('super-visible')
        }
      }
    })
  }, [isCartOpen])

  const closeCart = useCallback(() => {
    setIsCartOpen(false)

    let cartTl = gsap.timeline()

    cartTl
      .fromTo('.cart-bot__info', .4, { y: 0, opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }})
      .fromTo('.cart-bot__list', .4, { y: 0, opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, {  y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .fromTo('.cart-list', .4, { y: 0, opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }},'-=.4')
      .fromTo('.cart__title', .4, { y: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: '100%', onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .fromTo('.cart__close', .3, { opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')

    ScrollTrigger.matchMedia({
      '(max-width: 1024px)': () => {
        if (!isMeuOpen) {
          enableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            setTimeout(() => {
              document.querySelector('.header__bot').classList.add('visible')
            }, 500)
      
            setTimeout(() => {
              document.querySelector('.header__bot').classList.remove('super-visible')
            }, 1000)
          }
        }
      }
    })
  }, [isCartOpen])

  const contactsOpen = useCallback(() => {
    setIsContactsOpen(true)

    let contactTl = gsap.timeline()

    contactTl
      .from('.contacts-panel__top .logo', .6, { delay: .2, opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.contacts-panel__item', .5, { y: 40, opacity: 0, stagger: .1, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.contacts-panel__close', .3, { opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    disableScrollbar()

    if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
      document.querySelector('.header__bot').classList.add('super-visible')
    }
  }, [isContactsOpen])

  const contactsClose = useCallback(() => {
    setIsContactsOpen(false)

    let contactTl = gsap.timeline()

    contactTl
      .fromTo('.contacts-panel__item', .5, { y: 0, opacity: 1, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: 40, opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }})
      .fromTo('.contacts-panel__close', .3, { opacity: 1, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, { opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.5')
      .fromTo('.contacts-panel__top .logo', .3, { opacity: 1, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, { opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.5')

    enableScrollbar()

    if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
      setTimeout(() => {
        document.querySelector('.header__bot').classList.add('visible')
      }, 500)

      setTimeout(() => {
        document.querySelector('.header__bot').classList.remove('super-visible')
      }, 1000)
    }
  }, [isContactsOpen])

  const openSubmenu = useCallback(e => {
    setIsOpenSubmenu(true)

    let arrow = e.currentTarget
    let mainMenu = arrow.parentElement.parentElement
    let subMenu = arrow.nextElementSibling

    subMenu.classList.add('open')
    mainMenu.classList.add('open')
    mainMenu.nextElementSibling.classList.add('open')
    mainMenu.nextElementSibling.nextElementSibling && mainMenu.nextElementSibling.nextElementSibling.classList.add('open')
  }, [isOpenSubmenu])

  const closeSubmenu = useCallback(e => {
    setIsOpenSubmenu(false)

    let btn = e.currentTarget
    let subMenu = btn.parentElement
    let mainMenu = btn.parentElement.parentElement.parentElement

    mainMenu.classList.remove('open')
    mainMenu.nextElementSibling.classList.remove('open')
    mainMenu.nextElementSibling.nextElementSibling && mainMenu.nextElementSibling.nextElementSibling.classList.remove('open')
    if (isBrowser()) {
      setTimeout(() => {
        subMenu.classList.remove('open')
      }, 350)
    }
  }, [isOpenSubmenu])

  return (
    <React.Fragment>
      <header className="header">
        { props.isShowenHeaderCheckout && <HeaderCheckout
            logo={props.header.headerLogo}
            phones={props.header.contactPhones}
        /> }
        { (!props.isShowenHeaderCheckout && !isMobile) && <HeaderTop
            slider={props.header.infoSlider}
            phones={props.header.contactPhones}
            social={props.header.headerSocialList}
        /> }
        {
          !props.isShowenHeaderCheckout && <HeaderBot
            setIsItemHover={setIsItemHover}
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            toggleSearchOpen={toggleSearchOpen}
            isCartOpen={isCartOpen}
            cartOpen={cartOpen}
            isHideHeaderFullpage={props.isHideHeaderFullpage}
            isHideCategoryHeader={props.isHideCategoryHeader}
            isMeuOpen={isMeuOpen}
            toggleMenuOpen={toggleMenuOpen}
            isContactsOpen={isContactsOpen}
            contactsOpen={contactsOpen}
            contactsClose={contactsClose}
            openSubmenu={openSubmenu}
            closeSubmenu={closeSubmenu}
            logo={props.header.headerLogo}
            searchPlaceholder={props.header.searchInputPlaceholder}
            slider={props.header.infoSlider}
            contactsPhones={props.contactsPhones}
            contactsEmail={props.contactsEmail}
            contactsScheduleTime={props.contactsScheduleTime}
            youtubeLink={props.youtubeLink}
            facebookLink={props.facebookLink}
            instagramLink={props.instagramLink}
            searchBtn={props.header.headerButtonSearch}
            closeBtn={props.header.headerButtonClose}
            menu={props.menu}
            auth={props.header.headerAuth}
            cartCount={cartCount}
            isLoggedIn={isLoggedIn}
            footerLabels={props.footerLabels}
          />
        }
      </header>
      { !props.isShowenHeaderCheckout && <Cart 
          isCartOpen={isCartOpen} 
          closeCart={closeCart} 
          cart={props.cart}
          cartItems={cartItems}
          cartTotalPrice={cartTotalPrice}
          removeFromCartHandler={removeFromCartHandler}
          incremementCount={incremementCount}
          decrementCount={decrementCount}
          checkCounter={checkCounter}
          isCartLoading={isCartLoading}
      /> }
      <Overlay
        isItemHover={isItemHover}
        isSearchOpen={isSearchOpen}
        closeCart={closeCart}
        isCartOpen={isCartOpen}
        isContactsOpen={isContactsOpen}
        closeSearch={closeSearch}
        isMeuOpen={isMeuOpen}
      />
    </React.Fragment>
  )
}

export default Header
