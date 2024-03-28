import React from 'react'

export default function TitleExp ({title, explanation}) {
    return (
      <section>
        <h1>{title}</h1>
        <article>
          <p>{explanation}</p>
        </article>
      </section>
    )
  }