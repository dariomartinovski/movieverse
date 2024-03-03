import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import SmallMovie from '../SingleComponents/SmallMovie';

function PopularMovies({sectionName}) {
    const [movies, setMovies] = useState([]);
  
    const getMovieDetails = async (movieId) => {
      const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  
      return fetch(detailsUrl)
        .then(response => response.json())
        .then(movieDetails => {
          return movieDetails;
        })
        .catch(() => {
          console.error(`Error fetching movie details for movie with id: ${movieId}`);
          return null;
        });
    };
    
    const getMovies = async() => {
      const currentDate = new Date();
      
      const oneWeekAgo = new Date(currentDate);
      oneWeekAgo.setDate(currentDate.getDate() - 7);
  
      // Format the dates as YYYY-MM-DD
      const formattedCurrentDate = currentDate.toISOString().split('T')[0];
      const formattedOneWeekAgo = oneWeekAgo.toISOString().split('T')[0];
  
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&sort_by=popularity.desc&primary_release_date.gte=${formattedOneWeekAgo}&primary_release_date.lte=${formattedCurrentDate}`;
  
      fetch(url)
      .then(response => response.json())
      .then(data => {
        const promises = data.results.map(movie => getMovieDetails(movie.id));
        Promise.all(promises)
          .then(movieDetails => {
              const validDetails = movieDetails.filter(detail => detail !== null);
              setMovies(validDetails);
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
      getMovies();
      // eslint-disable-next-line
    }, [])
  

  return (
    <PopularMoviesContainer>
      <h1 className='title'>{sectionName}</h1>
      {movies?.map((movie, i) => {
        if(i < 9)
            return <SmallMovie key={i} movie={movie}/>
        return null;
      })}
    </PopularMoviesContainer>
  )
}

const PopularMoviesContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 1em;
    flex: 1;

    h1.title{
        margin-bottom: 1em;
    }
`

export default PopularMovies;