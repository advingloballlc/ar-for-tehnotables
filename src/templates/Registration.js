import React, { useEffect } from 'react'
import { graphql, navigate } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import RegistrationIntro from '../components/Registration/Intro/Intro'
import ModalThanks from './../components/ModalThanks/ModalThanks'
import ModalError from '../components/ModalError/ModalError'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'
import { getCookie } from '../utils/getCookie'

const Registration = ({ pageContext, data }) => {
  useEffect(() => {
    !!getCookie('user_id') && navigate(`${pageContext.prefix}account`)
  }, [])

  if (!!getCookie('user_id')) return null
  
  // Meta Data 
  const { title, metaDesc, breadcrumbs } = data.wpPage.seo

  // Common blocks
  const menu = data.wpTehnotableThemeSetting.mainMenuFields
  const header = data.wpTehnotableThemeSetting.siteHeaderFields
  const footer = data.wpTehnotableThemeSetting.siteFooterFields
  const cart = data.wpTehnotableThemeSetting.cartModalFields
  const categoryList = getCurrentCategories(pageContext.categories, pageContext.wpmlLang)
  const validateErrors = data.wpTehnotableThemeSetting.validationErrorsFields
  const { 
    regFormSuccess, 
    errFormSuccess,
    coockieMain,
    coockieSettings
  } = data.wpTehnotableThemeSetting.thanksModalFields

  
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
    beforeButtonsText,
    afterButtonsText,
    facebookButton,
    googleButton
  } = data.wpTehnotableThemeSetting.loginWithSocialFields
  
  const {
    backgroundImg,
    registerForm,
    loginPageUrl,
    textBeforeLoginPageUrl
  } = data.wpPage.createAccountPageFields

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <LangCodeProvider code={pageContext.wpmlLang}>
        <Layout
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
          categoryList={categoryList}
          footerLabels={footerLabels}
        >
          <Seo title={title} description={metaDesc} lang={pageContext.lang} />
          <Helmet>
            <link 
              rel="preload" 
              href={backgroundImg.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(' ')[0]} 
              as="image"
            />
          </Helmet>
          <Breadcrumbs className="registration-breadcrumbs" list={breadcrumbs} />
          <RegistrationIntro
            backgroundImg={backgroundImg}
            registerForm={registerForm}
            loginPageUrl={loginPageUrl}
            textBeforeLoginPageUrl={textBeforeLoginPageUrl}
            beforeButtonsText={beforeButtonsText}
            afterButtonsText={afterButtonsText}
            facebookButton={facebookButton}
            googleButton={googleButton}
            validateErrors={validateErrors}
          />
          <ModalThanks
            desc={regFormSuccess.mainText} 
            btn={regFormSuccess.btnText}
          />
          <ModalError
            desc={errFormSuccess.mainText}
            btn={errFormSuccess.btnText}
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
        </Layout>
      </LangCodeProvider>
    </PrefixProvider>
  )
}

export const query = graphql`
  query getCreateAccountPage($lang: String) {
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "create-account"}) {
      seo {
        title
        metaDesc
        breadcrumbs {
          text
          url
        }
      }
      title
      uri
      createAccountPageFields {
        backgroundImg {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 940
                quality: 95
                placeholder: BLURRED
                height: 930
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        registerForm {
          title
          inputUsernameLabel
          inputEmailLabel
          inputPasswordLabel
          button
        }
        textBeforeLoginPageUrl
        loginPageUrl {
          title
          url
        }
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
        errFormSuccess {
          btnText
          mainText
        }
        regFormSuccess {
          mainText
          btnText
        }
      }
      validationErrorsFields {
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
      loginWithSocialFields {
        beforeButtonsText
        facebookButton
        googleButton
        afterButtonsText
      }
    }
  }
`

export default Registration