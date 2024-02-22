import React, { useEffect } from 'react';
import TvShowsSection from '../components/TvShows/TvShowsSection';
import FeaturedMovies from '../components/Movies/FeaturedMovies';
import ProductionStudios from '../components/ProductionStudios';
import MovieSection from '../components/Movies/MovieSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    // Store the current URL in sessionStorage
    sessionStorage.setItem('prevUrl', window.location.pathname);
  }, []);
  
  return (
    <>
        <Navbar />
        <FeaturedMovies/>
        <ProductionStudios/>
        <MovieSection perPage={12} sectionName={"Top 9 this week"}/>
        <TvShowsSection perPage={12} sectionName={"Top 9 this week"}/>
        <Footer/>
      </>
)
}

export default Home