import React, { useEffect, useState } from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import styled from 'styled-components'
import Movie from './Movies/SingleComponents/Movie';
import TvShow from './TvShows/SingleComponents/TvShow';

function WatchlistItems() {
    const apiKey = "26adac4f0cb5828deafa72ee63667fca";
    const [watchlist, setWatchlist] = useState([]);
    const [watchlistItems, setWatchlistItems] = useState([]);


    const getTvShowDetails = async (showId) => {
        const episodeDetailsUrl = `https://api.themoviedb.org/3/tv/${showId}?api_key=${apiKey}`;
    
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

    const convertItems = async(storedWatchlist) => {
      const promises = storedWatchlist.map(el => {
        let id = el.split("_")[1];
        if (el.startsWith('movie')){
          // return <Movie movie={getMovieDetails(id)}/>
          return getMovieDetails(id);
        }
        else{
          // return <TvShow show={getTvShowDetails(id)}/>
          return getTvShowDetails(id);
        }
      });

      Promise.all(promises)
      .then(movieDetails => {
          const validDetails = movieDetails.filter(detail => detail !== null && detail.poster_path != null);
          setWatchlist(validDetails);
        })
      .catch(error => {
          console.error("Error fetching movie details:", error);
      });
    }

    useEffect(() => {
      const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

      convertItems(storedWatchlist);
      // setWatchlist(storedWatchlist);
    }, []);

  return (
    <WatchlistItemsContainer>
        <h1 className='title'><FaRegCirclePlay /> Watchlsit</h1>
        {/* if it has property title, it's a movie, otherwise it's a tv show */}
        <div className="itemsContainer">
          {watchlist?.map(item => {
            if(item.hasOwnProperty("title"))
              return <Movie key={item.id} movie={item}/>
            else
              return <TvShow key={item.id} show={item}/>
          })}
        </div>
    </WatchlistItemsContainer>
  )
}

const WatchlistItemsContainer = styled.div`

.itemsContainer{
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9.5em, 14%));
    gap: 2em;
  }

  .title{
    grid-column: 1/-1;
    color: var(--text-color);
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }

  .title > *{
    margin-right: 0.25em;
  }

  @media (min-width: 47em) {
    flex: 2;
  }
`

export default WatchlistItems;