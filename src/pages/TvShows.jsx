import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TvShowsSection from '../components/TvShows/TvShowsSection'

function TvShows({movieverseUser}) {
  const TvShowsSectionStyle = {
    marginTop: '3em ',
  };

  return (
    <>
      <Navbar />
      <TvShowsSection style={TvShowsSectionStyle} perPage={16} sectionName={"Suggestions"}/>
      <Footer />
    </>
  );
}

export default TvShows