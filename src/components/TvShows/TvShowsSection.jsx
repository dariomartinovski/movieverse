import React from 'react'
import LatestTvShows from './LatestTvShows'
import styled from 'styled-components'
import PopularTvShows from './PopularTvShows'

function TvShowsSection({style, perPage, sectionName}) {
  return (
    <TvShowsSectionContainer style={style}>
        <LatestTvShows perPage={perPage}/>
        <PopularTvShows sectionName={sectionName}/>
    </TvShowsSectionContainer>
  )
}

const TvShowsSectionContainer = styled.div`
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

export default TvShowsSection