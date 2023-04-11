import React from 'react'

const IntroCategoriesItem = ({ id, slug, isActive, name, count, toggleIsActive }) => {
  return (
    <button
      className={`intro-blog__categories-item ${isActive ? 'active' : ''}`}
      onClick={() => toggleIsActive(id, slug)}
    >
      <span className="intro-blog__categories-item-inner">
        <span className="intro-blog__categories-name">{name}</span>
        <span className="intro-blog__categories-count">(<span>{count ? count : '0'}</span>)</span>
      </span>
    </button>
  )
}

export default IntroCategoriesItem