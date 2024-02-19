import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
    
function SmallTvShow({show}) {
  return (
    <SmallTvShowContainer>
      <Link to={'/tv-show/' + show.id + '/details'} className='image_link'>
        <img src={`https://image.tmdb.org/t/p/w154${show.poster_path}`} alt={show.name} />
      </Link>
      <div className="details">
        <p className="short_details">
          {show.first_air_date.split("-")[0]}/SS{show.number_of_seasons}/EP{show.number_of_episodes}
        </p>
        <Link to={'/tv-show/' + show.id + '/details'}>
          <p className="title">{show.name}</p>
        </Link>
      </div>
    </SmallTvShowContainer>
  )
}

const SmallTvShowContainer = styled.div`
  width: 100%;
  background-color: blue;
  margin-bottom: 1em;
  border-radius: 1em;
  overflow: hidden;
  display: flex;
  color: var(--text-color);
  background-color: rgba(125, 54, 12, 0.4);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  
  .image_link {
    display: block;
    height: 5.8em; 
  }
  
  img {
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
    font-size: 1em;
    color: var(--text-color);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover .title{
    color: var(--call-to-action-color);
  }
`

export default SmallTvShow;