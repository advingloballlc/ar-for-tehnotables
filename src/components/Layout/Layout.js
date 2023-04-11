import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import 'normalize.css'
import './Layout.scss'

const Layout = ({ 
  children, 
  isHiddenFooterTop, 
  isShowenHeaderCheckout, 
  isHideHeaderFullpage, 
  isHideCategoryHeader,
  menu,
  header,
  footer,
  cart,
  contactsPhones,
  contactsEmail,
  contactsScheduleTime,
  youtubeLink,
  facebookLink,
  instagramLink,
  categoryList,
  isAddingToCart,
  productTypeTemplate,
  footerLabels,
  setIsAddedToCart,
  setIsAddedBundleToCart,
  productId,
  productBundleId,
  microdata
}) => {
  return (
    <div
      { ...microdata }
      className={`wrapper ${productTypeTemplate === 'child' ? 'child' : productTypeTemplate === 'gaming' ? 'game' : ''}`}
    >
      <Header
        isShowenHeaderCheckout={isShowenHeaderCheckout}
        isHideHeaderFullpage={isHideHeaderFullpage}
        isAddingToCart={isAddingToCart}
        isHideCategoryHeader={isHideCategoryHeader}
        menu={menu}
        header={header}
        cart={cart}
        contactsPhones={contactsPhones}
        contactsEmail={contactsEmail}
        contactsScheduleTime={contactsScheduleTime}
        youtubeLink={youtubeLink}
        facebookLink={facebookLink}
        instagramLink={instagramLink}
        footerLabels={footerLabels}
        setIsAddedToCart={setIsAddedToCart}
        setIsAddedBundleToCart={setIsAddedBundleToCart}
        productId={productId}
        productBundleId={productBundleId}
      />
      <main className="main">{children}</main>
      <Footer 
        isHiddenFooterTop={isHiddenFooterTop} 
        footer={footer}
        categoryList={categoryList}
      />
    </div>
  )
}

export default Layout
