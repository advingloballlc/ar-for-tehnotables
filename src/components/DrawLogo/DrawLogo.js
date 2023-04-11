import React from 'react'

const DrawLogo = ({ isDraw }) => {
  return (
    <div className='fullpage-slider__logo'>
      {
        isDraw && <svg xmlns="http://www.w3.org/2000/svg" width="874" height="579" viewBox="0 0 874 579" fill="none">
          <path opacity="0.7" d="M59.4688 1L433.805 4.47258L871.884 240.608L772.215 253.341L461.62 82.0269L205.495 88.9721L59.4688 1Z" stroke="#fff"/>
          <path opacity="0.7" d="M698.016 436.444L798.86 413.409L871.885 239.495L772.2 252.164L698.016 436.444Z" stroke="#fff"/>
          <path opacity="0.7" d="M461.905 81.0107L397.977 254.11L699.021 436.442L773.411 251.802L461.905 81.0107Z" stroke="#fff"/>
          <path opacity="0.7" d="M206.335 87.9347L142.559 284.114L398.824 254.11L462.601 81.0107L206.335 87.9347Z" stroke="#fff"/>
          <path opacity="0.7" d="M59.9647 1L1 189.743L142.053 284.114L205.642 88.4662L59.9647 1Z" stroke="#fff"/>
          <path opacity="0.7" d="M156.402 488.824L228.409 274.569L397.973 254.88L281.833 578L156.402 488.824Z" stroke="#fff"/>
          <path opacity="0.7" d="M392.834 550.205L282.578 578L398.637 254.88L485.682 306.996L392.834 550.205Z" stroke="#fff"/>
        </svg>
      }
    </div>
  )
}

export default DrawLogo