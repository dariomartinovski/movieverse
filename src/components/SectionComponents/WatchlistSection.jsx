import React from 'react'
import styled from 'styled-components'
import PopularMovies from '../ShowcaseComponents/PopularMovies'
import WatchlistItems from '../ShowcaseComponents/WatchlistItems'

function WatchlistSection({ sectionName, movieverseUser }) {
  return (
    <WatchlistSectionContainer>
        <WatchlistItems movieverseUser={movieverseUser}/>
        <PopularMovies sectionName={sectionName} />
    </WatchlistSectionContainer>
  )
}

const WatchlistSectionContainer = styled.div`
    background-color: #421B04;
    padding: 2% min(12%, 25em);
    display: flex;
    color: var(--text-color);
    margin-top: 3em;

    @media (max-width: 47em) {
        flex-direction: column;

    h1.title{
        margin-top: 1em;
        }
    }
`

export default WatchlistSection