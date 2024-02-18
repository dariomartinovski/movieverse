import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function TvShowDetails() {
  const { id } = useParams();

  return (
    <>
    <Navbar/>
    <div>MovieDetails for movie {id}</div>
    <Footer/>
    </>  )
}

export default TvShowDetails;