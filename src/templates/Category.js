import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import CategoryIntro from '../components/CategoryPage/Intro/Intro'
import CategoryList from '../components/CategoryPage/CategoryList/CategoryList'
import CategoryProducts from '../components/CategoryPage/CategoryProducts/CategoryProducts'

import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'
import SeoBlock from '../components/SeoBlock/SeoBlock'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'

const Category = ({ pageContext, data }) => {
  let [ isHideCategoryHeader, setHideCategoryHeader ] = useState(false)

  // Common Block
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

  const { filterProductFields } = data.wpTehnotableThemeSetting

  const gallery = data.wpTehnotableThemeSetting.imageGallerySliderFields
  const promo = data.wpTehnotableThemeSetting.orderTablePromoBlock
  const seoBlock = data.wpProductCategory.seoTextFields

  // Meta Data
  const { title, metaDesc, breadcrumbs } = data.wpProductCategory.seo

  // Page Blocks
  const products = data.allWpProduct.edges
  const productsForFilter = data.allWpProductCategory.nodes[0].products.nodes
  const pageInfo = data.allWpProduct.pageInfo

  const productColorAttr = data.allWpPaColor.edges
  const productMaterialAttr = data.allWpPaMaterial.edges

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <LangCodeProvider code={pageContext.wpmlLang}>
        <Layout 
          isHideCategoryHeader={isHideCategoryHeader}
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
              href={data.wpProductCategory.productTermCustomFields.termBgImg.localFile.childImageSharp.gatsbyImageData.images.fallback.src} 
              as="image"
            />
            { pageInfo.hasPreviousPage && <link 
              rel="prev" 
              href={pageInfo.currentPage > 2 ? `${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}${pageContext.slug}/page/${pageInfo.currentPage - 1}` : `${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}${pageContext.slug}`} 
            /> }
            { pageInfo.hasNextPage && <link 
              rel="next" 
              href={`${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}${pageContext.slug}/page/${pageInfo.currentPage + 1}`} 
            /> }
            <link 
              rel="canonical" 
              href={`${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}${pageContext.slug}`} 
            />
            { pageContext.langList.map(lang => {
              return (
                <link 
                  rel="alternate" 
                  hreflang={lang.wpmlLang} 
                  href={pageInfo.currentPage === 1 ? `${process.env.GATSBY_SITE_DOMAIN}${lang.path}${pageContext.slug}` : `${process.env.GATSBY_SITE_DOMAIN}${lang.path}${pageContext.slug}/page/${pageInfo.currentPage}`} 
                />
              )
            }) }
            <link 
              rel="alternate" 
              hreflang="x-default"
              href={`${process.env.GATSBY_SITE_DOMAIN}/${pageInfo.currentPage === 1 ? pageContext.slug : `${pageContext.slug}/page/${pageInfo.currentPage}`}`} 
            />
          </Helmet>
          <Breadcrumbs className="category-breadcrumbs" list={breadcrumbs} />
          <div className="category__page-wrapper">
            <CategoryIntro
              title={data.wpProductCategory.name}
              preview={data.wpProductCategory.productTermCustomFields.termBgImg.localFile}
            />
            <CategoryList categoryList={categoryList} />
            <CategoryProducts 
              setHideCategoryHeader={setHideCategoryHeader} 
              filterProductFields={filterProductFields}
              logo={header.headerLogo}
              products={products}
              pageInfo={pageInfo}
              slug={pageContext.slug}
              productsForFilter={productsForFilter}
              productColorAttr={productColorAttr}
              productMaterialAttr={productMaterialAttr}
            />
          </div>
          <Gallery gallery={gallery} />
          <Quote promo={promo} />
          { seoBlock?.seoTitle && <SeoBlock seoBlock={seoBlock} /> }
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
          {/* { 
            isBrowser() 
              && !getCookie('is_loader_visible') 
              && detectLighthouse()
              && <PageLoader isLoaded={location?.state?.isFetched} /> 
          } */}
        </Layout>
      </LangCodeProvider>
    </PrefixProvider>
  )
}



export const query = graphql`
  query getCategoryPage($lang: String, $slug: String, $skip: Int = 0) {
    wpProductCategory(locale: {locale: {eq: $lang}} slug: {eq: $slug}) {
      seo {
        title
        metaDesc
        breadcrumbs {
          text
          url
        }
      }
      slug
      name
      productTermCustomFields {
        termBgImg {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                quality: 95
                placeholder: BLURRED
                height: 305
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      seoTextFields {
        buttonCollapse
        buttonExpand
        fieldGroupName
        seoText
        seoTitle
      }
    }
    allWpPaColor(filter: {locale: {locale: {eq: $lang}}}) {
      edges {
        node {
          id
          slug
          name
          taxonomyName
          ProductColorVariation {
            color
          }
        }
      }
    }
    allWpPaMaterial(filter: {locale: {locale: {eq: $lang}}}) {
      edges {
        node {
          id
          slug
          name
          taxonomyName
          description
        }
      }
    }
    allWpProductCategory(
      filter: {slug: {eq: $slug}, locale: {locale: {eq: $lang}}}
    ) {
      nodes {
        products {
          nodes {
            ... on WpSimpleProduct {
              id
              name
              slug
              price
              date(formatString: "MMM DD Y H:m:s")
              attributes {
                nodes {
                  name
                  label
                  options
                }
              }
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 400
                        quality: 95
                        placeholder: BLURRED
                        height: 405
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
              }
            }
            ... on WpVariableProduct {
              id
              name
              slug
              price
              date(formatString: "MMM DD Y H:m:s")
              attributes {
                nodes {
                  name
                  label
                  options
                }
              }
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 400
                        quality: 95
                        placeholder: BLURRED
                        height: 405
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
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
                attributes {
                  name
                  value
                  attributeId
                }
              }
            }
          }
        }
      }
    }
    allWpProduct(
      filter: {locale: {locale: {eq: $lang}}, productCategories: {nodes: {elemMatch: {slug: {eq: $slug}}}}}
      skip: $skip
      limit: 20
      sort: {fields: menuOrder}
    ) {
      edges {
        node {
          ... on WpSimpleProduct {
            id
            name
            slug
            price
            date(formatString: "MMM DD Y H:m:s")
            attributes {
              nodes {
                name
                label
                options
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 400
                      quality: 95
                      placeholder: BLURRED
                      height: 405
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
          ... on WpVariableProduct {
            id
            name
            slug
            price
            date(formatString: "MMM DD Y H:m:s")
            attributes {
              nodes {
                name
                label
                options
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 400
                      quality: 95
                      placeholder: BLURRED
                      height: 405
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
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
              attributes {
                name
                value
                attributeId
              }
            }
          }
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
        totalCount
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
      filterProductFields {
        clearApplyBtn
        clearFilterBtn
        fieldGroupName
        filterChoiceTitle
        filterCloseBtn
        filterColorTitle
        filterMaterialTitle
        filterTitle
        sortTitle
        sortOptionsList {
          option
          slug
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
        promoAltText
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

export default Category