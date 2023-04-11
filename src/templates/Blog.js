import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import Intro from '../components/Blog/Intro/Intro'
import Subscribe from '../components/Blog/Subscribe/Subscribe'
import ModalThanks from '../components/ModalThanks/ModalThanks'
import ModalError from '../components/ModalError/ModalError'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'


const Blog = ({ pageContext, data }) => {
  // Meta Data 
  const { title, metaDesc, breadcrumbs } = data.wpPage.seo

  // Common Block
  const menu = data.wpTehnotableThemeSetting.mainMenuFields
  const header = data.wpTehnotableThemeSetting.siteHeaderFields
  const footer = data.wpTehnotableThemeSetting.siteFooterFields
  const cart = data.wpTehnotableThemeSetting.cartModalFields
  const validateErrors = data.wpTehnotableThemeSetting.validationErrorsFields
  const categoryList = getCurrentCategories(pageContext.categories, pageContext.wpmlLang)
  const { 
    subscribeFormSuccess, 
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
  const pageTitle = data.wpPage.title
    
  const {
    blogCategoriesTitle,
    subscribeForm
  } = data.wpPage

  const postCategories = data.allWpCategory.nodes

  const posts = data.allWpPost.edges
  const pageInfo = data.allWpPost.pageInfo

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
            { pageInfo.hasPreviousPage && <link 
              rel="prev" 
              href={pageInfo.currentPage > 2 ? `${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}blog/page/${pageInfo.currentPage - 1}` : `${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}blog`} 
            /> }
            { pageInfo.hasNextPage && <link 
              rel="next" 
              href={`${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}blog/page/${pageInfo.currentPage + 1}`} 
            /> }
            <link 
              rel="canonical" 
              href={pageInfo.currentPage === 1 ? `${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}blog` : `${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}blog/page/${pageInfo.currentPage}`} 
            />
            { pageContext.langList.map(lang => {
              return (
                <link 
                  rel="alternate" 
                  hreflang={lang.wpmlLang} 
                  href={pageInfo.currentPage === 1 ? `${process.env.GATSBY_SITE_DOMAIN}${lang.path}blog` : `${process.env.GATSBY_SITE_DOMAIN}${lang.path}blog/page/${pageInfo.currentPage}`} 
                />
              )
            }) }
            <link 
              rel="alternate" 
              hreflang="x-default"
              href={`${process.env.GATSBY_SITE_DOMAIN}/${pageInfo.currentPage === 1 ? 'blog' : `blog/page/${pageInfo.currentPage}`}`} 
            />
          </Helmet>
          <Breadcrumbs className="blog-breadcrumbs" list={breadcrumbs} />
          <Intro 
            pageTitle={pageTitle} 
            blogCategoriesTitle={blogCategoriesTitle} 
            categoriesList={postCategories}
            posts={posts}
            pageInfo={pageInfo}
          />
          <Subscribe 
            subscribeForm={subscribeForm} 
            validateErrors={validateErrors}
          />
          <ModalThanks
            desc={subscribeFormSuccess.mainText} 
            btn={subscribeFormSuccess.btnText}
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
  query getBlogPage($lang: String, $skip: Int = 0) {
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "blog"}) {
      seo {
        title
        metaDesc
        breadcrumbs {
          text
          url
        }
      }
      title
      blogCategoriesTitle {
        blogCatTitle
        blogErrTitle
      }
      uri
      subscribeForm {
        subscribeForm {
          title
          inputPlaceholder
          text
          submitButtonText
        }
      }
    }
    allWpCategory(filter: {locale: {locale: {eq: $lang}}}) {
      nodes {
        databaseId
        name
        slug
        count
        posts {
          nodes {
            title
            date(formatString: "DD.MM.YYYY")
            slug
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 480
                      quality: 95
                      placeholder: BLURRED
                      height: 570
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
            terms {
              nodes {
                ... on WpCategory {
                  name
                  slug
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
        errFormSuccess {
          mainText
          btnText
        }
        subscribeFormSuccess {
          mainText
          btnText
        }
      }
      validationErrorsFields {
        errEmptyEmail
        errInvalidEmail
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
        subscribeFormSuccess {
          btnText
          mainText
        }
      }
    }
    allWpPost(filter: {locale: {locale: {eq: $lang}}}, limit: 21, skip: $skip) {
      edges {
        node {
          title
          date(formatString: "DD.MM.YYYY")
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 480
                    quality: 95
                    placeholder: BLURRED
                    height: 570
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          terms {
            nodes {
              ... on WpCategory {
                name
                slug
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
  }
`

export default Blog