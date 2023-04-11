import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import ConfigiratorIntro from './../components/Configurator/Intro'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'
import ModalThanks from '../components/ModalThanks/ModalThanks'
import ModalError from '../components/ModalError/ModalError'
import ModalCart from '../components/ModalCart/ModalCart'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'

const Configurator = ({ pageContext, data }) => {
  const [ isAddingToCart, setIsAddingToCart ] = useState(false)
  const [ isAddedToCart, setIsAddedToCart ] = useState(false)
  
  // Meta Data 
  const { title, metaDesc, breadcrumbs } = data.wpPage.seo

  // Common blocks
  const menu = data.wpTehnotableThemeSetting.mainMenuFields
  const header = data.wpTehnotableThemeSetting.siteHeaderFields
  const footer = data.wpTehnotableThemeSetting.siteFooterFields
  const cart = data.wpTehnotableThemeSetting.cartModalFields
  const categoryList = getCurrentCategories(pageContext.categories, pageContext.wpmlLang)
  const {
    errFormSuccess,
    cartFormSuccess,
    reviewFormSuccess,
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

  const {
    addCartBtn,
    addedCartBtn
  } = data.wpTehnotableThemeSetting.singleProductCommonFields

  // Product
  const { 
    databaseId,
    name,
    price 
  } = data.wpProduct

  const { 
    constFrame,
    confTableTop,
    confOpt,
    confField
  } = data.wpPage.constructorPageFields

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
          isAddingToCart={isAddingToCart}
          footerLabels={footerLabels}
          setIsAddedToCart={setIsAddedToCart}
          productId={databaseId}
        >
          <Seo title={title} description={metaDesc} lang={pageContext.lang} />
          <Helmet>
            <link 
              rel="canonical" 
              href={`${process.env.GATSBY_SITE_DOMAIN}${pageContext.prefix}configurator`} 
            />
            { pageContext.langList.map(lang => {
              return (
                <link 
                  rel="alternate" 
                  hreflang={lang.wpmlLang} 
                  href={`${process.env.GATSBY_SITE_DOMAIN}${lang.path}configurator`} 
                />
              )
            }) }
            <link 
              rel="alternate" 
              hreflang="x-default"
              href={`${process.env.GATSBY_SITE_DOMAIN}/configurator`} 
            />
          </Helmet>
          <Breadcrumbs className="configurator-breadcrumbs" list={breadcrumbs} />
          <ConfigiratorIntro
            id={databaseId}
            name={name}
            productPrice={price}
            isAddingToCart={isAddingToCart}
            setIsAddingToCart={setIsAddingToCart}
            isAddedToCart={isAddedToCart}
            setIsAddedToCart={setIsAddedToCart}
            addToCartBtn={addCartBtn}
            addedCartToBtn={addedCartBtn}
            constFrame={constFrame}
            confTableTop={confTableTop}
            confOpt={confOpt}
            confField={confField}
          />
          <ModalThanks
            desc={reviewFormSuccess.mainText}
            btn={reviewFormSuccess.btnText}
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
        </Layout>
      </LangCodeProvider>
    </PrefixProvider>
  )
}

