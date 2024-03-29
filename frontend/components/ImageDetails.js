import React from 'react'
import styled from 'styled-components'



export default function ImageDetails ({imgUrl, mediaType, date, copyright}) {

  const StyledFigure = styled.figure`
    img {
      display: block;
      margin: auto;
    }
    figcaption {
      margin: 30px;
      padding: 15px;
      border: 3px solid grey;
      text-align: center;
      border-radius: 30px;
      background-color: #ebebeb;
      color: #575757;
    }
  `

    return (
      <section>
        <StyledFigure>
          <img src={imgUrl}/>
          <figcaption>This {mediaType} was taken on {date} by {copyright}</figcaption>
        </StyledFigure>
      </section>
    )
  }