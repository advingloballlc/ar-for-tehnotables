import React from 'react'

const PageLoaderProgress = () => {
  return (
    <div className="page-loader__progress">
      <div className="page-loader__progress-percentage"><span>0</span>%</div>
      <div className="page-loader__progress-bar" />
    </div>
  )
}

export default PageLoaderProgress