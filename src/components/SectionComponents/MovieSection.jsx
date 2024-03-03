import styled from 'styled-components'
import React from 'react'
import LatestMovies from '../ShowcaseComponents/LatestMovies'
import PopularMovies from '../ShowcaseComponents/PopularMovies'

function MovieSection({ style, perPage, sectionName }) {
  return (
    <MovieSectionContainer style={style}>
        <LatestMovies perPage={perPage}/>
        <PopularMovies sectionName={sectionName}/>
    </MovieSectionContainer>
  )
}

const MovieSectionContainer = styled.div`
  background-color: #421B04;
  padding: 2% min(12%, 25em);
  display: flex;
  color: var(--text-color);
  
  // display: grid;
  // grid-template-columns: 2fr 1fr;

  @media (max-width: 47em) {
    flex-direction: column;

    h1.title{
      margin-top: 1em;
    }
  }
`

export default MovieSection;