import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import ContactsIntro from '../components/Contacts/Intro/Intro'
import Callback from '../components/Contacts/Callback/Callback'
import ModalThanks from '../components/ModalThanks/ModalThanks'
import ModalError from './../components/ModalError/ModalError'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'

const Contacts = ({ pageContext, data }) => {
  // Meta Data 
  const { title, metaDesc, breadcrumbs } = data.wpPage.seo

  // Page Blocks
  const pageTitle = data.wpPage.title

  // Common Blocks
  const menu = data.wpTehnotableThemeSetting.mainMenuFields
  const header = data.wpTehnotableThemeSetting.siteHeaderFields
  const footer = data.wpTehnotableThemeSetting.siteFooterFields
  const cart = data.wpTehnotableThemeSetting.cartModalFields
  const validateErrors = data.wpTehnotableThemeSetting.validationErrorsFields

  const categoryList = getCurrentCategories(pageContext.categories, pageContext.wpmlLang)
  const { 
    contactFormSuccess, 
    errFormSuccess,
    coockieMain,
    coockieSettings
  } = data.wpTehnotableThemeSetting.thanksModalFields

  const { 
    headers,
    socialList,
    info,
    feedbackForm
  } = data.wpPage.pageContacts

  const {
    contactsPhones,
    contactsEmail,
    contactsScheduleTime,
    youtubeLink,
    facebookLink,
    instagramLink,
    footerLabels
  } = data.wpTehnotableThemeSetting.siteFooterFields

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
              rel="canonical" 
              href={`${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}contacts`} 
            />
            { pageContext.langList.map(lang => {
              return (
                <link 
                  rel="alternate" 
                  hreflang={lang.wpmlLang} 
                  href={`${process.env.GATSBY_SITE_DOMAIN}${lang.path}contacts`} 
                />
              )
            }) }
            <link 
              rel="alternate" 
              hreflang="x-default"
              href={`${process.env.GATSBY_SITE_DOMAIN}/contacts`} 
            />
          </Helmet>
          <Breadcrumbs className="contacts-breadcrumbs" list={breadcrumbs} />
          <ContactsIntro 
            title={pageTitle} 
            headers={headers}
            info={info}
            socialList={socialList}
            contactsEmail={contactsEmail}
            contactsPhones={contactsPhones}
            contactsScheduleTime={contactsScheduleTime}
          />
          <Callback 
            feedbackForm={feedbackForm} 
            validateErrors={validateErrors}
          />
          <ModalThanks
            desc={contactFormSuccess.mainText} 
            btn={contactFormSuccess.btnText}
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
  query getContactPage($lang: String) {
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "contacts"}) {
      title
      seo {
        breadcrumbs {
          text
          url
        }
        title
        metaDesc
      }
      pageContacts {
        fieldGroupName
        headers {
          addressTitle
          emailsTitle
          phonesTitle
          scheduleTitle
        }
        info {
          city
          street
          map {
            latitude
            longitude
          }
        }
        socialList {
          blockTitle
          youtubeLink
          instagramLink
          facebookLink
        }
        feedbackForm {
          formTitle
          inputEmailPlaceholder
          inputEmailTitle
          inputMessagePlaceholder
          inputMessageTitle
          inputPhoneTitle
          inputUsernamePlaceholder
          inputUsernameTitle
          acceptConditionText
          buttonText
        }
      }
      uri
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
        contactFormSuccess {
          mainText
          btnText
        }
        errFormSuccess {
          btnText
          mainText
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
      thanksModalFields {
        contactFormSuccess {
          mainText
          btnText
        }
      }
    }
  }
`

export default Contacts