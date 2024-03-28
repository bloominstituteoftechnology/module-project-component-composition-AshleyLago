import React from 'react'

export default function ImageDetails ({imgUrl, mediaType, date, copyright}) {
    return (
      <section>
        <figure>
          <img src={imgUrl}/>
          <figcaption>This {mediaType} was taken on {date} by {copyright}</figcaption>
        </figure>
      </section>
    )
  }