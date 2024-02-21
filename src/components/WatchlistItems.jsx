import React, { useEffect, useState } from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import styled from 'styled-components'
import Movie from './Movies/SingleComponents/Movie';
import TvShow from './TvShows/SingleComponents/TvShow';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';

function WatchlistItems({movieverseUser}) {
    const apiKey = "26adac4f0cb5828deafa72ee63667fca";
    const [watchlist, setWatchlist] = useState([]);
    const navigate = useNavigate();

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
          return getMovieDetails(id);
        }
        else{
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

    const handleRandomMovieClick = () => {
      const randomIndex = Math.floor(Math.random() * watchlist.length);
      const randomMovie = watchlist[randomIndex];

      if(randomMovie.hasOwnProperty("title")){
        alert(`The random movie is ${randomMovie.title}`);
        const shoudOpen = window.confirm('Do you want to open the movie?');
          if (shoudOpen) {
            navigate(`/movie/${randomMovie.id}/details`);
          }
      }
      else{
        alert(`The random show is ${randomMovie.name}`);
        const shoudOpen = window.confirm('Do you want to open the TV show?');
          if (shoudOpen) {
            navigate(`/tv-show/${randomMovie.id}/details`);
          }
      }
    }

    useEffect(() => {
      const fetchWatchlist = async () => {
          const userId = movieverseUser.id;
          const watchlistRef = doc(db, "watchlists", userId);
  
        try {
          const watchlistDoc = await getDoc(watchlistRef);
          const currentWatchlist = watchlistDoc.data().watchlist_items || [];
  
          convertItems(currentWatchlist);
        } catch (error) {
          console.error("Error fetching watchlist:", error);
        }
      };

      fetchWatchlist();
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
        {watchlist.length > 0 && 
          <button className='random_movie_button' onClick={handleRandomMovieClick}>Choose a random movie</button>
        }
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

  .random_movie_button{
    margin-top: 1em;
    padding: 0.5em 1.5em;
    border-radius: 2em;
    font-size: 0.9em;
    font-weight: bold;
    color: var(--text-color);
    border: none;
    box-shadow: 0.125em 0.25em 0.2em 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    background-color: transparent;
    border: 0.125em solid var(--text-color);
    box-sizing: border-box;
    display: flex;
    align-items: center;
}

  .selected{
    background-color: red;
  }

  @media (min-width: 47em) {
    flex: 2;

    .random_movie_button:hover{
      box-shadow: 0 0 0.5em 0.2em #f7f7f750;
    }
  }
`

export default WatchlistItems;