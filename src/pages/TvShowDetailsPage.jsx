import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TvShowDetailsHome from '../components/IndependentComponents/TvShowDetailsHome';
import YoutubeTrailer from '../components/IndependentComponents/YoutubeTrailer';
import TvShowFacts from '../components/IndependentComponents/TvShowFacts';
import Comments from '../components/ShowcaseComponents/Comments';

function TvShowDetails({movieverseUser}) {
  const [tvShow, setTvShow] = useState([]);
  const { id } = useParams();

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

    useEffect(() => {
      getTvShowDetails(id)
      .then(showDetails => {setTvShow(showDetails)})
      .catch(error => {console.error('Error fetching movie details: ', error)});
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      // Store the current URL in sessionStorage
      sessionStorage.setItem('prevUrl', window.location.pathname);
      // eslint-disable-next-line
    }, []);

  return (
    <>
    <Navbar movieverseUser={movieverseUser}/>
      <TvShowDetailsHome show={tvShow} movieverseUser={movieverseUser}/>
      <YoutubeTrailer title={tvShow.name}/>
      <TvShowFacts show={tvShow}/>
      <Comments item={tvShow} movieverseUser={movieverseUser}/>
    <Footer/>
    </>  )
}

export default TvShowDetails;