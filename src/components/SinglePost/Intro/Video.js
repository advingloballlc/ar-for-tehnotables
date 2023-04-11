import React from 'react'

const Video = ({ video }) => {
  return (
    <div className="single-post-intro__video">
      <iframe width={1160} height={645} src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </div>
  )
}

export default Video