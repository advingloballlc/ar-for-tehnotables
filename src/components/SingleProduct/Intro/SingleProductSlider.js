import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectFade } from 'swiper'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SimpleBar from 'simplebar-react'
import {  forwardRef, useImperativeHandle } from "react"
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'


import 'simplebar/dist/simplebar.min.css'

import SingleProductModel from './SingleProductModel'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-fade'

import { showProductGallery } from '../../../utils/showProductGallery'
import { getModelPath } from '../../../utils/getModelPath'


import sprite from '../../../icons/sprite.svg'

import lineChild from '../../../images/line-blue.svg'
import lineGame from '../../../images/line-red.svg'
import lineDefault from '../../../images/line.svg'
import gameCircle from '../../../images/game-circle-bg.svg'
import { isBrowser } from '../../../utils/isBrowser'



const isMobile = typeof window !== 'undefined' && navigator.userAgentData.mobile;

const SingleProductSlider = ({ 
  gallerySlider, 
  downloadText, 
  instructionText, 
  pdfInstruction,
  is3d,
  slug,
  productSloganText,
  productTypeTemplate,
  color,
  dropdowns,
  colorCode,
  tableLength, 

}) => {
  const slider = useRef(null)
  
  const activeColor = color && color.some(cl => cl.isActive) && color.filter(cl => cl.isActive)[0].color[1],
        activeBreed = dropdowns && dropdowns.some(item => item.slug === 'pa_breed') && dropdowns.filter(item => item.slug === 'pa_breed')[0].terms.filter(item => item.isActive)[0].name,
        activeDspColor = dropdowns && dropdowns.some(item => item.slug === 'pa_kolir-dps') && dropdowns.filter(item => item.slug === 'pa_kolir-dps')[0]?.terms.filter(item => item.isActive)[0]?.name,
        activeMdfColor = dropdowns && dropdowns.some(item => item.slug === 'pa_kolir-mdf') && dropdowns.filter(item => item.slug === 'pa_kolir-mdf')[0]?.terms.filter(item => item.isActive)[0]?.name,
        activePlywoodboxSize = dropdowns && dropdowns.some(item => item.slug === 'pa_rozmir') && dropdowns.filter(item => item.slug === 'pa_rozmir')[0]?.terms.filter(item => item.isActive)[0]?.name,
        activeTwoDrawesMaterial = dropdowns && dropdowns.some(item => item.slug === 'pa_material') && dropdowns.filter(item => item.slug === 'pa_material')[0]?.terms.filter(item => item.isActive)[0]?.name
  const activeTopTableSize = dropdowns && dropdowns.some(item => item.slug === 'pa_tabletop-size') && dropdowns.filter(item => item.slug === 'pa_tabletop-size')[0]?.terms.filter(item => item.isActive)[0]?.name
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    showProductGallery()
  }, [])

  return (

    <div className={`single-product-intro__slider-wrapper`}>
      { (gallerySlider.length >= 1 && is3d || gallerySlider.length > 1 && !is3d) && <SimpleBar 
        className={`single-product-intro__slider-pagination`}
        autoHide={false}
      >
        <div className="single-product-intro__slider-pagination-inner">
          { is3d && <div 
            className="single-product-intro__slider-pagination-item active"
            onClick={e => {
              let target = e.currentTarget
              slider.current.swiper.slideTo(0)

              for(let item of target.parentElement.children) {
                item.classList.remove('active')
              }

              target.classList.add('active')
            }}
          >
            <svg><use href={`${sprite}#model`}></use></svg>
          </div> }
          
          { gallerySlider.map((item, index) => {
            return (
              <div 
                className={`single-product-intro__slider-pagination-item ${!is3d && index === 0 ? 'active' : ''}`} 
                key={item.id}
                onClick={e => {
                  let target = e.currentTarget
                  is3d ? slider.current.swiper.slideTo(index + 1) : slider.current.swiper.slideTo(index)

                  for(let item of target.parentElement.children) {
                    item.classList.remove('active')
                  }

                  target.classList.add('active')
                }}
              >
                <img src={item.preview} alt="" width="95" height="80" loading="eager" />
              </div>
            )
          }) }
    {(slug === 'model-strong-dsp'|| slug === 'model-strong-mdf' || slug === 'height-adjustable-desk-model-strong' || slug === 'work-station-wpn' || slug === 'gaming_desk' || slug === 'stil-dlja-shkoljariv') &&
              <div 
                className={slug === 'stil-dlja-shkoljariv' ? `single-product-intro__slider-pagination_ar-item-children` : `single-product-intro__slider-pagination_ar-item`} 
                // key={item.id}
                onClick={e => { 

                 

                  if(isBrowser) {

                  //  console.log("Window is ready")

                  if(!isMobile){ 

                    if(slug === 'work-station-wpn'){   
                         Fancybox.show([
                      {src: '#ar-wpn', 
                  modal: true }],
                  {
                    showClass: 'fancybox-fadeIn',
                    hideClass: 'fancybox-fadeOut',
                    dragToClose: false,
                    parentEl: document.querySelector('#___gatsby')}
                  )
                  }

                  if(slug === 'gaming_desk' && activeColor === '#000000'){   
                    Fancybox.show([
                 {src: '#ar-gaming-black', 
             modal: true }],
             {
               showClass: 'fancybox-fadeIn',
               hideClass: 'fancybox-fadeOut',
               dragToClose: false,
               parentEl: document.querySelector('#___gatsby')}
             )
             }

             if(slug === 'gaming_desk' && activeColor === '#ffffff'){   
              Fancybox.show([
           {src: '#ar-gaming-white', 
            modal: true }],
           {
             showClass: 'fancybox-fadeIn',
             hideClass: 'fancybox-fadeOut',
              dragToClose: false,
               parentEl: document.querySelector('#___gatsby')}
           )
            } 
       
            if(slug === 'stil-dlja-shkoljariv' && activeColor === '#dda4a4'){   
              Fancybox.show([
               {src: '#ar-children-pink', 
               modal: true }],
                {
                showClass: 'fancybox-fadeIn',
                 hideClass: 'fancybox-fadeOut',
                  dragToClose: false,
                  parentEl: document.querySelector('#___gatsby')}
                     )
                   }

          if(slug === 'stil-dlja-shkoljariv' && activeColor === '#7daed8'){   
                Fancybox.show([
                 {src: '#ar-children-blue', 
                  modal: true }],
               {
              showClass: 'fancybox-fadeIn',
               hideClass: 'fancybox-fadeOut',
               dragToClose: false,
                parentEl: document.querySelector('#___gatsby')}
                   )
                  }

                  if(slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Дуб' && activeColor === '#ffffff' && activeTopTableSize === '150x82'){   
                    Fancybox.show([
                     {src: '#ar-wood-oak-white', 
                      modal: true }],
                   {
                  showClass: 'fancybox-fadeIn',
                   hideClass: 'fancybox-fadeOut',
                   dragToClose: false,
                    parentEl: document.querySelector('#___gatsby')}
                       )
                      }

                      if(slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Дуб' && activeColor === '#000000' && activeTopTableSize === '150x82'){   
                        Fancybox.show([
                         {src: '#ar-wood-oak-black', 
                          modal: true }],
                       {
                      showClass: 'fancybox-fadeIn',
                       hideClass: 'fancybox-fadeOut',
                       dragToClose: false,
                        parentEl: document.querySelector('#___gatsby')}
                           )
                          }
                          
                          if(slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Горіх' && activeColor === '#000000' && activeTopTableSize === '150x82'){   
                            Fancybox.show([
                             {src: '#ar-nut-oak-black', 
                              modal: true }],
                           {
                          showClass: 'fancybox-fadeIn',
                           hideClass: 'fancybox-fadeOut',
                           dragToClose: false,
                            parentEl: document.querySelector('#___gatsby')}
                               )
                              } 
                              
                              if(slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Горіх' && activeColor === '#ffffff' && activeTopTableSize === '150x82'){   
                                Fancybox.show([
                                 {src: '#ar-nut-oak-white', 
                                  modal: true }],
                               {
                              showClass: 'fancybox-fadeIn',
                               hideClass: 'fancybox-fadeOut',
                               dragToClose: false,
                                parentEl: document.querySelector('#___gatsby')}
                                   )
                                  }    


                                  if(slug === 'model-strong-dsp' && activeDspColor === 'Білий преміум' && activeColor === '#ffffff' && activeTopTableSize === '140x82'){   
                                    Fancybox.show([
                                     {src: '#ar-strong-dsp', 
                                      modal: true }],
                                   {
                                  showClass: 'fancybox-fadeIn',
                                   hideClass: 'fancybox-fadeOut',
                                   dragToClose: false,
                                    parentEl: document.querySelector('#___gatsby')}
                                       )
                                      }


                                      if(slug === 'model-strong-mdf' &&  activeMdfColor === 'Ланселот' && activeColor === '#000000' && activeTopTableSize === '140x82'){   
                                        Fancybox.show([
                                         {src: '#ar-strong-mdf', 
                                          modal: true }],
                                       {
                                      showClass: 'fancybox-fadeIn',
                                       hideClass: 'fancybox-fadeOut',
                                       dragToClose: false,
                                        parentEl: document.querySelector('#___gatsby')}
                                           )
                                          }
              }
            
                  if (isMobile) {
      
                     if(slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Дуб' && activeColor === '#000000' && activeTopTableSize === '150x82' ){ 
                 
                      window.location.href = 'https://technotables.advin-global.com/qr/strong_mdf_150_oak_black';
                     }
                     
                     if(slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Дуб' && activeColor === '#ffffff' && activeTopTableSize === '150x82'){ 
                      window.location.href = 'https://technotables.advin-global.com/qr/strong_mdf_150_oak_white'
                     }
                     //OREH
                      
                     if(slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Горіх' && activeColor === '#ffffff' && activeTopTableSize === '150x82'){ 
                      window.location.href = 'https://technotables.advin-global.com/qr/strong__wood_150_white_nut'
                      }  

                       if(slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Горіх' && activeColor === '#000000' && activeTopTableSize === '150x82'){ 
                        window.location.href = 'https://technotables.advin-global.com/qr/strong_wood_150_black_nut'  
                       }
                
                     if(slug === 'model-strong-dsp' && activeDspColor === 'Білий преміум' && activeColor === '#ffffff' && activeTopTableSize === '140x82'){
                      window.location.href = 'https://technotables.advin-global.com/qr/strong_dsp__white'
                     }  

                     if(slug === 'model-strong-mdf' &&  activeMdfColor === 'Ланселот' && activeColor === '#000000' && activeTopTableSize === '140x82'){ 
                      window.location.href = 'https://technotables.advin-global.com/qr/strong_mdf_lanselott'
                     }
                  
                     if( slug === 'work-station-wpn'){ 
                      window.location.href = 'https://technotables.advin-global.com/qr/wpn__table'
                      }

                      if( slug === 'stil-dlja-shkoljariv' && activeColor === '#7daed8'){ 
                        window.location.href = 'https://technotables.advin-global.com/qr/children_s_table_blue'
                       } 

                       if( slug === 'stil-dlja-shkoljariv' && activeColor === '#dda4a4'){ 
                        window.location.href = 'https://technotables.advin-global.com/qr/children_s_table_pink'
                       }

                       if( slug === 'gaming_desk' && activeColor === '#ffffff'){ 
                        window.location.href = 'https://technotables.advin-global.com/qr/gaming_table_white'
                       }
                       
                       if( slug === 'gaming_desk' && activeColor === '#000000'){ 
                        window.location.href = 'https://technotables.advin-global.com/qr/gaming_table_black'
                       } 
             } 
            }
                }

           }     
              >  
                <svg ><use href={`${sprite}#ar-icon`}></use></svg> 
            </div >}
       
        </div>
      </SimpleBar> }     
      { (gallerySlider.length >= 1 && is3d || gallerySlider.length > 1 && !is3d) && <div className="single-product-intro-slider__nav">
        <div className="single-product-intro-slider__btn single-product-intro-slider__prev">
          <svg><use href={`${sprite}#prev-arrow`} /></svg>
        </div>
        <div className="single-product-intro-slider__btn single-product-intro-slider__next">
          <svg><use href={`${sprite}#next-arrow`} /></svg>
        </div>
      </div> }
      { (is3d || pdfInstruction) && <div className="single-product-intro-slider__controls">
        { is3d && <a className="single-product-intro-slider__controls-elem" download href={getModelPath(slug)}>
          <span className="single-product-intro-slider__controls-icon">
            <svg><use href={`${sprite}#download`} /></svg>
          </span>
          <span className="single-product-intro-slider__controls-text">{downloadText}</span>
        </a> }
        { pdfInstruction && <a className="single-product-intro-slider__controls-elem" href={pdfInstruction} target="_blank" rel="noreferrer">
          <span className="single-product-intro-slider__controls-icon">
            <svg><use href={`${sprite}#pdf`} /></svg>
          </span>
          <span className="single-product-intro-slider__controls-text">{instructionText}</span>
        </a> }
      </div> }
      <div className={`single-product-intro__slider-inner`}>
        { (productTypeTemplate !== 'child' && productTypeTemplate !== 'gaming') && <span className="single-product-intro__slider-shadow"></span> }
        { productTypeTemplate === 'gaming' && <div className="single-product-intro__slider-circle">
          <img
            src={gameCircle}
            alt="Game circle bakcground"
            width={735}
            height={745}
            loading="eager"
          />
        </div> }
        { 
          productSloganText && <div 
            className={`single-product-intro-slider__slogan ${productTypeTemplate === 'child' ? 'child' : productTypeTemplate === 'gaming' ? 'game' : ''}`}>
              { productTypeTemplate === 'gaming' && <svg><use href={`${sprite}#gamepad`}></use></svg> }
              {productSloganText}
          </div> 
        }
        <Swiper
          className={`single-product-intro__slider single-product-intro-slider`}
          ref={slider}
          modules={[Pagination, Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          speed={500}
          allowTouchMove={false}
          navigation={{
            prevEl: '.single-product-intro-slider__prev',
            nextEl: '.single-product-intro-slider__next'
          }}
          onInit={swiper => {
            let sliderHeight = swiper.el.offsetHeight
            let sliderPagination = !is3d
              ? swiper.el.parentElement?.previousElementSibling?.previousElementSibling
              : swiper.el.parentElement?.previousElementSibling?.previousElementSibling?.previousElementSibling

            if (sliderPagination) sliderPagination.style.height = `${sliderHeight}px`
          }}
        >
          {
            is3d && <SwiperSlide  className="single-product-intro-slider__item">
              <div className="single-product-intro-slider__item-line model-line">
                {
                  <img
                    src={productTypeTemplate === 'child' ? lineChild : productTypeTemplate === 'gaming' ? lineGame : lineDefault}
                    alt="360"
                    width={735}
                    height={45}
                    loading="eager"
                  />
                }
                <div className="single-product-intro-slider__item-line-slider model-line__slider">
                  <span>360</span>
                </div>
              </div>
              <SingleProductModel 
                slug={slug} 
                activeColor={activeColor}
                activeBreed={activeBreed}
                activeDspColor={activeDspColor}
                activeMdfColor={activeMdfColor}
                activePlywoodboxSize={activePlywoodboxSize}
                activeTwoDrawesMaterial={activeTwoDrawesMaterial}
              />
            </SwiperSlide>
          }
          {
            gallerySlider.map((slide, index) => {
              return (
                <SwiperSlide
                  className="single-product-intro-slider__item"
                  key={slide.id}
                >
                  <a 
                    className="single-product-intro-slider__gallery" 
                    href={slide.preview} 
                    data-fancybox="gallery"
                  >
                    <img 
                      src={slide.preview} 
                      alt={`Product gallery ${index + 1}`} 
                      width={735} 
                      height={780} 
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </a>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default React.memo(SingleProductSlider)