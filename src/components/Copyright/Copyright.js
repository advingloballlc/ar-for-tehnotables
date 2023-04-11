import React from 'react'

import './Copyright.scss'

const Copyright = ({ copyrightText }) => {
  return (
    <div className="copyright">
      <p className="copyright__text">&copy; {new Date().getFullYear()} {copyrightText}</p>
    </div>
  )
}

export default Copyright