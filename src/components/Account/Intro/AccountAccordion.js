import React, { useState, useEffect } from 'react'
import { Collapse } from 'react-collapse'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import sprite from '../../../icons/sprite.svg'

const AccountAccordion = ({ 
  orderHistoryTitle, 
  orderHistoryFields, 
  emptyListTitle,
  orderList
}) => {
  const [ itemsVisible, setItemsVisible ] = useState(6)

  const [ accordion, setAccordion ] = useState(orderList.map(item => ({
    id: item.databaseId,
    isActive: false,
    number: item.orderNumber,
    status: item.status,
    date: item.date,
    price: item.total,
    previews: item.lineItems.nodes.map(img => img.product.node)
  })))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1461px)': () => setItemsVisible(6),
      '(max-width: 1460px) and (min-width: 1367px)': () => setItemsVisible(4),
      '(max-width: 1366px) and (min-width: 1089px)': () => setItemsVisible(2),
      '(max-width: 1088px) and (min-width: 992px)': () => setItemsVisible(1),
      '(max-width: 991px) and (min-width: 769px)': () => setItemsVisible(2),
      '(max-width: 768px) abd (min-width: 666px)': () => setItemsVisible(1),
      '(max-width: 665px)': () => setItemsVisible(4)
    })
  }, [])

  const openAccordion = accId => {
    setAccordion(accordion.map(item => {
      return {
        ...item,
        isActive: accId === item.id ? !item.isActive : item.isActive
      }
    }))
  }

  return (
    <div className="account-intro-tabs__content-item">
      <div className="account-intro-tabs__content-title-wrapper title-wrapper">
        <div className="account-intro-tabs__content-title title title--small">
          { accordion.length !== 0 ? orderHistoryTitle : emptyListTitle }
        </div>
      </div>
      { accordion.length !== 0 && <div className="account-intro-tabs__content-accordion">
        { accordion.map(item => {
            return (
              <div
                className={`account-intro-tabs__content-accordion-item ${item.isActive ? 'open' : ''}`}
                key={item.id}
              >
                <div
                  className="account-intro-tabs__content-accordion-head"
                  onClick={() => openAccordion(item.id)}
                >
                  <div className="account-intro-tabs__content-accordion-head-inner">
                    <div className="account-intro-tabs__content-accordion-info">
                      <div className="account-intro-tabs__content-accordion-elem">
                        <div className="account-intro-tabs__content-accordion-title">{orderHistoryFields.orderText} #{item.number}</div>
                        <div className="account-intro-tabs__content-accordion-value">{item.status}</div>
                      </div>
                      <div className="account-intro-tabs__content-accordion-elem">
                        <div className="account-intro-tabs__content-accordion-title">{orderHistoryFields.orderDateText}</div>
                        <div className="account-intro-tabs__content-accordion-value">{item.date}</div>
                      </div>
                      <div className="account-intro-tabs__content-accordion-elem">
                        <div className="account-intro-tabs__content-accordion-title">{orderHistoryFields.amountOrderText}</div>
                        <div className="account-intro-tabs__content-accordion-value">{item.price} UAH</div>
                      </div>
                    </div>
                    <div className="account-intro-tabs__content-accordion-previews">
                      {
                        item.previews.map((preview, index) => {
                          return (
                            index + 1 <= itemsVisible &&
                            (
                              <div
                                className={`account-intro-tabs__content-accordion-preview ${item.previews.length > itemsVisible ? 'extend' : ''}`}
                                key={preview.databaseId}
                              >
                                <img 
                                  src={preview.image.sourceUrl} 
                                  alt={`Preview ${index + 1}`} 
                                  width={55} 
                                  height={55} 
                                />
                              </div>
                            )
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="account-intro-tabs__content-accordion-icon accordion-icon">
                    <svg><use href={`${sprite}#accordion-arrow`}/></svg>
                  </div>
                </div>
                <div className="account-intro-tabs__content-accordion-body-wrapper">
                  <Collapse isOpened={item.isActive}>
                    <div className="account-intro-tabs__content-accordion-body">
                      <div className="account-intro-tabs__content-accordion-body-inner">
                        {
                          item.previews.map((preview, index) => {
                            return (
                              <div 
                                className="account-intro-tabs__content-accordion-body-item" 
                                key={preview.databaseId}
                              >
                                <div className="account-intro-tabs__content-accordion-body-item-inner">
                                  <img 
                                    src={preview.image.sourceUrl} 
                                    alt={`Preview ${index + 1}`} 
                                    width={88} 
                                    height={88} 
                                  />
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                      <div className="account-intro-tabs__content-accordion-body-btn-wrapper">
                        <button 
                          className="account-intro-tabs__content-accordion-body-btn" 
                          type="button"
                          onClick={() => alert('Reorder')}
                        >
                          <svg>
                            <use href={`${sprite}#cart`} />
                          </svg>
                          <span>{orderHistoryFields.reorderText}</span>
                        </button>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            )
          }) }
      </div> }
    </div>
  )
}

export default AccountAccordion