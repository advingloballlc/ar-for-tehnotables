import React from 'react'

import IntroAccordionItem from './IntroAccordionItem'

const IntroAccordion = ({ list, toggleOpen }) => {
  return (
    <div className="faq-intro__accordion faq-intro-accordion">
      <div className="faq-intro-accordion__inner" itemscope='' itemtype="https://schema.org/FAQPage">
        { list.map(item => 
          <IntroAccordionItem id={item.id} question={item.question} answer={item.answer} isOpen={item.isOpen} toggleOpen={toggleOpen} key={item.id} />) }
      </div>
    </div>
  )
}

export default IntroAccordion