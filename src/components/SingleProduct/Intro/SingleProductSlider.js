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



const IS_ANDROID = /android/i.test(navigator.userAgent);
const IS_IOS =
  (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const IS_SAFARI = /Safari\//.test(navigator.userAgent);
const IS_FIREFOX = /firefox/i.test(navigator.userAgent);
const IS_OCULUS = /OculusBrowser/.test(navigator.userAgent);
const IS_IOS_CHROME = IS_IOS && /CriOS\//.test(navigator.userAgent);
const IS_IOS_SAFARI = IS_IOS && IS_SAFARI;

const SUPPORTS_SCENEVIEWER = IS_ANDROID && !IS_FIREFOX && !IS_OCULUS;
const SUPPORTS_QUICKLOOK = (() => {
  const anchor = document.createElement("a");
  return (
    anchor.relList && anchor.relList.supports && anchor.relList.supports("ar")
  );
})();
const isMobile = navigator.userAgentData.mobile;


console.log(isMobile)

const activateAR = (href, isQuickLook) => {
  const anchor = document.createElement("a");
  if (isQuickLook) {
    isQuickLook = true;

    anchor.appendChild(document.createElement("img"));
    anchor.rel = "ar";
  }
  anchor.setAttribute("href", href);
  anchor.click();

  anchor.addEventListener("message", (event) => {
    dispatchEvent(new CustomEvent("quick-look-button-tapped"));
  });
};

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
  tableTopLength,colorFrame,

}) => {
  const slider = useRef(null)
  
  const activeColor = color && color.some(cl => cl.isActive) && color.filter(cl => cl.isActive)[0].color[1],
        activeBreed = dropdowns && dropdowns.some(item => item.slug === 'pa_breed') && dropdowns.filter(item => item.slug === 'pa_breed')[0].terms.filter(item => item.isActive)[0].name,
        activeDspColor = dropdowns && dropdowns.some(item => item.slug === 'pa_kolir-dps') && dropdowns.filter(item => item.slug === 'pa_kolir-dps')[0]?.terms.filter(item => item.isActive)[0]?.name,
        activeMdfColor = dropdowns && dropdowns.some(item => item.slug === 'pa_kolir-mdf') && dropdowns.filter(item => item.slug === 'pa_kolir-mdf')[0]?.terms.filter(item => item.isActive)[0]?.name,
        activePlywoodboxSize = dropdowns && dropdowns.some(item => item.slug === 'pa_rozmir') && dropdowns.filter(item => item.slug === 'pa_rozmir')[0]?.terms.filter(item => item.isActive)[0]?.name,
        activeTwoDrawesMaterial = dropdowns && dropdowns.some(item => item.slug === 'pa_material') && dropdowns.filter(item => item.slug === 'pa_material')[0]?.terms.filter(item => item.isActive)[0]?.name

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
    
              <div 
                className={`single-product-intro__slider-pagination_ar-item`} 
                // key={item.id}
                onClick={e => {      
                  
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

              }
                  
         
            
                  if (IS_IOS_CHROME && IS_IOS_SAFARI) {
                   
               // Стол Strong с деревом

               // ДУБ

           // WRONG COLOR
                     if( slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Дуб' && activeColor === '1000'){ 
                      fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348650`, {
                      cache: "no-store",
                    })
                      .then((response) => response.json())
                      .then(({ data }) => {
                        const iosSrc = data.model.ios;
                
                        let href = `${iosSrc}#`;
                
                        activateAR(href,  true);
                
                        
                      });

                     }
                     

                     // WRONG COLOR//
                     if( slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'Дуб' && activeColor === 'chorny'){ 
                      fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864e`, {
                      cache: "no-store",
                    })
                      .then((response) => response.json())
                      .then(({ data }) => {
                        const iosSrc = data.model.ios;
                
                        let href = `${iosSrc}#`;
                
                        activateAR(href, true);
                
                        
                      });

                     }
                     //OREH
                      
                     if( slug === 'height-adjustable-desk-model-strong' && activeBreed === 'Горіх' && activeColor === 'bily_matovy' ){ 
                       fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864d`, {
                       cache: "no-store",
                     })
                       .then((response) => response.json())
                       .then(({ data }) => {
                         const iosSrc = data.model.ios;
                 
                         let href = `${iosSrc}#`;
                 
                         activateAR(href,  true);
                 
                         
                       });
 
                      }     
                       if( slug === 'height-adjustable-desk-model-strong' && activeBreed === 'Горіх' && activeColor === 'grafit-struktura' ){ 
                        fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864d`, {
                        cache: "no-store",
                      })
                        .then((response) => response.json())
                        .then(({ data }) => {
                          const iosSrc = data.model.ios;
                  
                          let href = `${iosSrc}#`;
                  
                          activateAR(href,true);
                  
                          
                        });
  
                       }
                       
                       //2. Cтол Strong с мдф // DIDN`T WORL OUT, WRONG COLOR
                      if( slug === 'model-strong-mdf' ){ 
                         fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864f`, {
                         cache: "no-store",
                       })
                         .then((response) => response.json())
                         .then(({ data }) => {
                           const iosSrc = data.model.ios;
                   
                           let href = `${iosSrc}#`;
                   
                           activateAR(href, true);
                   
                           
                         });
                        }

                        //1. Стол Strong с дсп//     ADD TABLE SIZES

                     if( slug === 'model-strong-dsp' && activeDspColor === 'Білий преміум' &&  activeColor === '1000'){
                      fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348652`, {
                      cache: "no-store",
                    })
                      .then((response) => response.json())
                      .then(({ data }) => {
                        const iosSrc = data.model.ios;
                
                        let href = `${iosSrc}#`;
                
                        activateAR(href,  true);
                
                        
                      });

                     }

                       
                    //ADD TABLE TOPLENGTH + FRAME COLOR
                     if( slug === 'model-strong-mdf' && activeMdfColor === 'lancelot' ){ 
                      fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864f`, {
                      cache: "no-store"
                    })
                      .then((response) => response.json())
                      .then(({ data }) => {
                        const iosSrc = data.model.ios;
                
                        let href = `${iosSrc}#`;
                
                        activateAR(href, true);
                
                        
                      });

                     }
                  
                     //WPN STATION  WORKED OUT
                     if( slug === 'work-station-wpn'){ 
                       fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864c`, {
                       cache: "no-store",
                     })
                       .then((response) => response.json())
                       .then(({ data }) => {
                         const iosSrc = data.model.ios;
                 
                         let href = `${iosSrc}#`;
                 
                         activateAR(href, true);
                 
                         
                       });
 
                      }

                      // CHILDREN TABLES WORKED OUT
                      if( slug === 'stil-dlja-shkoljariv' && activeColor === '#7daed8'){ 
                        fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348656`, {
                        cache: "no-store",
                      })
                        .then((response) => response.json())
                        .then(({ data }) => {
                          const iosSrc = data.model.ios;
                  
                          let href = `${iosSrc}#`;
                  
                          activateAR(href, true);
                  
                          
                        });
  
                       } 
                       if( slug === 'stil-dlja-shkoljariv' && activeColor === '#dda4a4'){ 
                        fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348655`, {
                        cache: "no-store",
                      })
                        .then((response) => response.json())
                        .then(({ data }) => {
                          const iosSrc = data.model.ios;
                  
                          let href = `${iosSrc}#`;
                  
                          activateAR(href, true);
                  
                          
                        });
  
                       }

                       // GAMING TABLES WORKED OUT

                       if( slug === 'gaming_desk' && activeColor === '#ffffff'){ 
                        fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348653`, {
                        cache: "no-store",
                      })
                        .then((response) => response.json())
                        .then(({ data }) => {
                          const iosSrc = data.model.ios;
                  
                          let href = `${iosSrc}#`;
                  
                          activateAR(href, true);
                  
                          
                        });
  
                       }
                       
                       if( slug === 'gaming_desk' && activeColor === '#000000'){ 
                        fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348654`, {
                        cache: "no-store",
                      })
                        .then((response) => response.json())
                        .then(({ data }) => {
                          const iosSrc = data.model.ios;
                  
                          let href = `${iosSrc}#`;
                  
                          activateAR(href,  true);
                  
                          
                        });
  
                       }

                  } 
                  else if (SUPPORTS_SCENEVIEWER) {
               // Стол Strong с деревом

               // ДУБ

               if( slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'oak' && activeColor === '#fffff'){ 
                fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348650`, {
                cache: "no-store",
              })
  
          
                  .then((response) => response.json())
                  .then(({ data }) => {
                    const src = data.model.android;
            
                    let href = null;
                    href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
            
                 
            
                    href +=
                      `#Intent;scheme=https;` +
                      `package=com.google.ar.core;` +
                      `action=android.intent.action.VIEW;`;
            
                    href += `end;`;
                    activateAR(href);
                
                  
                });

               }

               if( slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'oak' && activeMdfColor === 'grafit-struktura'){ 
                fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864e`, {
                cache: "no-store",
              })
              .then((response) => response.json())
              .then(({ data }) => {
                const src = data.model.android;
        
                let href = null;
                href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
        
              
        
                href +=
                  `#Intent;scheme=https;` +
                  `package=com.google.ar.core;` +
                  `action=android.intent.action.VIEW;`;
        
                href += `end;`;
                activateAR(href);
            
           
          
                  
                });

               }
               //OREH

               if( slug === 'height-adjustable-desk-model-strong' && activeBreed === 'nut' && activeMdfColor === 'bily_matovy' ){ 
                 fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864d`, {
                 cache: "no-store",
               })
               .then((response) => response.json())
               .then(({ data }) => {
                 const src = data.model.android;
         
                 let href = null;
                 href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
         
            
         
                 href +=
                   `#Intent;scheme=https;` +
                   `package=com.google.ar.core;` +
                   `action=android.intent.action.VIEW;`;
         
                 href += `end;`;
                 activateAR(href);
             
           
                   
                 });

                }     
                 if( slug === 'height-adjustable-desk-model-strong' && activeBreed === 'nut' && activeMdfColor === 'grafit-struktura' ){ 
                  fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864d`, {
                  cache: "no-store",
                })
                .then((response) => response.json())
                .then(({ data }) => {
                  const src = data.model.android;
          
                  let href = null;
                  href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
          
          
                  href +=
                    `#Intent;scheme=https;` +
                    `package=com.google.ar.core;` +
                    `action=android.intent.action.VIEW;`;
          
                  href += `end;`;
                  activateAR(href);
              
                    
                  });

                 }
                 
                 //2. Cтол Strong с мдф //
                if( slug === 'model-strong-mdf' && activeMdfColor === 'chorny' ){ 
                   fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864f`, {
                   cache: "no-store",
                 })
                 .then((response) => response.json())
                 .then(({ data }) => {
                   const src = data.model.android;
           
                   let href = null;
                   href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
    
           
                   href +=
                     `#Intent;scheme=https;` +
                     `package=com.google.ar.core;` +
                     `action=android.intent.action.VIEW;`;
           
                   href += `end;`;
                   activateAR(href);
               
                   });
                  }

                  //1. Стол Strong с дсп//

               if( slug === 'model-strong-dsp' && activeDspColor === 'bily-premium'){ 
                fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348652`, {
                cache: "no-store",
              })
              .then((response) => response.json())
              .then(({ data }) => {
                const src = data.model.android;
        
                let href = null;
                href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
        
                
        
                href +=
                  `#Intent;scheme=https;` +
                  `package=com.google.ar.core;` +
                  `action=android.intent.action.VIEW;`;
        
                href += `end;`;
                activateAR(href);
            
                  
                });

               }

              //  && (tableTopLength <= 140 &&
              //   tableTopLength >= 121 )
               if( slug === 'model-strong-mdf' && activeMdfColor === 'lancelot' ){ 
                fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864f`, {
                cache: "no-store",
              })
              .then((response) => response.json())
              .then(({ data }) => {
                const src = data.model.android;
        
                let href = null;
                href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
        
              
        
                href +=
                  `#Intent;scheme=https;` +
                  `package=com.google.ar.core;` +
                  `action=android.intent.action.VIEW;`;
        
                href += `end;`;
                activateAR(href);
            
                  
                });

               }
            
               //WPN STATION
               if( slug === 'work-station-wpn'){ 
                 fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df834864c`, {
                 cache: "no-store",
               })
               .then((response) => response.json())
               .then(({ data }) => {
                 const src = data.model.android;
         
                 let href = null;
                 href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
         
              
         
                 href +=
                   `#Intent;scheme=https;` +
                   `package=com.google.ar.core;` +
                   `action=android.intent.action.VIEW;`;
         
                 href += `end;`;
                 activateAR(href);
             
                   
                 });

                }

                // CHILDREN TABLE
                if( slug === 'stil-dlja-shkoljariv' && activeColor === '#7daed8'){ 
                  fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348656`, {
                  cache: "no-store",
                })
                .then((response) => response.json())
                .then(({ data }) => {
                  const src = data.model.android;
          
                  let href = null;
                  href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
          
               
                  href +=
                    `#Intent;scheme=https;` +
                    `package=com.google.ar.core;` +
                    `action=android.intent.action.VIEW;`;
          
                  href += `end;`;
                  activateAR(href);
              
                    
                  });

                 } 
                 if( slug === 'stil-dlja-shkoljariv' && activeColor === '#dda4a4'){ 
                  fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348655`, {
                  cache: "no-store",
                })
                .then((response) => response.json())
                .then(({ data }) => {
                  const src = data.model.android;
          
                  let href = null;
                  href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
          
          
                  href +=
                    `#Intent;scheme=https;` +
                    `package=com.google.ar.core;` +
                    `action=android.intent.action.VIEW;`;
          
                  href += `end;`;
                  activateAR(href);
              
                    
                  });

                 }

                 // GAMING TABLES

                 if( slug === 'gaming_desk' && activeColor === '#ffffff'){ 
                  fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348653`, {
                  cache: "no-store",
                })
                  .then((response) => response.json())
                  .then(({ data }) => {
                    const iosSrc = data.model.ios;
            
                    let href = `${iosSrc}#`;
            
                    activateAR(href,true);
            
                    
                  });

                 }
                 
                 if( slug === 'gaming_desk' && activeColor === '#000000'){ 
                  fetch(`https://technotables-back-end.onrender.com/api/guess/armodels/642fe035a8c3689df8348654`, {
                  cache: "no-store",
                })
                .then((response) => response.json())
                .then(({ data }) => {
                  const src = data.model.android;
          
                  let href = null;
                  href = `intent://arvr.google.com/scene-viewer/1.0?file=${src}&mode=ar_only&resizable=false&disable_occlusion=true&`;
          
                
          
                  href +=
                    `#Intent;scheme=https;` +
                    `package=com.google.ar.core;` +
                    `action=android.intent.action.VIEW;`;
          
                  href += `end;`;
                  activateAR(href);
              
                    
                  });

                 }
                   
                      
                  } 
                  
                  else if (navigator.maxTouchPoints === 1)   {
                    alert("it`s a desktop");
                    
                    // const modalRef1 = useRef();
    
                    // return (
                    //     <section>
                    //         <button className="btn" onClick={() => modalRef1.current.openModal()}>Open modal</button>
                    //         <Modal ref={modalRef1}>
                    //           <div background-color='#000000' width='450px' height='450px'>
                             
                {/* if(slug === 'work-station-wpn')
                { 
            
                       <img src={wpn_table} width='230px' height='230px'/>
                } 
                  if(slug === 'gaming_desk' && activeColor === '#ffffff')
                { 
            
                       <img src={GamingWhite} width='230px' height='230px'/>
                } 

                if(slug === 'gaming_desk' && activeColor === '#000000'){ 
                <img src={GamingBlack} width='230px' height='230px'/>

                }   
                if( slug === 'stil-dlja-shkoljariv' && activeColor === '#dda4a4'){ 
                <img src={GamingBlack} width='230px' height='230px'/>

                }
if( slug === 'model-strong-dsp' && activeDspColor === 'bily-premium'){ 
           <img src={strongDspWhite} width='230px' height='230px'/>

          }
if( slug === 'model-strong-mdf' && activeMdfColor === 'chorny' ){ 
                  <img src={strongMdfOakBlack} width='230px' height='230px'/>
                }
                 if( slug === 'model-strong-mdf' && activeMdfColor === 'lancelot'){
                   <img src={strongMdfLanselott} width='230px' height='230px'/>
                 }
                 
                 if( slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'oak' && activeColor === 'bily-premium'){ 
                <img src={strongMdfOakWhite} width='230px' height='230px'/>
                
                 } 
                 if( slug === 'height-adjustable-desk-model-strong' &&  activeBreed === 'oak' && activeMdfColor === 'grafit-struktura'){ 
             <img src={strongMdfOakBlack} width='230px' height='230px'/>
                 }
                  if( slug === 'height-adjustable-desk-model-strong' && activeBreed === 'nut' && activeMdfColor === 'bily_matovy' ){ 
                 <img src={strongWoodWhiteNut} width='230px' height='230px'/>

            }  
              if( slug === 'height-adjustable-desk-model-strong' && activeBreed === 'nut' && activeMdfColor === 'grafit-struktura' ){ 
             <img src={strongWoodBlackNut} width='230px' height='230px'/>

            // } */}
            //                     </div>
            //                 </Modal>
            //             </section>
            //         )
         
                {/* if( slug === 'model-strong-mdf' && activeMdfColor === 'lancelot' && (tableTopLength <= 140 &&
                props.tableTopLength >= 121 )){ 
              

               } */}
            
                  }
                
                }}
               
              >
               
                <svg width='120px'height='100px'><use href={`${sprite}#ar-icon`}></use></svg> <div class="backdrop is-hidden" data-modal>


               </div>
            </div >
       
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
      </div><div className="backdrop" id="hidden-content">
            <div  width='450px' height="450px" style={{color: 'white' }}>
  <button type="button" className="modal_cross" onClick={() => Fancybox.close()}>
    <p className="modal-close-cross">
      CLOSE
    </p>
  </button>

  
</div>
</div>
    </div>
  )
}

export default React.memo(SingleProductSlider)