import React, { useEffect }  from 'react'
import { graphql, navigate } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import AccountIntro from '../components/Account/Intro/Intro'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { getCurrentCategories } from '../utils/getCurrentCategories'
import { getCookie } from '../utils/getCookie'

const History = ({ pageContext, data }) => {
  useEffect(() => {
    !!!getCookie('user_id') && navigate(`${pageContext.prefix}login`)
  }, [])

  if (!!!getCookie('user_id')) return null

  // Meta Data 
  const { title, metaDesc, breadcrumbs } = data.wpPage.seo
  
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

  // Page blocks
  const userInfo = JSON.parse(getCookie('user_info'))
  const orderList = data.allWpCustomer.edges.filter(item => item.node.databaseId === parseInt(getCookie('user_id')))[0].node.orders.nodes
  
  const pageTitle = data.wpPage.title
  
  const { 
    logoutText,
    emptyListTitle,
    orderHistoryFields,
    orderHistoryTitle,
    personalInfoFields,
    personalInfoTitle
  } = data.wpPage.profilePageFields

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
          <Breadcrumbs className="account-breadcrumbs" list={breadcrumbs} />
          <AccountIntro 
            tabName={'history'} 
            userInfo={userInfo}
            pageTitle={pageTitle}
            logoutText={logoutText}
            emptyListTitle={emptyListTitle}
            orderHistoryFields={orderHistoryFields}
            orderHistoryTitle={orderHistoryTitle}
            personalInfoFields={personalInfoFields}
            personalInfoTitle={personalInfoTitle}
            orderList={orderList}
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
  query getHistory($lang: String) {
    allWpCustomer {
      edges {
        node {
          databaseId
          orders {
            nodes {
              databaseId
              date(formatString: "DD.MM.yyy")
              status
              total
              orderNumber
              lineItems {
                nodes {
                  product {
                    node {
                      databaseId
                      image {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    wpPage(locale: {locale: {eq: $lang}}, slug: {eq: "profile"}) {
      title
      seo {
        title
        metaDesc
        breadcrumbs {
          text
          url
        }
      }
      profilePageFields {
        personalInfoTitle
        personalInfoFields {
          birthdayText
          editText
          emailText
          firstNameText
          lastNameText
          middleNameText
          passwordText
          phoneText
          saveText
        }
        orderHistoryTitle
        orderHistoryFields {
          amountOrderText
          orderDateText
          orderText
          reorderText
        }
        logoutText
        emptyListTitle
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

export default History