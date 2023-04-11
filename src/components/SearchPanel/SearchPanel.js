import React, { useState, useContext } from 'react'
import { navigate } from 'gatsby'

import './SearchPanel.scss'

import { fieldChange } from '../../utils/fieldChange'
import { fieldBlur } from '../../utils/fieldBlur'

import { PrefixContext } from '../../context/PrefixProvider'

import { isBrowser } from '../../utils/isBrowser'

import sprite from '../../icons/sprite.svg'

const SearchPanel = (props) => {
  let prefix = useContext(PrefixContext)
  let [ searchValue, setSearchValue ] = useState('')

  const submitForm = e => {
    e.preventDefault()

    props.setIsSearchOpen(false)
    
    isBrowser() && window.localStorage.setItem('searchQuery', searchValue.trim().toLocaleLowerCase())
    isBrowser() && window.fbq('track', 'Search')
    
    navigate(`${prefix}search`, { state: { searchQuery: searchValue.toLocaleLowerCase() } })
  }

  return (
    <div className={`search-panel ${props.isSearchOpen ? 'open' : ''}`}>
      <div
        className="search-panel__close"
        onClick={() => props.setIsSearchOpen(false)}
      >
        <div className="search-panel__close-icon"><span /><span /></div>
        <div className="search-panel__close-text">{props.closeBtn}</div>
      </div>
      <div className="container">
        <form 
          className="search-panel__form"
          onSubmit={submitForm}
        >
          <div className="search-panel__inp-wrapper">
            <input
              className="search-panel__inp"
              type="text"
              autoComplete="off"
              name="s"
              value={searchValue}
              onChange={e => {
                setSearchValue(e.target.value)
                fieldChange(e)
              }}
              onBlur={fieldBlur}
            />
            <span className="search-panel__placeholder">{props.searchPlaceholder}</span>
          </div>
          <div className="search-panel__btn-wrapper">
            <button className="search-panel__btn" type="submit">
              <svg>
                <use href={`${sprite}#search`} />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default React.memo(SearchPanel)