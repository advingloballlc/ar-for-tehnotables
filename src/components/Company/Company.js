import React from 'react'

import './Company.scss'

const Company = () => {
  return (
    <div className="company">
      <a className="company__link" href="https://itua.com.ua" target="_blank" rel="noreferrer">
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 6.73643V11.3758L10.8546 4.99766V0.402344L0 6.73643Z" fill="#4F4F4F" />
          <path d="M21.6335 6.6523L10.8546 0.402344V4.99766L15.3162 7.6579L0 16.4239V19.1762L2.40638 20.4623L17.7027 11.1154L17.6947 16.7924L21.6335 19.1282V6.6523Z" fill="#4F4F4F" />
          <path d="M17.7007 16.793V16.797L6.92188 23.067L10.8527 25.4027L21.6315 19.1527V19.1287L17.7007 16.793Z" fill="#4F4F4F" />
        </svg>
      </a>
    </div>
  )
}

export default Company