import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WatchlistSection from '../components/WatchlistSection'

function Watchlist({movieverseUser}) {
  return (
    <>
      <Navbar/>
      <WatchlistSection sectionName={"Suggestions"} movieverseUser={movieverseUser}/>
      <Footer/>
    </>
  )
}

export default Watchlist