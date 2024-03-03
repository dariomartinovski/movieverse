import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TvShowsSection from '../components/SectionComponents/TvShowsSection'

function TvShows({movieverseUser}) {
  const TvShowsSectionStyle = {
    marginTop: '3em ',
  };

  useEffect(() => {
    // Store the current URL in sessionStorage
    sessionStorage.setItem('prevUrl', window.location.pathname);
  }, []);

  return (
    <>
      <Navbar movieverseUser={movieverseUser}/>
      <TvShowsSection style={TvShowsSectionStyle} perPage={16} sectionName={"Suggestions"}/>
      <Footer />
    </>
  );
}

export default TvShows