import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieSection from '../components/SectionComponents/MovieSection'

function Movies({movieverseUser}) {
  const movieSectionStyles = {
    marginTop: '3em ',
  };

  useEffect(() => {
    // Store the current URL in sessionStorage
    sessionStorage.setItem('prevUrl', window.location.pathname);
  }, []);

  return (
    <>
      <Navbar movieverseUser={movieverseUser}/>
      <MovieSection style={movieSectionStyles} perPage={16} sectionName={"Suggestions"}/>
      <Footer />
    </>
  );
}

export default Movies;