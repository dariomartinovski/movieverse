// import '../../styles/FeaturedMovie.css';
import React, {useState, useEffect, useRef} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function FeaturedMovies() {
    const apiKey = "26adac4f0cb5828deafa72ee63667fca";
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const featuredMoviesIDs = [438631, 76341, 866398, 335984, 755566];
    const featuredMoviesBackgrounds = ['lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg', 'cfl0C5WsX7q8LeHnFPBS1s656A.jpg', 'tL8fzn7JaBzRJKsE1W6GrVxmMQj.jpg', 'ilRyazdMJwN05exqhwK4tMKBYZs.jpg', 'yjZM4QrgA7PqX18Es6DxvJQH3ba.jpg'];
    const youtubeTrailerRef = useRef(null);

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

    const getFeaturedMovies = async () => {
        const promises = featuredMoviesIDs.map(movieId => getMovieDetails(movieId));

        Promise.all(promises)
        .then(movieDetails => {
            const validDetails = movieDetails.filter(detail => detail !== null);
            setFeaturedMovies(validDetails);
          })
        .catch(error => {
            console.error("Error fetching movie details:", error);
        });
    } 

    const scrollToTrailer = () => {
      if (youtubeTrailerRef.current) {
        youtubeTrailerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    useEffect(()=>{
      getFeaturedMovies();
      // eslint-disable-next-line
    },[])
    
  return (
     <Splide
      options={{
        type: 'loop', 
        // arrows: false,
      }}
    >
      {featuredMovies?.map((movie, i) => (
          <SplideSlide key={movie.id}>
            <FeaturedMovieContainer className="container" style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${featuredMoviesBackgrounds[i]})`,
            }}>
              <div className='featuredMovie'>
                <div className="left_side">
                  <h1 className='title'>{movie.title}</h1>
                  <p className='paragraph'>{movie.overview}</p>
                  <Link to={'/movie/' + movie.id + '/details'}>
                    <button className='details_button'>See details</button>
                  </Link>
                  <Link to={'/movie/' + movie.id + '/details'} onClick={scrollToTrailer}>
                    <button className='trailer_button'>Watch trailer</button>
                  </Link>
                </div>
                <img className='poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="black_gradient"></div>
            </FeaturedMovieContainer>
          </SplideSlide>
        ))}
      </Splide>
  )
}

const FeaturedMovieContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  isolation: isolate;

  .featuredMovie{
    height: 100%;
    padding: 8% min(12%, 25em) 2%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 6em;
  }

  .left_side{
    color: var(--text-color);
  }

  .title{
    font-size: 4em;
    text-transform: uppercase;
    margin-bottom: 0.3em;
    line-height: 1em;
  }

  .paragraph{
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 2em;
  }

  button{
    padding: 0.8em 2em;
    border-radius: 1em;
    font-size: 1.1em;
    font-weight: bold;
    color: var(--text-color);
    border: none;
    /* box shadow: x y blur spread color */
    box-shadow: 0.125em 0.25em 0.2em 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  .details_button{
    margin-bottom: 1em;
    margin-right: 2em;   
    background-color: var(--call-to-action-color);
  }

  .trailer_button{
    background-color: transparent;
    border: 0.15em solid var(--text-color);
    box-sizing: border-box;
  }

  .poster{
    border-radius: 1em;
    height: 35em;
  }

  @media only screen and (min-width: 47em) {
    .details_button:hover{
        background-color: #d96900;
        box-shadow: 0 0 0.5em 0.2em #f7f7f750;
    }
    .trailer_button:hover{
        box-shadow: 0 0 0.5em 0.2em #f7f7f750;
    }
}

@media only screen and (max-width: 47em) {
    .featuredMovie{
        grid-template-columns: 1fr;
        gap: 2em;
    }
    .poster{
        margin-top: 3em;
        grid-row-start: 1;
        justify-self: center;
        height: 25em;
    }
    .left_side{
        grid-row-start: 2;
        justify-self: center;
    }
    button{
        padding: 0.8em 1.5em;
    }
    .details_button{
        margin-right: 1em;
    }
}
`

export default FeaturedMovies;