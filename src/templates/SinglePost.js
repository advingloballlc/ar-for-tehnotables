import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import Intro from '../components/SinglePost/Intro/Intro'
import Similar from '../components/SinglePost/Similar/Similar'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'

const SinglePost = ({ pageContext, data }) => {
  // Meta Data 
  const { title, metaDesc, breadcrumbs } = data.wpPost.seo

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

  // Page Blocks
  const {
    title: pageTitle,
    slug,
    content,
    featuredImage,
    terms,
    MorePostFields
  } = data.wpPost

  const {
    newsSliderTitle,
    socialShareTitle
  } = data.wpTehnotableThemeSetting.singleNewsFields

  const similarPosts = data.allWpPost.nodes.filter(post => post.slug !== slug)

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
              href={MorePostFields.postImg.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(' ')[0]} 
              as="image"
            />
            <link 
              rel="canonical" 
              href={`${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}${slug}`} 
            />
            { pageContext.langList.map(lang => {
              return (
                <link 
                  rel="alternate" 
                  hreflang={lang.wpmlLang} 
                  href={`${process.env.GATSBY_SITE_DOMAIN}${lang.path}${slug}`} 
                />
              )
            }) }
            <link 
              rel="alternate" 
              hreflang="x-default"
              href={`${process.env.GATSBY_SITE_DOMAIN}/${slug}`} 
            />
          </Helmet>
          <Breadcrumbs className="sinle-post-breadcrumbs" list={breadcrumbs} />
          <Intro
            title={pageTitle} 
            date={featuredImage.node.date} 
            img={MorePostFields.postImg.localFile}
            video={MorePostFields.postVideoLink}
            category={terms.nodes[0].name}
            content={content}
            shareTitle={socialShareTitle}
          />
          { similarPosts.length !== 0 && <Similar 
            title={newsSliderTitle} 
            posts={similarPosts} 
          /> }
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
  query getSinglePost($lang: String, $termSlug: String, $postSlug: String) {
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
      singleNewsFields {
        newsSliderTitle
        socialShareTitle
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
    wpPost(slug: {eq: $postSlug}, locale: {locale: {eq: $lang}}) {
      title
      slug
      featuredImage {
        node {
          sourceUrl
          date(formatString: "DD.MM.YYYY")
        }
      }
      terms {
        nodes {
          name
          slug
        }
      }
      content
      seo {
        breadcrumbs {
          text
          url
        }
        title
        metaDesc
      }
      MorePostFields {
        postVideoLink
        postImg {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1500
                quality: 95
                placeholder: BLURRED
                height: 840
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    allWpPost(filter: {locale: {locale: {eq: $lang}}, terms: {nodes: {elemMatch: {slug: {eq: $termSlug}}}}}) {
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
            name
            slug
          }
        }
      }
    }
  }
`

export default SinglePost