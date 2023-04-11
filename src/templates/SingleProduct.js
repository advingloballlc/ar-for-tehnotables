import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import SingleProductIntro from '../components/SingleProduct/Intro/Intro'
import SingleProductContent from '../components/SingleProduct/SIngleProductContent/SingleProductContent'
import SingleProductAuthor from '../components/SingleProduct/SingleProductAuthor/SingleProductAuthor'
import RecomendedProducts from '../components/RecomendedProducts/RecomendedProducts'
import Discount from '../components/Discount/Discount'
import ModalProduct from '../components/ModalProduct/ModalProduct'
import ModalThanks from '../components/ModalThanks/ModalThanks'
import ModalError from './../components/ModalError/ModalError'
import ModalCart from './../components/ModalCart/ModalCart'
import ModalCoockieMain from '../components/ModalCoockie/ModalCoockieMain'
import ModalCoockieSettings from '../components/ModalCoockie/ModalCoockieSettings'

import PrefixProvider from '../context/PrefixProvider'
import LangCodeProvider from '../context/LangCodeProvider'

import { addToCart } from './../cart/addToCart'
import { getCart } from '../cart/getCart'

import { getCurrentCategories } from '../utils/getCurrentCategories'
import { isBrowser } from '../utils/isBrowser'
import { setCookie } from '../utils/setCookie'
import { showCartModal } from '../utils/showCartModal'
import { showErrModal } from '../utils/showErrModal'
// import { clickOutside } from '../utils/clickOutside'

