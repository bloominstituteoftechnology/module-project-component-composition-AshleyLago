import React from 'react'
import styled from 'styled-components'

export default function TitleExp ({title, explanation}) {
  const StyledSect = styled.section`
    margin: 0px 20px 30px;
    padding: 15px;
    border: 3px solid grey;
    border-radius: 30px;
    background-color: #ebebeb;
  
    h1 {
      color: RoyalBlue;
      text-decoration-line: underline;
    }

    article {
      color: #575757;
      margin: 0px 0px 0px 20px;
      text-indent: 30px;
    }
  `

    return (
      <StyledSect>
        <h1>{title}</h1>
        <article>
          <p>{explanation}</p>
        </article>
      </StyledSect>
    )
  }