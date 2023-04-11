import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import Intro from '../components/Homepage/Intro/Intro'
import Fullpage from '../components/Homepage/Fullpage/Fullpage'
import WorkPosition from '../components/Homepage/WorkPosition/WorkPosition'
import MainOrder from '../components/Homepage/MainOrder/MainOrder'
import BenefitsSlider from '../components/Homepage/BenefitsSlider/BenefitsSlider'
import BenefitsTab from '../components/Homepage/BenefitsTab/BenefitsTab'

import Category from '../components/Category/Category'
import MainAbout from '../components/MainAbout/MainAbout'
import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'
import SeoBlock from '../components/SeoBlock/SeoBlock'
import RecomendedProducts from '../components/RecomendedProducts/RecomendedProducts'
import Discount from '../components/Discount/Discount'
import PageLoader from '../components/PageLoader/PageLoader'
import ModalThanks from './../components/ModalThanks/ModalThanks'
import ModalError from './../components/ModalError/ModalError'
import ModalCart from '../components/ModalCart/ModalCart'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'
import { unsubscribingUser } from '../utils/unsubscribingUser'
import { isBrowser } from './../utils/isBrowser'
// import { detectLighthouse } from '../utils/detectLighthouse'

const IndexPage = ({ pageContext, data }) => {
  useEffect(unsubscribingUser, [])

  const [ isHideHeaderFullpage, setIsHideHeaderFullpage ] = useState(false)
  const [ isAddingToCart, setIsAddingToCart ] = useState(false)
  const [ isAddedBundelToCart, setIsAddedBundleToCart ] = useState(false)

  // Meta Data 
  const { title, metaDesc } = data.wpPage.seo

  // Common Blocks
  const menu = data.wpTehnotableThemeSetting.mainMenuFields
  const header = data.wpTehnotableThemeSetting.siteHeaderFields
  const footer = data.wpTehnotableThemeSetting.siteFooterFields
  const cart = data.wpTehnotableThemeSetting.cartModalFields
  const categoryList = getCurrentCategories(pageContext.categories, pageContext.wpmlLang)
  const { 
    unsubscribeFormSuccess, 
    errFormSuccess, 
    cartFormSuccess,
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

  const productBundle = data.wpTehnotableThemeSetting.productBundle
  const productBundleInfo = data.allWpBundleProduct.nodes[0]

  const gallery = data.wpTehnotableThemeSetting.imageGallerySliderFields
  const promo = data.wpTehnotableThemeSetting.orderTablePromoBlock
  const seoBlock = data.wpPage.seoTextFields

  const recomendedProducts = data.allWpProduct.edges

  // Page Blocks
  const {
    firstScreenSlider,
    benefitSlider, 
    benefitBlockTitle,
    healthySlider,
    workInPoseBlockTitle,
    workInSittingPose,
    workInStandingPose,
    fullScreenSlider,
    playBtnText,
    aboutUsTitle,
    aboutUsText,
    aboutUsVideoImg,
    aboutUsVideoSrc,
    aboutUsPageLink,
    aboutUsButtonPlay,
    aboutTablesImage,
    aboutTablesPageLink,
    aboutTablesText,
    aboutTablesTitle,
    productCat,
    recommendedProductsBlockTitle
  } = data.wpPage.homePageFields

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <LangCodeProvider code={pageContext.wpmlLang}>
        <Layout 
          isHideHeaderFullpage={isHideHeaderFullpage}
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
          isAddingToCart={isAddingToCart}
          footerLabels={footerLabels}
          setIsAddedBundleToCart={setIsAddedBundleToCart}
          productBundleId={productBundleInfo.databaseId}
        >
          <Seo title={title} description={metaDesc} lang={pageContext.lang} />
          <Helmet>
            <link 
              rel="preload" 
              href={firstScreenSlider[0].slideBackgroungImg.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(' ')[0]} 
              as="image"
            />
            <link rel="canonical" href={`${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix === '/' ? pageContext.prefix : pageContext.prefix.slice(0, -1)}`} />
            { pageContext.langList.map(lang => {
              return (
                <link 
                  rel="alternate" 
                  hreflang={lang.wpmlLang} href={`${process.env.GATSBY_SITE_DOMAIN}${lang.path === '/' ? lang.path : lang.path.slice(0, -1)}`} 
                />
              )
            }) }
            <link 
              rel="alternate" 
              hreflang="x-default"
              href={`${process.env.GATSBY_SITE_DOMAIN}/`} 
            />
          </Helmet>
          <PageLoader />
          <div className="section-wrapper">
            <Intro 
              firstScreenSlider={firstScreenSlider} 
              playBtnText={playBtnText} 
            />
            <Category
              title={productCat}
              list={data.allWpProductCategory.edges}
            />
            <MainAbout
              isBtn={true}
              title={aboutUsTitle}
              desc={aboutUsText}
              img={aboutUsVideoImg}
              video={aboutUsVideoSrc}
              link={aboutUsPageLink}
              playBtnText={aboutUsButtonPlay}
              mainHeading
            />
            { recomendedProducts.length !== 0 && <RecomendedProducts
              title={recommendedProductsBlockTitle}
              categoryList={categoryList}
              recomendedProducts={recomendedProducts}
            /> }
            <BenefitsSlider healthySlider={healthySlider} />
            <MainOrder
              aboutTablesImage={aboutTablesImage}
              aboutTablesPageLink={aboutTablesPageLink}
              aboutTablesText={aboutTablesText}
              aboutTablesTitle={aboutTablesTitle}
            />
            <BenefitsTab 
              benefitSlider={benefitSlider} 
              benefitBlockTitle={benefitBlockTitle} 
            />
            <div className="work-position-wrapper">
              <WorkPosition 
                workInPoseBlockTitle={workInPoseBlockTitle} 
                workInSittingPose={workInSittingPose}
                workInStandingPose={workInStandingPose}
              />
            </div>
          </div>
          { isBrowser() && <Fullpage 
            setIsHideHeaderFullpage={setIsHideHeaderFullpage}
            fullScreenSlider={fullScreenSlider}
          /> }
          <div className="section-wrapper">
            <div className="discount-wrapper">
              { productBundleInfo.bundleItems && <Discount 
                productBundle={productBundle}
                productBundleInfo={productBundleInfo}
                isAddingToCart={isAddingToCart}
                setIsAddingToCart={setIsAddingToCart}
                isAddedToCart={isAddedBundelToCart}
                setIsAddedToCart={setIsAddedBundleToCart}
              /> }
              <Gallery gallery={gallery} />
              <Quote promo={promo} />
              { seoBlock?.seoTitle && <SeoBlock seoBlock={seoBlock} /> }
            </div>
          </div>
          <ModalThanks 
            desc={unsubscribeFormSuccess.mainText} 
            btn={unsubscribeFormSuccess.btnText}
          />
          <ModalError 
            desc={errFormSuccess.mainText}
            btn={errFormSuccess.btnText}
          />
          <ModalCart
            desc={cartFormSuccess.mainText}
            btn={cartFormSuccess.btnText}
            btnChck={cartFormSuccess.btnTextCheck}
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
          {/* { 
            isBrowser()
              && detectLighthouse()
              && <PageLoader isLoaded={location?.state?.isFetched} />
          } */}
        </Layout>
      </LangCodeProvider>
    </PrefixProvider>
  )
}

