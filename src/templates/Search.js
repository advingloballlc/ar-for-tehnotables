import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import SearchIntro from '../components/SearchPage/Intro/Intro'

import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { isBrowser } from '../utils/isBrowser'
import { getCurrentCategories } from '../utils/getCurrentCategories'
import { refreshURL } from '../utils/refreshURL'

const Search = ({ pageContext, location, data }) => {
  const searchQuery = isBrowser() && (location?.state?.searchQuery?.trim() || window.localStorage.getItem('searchQuery'))

  useEffect(() => refreshURL(searchQuery), [])
  useEffect(() => refreshURL(searchQuery), [searchQuery])

  // Meta Data 
  const { title, metaDesc, breadcrumbs } = data.wpPage.seo

  // Common Blocks
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

  const gallery = data.wpTehnotableThemeSetting.imageGallerySliderFields
  const promo = data.wpTehnotableThemeSetting.orderTablePromoBlock

  // Page Blocks
  const { searchResultTitle, searchResultErrTitle } = data.wpPage.searchResultPageFields
  const products = data.allWpProduct.edges

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
          <Breadcrumbs className="search-breadcrumbs" list={breadcrumbs} />
          <SearchIntro 
            searchQuery={searchQuery} 
            title={searchResultTitle}
            errTitle={searchResultErrTitle}
            products={products}
          />
          <div className="search-bot">
            <Gallery gallery={gallery} />
            <Quote promo={promo} />
          </div>
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
  query getSearch($lang: String) {
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "search"}) {
      searchResultPageFields {
        searchResultTitle
        searchResultErrTitle
      }
      uri
      seo {
        breadcrumbs {
          text
          url
        }
        title
      }
    }
    allWpProduct(filter: {locale: {locale: {eq: $lang}}}) {
      edges {
        node {
          ... on WpVariableProduct {
            id
            name
            price
            slug
            featuredImage {
              node {
                localFile { 
                  publicURL 
                }
              }
            }
            variations {
              color
              image { 
                localFile { 
                  publicURL 
                } 
              }
            }
          }
          ... on WpSimpleProduct {
            id
            name
            price
            slug
            featuredImage {
              node {
                localFile { 
                  publicURL 
                }
              }
            }
          }
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
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 350
                quality: 95
                placeholder: BLURRED
                height: 260
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      orderTablePromoBlock {
        promoText
        promoButton {
          title
          url
        }
        promoImg {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1024
                quality: 95
                placeholder: BLURRED
                height: 490
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
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

export default Search