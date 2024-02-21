import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TvShowDetailsHome from '../components/TvShows/TvShowDetails/TvShowDetailsHome';
import YoutubeTrailer from '../components/Movies/MovieDetails/YoutubeTrailer';
import TvShowFacts from '../components/TvShows/TvShowDetails/TvShowFacts';
import MovieComments from '../components/Movies/MovieDetails/MovieComments';

function TvShowDetails({movieverseUser}) {
  const apiKey = "26adac4f0cb5828deafa72ee63667fca";
  const [tvShow, setTvShow] = useState([]);
  const { id } = useParams();

    const getTvShowDetails = async (showId) => {
    //   const detailsUrl = `https://api.themoviedb.org/3/tv/${showId}?api_key=${apiKey}`;
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

    useEffect(() => {
      getTvShowDetails(id)
      .then(showDetails => {setTvShow(showDetails)})
      .catch(error => {console.error('Error fetching movie details: ', error)});
    }, [])

  return (
    <>
    <Navbar/>
      <TvShowDetailsHome show={tvShow} movieverseUser={movieverseUser}/>
      <YoutubeTrailer title={tvShow.name}/>
      <TvShowFacts show={tvShow}/>
      <MovieComments prefix={"tv"}/>
    <Footer/>
    </>  )
}

export default TvShowDetails;