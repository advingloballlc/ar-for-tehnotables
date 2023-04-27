import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ReactModal from 'react-modal'

import SingleProductTabs from './SingleProductTabs'
import SingleProductSlider from './SingleProductSlider'
import SingleProductDetails from './SingleProductDetails'


import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

  import wpn_table from '../../../images/qr/wpn__table.png'
  import GamingBlack from '../../../images/qr/gaming_table_black.png'
  import GamingWhite from '../../../images/qr/gaming_table_white.png'
  import childrenTableBlue from '../../../images/qr/children_table_blue.png'
  import childrenTablePink from '../../../images/qr/children_table_pink.png'
  import strongWoodWhiteNut from '../../../images/qr/strong__wood_white_nut.png'
  import strongWoodBlackNut from '../../../images/qr/strong_wood_black_nut.png'
  import strongDspWhite from '../../../images/qr/strong_dsp_white.png'
  import strongMdfOakWhite from '../../../images/qr/strong_mdf_oak_white.png'
  import strongMdfOakBlack from '../../../images/qr/strong_mdf_oak_black.png'
  import strongMdfLanselott from '../../../images/qr/lanselott.png'

const SingleProductBox = ({ 
  slug,
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
  reviewForm, color
}) => {
  let [ isMobile, setIsMobile ] = useState(false);
  
  const activeColor = color && color.some(cl => cl.isActive) && color.filter(cl => cl.isActive)[0].color[1];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 481px)': () => setIsMobile(false),
      '(max-width: 480px)': () => setIsMobile(true)
    })
  }, [])



  return (
    <div className="single-product-content__box single-product-content-box">
   
      <div className="backdrop" >     
     <div id="ar-wpn" className='ar-thumb' style={{color: '#000000', width: 450, height: 450}}>
     <img className='ar-qr' src={wpn_table}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text'>TRY ON!</p>   
</div>

<div className="backdrop" >  
     <div id="ar-gaming-black" className='ar-thumb' style={{color: '#000000', width: 450, height: 450}}>
     <img className='ar-qr' src={GamingBlack}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text'>TRY ON!</p>
</div>
</div>

<div className="backdrop" >  
     <div id="ar-gaming-white" className='ar-thumb' style={{color: '#000000', width: 450, height: 450}}>
    <img className='ar-qr' src={GamingWhite}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text'>TRY ON!</p>
</div>
</div>

<div className="backdrop" > 
     <div id="ar-children-pink" className='ar-thumb-children' style={{color: '#fffffff', width: 450, height: 450}}>
       <img className='ar-qr-children' src={childrenTablePink}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text-children'>TRY ON!</p>    
</div>
</div>

<div className="backdrop" > 
     <div id="ar-children-blue" className='ar-thumb-children' style={{color: '#fffffff', width: 450, height: 450}}>
       <img className='ar-qr-children' src={childrenTableBlue}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text-children'>TRY ON!</p>    
</div>
</div>

<div className="backdrop" >  
     <div id="ar-wood-oak-white" className='ar-thumb' style={{color: '#000000', width: 450, height: 450}}>
    <img className='ar-qr' src={strongWoodWhiteNut}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text'>TRY ON!</p>
</div>
</div>

<div className="backdrop" >  
     <div id="ar-wood-oak-black" className='ar-thumb' style={{color: '#000000', width: 450, height: 450}}>
    <img className='ar-qr' src={strongWoodWhiteNut}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text'>TRY ON!</p>
</div>
</div>

<div className="backdrop" >  
     <div id="ar-nut-oak-black" className='ar-thumb' style={{color: '#000000', width: 450, height: 450}}>
    <img className='ar-qr' src={strongWoodBlackNut}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text'>TRY ON!</p>
</div>
</div>

<div className="backdrop" >  
     <div id="ar-nut-oak-white" className='ar-thumb' style={{color: '#000000', width: 450, height: 450}}>
    <img className='ar-qr' src={strongWoodWhiteNut}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text'>TRY ON!</p>
</div>
</div>

<div className="backdrop" >  
     <div id="ar-strong-dsp" className='ar-thumb' style={{color: '#000000', width: 450, height: 450}}>
    <img className='ar-qr' src={strongDspWhite}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text'>TRY ON!</p>
</div>
</div>

<div className="backdrop" >  
     <div id="ar-strong-mdf" className='ar-thumb' style={{color: '#000000', width: 450, height: 450}}>
    <img className='ar-qr' src={strongMdfLanselott}/>
      <button className='ar-button' onClick={() => Fancybox.close()}></button>
      <p className='ar-text'>TRY ON!</p>
</div>
</div>

</div> 
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
        interiorGallery={interiorGallery} />}
      { productDetails && <SingleProductDetails 
        detailsTitle={detailsTitle} 
        productDetailsImg={productDetailsImg}
        productDetails={productDetails}
      /> }
    </div>
  )
}

export default SingleProductBox