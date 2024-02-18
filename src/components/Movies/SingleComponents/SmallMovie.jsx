import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
    
function SmallMovie({movie}) {
  return (
    <SmallMovieContainer>
      <Link to={'/movie/' + movie.id + '/details'} className='image_link'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </Link>
      <div className="details">
        <p className="short_details">
          {movie.release_date.split("-")[0]}/{movie.runtime}/{movie.vote_average.toFixed(1)}
        </p>
      <Link to={'/movie/' + movie.id + '/details'}>
        <p className="title">{movie.title}</p>
      </Link>
      </div>
    </SmallMovieContainer>
  )
}

const SmallMovieContainer = styled.div`
  width: 100%;
  background-color: blue;
  margin-bottom: 1em;
  border-radius: 1em;
  overflow: hidden;
  display: flex;
  color: var(--text-color);
  background-color: rgba(125, 54, 12, 0.4);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  
  .image_link{
    display: block;
    height: 5.8em;
  }

  img{
    display: block;
    height: 100%;
  }

  .details{
    padding: 0.8em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3em;
  }

  .short_details{
    font-size: 0.8em;
    opacity: 0.8;
  }

  p.title{
    // font-weight: bold;
    font-size: 1.1em;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    color: var(--text-color);
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover .title{
    color: var(--call-to-action-color);
  }
`

export default SmallMovie;