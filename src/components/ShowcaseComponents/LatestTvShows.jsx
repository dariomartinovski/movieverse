import React, { useState, useEffect } from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import styled from 'styled-components';
import TvShow from '../SingleComponents/TvShow';

function LatestTvShows({perPage}) {
    const [tvShows, setTvShows] = useState([]);
  
    const getTvShowDetails = async (showId) => {
      const episodeDetailsUrl = `https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  
      return fetch(episodeDetailsUrl)
        .then(response => response.json())
        .then(showDetails => {
          return showDetails;
        })
        .catch(() => {
          console.error(`Error fetching TV show details for tv show with id: ${showId}`);
          return null;
        });
    };
    
    const getTvShows = async() => {
      const url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

      fetch(url)
      .then(response => response.json())
      .then(data => {
        const promises = data.results.map(show => getTvShowDetails(show.id));
        // const promises = data.results.map(async (show) => {
        //   const episodeId = await getTvShowDetails(show.id);
        //   return { ...show, episode_number: 1, season_number: 1 };
        // });        
        Promise.all(promises) 
          .then(showoDetails => {
              const validDetails = showoDetails.filter(detail => detail !== null && detail.poster_path != null);
              setTvShows(validDetails);
            })
          .catch(error => {
              console.error("Error fetching TV show details:", error);
          });
      })
      .catch(error => {
        console.error("Error fetching latest TV shows, ", error);
      })
    }
  
    useEffect(() => {
      getTvShows()
    }, [])
  
    return (
        <LatestTvShowsContainer>
            {/* number of episodes, number of seasons */}
            <h1 className='title'><FaRegCirclePlay /> Popular TV Shows</h1> 
            {tvShows?.map((show, i) => {
                if(i < perPage)
                  return <TvShow key={show.id} show={show}/>
            })}
        </LatestTvShowsContainer>
    )
}

const LatestTvShowsContainer = styled.div` 
  box-sizing: border-box;
  display: grid;
  //i want them to grow as much as 25em max
  grid-template-columns: repeat(auto-fit, minmax(9.5em, 14%));
  gap: 2em;

  .title{
    grid-column: 1/-1;
    color: var(--text-color);
    display: flex;
    align-items: center;
  }
  .title > *{
    margin-right: 0.25em;
  }

  @media (min-width: 47em) {
    flex: 2;
  }
`
export default LatestTvShows