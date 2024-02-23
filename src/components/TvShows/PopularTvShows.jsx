import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import SmallTvShow from './SingleComponents/SmallTvShow';

function PopularTvShows({sectionName}) {
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
      // const currentDate = new Date();
      
      // const oneWeekAgo = new Date(currentDate);
      // oneWeekAgo.setDate(currentDate.getDate() - 7);
  
      // Format the dates as YYYY-MM-DD
      // const formattedCurrentDate = currentDate.toISOString().split('T')[0];
      // const formattedOneWeekAgo = oneWeekAgo.toISOString().split('T')[0];
  
      // const url = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&sort_by=popularity.desc&primary_release_date.gte=${formattedOneWeekAgo}&primary_release_date.lte=${formattedCurrentDate}`;
      const url = `https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
      
      fetch(url)
      .then(response => response.json())
      .then(data => {
        const promises = data.results.map(show => getTvShowDetails(show.id));

          Promise.all(promises)
          .then(movieDetails => {
              const validDetails = movieDetails.filter(detail => detail !== null && detail.poster_path != null);
              setTvShows(validDetails);
            })
          .catch(error => {
              console.error("Error fetching movie details:", error);
          });
      })
      .catch(error => {
        console.error("Error fetching latest movies, ", error);
      })
    }
  
    useEffect(() => {
      getTvShows();
      // eslint-disable-next-line
    }, [])

  return (
    <PopularTvShowsContainer>
      <h1 className='title'>{sectionName}</h1>
      {tvShows?.map((show, i) => {
        if(i < 9)
            return <SmallTvShow key={i} show={show}/>
        return null;
      })}
    </PopularTvShowsContainer>
  )
}

const PopularTvShowsContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 1em;
    flex: 1;

    h1.title{
        margin-bottom: 1em;
    }
`

export default PopularTvShows