import React from 'react'
import ImageDetails from './ImageDetails'
import TitleExp from './TitleExp'

export default function NasaApod ({title, explanation, imgUrl, mediaType, date, copyright}) {
    return(
      <main>
        <TitleExp title={title} explanation={explanation}/>
        <ImageDetails imgUrl={imgUrl} mediaType={mediaType} date={date} copyright={copyright}/>
      </main>
    )
  }