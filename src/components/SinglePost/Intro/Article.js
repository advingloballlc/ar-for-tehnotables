import React from 'react'

const Article = ({ article }) =>  <article className="single-post-intro__article article" dangerouslySetInnerHTML={{ __html: article }} />

export default Article