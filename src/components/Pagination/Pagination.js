import React, { useContext } from 'react'
import { Link } from 'gatsby'

import './Pagination.scss'

import sprite from '../../icons/sprite.svg'

import { PrefixContext } from '../../context/PrefixProvider'

const Pagination = ({ className, pageInfo, isLoading, slug }) => {
  let prefix = useContext(PrefixContext)
  const { currentPage, pageCount, hasNextPage, hasPreviousPage } = pageInfo
  
  const step = 2
  const showingNumbers = step * 2 + 1
  let startNumber = 2
  let needStartDots = false
  let needEndDots = false
  let startArrayNumber = 2
  let contentNumber = null

  if (currentPage > step) {
    startArrayNumber = currentPage - step

    needStartDots = currentPage > step + startNumber ? true : false
  }

  if (pageCount > showingNumbers) {
    needEndDots = pageCount > currentPage + step + 1 ? true : false
    if (pageCount < currentPage + step + 1) {
      startArrayNumber = pageCount - showingNumbers
    }
  }

  return (
    <div className={`pagination ${className}`}>
      <nav className={`pagination__inner ${isLoading ? 'disabled' : ''}`}>
        {
          hasPreviousPage
            ? <Link 
                className="pagination__arrow pagination__prev" to={currentPage > 2 ? `${prefix}${slug}/page/${currentPage - 1}` : `${prefix}${slug}`}
              >
                <svg><use href={`${sprite}#page-prev`} /></svg>
                <svg><use href={`${sprite}#page-prev`} /></svg>
              </Link>
            : <span className="pagination__arrow pagination__prev">
                <svg><use href={`${sprite}#page-prev`} /></svg>
                <svg><use href={`${sprite}#page-prev`} /></svg>
              </span>
        }
        <ul className="pagination__list pagination-list">
          {
            pageCount < 10
              ? new Array(pageCount).fill('').map((_, i) => {
                  return (
                    <li
                      key={i}
                      className='pagination-list__item'
                    >
                      <Link 
                        className="pagination-list__link"
                        activeClassName="active"
                        to={i === 0 ? `${prefix}${slug}` : `${prefix}${slug}/page/${i + 1}`}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  )
                })
            : pageCount > showingNumbers + startNumber ? (
                <React.Fragment>
                  <li className='pagination-list__item'>
                    <Link 
                      className="pagination-list__link"
                      activeClassName="active"
                      to={`${prefix}${slug}`}
                    >
                      1
                    </Link>
                  </li>
                  { needStartDots && <li className='pagination-list__item'>
                    <span className='pagination-list__extend'>...</span>
                  </li> }
                  {
                    new Array(showingNumbers).fill('').map((_, i) => {
                      return (
                        <li
                          key={i++}
                          {...(contentNumber = needStartDots
                          ? startArrayNumber
                          : startNumber)}
                          {...startNumber++}
                          {...startArrayNumber++}
                          className='pagination-list__item'
                        >
                          <Link 
                            className="pagination-list__link"
                            activeClassName="active"
                            to={`${prefix}${slug}/page/${contentNumber}`}
                          >
                            {contentNumber}
                          </Link>
                        </li>
                      )
                    })
                  }
                  { needEndDots && <li className='pagination-list__item'>
                    <span className='pagination-list__extend'>...</span>
                  </li> }
                  <li className='pagination-list__item'>
                    <Link 
                      className="pagination-list__link"
                      activeClassName="active"
                      to={`${prefix}${slug}/page/${pageCount}`}
                    >
                      {pageCount}
                    </Link>
                  </li>
                </React.Fragment>
              ) : (
                new Array(pageCount).fill('').map((_, i) => {
                  return (
                    <li
                      key={i++}
                      className='pagination-list__item'
                    >
                      <Link 
                        className="pagination-list__link"
                        activeClassName="active"
                        to={`${prefix}${slug}/page/${startArrayNumber++}`}
                      >
                        {startArrayNumber++}
                      </Link>
                    </li>
                  )
                })
              )
            }
        </ul>
        {
          hasNextPage
            ? <Link className="pagination__arrow pagination__next" to={`${prefix}${slug}/page/${currentPage + 1}`}>
                <svg><use href={`${sprite}#page-next`} /></svg>
                <svg><use href={`${sprite}#page-next`} /></svg>
              </Link>
            : <span className="pagination__arrow pagination__next">
                <svg><use href={`${sprite}#page-next`} /></svg>
                <svg><use href={`${sprite}#page-next`} /></svg>
              </span>
        }
      </nav>
    </div>
  )
}

export default Pagination