import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieSection from '../components/Movies/MovieSection'

function Movies() {
  const movieSectionStyles = {
    marginTop: '3em ',
  };

  return (
    <>
      <Navbar />
      <MovieSection style={movieSectionStyles} perPage={16} sectionName={"Suggestions"}/>
      <Footer />
    </>
  );
}

export default Movies;