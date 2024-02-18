import styled from 'styled-components';
import {React, useState, useEffect} from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import Movie from './SingleComponents/Movie';

function LatestMovies({perPage}) {
  const apiKey = "26adac4f0cb5828deafa72ee63667fca";
  const [movies, setMovies] = useState([]);

  const getMovieDetails = async (movieId) => {
    const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

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
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

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
    getMovies()
  }, [])

  return (
    <LatestMoviesContainer>
      <h1 className='title'><FaRegCirclePlay />  Latest Movies</h1> 
      {movies?.map((movie, i) => {
        if(i < perPage)
          return <Movie key={movie.id} movie={movie}/>
      })}
    </LatestMoviesContainer>
  )
}

const LatestMoviesContainer = styled.div` 
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

export default LatestMovies;