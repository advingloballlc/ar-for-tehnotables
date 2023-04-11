import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import SingleProductTabs from './SingleProductTabs'
import SingleProductSlider from './SingleProductSlider'
import SingleProductDetails from './SingleProductDetails'

const SingleProductBox = ({ 
  detailsTitle,
  productDetailsImg,
  productDetails,
  interiorGalleryTitle,
  productTabs,
  reviewBtn,
  interiorGallery,
  porductDefaultLongDesc,
  productDeliveryDesc,
  reviewCount,
  reviews,
  productTechInfo,
  productVideo,
  productDescriptionChildrenStyle,
  productDescriptionGamingStyle,
  productTypeTemplate,
  reviewForm
}) => {
  let [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 481px)': () => setIsMobile(false),
      '(max-width: 480px)': () => setIsMobile(true)
    })
  }, [])

  return (
    <div className="single-product-content__box single-product-content-box">
      <SingleProductTabs 
        productTabs={productTabs} 
        reviewBtn={reviewBtn} 
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
      { !isMobile && interiorGallery && <SingleProductSlider 
        interiorGalleryTitle={interiorGalleryTitle} 
        interiorGallery={interiorGallery}
      /> }
      { productDetails && <SingleProductDetails 
        detailsTitle={detailsTitle} 
        productDetailsImg={productDetailsImg}
        productDetails={productDetails}
      /> }
    </div>
  )
}

export default SingleProductBox