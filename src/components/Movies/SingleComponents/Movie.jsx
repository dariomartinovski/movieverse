import styled from 'styled-components';
import React from 'react'
import {Link} from 'react-router-dom';

function Movie({movie}) {
  return (
    <MovieContainer>
      <Link to={'/movie/' + movie.id + '/details'}>
        <img className='upper_part' src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
        </Link>
      <div className="bottom_part">
        <div className="short_details">
          <p className='release_year'>{movie.release_date.split("-")[0]}</p>
          <p className='genre'>{movie.genres && movie.genres.length > 0 ? movie.genres[0].name : ''}</p>
          <p className='duration'>{movie.runtime}</p>
        </div>
        <Link to={'/movie/' + movie.id + '/details'}>
          <h4 className='title'>{movie.title}</h4>
        </Link>
      </div>
    </MovieContainer>
  )
}

const MovieContainer = styled.div`
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

    .genre{
      padding: 0.1em 0.5em;
      border: 0.125em solid var(--text-color);
      border-radius: 1em;
    }

  }

  .title{
    margin-top: 0.3em;    
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  
  a{
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover .title{
    color: var(--call-to-action-color);
  }
` 

export default Movie;