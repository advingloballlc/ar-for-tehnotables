import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const SingleProductTabDesc = ({ 
  porductDefaultLongDesc,
  productDescriptionChildrenStyle,
  productDescriptionGamingStyle,
  productTypeTemplate
}) => {
  if (productTypeTemplate === 'child') {
    return (
      <div className="single-product-content-tabs__body-inner">
        { productDescriptionChildrenStyle[0].item && <div className="single-product-content-tabs__body-photo single-product-content-tabs__body-photo--child single-product-content-tabs__body-photo--child-first">
          <img src={productDescriptionChildrenStyle[0].item.sourceUrl} alt="" width={860} height={995} loading="lazy" />
        </div> }
        <article 
          className="single-product-content-tabs__body-desc article" 
          dangerouslySetInnerHTML={{ __html: productDescriptionChildrenStyle[1].editor }} 
        />
        <div className="single-product-content-tabs__body-reason">
          <div className="single-product-content-tabs__body-title">{productDescriptionChildrenStyle[2].reasonTitle}</div>
          <div className="single-product-content-tabs__body-reason-list">
            {
              productDescriptionChildrenStyle[2].reasonRepeater.map((item, index) => {
                return (
                  <div className="single-product-content-tabs__body-reason-item" key={index++}>
                    <div className="single-product-content-tabs__body-reason-inner">
                      { item.image && <div className="single-product-content-tabs__body-reason-icon">
                        <img src={item.image.sourceUrl} alt={item.title} width={95} height={95} loading="lazy" />
                      </div> }
                      <div className="single-product-content-tabs__body-reason-title">{item.title}</div>
                      <p 
                        className="single-product-content-tabs__body-reason-text" 
                        dangerouslySetInnerHTML={{ __html: item.text }} 
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        { productDescriptionChildrenStyle[4].item && <div className="single-product-content-tabs__body-photo single-product-content-tabs__body-photo--child single-product-content-tabs__body-photo--child-second">
          <img src={productDescriptionChildrenStyle[4].item.sourceUrl} alt=""  width={860} height={660} loading="lazy" />
        </div> }
        <div className="single-product-content-tabs__body-benefits">
          <div className="single-product-content-tabs__body-title">{productDescriptionChildrenStyle[3].benefitName}</div>
          <div className="single-product-content-tabs__body-benefits-list">
            {
              productDescriptionChildrenStyle[3].benefitsRepeater.map((item, index) => {
                return (
                  <div className="single-product-content-tabs__body-benefits-item" key={index++}>
                    <div className="single-product-content-tabs__body-benefits-inner">
                      <div className="single-product-content-tabs__body-benefits-title">{item.title}</div>
                      <p 
                        className="single-product-content-tabs__body-benefits-text"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  } else if (productTypeTemplate === 'gaming') {
    const firstRowFirstColumn = getImage(productDescriptionGamingStyle[1].firstItem.localFile),
          firstRowSecColumn = getImage(productDescriptionGamingStyle[1].secondItem.localFile),
          secRow = getImage(productDescriptionGamingStyle[2].singleImage.localFile),
          thirdRowFirstColumn = getImage(productDescriptionGamingStyle[3].firstItem.localFile),
          thirdRowSecColumn = getImage(productDescriptionGamingStyle[3].secondItem.localFile)

    return (
      <div className="single-product-content-tabs__body-inner">
        <article 
          className="single-product-content-tabs__body-desc article" 
          dangerouslySetInnerHTML={{ __html: productDescriptionGamingStyle[0].textEditor }} 
        />
        <div className="single-product-content-tabs__body-imgs">
          { productDescriptionGamingStyle[1].firstItem && <div className="single-product-content-tabs__body-img">
            <GatsbyImage image={firstRowFirstColumn} alt="" loading="lazy" />
          </div> }
          { productDescriptionGamingStyle[1].secondItem && <div className="single-product-content-tabs__body-img">
            <GatsbyImage image={firstRowSecColumn} alt="" loading="lazy" />
          </div> }
        </div>
        { productDescriptionGamingStyle[2].singleImage && <div className="single-product-content-tabs__body-photo single-product-content-tabs__body-photo--game">
          <GatsbyImage image={secRow} alt="" />
        </div> }
        <div className="single-product-content-tabs__body-imgs">
          { productDescriptionGamingStyle[3].firstItem && <div className="single-product-content-tabs__body-img">
            <GatsbyImage image={thirdRowFirstColumn} alt="" loading="lazy" />
          </div> }
          { productDescriptionGamingStyle[3].secondItem && <div className="single-product-content-tabs__body-img">
            <GatsbyImage image={thirdRowSecColumn} alt="" loading="lazy" />
          </div> }
        </div>
      </div>
    )
  } else {
    return (
      <article 
        className="single-product-content-tabs__body-desc article" 
        dangerouslySetInnerHTML={{ __html: porductDefaultLongDesc }} 
      />
    )
  }
  
}

export default SingleProductTabDesc