export const query = graphql`
  query getConfigurator($lang: String) {
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "configurator"}) {
      seo {
        title
        metaDesc
        breadcrumbs {
          text
          url
        }
      }
      title
      constructorPageFields {
        constFrame {
          constFrameTitle
          confFrameCount {
            confFrameCountTitle
            confFrameCountOne {
              confFrameCountListTitle
            }
            confFrameCountTwo {
              confFrameCountListTitle
            }
          }
          confFrameHeight {
            confFrameHeightTitle
            confFrameFrameOne {
              confFrameFrameListTitle
              confFrameFrameListPriceOne
              confFrameFrameListPriceTwo
            }
            confFrameFrameTwo {
              confFrameFrameListTitle
              confFrameFrameListPriceOne
              confFrameFrameListPriceTwo
            }
            confFrameFrameThree {
              confFrameFrameListTitle
              confFrameFrameListPriceOne
              confFrameFrameListPriceTwo
            }
          }
          confFrameColor {
            confFrameColorTitle
            confFrameColorPrice
          }
          confFrameWheels {
            confFrameWheelsTitle
            confFrameWheelsOne {
              confFrameWheelsOneTitle
              confFrameWheelsOnePriceOne
              confFrameWheelsOnePriceTwo
            }
            confFrameWheelsTwo {
              confFrameWheelsTwoTitle
              confFrameWheelsTwoPriceOne
              confFrameWheelsTwoPriceTwo
            }
            confFrameWheelsThree {
              confFrameWheelsThreeTitle
              confFrameWheelsThreePriceOne
              confFrameWheelsThreePriceTwo
            }
          }
        }
        confTableTop {
          confTableTopTitle
          confTableTopMaterial {
            confTableTopMaterialTitle
            confTableTopOne {
              confTableListTitle
            }
            confTableTopTwo {
              confTableListTitle
            }
            confTableTopThree {
              confTableListTitle
            }
          }
          confTableTopBreed {
            confTableTopBreedTitle
            confTableTopOak {
              confTableTopOakTitle
              confTableTopOak12020
              confTableTopOak12040
              confTableTopOak12115020
              confTableTopOak12115040
              confTableTopOak15118020
              confTableTopOak15118040
            }
            confTableTopAsh {
              confTableTopAshTitle
              confTableTopAsh12020
              confTableTopAsh12040
              confTableTopAsh12114420
              confTableTopAsh12114440
              confTableTopAsh14518020
              confTableTopAsh14518040
            }
            confTableTopNut {
              confTableTopNutTitle
              confTableTopNut12020
              confTableTopNut12040
              confTableTopNut12115020
              confTableTopNut12115040
              confTableTopNut15118020
              confTableTopNut15118040
            }
          }
          confTableTopMdf {
            confTableTopMdfTitle
            confTableTopMdf1
            confTableTopMdf2
            confTableTopMdf3
            confTableTopMdf4
            confTableTopMdf5
            confTableTopMdf6
            confTableTopMdf7
            confTableTopMdf8
            confTableTopMdf9
            confTableTopMdf10
            confTableTopMdf160
          }
          confTableTopDsp {
            confTableTopDspTitle
            confTableTopDsp1
            confTableTopDsp2
            confTableTopDsp3
            confTableTopDsp4
            confTableTopDsp5
            confTableTopDsp120
            confTableTopDsp121140
            confTableTopDsp141150
            confTableTopDsp151165
            confTableTopDsp166180
          }
          confTableTopMaterialThinkness {
            confTableTopMaterialThinknessTitle
            confTableTopMaterialThinknessOne
            confTableTopMaterialThinknessTwo
          }
          confTableTopMaterialSize {
            confTableTopMaterialTitle
            confTableTopMaterialOne
            confTableTopMaterialTwo
          }
          confTableTopMaterialTone {
            confTableTopMaterialToneTitle
            confTableTopMaterialToneOne
            confTableTopMaterialToneTwo
            confTableTopMaterialToneThree
            confTableTopMaterialToneFour
            confTableTopMaterialToneOilPrice
            confTableTopMaterialToneLakPrice
            confTableTopMaterialToneLakTonPrice
          }
        }
        confOpt {
          confOptTitle
          confHolesPos {
            confHolesPosTitle
            confHolesPos1
            confHolesPos2
            confHolesPos3
            confHolesPos4
          }
          confHolesKind {
            confHolesKindTitle
            confHolesKind1
            confHolesKind2
            confHolesKind3
            confHolesKind4
            confHolesKind5
            confHolesMetal1
            confHolesMetal2
            confHolesPlactic1
            confHolesPlactic2
            confHolesWithout
          }
          confInc {
            confIncTitle
            confInc1
            confInc2
            confIncPrice
          }
          confSystem {
            confSystemTitle
            confSystem1
            confSystem2
            confSystem3
            confSystemPrice
          }
          confMonitor {
            confMonitorTitle
            confMonitor1
            confMonitor2
            confMonitor3
            confMonitor4
            confMonitorDsp
            confMonitorMdf
            confMonitorWood
          }
          confCable {
            confCableTitle
            confCable1
            confCable2
            confCablePrice
          }
          confCharging {
            confChargingTitle
            confCharging1
            confCharging2
            confCharging3
            confCharging4
            confCharging5
            confCharging6
            confCharging7
            confChargingPrice
          }
          confRosette {
            confRosetteTitle
            confRosette1
            confRosette2
            confRosette3
            confRosettePrice
          }
          confHeadphone {
            confHeadphoneTitle
            confHeadphone1
            confHeadphone2
            confHeadphone3
            confHeadphonePrice
          }
          confCoaster {
            confCoasterTitle
            confCoaster1
            confCoaster2
            confCoaster3
            confCoasterPrice
          }
          confBar {
            confBarTitle
            confBar1
            confBar2
            confBar3
            confBarPriceLight
            confBarPriceWithoutlight
          }
          confBarPos {
            confBarPosTitle
            confBarPos1
            confBarPos2
          }
          confTwodrawes {
            confTwodrawesTitle
            confTwodrawes1
            confTwodrawes2
            confTwodrawes3
            confTwodrawes4
            confTwodrawesDsp
            confTwodrawesMdf
            confTwodrawesWood
          }
          confTwodrawesPos {
            confTwodrawesPosTitle
            confTwodrawesPos1
            confTwodrawesPos2
          }
          confPlywoodbox {
            confPlywoodboxTitle
            confPlywoodbox1
            confPlywoodbox2
            confPlywoodbox3
            confPlywoodboxA4
            confPlywoodboxA5
          }
          confPlywoodboxPos {
            confPlywoodboxPosTitle
            confPlywoodboxPos1
            confPlywoodboxPos2
          }
          confPlywoodboxTone {
            confPlywoodboxToneTitle
            confPlywoodboxTone1
            confPlywoodboxTone2
            confPlywoodboxTonePrice
          }
          confBaghook {
            confBaghookTitle
            confBaghook1
            confBaghook2
            confBaghook3
            confBaghookPrice
          }
          confCronhs {
            confCronhsTitle
            confCronhs1
            confCronhs2
            confCronhs3
            confCronhs4
            confCronhs5
            confCronhsElec1
            confCronhsElec2
            confCronhsMech1
            confCronhsMech2
          }
        }
        confField {
          confLabel
          confPlaceholder
        }
      }
    }
    wpProduct(locale: {locale: {eq: $lang}}, slug: {eq: "constructor"}) {
      ... on WpSimpleProduct {
        databaseId
        name
        price
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
        reviewFormSuccess {
          mainText
          btnText
        }
        cartFormSuccess {
          btnText
          btnTextCheck
          mainText
        }
        errFormSuccess {
          btnText
          mainText
        }
      }
      singleProductCommonFields {
        addCartBtn
        addedCartBtn
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

export default Configurator