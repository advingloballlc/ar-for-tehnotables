import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import CheckoutIntro from '../components/Checkout/Intro/Intro'
import ModalCheckoutError from '../components/ModalCheckoutError/ModalCheckoutError'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCookie } from '../utils/getCookie'
import { isBrowser } from '../utils/isBrowser'

const Checkout = ({ location, pageContext, data }) => {
  // Meta Data 
  const { title, metaDesc } = data.wpPage.seo
  
  // Common Blocks
  const menu = data.wpTehnotableThemeSetting.mainMenuFields
  const header = data.wpTehnotableThemeSetting.siteHeaderFields
  const footer = data.wpTehnotableThemeSetting.siteFooterFields
  const cart = data.wpTehnotableThemeSetting.cartModalFields
  const validateErrors = data.wpTehnotableThemeSetting.validationErrorsFields

  const {
    contactsPhones,
    contactsEmail,
    contactsScheduleTime,
    youtubeLink,
    facebookLink,
    instagramLink,
    footerLabels
  } = data.wpTehnotableThemeSetting.siteFooterFields

  // Page Blocks
  const {
    checkoutEmptyListTitle,
    checkoutBackBtn,
    novaPoshtaErr,
    novaPoshtaSearch,
    coupons, 
    customerInfo, 
    novaPoshtaLabels, 
    orderForm, 
    paymentMethod, 
    shippingMethod,
    paymentMethodList,
    shippingMethodList,
    soresList
  } = data.wpPage.checkoutPageFields

  const { 
    checkoutFormSuccess,
    coockieMain,
    coockieSettings
  } = data.wpTehnotableThemeSetting.thanksModalFields

  const deleteBtn = data.wpTehnotableThemeSetting.cartModalFields.deleteProductFromCart

  const userInfo = getCookie('user_id') && JSON.parse(getCookie('user_info'))

  useEffect(() => isBrowser() && window.fbq('track', 'InitiateCheckout'), [])
  
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <LangCodeProvider code={pageContext.wpmlLang}>
        <Layout 
          isHiddenFooterTop={true} 
          isShowenHeaderCheckout={true}
          menu={menu}
          header={header}
          footer={footer}
          cart={cart}
          contactsPhones={contactsPhones}
          contactsEmail={contactsEmail}
          contactsScheduleTime={contactsScheduleTime}
          youtubeLink={youtubeLink}
          facebookLink={facebookLink}
          instagramLink={instagramLink}
          footerLabels={footerLabels}
        >
          <Seo title={title} description={metaDesc} lang={pageContext.lang} />
          <CheckoutIntro
            deleteBtn={deleteBtn}
            checkoutEmptyListTitle={checkoutEmptyListTitle}
            checkoutBackBtn={checkoutBackBtn}
            novaPoshtaErr={novaPoshtaErr}
            novaPoshtaSearch={novaPoshtaSearch}
            coupons={coupons}
            customerInfo={customerInfo}
            novaPoshtaLabels={novaPoshtaLabels}
            orderForm={orderForm}
            paymentMethod={paymentMethod}
            shippingMethod={shippingMethod}
            cartItems={location?.state?.cartItems}
            cartTotalPrice={location?.state?.cartTotalPrice}
            userInfo={userInfo}
            validateErrors={validateErrors}
            paymentMethodList={paymentMethodList}
            shippingMethodList={shippingMethodList}
            soresList={soresList}
          />
        </Layout>
        <ModalCheckoutError
          desc={checkoutFormSuccess.mainText}
          btn={checkoutFormSuccess.btnText}
        />
        <ModalCoockieMain
          title={coockieMain.title}
          desc={coockieMain.desc}
          btnSettings={coockieMain.btnSettings}
          btnAccept={coockieMain.btnAccept}
        />
        <ModalCoockieSettings
          title={coockieSettings.title}
          subtitle={coockieSettings.subtitle}
          required={coockieSettings.required}
          analitics={coockieSettings.analithics}
          personalization={coockieSettings.personalization}
          advertisment={coockieSettings.advertisment}
          btnAccept={coockieSettings.acceptBtn}
          btnAcceptAll={coockieSettings.acceptAllBtn}
        />
      </LangCodeProvider>
    </PrefixProvider>
  )
}

