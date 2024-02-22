import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Watchlist from './pages/Watchlist';
import MovieDetailsPage from './pages/MovieDetailsPage';
import TvShowDetailsPage from './pages/TvShowDetailsPage';
import Login from './pages/Login';
import {useState} from 'react';
import Logout from './pages/Logout';

function App() {
  const [movieverseUser, setMovieverseUser] = useState(null);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home movieverseUser={movieverseUser}/>} />
          <Route path="/login" element={<Login movieverseUser={movieverseUser} setMovieverseUser={setMovieverseUser}/>} />
          <Route path="/logout" element={<Logout movieverseUser={movieverseUser} setMovieverseUser={setMovieverseUser}/>} />
          <Route path="/movies" element={<Movies movieverseUser={movieverseUser}/>} />
          <Route path="/tv-shows" element={<TvShows movieverseUser={movieverseUser}/>} />
          <Route path="/movie/:id/details" element={<MovieDetailsPage movieverseUser={movieverseUser}/>} />
          <Route path="/tv-show/:id/details" element={<TvShowDetailsPage movieverseUser={movieverseUser}/>} />
          <Route path="/watchlist" element={<Watchlist movieverseUser={movieverseUser}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
