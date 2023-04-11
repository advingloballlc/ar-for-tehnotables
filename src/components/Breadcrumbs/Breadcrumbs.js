import React, { useContext } from 'react'
import { Link } from 'gatsby'

import './Breadcrumbs.scss'

import { PrefixContext } from '../../context/PrefixProvider'
import { LangCodeContext } from '../../context/LangCodeProvider'

const Breadcrumbs = ({ className, list }) => {
  let prefix = useContext(PrefixContext)
  let langCode = useContext(LangCodeContext)

  if (className === 'sinle-post-breadcrumbs' && !list.some(item => item.url === '/blog/')) {
    const blog = { text: langCode === 'uk' ? 'Блог' : langCode === 'ru' ? 'Блог' : 'Blog' , url: '/blog/' }
    list.splice(1, 0, blog)
  }

  return (
    <nav className={`breadcrumbs ${className}`}>
      <div className="container">
        <ul className="breadcrumbs__list breadcrumbs-list" typeof="BreadcrumbList" vocab="https://schema.org/">
          { list.map((item, index) => {
            let url = prefix + item.url.replace(/(\/ru)|(\/en)|(\/product-category\/)|(\/catalog\/)|(\/category\/)/gm, '')
            url = url.replace(/(\/\/)/gm, '/')

            if(url.length > 1){
              url = url.replace(/\/$/, '')
            }

            return (
              <>
                <li className="breadcrumbs-list__item" key={index} property="itemListElement" typeof="ListItem">
                  { 
                    index + 1 !== list.length
                      ? <>
                          <Link className="breadcrumbs-list__link" to={`${url}`} property="item" typeof="WebPage">
                            <span property="name">{item.text}</span>
                          </Link>
                          <meta property="position" content={index + 1}></meta>
                        </>
                      : <>
                          <span className="breadcrumbs-list__current" property="name">{item.text}</span>
                          <meta property="url" content={url} />
                          <meta property="position" content={index + 1} />
                        </>
                  }
                </li>
                {
                  index + 1 !== list.length
                    && <li className="breadcrumbs-list__item">
                        <span className="breadcrumbs-list__separator" />
                      </li>
                }
              </>
            )
          }) }
        </ul>
      </div>
    </nav>
  )
}

export default Breadcrumbs