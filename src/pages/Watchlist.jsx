import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WatchlistSection from '../components/SectionComponents/WatchlistSection'

function Watchlist({movieverseUser}) {
  useEffect(() => {
    // Store the current URL in sessionStorage
    sessionStorage.setItem('prevUrl', window.location.pathname);
  }, []);

  return (
    <>
      <Navbar movieverseUser={movieverseUser}/>
      <WatchlistSection sectionName={"Suggestions"} movieverseUser={movieverseUser}/>
      <Footer/>
    </>
  )
}

export default Watchlist