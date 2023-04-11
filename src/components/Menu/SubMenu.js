import React, { useContext, useRef, useEffect, useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixProvider'

import sprite from '../../icons/sprite.svg'

const SubMenu = ({ closeSubmenu, backBtn, submenuList }) => {
  const imgContainer = useRef(null)
  const [ isDesktop, setIsDesktop ] = useState(true)

  let prefix = useContext(PrefixContext)
  
  const changeImg = i => {
    const imgList = [...imgContainer.current.children]

    imgList.forEach((item, index) => {
      index === i ? item.style.display = 'block' : item.style.display = 'none'
    })
  }

  const anchorImage = getImage(submenuList[0].submenuImg.localFile)

  useEffect(() => setIsDesktop(window.innerWidth >= 1025), [])

  return (
    <div className="submenu">
      <div
        className="submenu__btn"
        onClick={closeSubmenu}
      >
        <div className="submenu__btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </div>
        <div className="submenu__btn-text">{backBtn}</div>
      </div>
      <ul className="submenu__list submenu-list">
        { submenuList.map((item, index) => {
            return (
              <li className="submenu-list__item" key={index++} onMouseEnter={() => isDesktop && changeImg(index)}>
                <Link 
                  className="submenu-list__link" 
                  to={`${prefix}${item.submenuSlug}`}
                  activeClassName="active"
                >
                  {item.submenuName}
                </Link>
              </li>
            )
        }) }
      </ul>
      { isDesktop && <div className="submenu__photo submenu-photo" ref={imgContainer}>
        <div className="submenu-photo__item">
          <GatsbyImage image={anchorImage} alt={submenuList[0].submenuName} loading="lazy" />
        </div>
        { submenuList.map((item, index) => {
          const image = getImage(item.submenuImg.localFile)
          
          return (
            <div className="submenu-photo__item" style={{ display: 'none' }} key={index++}>
              <GatsbyImage image={image} alt={item.submenuName} loading="lazy" />
            </div>
          )
        }) }
      </div> }
    </div>
  )
}

export default SubMenu