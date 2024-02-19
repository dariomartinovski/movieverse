import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WatchlistSection from '../components/WatchlistSection'

function Watchlist() {
  return (
    <>
      <Navbar/>
      <WatchlistSection sectionName={"Suggestions"}/>
      <Footer/>
    </>
  )
}

export default Watchlist