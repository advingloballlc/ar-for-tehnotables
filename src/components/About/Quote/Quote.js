import React  from 'react'

import './Quote.scss'

import QuoteSlider from './QuoteSlider'
import QuoteContent from './QuoteContent'

const AboutQuote = ({ firstInUkraineTitle, firstInUkraineSubtitle }) => {
  return (
    <section className="quote-about">
      <QuoteSlider />
      <QuoteContent firstInUkraineTitle={firstInUkraineTitle} firstInUkraineSubtitle={firstInUkraineSubtitle} />
    </section>
  )
}

export default AboutQuote