export const query = graphql`
  query getHome($lang: String) {
    allWpBundleProduct(filter: {locale: {locale: {eq: $lang}}}) {
      nodes {
        bundleItems {
          nodes {
            name
            slug
            databaseId
            image {
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
        databaseId
        regularPrice
        salePrice
        name
      }
    }
    allWpProductCategory(filter: {locale: {locale: {eq: $lang}}}) {
      edges {
        node {
          databaseId
          name
          slug
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 450
                  quality: 95
                  placeholder: BLURRED
                  height: 485
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "home"}) {
      seo {
        title
        metaDesc
      }
      homePageFields {
        firstScreenSlider {
          slideName
          slideTitle
          slideFileVideo {
            mediaItemUrl
          }
          slideBackgroungImg {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1920
                  quality: 95
                  placeholder: BLURRED
                  height: 910
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          slideBackgroungTabletImg {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 769
                  quality: 95
                  placeholder: BLURRED
                  height: 570
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          slideBackgroungMobileImg {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 767
                  quality: 95
                  placeholder: BLURRED
                  height: 300
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        playBtnText
        productCat
        aboutUsButtonPlay
        aboutUsPageLink {
          url
          title
        }
        aboutUsTitle
        aboutUsText
        aboutUsVideoSrc {
          mediaItemUrl
        }
        aboutUsVideoImg {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 860
                quality: 95
                placeholder: BLURRED
                height: 550
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        recommendedProductsBlockTitle
        healthySlider {
          slideTitle
          slideDescription
          slideImg {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 480
                  quality: 95
                  placeholder: BLURRED
                  height: 590
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        aboutTablesTitle
        aboutTablesText
        aboutTablesPageLink {
          title
          url
        }
        aboutTablesImage {
          mediaItemUrl
        }
        benefitBlockTitle
        benefitSlider {
          slideTitle
          slideDescription
          slideImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1920
                  quality: 95
                  placeholder: BLURRED
                  height: 740
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        workInPoseBlockTitle
        workInStandingPose {
          title
          percentage
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 735
                  quality: 95
                  placeholder: BLURRED
                  height: 990
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        workInSittingPose {
          title
          percentage
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 735
                  quality: 95
                  placeholder: BLURRED
                  height: 990
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        fullScreenSlider {
          slideTitle
          slideText
          slideImg {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1250
                  quality: 95
                  placeholder: BLURRED
                  height: 625
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      seoTextFields {
        seoText
        seoTitle
        buttonExpand
        buttonCollapse
      }
    }
    allWpProduct(
      filter: {locale: {locale: {eq: $lang}}, featured: {eq: true}}
      sort: {fields: menuOrder}
    ) {
      edges {
        node {
          ... on WpSimpleProduct {
            name
            price
            slug
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
            productCategories {
              nodes {
                name,
                slug
              }
            }
          }
          ... on WpVariableProduct {
            name
            price
            slug
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
            productCategories {
              nodes {
                name,
                slug
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
        cartFormSuccess {
          btnText
          btnTextCheck
          mainText
        }
        errFormSuccess {
          mainText
          btnText
        }
        unsubscribeFormSuccess {
          mainText
          btnText
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
      productBundle {
        bundleTitle
        bundleDesc
        bundleBtn
        bundleBtnAdded
        bundleGallery {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 610
                quality: 95
                placeholder: BLURRED
                height: 735
                formats: [AUTO, WEBP, AVIF]
              )
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

export default IndexPage