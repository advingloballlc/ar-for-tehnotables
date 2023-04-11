import React from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const IntroAccordionItem = ({ id, question, answer, isOpen, toggleOpen }) => {
  return (
    <div className={`faq-intro-accordion__item ${isOpen ? 'open' : ''}`} itemscope='' itemprop="mainEntity" itemtype="https://schema.org/Question">
      <div
        className="faq-intro-accordion__head"
        onClick={() => toggleOpen(id)}
      >
        <div className="faq-intro-accordion__head-text" itemprop="name">
          {question}
        </div>
        <div className="faq-intro-accordion__head-icon accordion-icon">
          <svg><use href={`${sprite}#accordion-arrow`}/></svg>
        </div>
      </div>
      <div className="faq-intro-accordion__body" itemscope='' itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <Collapse isOpened={isOpen}>
          <div className="faq-intro-accordion__body-text article" dangerouslySetInnerHTML={{ __html: answer }} itemprop="text" />
        </Collapse>
      </div>
    </div>
  )
}

export default IntroAccordionItem