export const query = graphql`
  query getCheckout($lang: String) {
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "checkout"}) {
      seo {
        title
        metaDesc
        breadcrumbs {
          text
          url
        }
      }
      checkoutPageFields {
        paymentMethodList {
          oneTime
          threeTime
          twoTime
          fourTime
        }
        shippingMethodList {
          fourTime
          oneTime
          threeTime
          twoTime
        }
        soresList {
          store
        }
        customerInfo {
          customerEmailLabel
          customerFirstNameLabel
          customerFirstNamePlaceholder
          customerLastNameLabel
          customerLastNamePlaceholder
          customerPhoneLabel
          fieldGroupName
          formTitle
        }
        shippingMethod
        novaPoshtaLabels {
          fieldGroupName
          inputApartmentLabel
          inputBuidingLabel
          inputCityLabel
          inputRegionLabel
          inputStreetLabel
          inputWarehouseLabel
          inputAddressLabel
          inputStoreLabel
        }
        paymentMethod
        coupons {
          fieldGroupName
          formBtnText
          formTitle
        }
        orderForm {
          fieldGroupName
          orderBtnText
          orderSummary
          subtotal
          total
        }
        checkoutBackBtn
        novaPoshtaErr
        novaPoshtaSearch
        checkoutEmptyListTitle
      }
    }
    wpTehnotableThemeSetting(locale: {locale: {eq: $lang}}) {
      thanksModalFields {
        coockieMain {
          title
          desc
          btnSettings
          btnAccept
        }
        coockieSettings {
          title
          subtitle
          required {
            requiredTitle
            requiredDesc
          }
          analithics {
            analithicsTitle
            analithicsDesc
          }
          personalization {
            personalizationTitle
            personalizationDesc
          }
          advertisment {
            advertismentTitle
            advertismentDesc
          }
          acceptBtn
          acceptAllBtn
        }
        checkoutFormSuccess {
          btnText
          mainText
        }
      }
      validationErrorsFields {
        errShortLastname
        errEmptyLastname
        errShortMessage
        errEmptyAddress
        errEmptyCity
        errEmptyDelivery
        errEmptyEmail
        errEmptyMessage
        errEmptyName
        errEmptyPassword
        errEmptyPayment
        errEmptyPhone
        errEmptyRegion
        errEmptyWarehouse
        errEmptyStore
        errInvalidCupon
        errInvalidEmail
        errInvalidLastname
        errInvalidMiddlename
        errInvalidName
        errLongName
        errNoCupon
        errShortName
        errShortPassword
        fieldGroupName
      }
      mainMenuFields {
        mobileMenuControls {
          close
          back
        }
        mainMenu {
          itemName
          itemSlug
          submenu {
            submenuName
            submenuSlug
            submenuImg {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 315
                    quality: 95
                    placeholder: BLURRED
                    height: 315
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
      cartModalFields {
        addToCartButton
        cartTitle
        cartErrTitle
        deleteProductFromCart
        totalPrice
        checkoutButton {
          title
        }
        catalogButton {
          title
        }
        additionalInfo {
          text
        }
      }
      siteHeaderFields {
        headerAuth {
          personalInfo
          orderHistory
          logout
        }
        infoSlider {
          text
        }
        contactPhones {
          number
        }
        headerSocialList {
          facebookLink
          telegramLink
          whatsappLink
        }
        headerLogo {
          sourceUrl
        }
        searchInputPlaceholder
        headerButtonClose
        headerButtonSearch
      }
      imageGallerySliderFields {
        galleryTitle
        galleryImages {
          sourceUrl
        }
      }
      orderTablePromoBlock {
        promoText
        promoButton {
          title
          url
        }
        promoImg {
          sourceUrl
        }
      }
      siteFooterFields {
        footerLabels {
          phoneTitle
          emailTitle
          scheduleTitle
          subscribeTitle
        }
        footerLogo {
          sourceUrl
        }
        youtubeLink
        instagramLink
        facebookLink
        firstColumn {
          menuList {
            itemLink
            itemName
          }
          menuTitle
        }
        secondColumn {
          menuTitle
          menuList {
            itemLink
            itemName
          }
        }
        thirdColumn {
          menuTitle
          menuList {
            itemLink
            itemName
          }
        }
        contactsBlockTitle
        contactsScheduleTime
        contactsPhones {
          number
        }
        contactsEmail
        bottomLinks {
          itemTitle
          itemLink
        }
        footerCopyrightText
      }
    }
  }
`

export default Checkout