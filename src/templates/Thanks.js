import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import { Helmet } from 'react-helmet'

import ThanksIntro from '../components/Thanks/Intro/Intro'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'
import { isBrowser } from '../utils/isBrowser'
import { getCookie } from '../utils/getCookie'
import { deleteCookie } from '../utils/deleteCookie'

const Thanks = ({ pageContext, data }) => {
  // Meta Data 
  const { title, metaDesc } = data.wpPage.seo
  
  // Common blocks
  const menu = data.wpTehnotableThemeSetting.mainMenuFields
  const header = data.wpTehnotableThemeSetting.siteHeaderFields
  const footer = data.wpTehnotableThemeSetting.siteFooterFields
  const cart = data.wpTehnotableThemeSetting.cartModalFields
  const categoryList = getCurrentCategories(pageContext.categories, pageContext.wpmlLang)
  const { 
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
    thankYouMessage,
    thankYouGoHome,
    thankYouAdditionalyMessage,
    thankyouBackgroundImage
  } = data.wpPage.thankYouPageFields

  const orderNumber = isBrowser() && window.location.search.slice(1).split('=')[1]

  useEffect(() => {
    isBrowser() && window.fbq('track', 'Purchase', {value: getCookie('thx_price'), currency: 'UAH'})
    deleteCookie('thx_price')
  }, [])

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <LangCodeProvider code={pageContext.wpmlLang}>
        <Layout 
          isHiddenFooterTop={true}
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
              href={thankyouBackgroundImage.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(' ')[0]} 
              as="image"
            />
          </Helmet>
          <ThanksIntro 
            deliveryCode={orderNumber} 
            thankYouMessage={thankYouMessage}
            thankYouGoHome={thankYouGoHome}
            thankYouAdditionalyMessage={thankYouAdditionalyMessage}
            thankyouBackgroundImage={thankyouBackgroundImage}
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
  query ThankYouPage($lang: String) {
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "thank-you"}) {
      seo {
        title
        metaDesc
      }
      thankYouPageFields {
        thankYouMessage
        thankYouAdditionalyMessage
        thankYouGoHome {
          title
          url
        }
        thankyouBackgroundImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                quality: 95
                placeholder: BLURRED
                height: 885
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
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
    }
  }
`

export default Thanks