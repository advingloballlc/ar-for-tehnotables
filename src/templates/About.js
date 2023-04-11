import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import AboutIntro from '../components/About/Intro/Intro'
import AboutInfo from '../components/About/Info/Info'
import ParallaxSlider from '../components/About/ParallaxSlider/ParallaxSlider'
import AboutQuote from '../components/About/Quote/Quote'
import Story from '../components/About/Story/Story'
import Team from '../components/About/Team/Team'
import AboutInovation from '../components/About/Inovation/Inovation'

import MainAbout from '../components/MainAbout/MainAbout'
import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'


const About = ({ pageContext, data }) => {
  let [ isHiddenQuote, setHiddenQuote ] = useState(false)

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

  const {
    ourTeamTitle,
    ourTeamList,
    ourStoryTitle,
    ourStorySliderItems,
    innovationTitle,
    innovationListItems,
    secondScreenSliderItems,
    firstInUkraineTitle,
    firstInUkraineSubtitle,
    aboutUsTitle,
    aboutUsText,
    aboutUsVideoImg,
    aboutUsVideoSrc,
    aboutUsButtonPlay,
    secondScreenTitle,
    secondScreenText,
    firstScreenSliderItems
  } = data.wpPage.aboutUsPageFields


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1201px)': () => setHiddenQuote(false),
      '(max-width: 1200px)': () => setHiddenQuote(true)
    })
  }, [])

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
              href={firstScreenSliderItems[0].itemImage.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(' ')[0]} 
              as="image"
            />
            <link 
              rel="canonical" 
              href={`${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}about-us`} 
            />
            { pageContext.langList.map(lang => {
              return (
                <link 
                  rel="alternate" 
                  hreflang={lang.wpmlLang} 
                  href={`${process.env.GATSBY_SITE_DOMAIN}${lang.path}about-us`} 
                />
              )
            }) }
            <link 
              rel="alternate" 
              hreflang="x-default"
              href={`${process.env.GATSBY_SITE_DOMAIN}/about-us`} 
            />
          </Helmet>
          <Breadcrumbs className="about-breadcrumbs" list={breadcrumbs} />
          <AboutIntro firstScreenSliderItems={firstScreenSliderItems} />
          <AboutInfo secondScreenTitle={secondScreenTitle} secondScreenText={secondScreenText} />
          <ParallaxSlider secondScreenSliderItems={secondScreenSliderItems} />
          { !isHiddenQuote && <AboutQuote firstInUkraineTitle={firstInUkraineTitle} firstInUkraineSubtitle={firstInUkraineSubtitle} /> }
          <Story ourStoryTitle={ourStoryTitle} ourStorySliderItems={ourStorySliderItems} />
          <Team 
            ourTeamTitle={ourTeamTitle} 
            ourTeamList={ourTeamList}
          />
          { !isHiddenQuote && <AboutInovation innovationTitle={innovationTitle} innovationListItems={innovationListItems} /> }
          <MainAbout
            isBtn={false}
            title={aboutUsTitle}
            desc={aboutUsText}
            img={aboutUsVideoImg}
            video={aboutUsVideoSrc}
            playBtnText={aboutUsButtonPlay}
          />
          <Gallery gallery={gallery} />
          <Quote promo={promo} />
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
  query getAboutUsPage($lang: String) {
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "about-us"}) {
      seo {
        title
        metaDesc
        breadcrumbs {
          text
          url
        }
      }
      title
      aboutUsPageFields {
        firstScreenSliderItems {
          itemTitle
          itemImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1920
                  quality: 95
                  placeholder: BLURRED
                  height: 800
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          itemImageTablet {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 768
                  quality: 95
                  placeholder: BLURRED
                  height: 570
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          itemImageMobile {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 480
                  quality: 95
                  placeholder: BLURRED
                  height: 300
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        secondScreenTitle
        secondScreenText
        secondScreenSliderItems {
          itemContent {
            itemText
            itemTitle
          }
          itemImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 952
                  quality: 95
                  placeholder: BLURRED
                  height: 937
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        firstInUkraineTitle
        firstInUkraineSubtitle
        ourStoryTitle
        ourStorySliderItems {
          itemTitle
          itemDate
          itemDescription
          itemImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 990
                  quality: 95
                  placeholder: BLURRED
                  height: 450
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        ourTeamTitle
        ourTeamList {
          photo {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 275
                  quality: 95
                  placeholder: BLURRED
                  height: 295
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          name
          position
          socialMedia {
            facebookLink
            instagramLink
            linkedinLink
            twitterLink
          }
        }
        innovationTitle
        innovationListItems {
          itemName
          itemDescription
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
        aboutUsButtonPlay
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

export default About