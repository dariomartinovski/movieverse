import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

function TvShow({show}) {
    return (
        <TvShowContainer>
          <Link to={'/tv-show/' + show.id + '/details'}>
            <img className='upper_part' src={`https://image.tmdb.org/t/p/w185${show.poster_path}`} alt={show.name} />
          </Link>
          <div className="bottom_part">
            <div className="short_details">
              <p className='release_year'>{show.first_air_date.split("-")[0]}</p>
              <p className='season'>SS {show.number_of_seasons}</p>
              <p className='episode'>EP {show.number_of_episodes}</p>
            </div>
            <Link to={'/tv-show/' + show.id + '/details'}>
              <h4 className='title'>{show.name}</h4>
            </Link>
          </div>
        </TvShowContainer>
      )
}

const TvShowContainer = styled.div`
  color: var(--text-color);
  width: 100%;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img{
    width: 100%;
    border-radius: 1em;
  }

  .short_details{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7em;

    .season{
      padding: 0.1em 0.5em;
      border: 0.125em solid var(--text-color);
      border-radius: 1em;
    }
  }

  .title{
    margin-top: 0.3em;    
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover .title{
    color: var(--call-to-action-color);
  }
` 

export default TvShow;