const SingleProduct = ({ pageContext, data }) => {
  // Meta data
  const { title, metaDesc, breadcrumbs } = data.wpProduct.seo
  
  // Common blocks
  const menu = data.wpTehnotableThemeSetting.mainMenuFields
  const header = data.wpTehnotableThemeSetting.siteHeaderFields
  const footer = data.wpTehnotableThemeSetting.siteFooterFields
  const cart = data.wpTehnotableThemeSetting.cartModalFields
  const validateErrors = data.wpTehnotableThemeSetting.validationErrorsFields
  const categoryList = getCurrentCategories(pageContext.categories, pageContext.wpmlLang)
  const { 
    errFormSuccess, 
    reviewFormSuccess, 
    reviewForm, 
    cartFormSuccess,
    coockieMain,
    coockieSettings
  } = data.wpTehnotableThemeSetting.thanksModalFields

  const productBundle = data.wpTehnotableThemeSetting.productBundle
  const productBundleInfo = data.allWpBundleProduct.nodes[0]

  const {
    contactsPhones,
    contactsEmail,
    contactsScheduleTime,
    youtubeLink,
    facebookLink,
    instagramLink,
    footerLabels
  } = data.wpTehnotableThemeSetting.siteFooterFields

  const recomendedProducts = data.allWpProduct.edges.filter(produc => produc.node.slug !== pageContext.productSlug)

  const { 
    addCartBtn,
    addedCartBtn,
    avaliableColorsText,
    detailsTitle,
    downloadText,
    instructionText,
    interiorGalleryTitle,
    productTabs,
    recommendedProductsTitle,
    reviewBtn,
    variabilatyText
  } = data.wpTehnotableThemeSetting.singleProductCommonFields

  // Page blocks
  const { 
    name,
    slug,
    databaseId,
    featuredImage, 
    galleryImages,
    reviewCount,
    reviews
  } = data.wpProduct

  const isVariation = Boolean(data.wpProduct.variations)
  const isColored = data.wpProduct.variations?.every(variations => variations.color && variations.color.length !== 0)
  const defaultAttributes = data.wpProduct.defaultAttributes && data.wpProduct.defaultAttributes.nodes

  const { 
    productDesigner,
    avaliableColors,
    avaliableColorsPrice,
    interiorGallery,
    mdfVariabilaty,
    pdfInstruction,
    productDelivery,
    productDescriptionDefaultStyle,
    productDetails,
    productDetailsImg,
    productShortDescription,
    productTechInfo,
    productVideo,
    model3d,
    productTypeTemplate,
    productSloganText,
    productDescriptionChildrenStyle,
    productDescriptionGamingStyle
  } = data.wpProduct.productSinglePageFields

  const isChangedColorCode = useRef(false)

  /* Intro, Sidebar */
  const [ isAddingToCart, setIsAddingToCart ] = useState(false)
  const [ isAddedToCart, setIsAddedToCart ] = useState(false)
  const [ isAddedBundelToCart, setIsAddedBundleToCart ] = useState(false)
  const [ isMobile, setIsMobile ] = useState(false)

  const [ gallerySlider, setGallerySlider ] = useState(galleryImages.nodes.map((img, index) => {
    return {
      id: index, 
      preview: img.localFile.publicURL
    }
  }))
  const [ mainPhoto, setMainPhoto ] = useState(featuredImage.node.localFile.publicURL)
  const [ price, setPrice ] = useState(data.wpProduct.price)
  const [ counter, setCounter ] = useState(1)
  const [ colorCode, setColorCode ] = useState('1000')
  const [ isVisibleColorCode, setIsVisibleColorCode ] = useState(false)

  const [ variationId, setVariationId ] = useState(null)

  const uniqColors = data.wpProduct.variations && data.wpProduct.variations.reduce((o, i) => {
    if (!o.find(v => v.color[1] === i.color[1])) {
      o.push({ ...i })
    }
    return o
  }, [])

  const [ color, setColor ] = useState(uniqColors && uniqColors.map(color => {
    let attributes = color.attributes,
        id = attributes.filter(attr => attr.name === 'pa_color')[0]?.attributeId
    
    return {
      color: color.color,
      id: id,
      isActive: defaultAttributes && defaultAttributes.some(defAttr => defAttr.attributeId === id)
    }
  }))

  const colorTitle = data.wpProduct.attributes && isColored && data.wpProduct.attributes.nodes.filter(attribute => {
    return attribute.variation && attribute.slug === 'pa_color'
  })[0].name

  const [ dropdowns, setDropdowns ] = useState(data.wpProduct.attributes && data.wpProduct.attributes.nodes.filter(attribute => {
    return attribute.variation && attribute.slug !== 'pa_color'
  }).map(attribute => ({ 
    ...attribute, 
    isOpen: false, 
    terms: attribute.terms.nodes.map(term => ({
      ...term, 
      isActive: defaultAttributes && defaultAttributes.some(defAttr => defAttr.attributeId === term.databaseId),
    })) 
  })))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // clickOutside('dropdown', setDropdowns, dropdowns)

    ScrollTrigger.matchMedia({
      '(min-width: 746px)': () => setIsMobile(false),
      '(max-width: 745px)': () => setIsMobile(true),
    })
  }, [])

  useEffect(() => {
    if (isVisibleColorCode && colorCode.trim() !== '' && !isChangedColorCode.current) {
      setPrice((parseInt(price) + avaliableColorsPrice).toString())

      isChangedColorCode.current = true
    }

    if (isVisibleColorCode && colorCode.trim() === '' && isChangedColorCode.current) {
      setPrice((parseInt(price) - avaliableColorsPrice).toString())

      isChangedColorCode.current = false
    }

    if (!isVisibleColorCode && isChangedColorCode.current) {
      setPrice((parseInt(price) - avaliableColorsPrice).toString())

      isChangedColorCode.current = false
    }
  }, [isVisibleColorCode, colorCode])

  useEffect(() => {
    if (!isVariation) return null 

    const activeId = []

    defaultAttributes 
      && defaultAttributes.length !== 0 
      && dropdowns.forEach(dropdown => activeId.push(dropdown.terms.some(term => term.isActive) && dropdown.terms.filter(term => term.isActive)[0].databaseId))

    isColored && activeId.push(color.some(cl => cl.isActive) && color.filter(cl => cl.isActive)[0].id)

    const variation = data.wpProduct.variations.map(variation => ({
      ...variation,
      ids: variation.attributes.map(attr => attr.attributeId)
    })).filter((item) => JSON.stringify(activeId.sort()) === JSON.stringify(item.ids.sort()))[0]

    if (variation) {
      setVariationId(variation.databaseId)
      setPrice((parseInt(variation.price) + (isVisibleColorCode && colorCode.trim() !== '' ? avaliableColorsPrice : 0)).toString())
      setMainPhoto(variation.image.localFile.publicURL)
      setGallerySlider(variation.gallery.map((img, index) => {
        return {
          id: index,
          preview: img.localFile.publicURL
        }
      }))
    }

    // Костиль (по іншому ніяк)
    if (isBrowser() && slug === 'height-adjustable-desk-model-strong') {
      const activeBreed = dropdowns.filter(dropdown => dropdown.slug === 'pa_breed')[0].terms.filter(term => term.isActive)[0]
      const items = document.querySelectorAll('.dropdown__item')

      items.forEach(item => item.classList.contains('hide') && item.classList.remove('hide'))

      if (
        activeBreed.databaseId === 3545 ||
        activeBreed.databaseId === 3544 ||
        activeBreed.databaseId === 3548 ||
        activeBreed.databaseId === 3547 ||
        activeBreed.databaseId === 3551 ||
        activeBreed.databaseId === 3550
      ) {
        items.forEach(item => {
          (item.innerHTML === '145×82' || item.innerHTML === '170×82') && item.classList.add('hide')
        })
      }

      if (activeBreed.databaseId === 3543 || activeBreed.databaseId === 3546 || activeBreed.databaseId === 3549) {
        items.forEach(item => {
          (item.innerHTML === '150x82' || item.innerHTML === '180×82') && item.classList.add('hide')
        })
      }
    }
  }, [color, dropdowns])


  const toggleDropdown = dropdownId => {
    setDropdowns(dropdowns.map(dropdown => ({
      ...dropdown,
      isOpen: dropdown.attributeId === dropdownId && !dropdown.isOpen ? true : false
    })))
  }

  const selectDropdownItem = (dropdownId, itemId, event) => {
    let parent = event.currentTarget.parentElement.classList.contains('simplebar-content') 
      ? event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
      : event.currentTarget.parentElement.parentElement.parentElement
    
    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setDropdowns(dropdowns.map(dropdown => ({
          ...dropdown,
          isOpen: dropdown.attributeId === dropdownId && false,
          terms: dropdown.terms.map(term => ({ 
            ...term, 
            isActive: dropdownId === dropdown.attributeId ? itemId === term.databaseId : term.isActive
          }))
        })))
      }, 150)

      setTimeout(() => parent.classList.remove('fade'), 200)
    }
  }

  const checkColorCode = event => setColorCode(event.currentTarget.value)

  const changeColorCode = () => setIsVisibleColorCode(prev => !prev)

  const changeColor = colorId => {
    setIsVisibleColorCode(false)

    setColor(color.map(item => {
      return {
        ...item,
        isActive: item.id === colorId
      }
    }))
  }

  const addToCartHandler = () => {
    NProgress.start()
    setIsAddingToCart(true)
    addToCart(data.wpProduct.databaseId, counter, variationId, isVisibleColorCode && colorCode && colorCode !== 0 ? colorCode : undefined, pageContext.wpmlLang) 
      .then(() => {
        getCart(pageContext.wpmlLang)
          .then(({ data }) => {
            setCookie('cart_count', data.total_items, {secure: true, 'max-age': 172800})
            setIsAddingToCart(false)
            NProgress.done()
            showCartModal()
            setIsAddedToCart(data.items.some(item => item.product_id === databaseId))
            isBrowser() && window.fbq('track', 'AddToCart')
          })
      })
      .catch(() => {
        setIsAddingToCart(false)
        NProgress.done()
        showErrModal()
      })
  }

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
          productTypeTemplate={productTypeTemplate}
          footerLabels={footerLabels}
          setIsAddedToCart={setIsAddedToCart}
          setIsAddedBundleToCart={setIsAddedBundleToCart}
          productId={databaseId}
          productBundleId={productBundleInfo.databaseId}
          microdata={{ itemscope: '', itemtype: 'http://schema.org/Product' }}
        >
          <Seo title={title} description={metaDesc} lang={pageContext.lang} />
          <Helmet>
            { gallerySlider && gallerySlider[0] && <link 
              rel="preload" 
              href={gallerySlider[0].preview} 
              as="image"
            /> }
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
          <Breadcrumbs className="single-product-breadcrumbs" list={breadcrumbs} />
          <SingleProductIntro
            gallerySlider={gallerySlider}
            counter={counter}
            setCounter={setCounter}
            colorCode={colorCode}
            checkColorCode={checkColorCode}
            isVisibleColorCode={isVisibleColorCode}
            changeColorCode={changeColorCode}
            color={color}
            changeColor={changeColor}
            addToCartBtn={addCartBtn}
            addedCartToBtn={addedCartBtn}
            variabilatyText={variabilatyText}
            avaliableColorsText={avaliableColorsText}
            downloadText={downloadText}
            instructionText={instructionText}
            cartInfo={cart.additionalInfo}
            productTitle={name}
            productShortDesc={productShortDescription}
            mdfVariabilaty={mdfVariabilaty}
            avaliableColors={avaliableColors}
            pdfInstruction={pdfInstruction}
            price={price}
            addToCartHandler={addToCartHandler}
            isAddingToCart={isAddingToCart}
            isVariation={isVariation}
            isColored={isColored}
            is3d={model3d}
            slug={slug}
            productSloganText={productSloganText}
            productTypeTemplate={productTypeTemplate}
            dropdowns={dropdowns}
            toggleDropdown={toggleDropdown}
            selectDropdownItem={selectDropdownItem}
            colorTitle={colorTitle}
            isAddedToCart={isAddedToCart}
          />
          <SingleProductContent
            counter={counter}
            setCounter={setCounter}
            colorCode={colorCode}
            checkColorCode={checkColorCode}
            isVisibleColorCode={isVisibleColorCode}
            changeColorCode={changeColorCode}
            color={color}
            changeColor={changeColor}
            detailsTitle={detailsTitle}
            productDetailsImg={productDetailsImg}
            productDetails={productDetails}
            interiorGalleryTitle={interiorGalleryTitle}
            productTabs={productTabs}
            reviewBtn={reviewBtn}
            addToCartBtn={addCartBtn}
            addedCartToBtn={addedCartBtn}
            variabilatyText={variabilatyText}
            avaliableColorsText={avaliableColorsText}
            cartInfo={cart.additionalInfo}
            featuredImage={mainPhoto}
            productTitle={name}
            interiorGallery={interiorGallery}
            porductDefaultLongDesc={productDescriptionDefaultStyle}
            productDeliveryDesc={productDelivery}
            mdfVariabilaty={mdfVariabilaty}
            avaliableColors={avaliableColors}
            price={price}
            reviewCount={reviewCount}
            reviews={reviews}
            addToCartHandler={addToCartHandler}
            isAddingToCart={isAddingToCart}
            productTechInfo={productTechInfo}
            productVideo={productVideo}
            isVariation={isVariation}
            isColored={isColored}
            productDescriptionChildrenStyle={productDescriptionChildrenStyle}
            productDescriptionGamingStyle={productDescriptionGamingStyle}
            productTypeTemplate={productTypeTemplate}
            dropdowns={dropdowns}
            toggleDropdown={toggleDropdown}
            selectDropdownItem={selectDropdownItem}
            colorTitle={colorTitle}
            reviewForm={reviewForm}
            isAddedToCart={isAddedToCart}
            slug={slug}
          />
          { !isMobile && productDesigner.profile && productDesigner.comment.title && <SingleProductAuthor 
              productDesigner={productDesigner} 
              productTypeTemplate={productTypeTemplate}
            /> }
          { recomendedProducts.length !== 0 && <RecomendedProducts
            title={recommendedProductsTitle}
            categoryList={categoryList}
            recomendedProducts={recomendedProducts}
          /> }
          { productBundleInfo.bundleItems && <Discount 
            productBundle={productBundle}
            productBundleInfo={productBundleInfo}
            isAddingToCart={isAddingToCart}
            setIsAddingToCart={setIsAddingToCart}
            isAddedToCart={isAddedBundelToCart}
            setIsAddedToCart={setIsAddedBundleToCart}
          /> }
          <ModalProduct 
            productMainId={data.wpProduct.databaseId} 
            validateErrors={validateErrors}
            reviewForm={reviewForm}
          />
          <ModalThanks
            desc={reviewFormSuccess.mainText}
            btn={reviewFormSuccess.btnText}
            text={reviewFormSuccess.mainDesc}
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
  query getSingleProduct($lang: String, $termSlug: String, $productSlug: String) {
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
    wpProduct(locale: {locale: {eq: $lang}}, slug: {eq: $productSlug}) {
      ... on WpVariableProduct {
        seo {
          title
          metaDesc
          breadcrumbs {
            text
            url
          }
        }
        databaseId
        name
        price
        slug
        galleryImages {
          nodes {
            localFile { 
              publicURL 
            }
          }
        }
        featuredImage {
          node {
            localFile { 
              publicURL 
            }
          }
        }
        variations {
          databaseId
          color
          price
          slug
          image { 
            localFile { 
              publicURL 
            } 
          }
          gallery { 
            localFile { 
              publicURL 
            } 
          }
          attributes {
            name
            value
            attributeId
            label
          }
        }
        defaultAttributes {
          nodes {
            attributeId
          }
        }
        attributes {
          nodes {
            ... on WpGlobalProductAttribute {
              name
              attributeId
              slug
              terms {
                nodes {
                  databaseId
                  name
                }
              }
            }
            variation
          }
        }
        reviewCount
        reviews {
          averageRating
          nodes {
            databaseId
            rating
            content
            date(formatString: "DD.MM.yyy")
            author {
              node {
                name
              }
            }
            replies {
              nodes {
                content
                id
                date(formatString: "DD.MM.yyy")
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
        productSinglePageFields {
          productTypeTemplate
          productSloganText
          model3d
          mdfVariabilaty {
            localFile {
              publicURL
            }
          }
          avaliableColors {
            localFile {
              publicURL
            }
          }
          avaliableColorsPrice
          pdfInstruction  {
            localFile {
              publicURL
            }
          }
          productShortDescription
          productDescriptionDefaultStyle
          productDelivery
          productTechInfo {
            desc
            fieldGroupName
            title
          }
          productVideo
          interiorGallery {
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 865
                  quality: 95
                  placeholder: BLURRED
                  height: 630
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          productDetails {
            coordsX
            coordsY
            description
            title
          }
          productDescriptionChildrenStyle {
            ... on WpVariableProduct_Productsinglepagefields_ProductDescriptionChildrenStyle_Benefits {
              benefitName
              benefitsRepeater {
                text
                title
              }
            }
            ... on WpVariableProduct_Productsinglepagefields_ProductDescriptionChildrenStyle_Reasons {
              reasonTitle
              reasonRepeater {
                image {
                  sourceUrl
                }
                text
                title
              }
            }
            ... on WpVariableProduct_Productsinglepagefields_ProductDescriptionChildrenStyle_Images {
              item {
                sourceUrl
              }
            }
            ... on WpVariableProduct_Productsinglepagefields_ProductDescriptionChildrenStyle_TextContent {
              editor
            }
          }
          productDescriptionGamingStyle {
            ... on WpVariableProduct_Productsinglepagefields_ProductDescriptionGamingStyle_TextContent {
              textEditor
            }
            ... on WpVariableProduct_Productsinglepagefields_ProductDescriptionGamingStyle_TwoColumnsImages {
              firstItem {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 415
                      quality: 95
                      placeholder: BLURRED
                      height: 490
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
              secondItem {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 415
                      quality: 95
                      placeholder: BLURRED
                      height: 490
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
            ... on WpVariableProduct_Productsinglepagefields_ProductDescriptionGamingStyle_FullContainerImage {
              singleImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 860
                      quality: 95
                      placeholder: BLURRED
                      height: 490
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
          productDetailsImg {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 865
                  quality: 95
                  placeholder: BLURRED
                  height: 910
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          productDesigner {
            comment {
              text
              title
            }
            profile {
              ... on WpDesigner {
                featuredImage {
                  node {
                    sourceUrl
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 325
                          quality: 95
                          placeholder: BLURRED
                          height: 375
                          formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                  }
                }
                title
                designerProfileFields {
                  employeePosition
                }
              }
            }
          }
        }
      }
      ... on WpSimpleProduct {
        seo {
          title
          metaDesc
          breadcrumbs {
            text
            url
          }
        }
        databaseId
        name
        price
        slug
        galleryImages {
          nodes {
            localFile { 
              publicURL 
            }
          }
        }
        featuredImage {
          node {
            localFile { 
              publicURL 
            }
          }
        }
        reviewCount
        reviews {
          averageRating
          nodes {
            databaseId
            rating
            content
            date(formatString: "DD.MM.yyy")
            author {
              node {
                name
              }
            }
            replies {
              nodes {
                content
                id
                date(formatString: "DD.MM.yyy")
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
        productSinglePageFields {
          model3d
          mdfVariabilaty {
            localFile {
              publicURL
            }
          }
          avaliableColors {
            localFile {
              publicURL
            }
          }
          avaliableColorsPrice
          pdfInstruction {
            localFile {
              publicURL
            }
          }
          productShortDescription
          productDescriptionDefaultStyle
          productDelivery
          productTechInfo {
            desc
            fieldGroupName
            title
          }
          productVideo
          interiorGallery {
            sourceUrl
          }
          productDetails {
            coordsX
            coordsY
            description
            title
          }
          productDetailsImg {
            sourceUrl
          }
          productDesigner {
            comment {
              text
              title
            }
            profile {
              ... on WpDesigner {
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                title
                designerProfileFields {
                  employeePosition
                }
              }
            }
          }
        }
      }
    }
    allWpProduct(
      filter: {locale: {locale: {eq: $lang}}, productCategories: {nodes: {elemMatch: {slug: {eq: $termSlug}}}}}
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
          btnText
          mainText
        }
        reviewFormSuccess {
          mainText
          mainDesc
          btnText
        }
        reviewForm {
          title
          reviewErrMessage
          labelRating
          labelName
          labelEmail
          labelComment
          btnText
        }
      }
      validationErrorsFields {
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
      singleProductCommonFields {
        productTabs {
          labelDescription
          labelPaymentAndDelivery
          labelReviews
          labelTechnicalInfo
          labelVideo
        }
        addCartBtn
        addedCartBtn
        avaliableColorsText
        detailsTitle
        downloadText
        instructionText
        interiorGalleryTitle
        recommendedProductsTitle
        reviewBtn
        variabilatyText
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

export default SingleProduct