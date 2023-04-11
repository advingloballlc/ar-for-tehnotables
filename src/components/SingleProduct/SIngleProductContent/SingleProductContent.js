import React, { useEffect, useState }  from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import SingleProductBox from './SingleProductBox'
import SingleProductSidebar from './SingleProductSidebar'

import './SingleProductContent.scss'

const SingleProductContent = ({
  counter,
  setCounter,
  decrementCount,
  colorCode,
  checkColorCode,
  isVisibleColorCode,
  changeColorCode,
  color,
  changeColor,
  detailsTitle,
  productDetailsImg,
  productDetails,
  interiorGalleryTitle,
  productTabs,
  reviewBtn,
  addToCartBtn,
  addedCartToBtn,
  variabilatyText,
  avaliableColorsText,
  cartInfo,
  featuredImage,
  productTitle,
  interiorGallery,
  porductDefaultLongDesc,
  productDeliveryDesc,
  mdfVariabilaty,
  avaliableColors,
  price,
  reviewCount,
  reviews,
  addToCartHandler,
  isAddingToCart,
  productTechInfo,
  productVideo,
  isVariation,
  isColored,
  productDescriptionChildrenStyle,
  productDescriptionGamingStyle,
  productTypeTemplate,
  dropdowns,
  toggleDropdown,
  selectDropdownItem,
  colorTitle,
  reviewForm,
  isAddedToCart,
  slug
}) => {
  const [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => setIsMobile(false),
      '(max-width: 991px)': () => setIsMobile(true),
    })
  }, [])

  return (
    <section className="single-product-content">
      { productTypeTemplate === 'gaming' && <div className="single-product-content__game-shape">
        <div className="single-product-content__game-circle">
          <StaticImage
            src="../../../images/game-bg.svg"
            alt="Game content shape"
            placeholder="none"
            quality={95}
            formats={['auto', 'webp', 'avif']}
            width={1903}
            height={808}
            loading="lazy"
          />
        </div>
      </div> }
      <div className="container">
        <div className="single-product-content__inner">
          <SingleProductBox
            detailsTitle={detailsTitle}
            productDetailsImg={productDetailsImg}
            productDetails={productDetails}
            interiorGalleryTitle={interiorGalleryTitle}
            productTabs={productTabs}
            reviewBtn={reviewBtn}
            interiorGallery={interiorGallery}
            porductDefaultLongDesc={porductDefaultLongDesc}
            productDeliveryDesc={productDeliveryDesc}
            reviewCount={reviewCount}
            reviews={reviews}
            productTechInfo={productTechInfo}
            productVideo={productVideo}
            productDescriptionChildrenStyle={productDescriptionChildrenStyle}
            productDescriptionGamingStyle={productDescriptionGamingStyle}
            productTypeTemplate={productTypeTemplate}
            reviewForm={reviewForm}
          />
          {
            !isMobile && <SingleProductSidebar
              counter={counter}
              setCounter={setCounter}
              decrementCount={decrementCount}
              colorCode={colorCode}
              checkColorCode={checkColorCode}
              isVisibleColorCode={isVisibleColorCode}
              changeColorCode={changeColorCode}
              color={color}
              changeColor={changeColor}
              addToCartBtn={addToCartBtn}
              addedCartToBtn={addedCartToBtn}
              variabilatyText={variabilatyText}
              avaliableColorsText={avaliableColorsText}
              cartInfo={cartInfo}
              featuredImage={featuredImage}
              productTitle={productTitle}
              mdfVariabilaty={mdfVariabilaty}
              avaliableColors={avaliableColors}
              price={price}
              addToCartHandler={addToCartHandler}
              isAddingToCart={isAddingToCart}
              isVariation={isVariation}
              isColored={isColored}
              dropdowns={dropdowns}
              toggleDropdown={toggleDropdown}
              selectDropdownItem={selectDropdownItem}
              colorTitle={colorTitle}
              isAddedToCart={isAddedToCart}
              slug={slug}
            />
          }
        </div>
      </div>
    </section>
  )
}

export default SingleProductContent