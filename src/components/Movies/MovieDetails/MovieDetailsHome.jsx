import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdOutlineStar, MdOutlineStarBorder, MdOutlineStarHalf } from "react-icons/md";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import styled from 'styled-components';
import { updateDoc, arrayUnion, arrayRemove, doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/config';


function MovieDetailsHome({movie, movieverseUser}) {
    const [isInWatchlist, setIsInWatchlist] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchWatchlist = async () => {
            if(movieverseUser && movieverseUser.id){
                const userId = movieverseUser.id;
                const watchlistRef = doc(db, "watchlists", userId);
        
              try {
                const watchlistDoc = await getDoc(watchlistRef);
                const currentWatchlist = watchlistDoc.data().watchlist_items || [];
        
                setIsInWatchlist(currentWatchlist.includes(`movie_${movie.id}`));
              } catch (error) {
                console.error("Error fetching watchlist:", error);
              }
            }
        };

        fetchWatchlist();
      }, [movie.id]);

    const addToWatchlist = async () => {
        if(movieverseUser){
            const userId = movieverseUser.id;
            const watchlistRef = doc(db, "watchlists", userId);
          
            try {
                const watchlistDoc = await getDoc(watchlistRef);
          
              if (isInWatchlist) {
                await updateDoc(watchlistRef, {
                    watchlist_items: arrayRemove(`movie_${movie.id}`),
                });
          
                alert('Successfully removed movie from watchlist');
              } else {
                await updateDoc(watchlistRef, {
                    watchlist_items: arrayUnion(`movie_${movie.id}`),
                });
          
                alert('Successfully added movie to watchlist');
              }
              
                const updatedWatchlist = await getDoc(watchlistRef);
                const updatedMovieIds = updatedWatchlist.data().watchlist_items || [];
                setIsInWatchlist(updatedMovieIds.includes(`movie_${movie.id}`));
            } catch (error) {
              console.error("Error updating watchlist:", error);
            }
        }
        else{
            //NAVIGATE TO LOGIN THEN COME BACK?
            navigate("/login");
        }
      };
      
    const renderStars = (rating) => {
        rating = rating / 2;
        const maxStars = 5;
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = maxStars - fullStars - halfStars;
    
        let stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<MdOutlineStar key={i} />);
        }
        if (halfStars == 1) {
            stars.push(<MdOutlineStarHalf key={fullStars} />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<MdOutlineStarBorder key={fullStars + 1 + i} />);
        }
        return stars;
    }

    return (
    <MovieDetailsHomeContainer className='container' style={{
        backgroundImage: movie?.backdrop_path?
        `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        : 'none',
      }}>
        <div className='movie_container'>
            <img className='poster' src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
            <div className="right_part">
                <h1 className="title">{movie?.title}</h1>
                <h3 className='tagline'>{movie?.tagline}</h3>
                <div className="genres">
                    {movie?.genres?.map((genre) => {
                        return <p className='genre' key={genre.id}>{genre.name}</p> 
                    })}
                </div>
                <div className="overview">{movie?.overview}</div>
                <div className="rating">
                    {/* stars? */}
                    <span>{renderStars(movie?.vote_average?.toFixed(1))}</span>
                    <p className='number_rating'> {movie?.vote_average?.toFixed(1)} of 10.0 ({movie?.vote_count} reviews)</p>
                </div>
                <button onClick={addToWatchlist} className="watchlist_button">
                    {isInWatchlist ? (
                        <>
                            <IoIosRemoveCircleOutline /> Remove from watchlist
                        </>
                    ) : (
                        <>
                            <IoIosAddCircleOutline /> Add to watchlist
                        </>
                    )}                
                </button>
            </div>
        </div>
        <div className="black_gradient"></div>
     </MovieDetailsHomeContainer>
  )
}

const MovieDetailsHomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    isolation: isolate;
    position: relative;

    .movie_container{
        padding: 8% min(12%, 25em) 2%;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: 6em;
        color: var(--text-color);
    
        .poster{
            border-radius: 1em;
            height: 35em;
            box-shadow: 0.125em 0.25em 0.2em 0 rgba(0, 0, 0, 0.25);
        }
        
        .right_part{
            padding: 0.5em 1em;
            border-radius: 1em;
            backdrop-filter: blur(0.2em);
        }

        .title{
            font-size: 4em;
            text-transform: uppercase;
            line-height: 1em;
        }

        .tagline{
            margin-top: 0.5em;
            margin-bottom: 1em;
        }

        .overview{
            font-size: 1.1em;
            margin-bottom: 1em;
        }

        .genres{
            margin-bottom: 0.5em;
        }

        .genre{
            margin-right: 1em;
            display: inline-block;
            padding: 0.2em 1em;
            border: 0.125em solid var(--text-color);
            border-radius: 1em;
            font-size: 0.8em;
        }

        .rating{
            display: flex;
            gap: 0.5em;
            font-size: 0.8em;
        }

        .rating span{
            display: flex;
            align-items: center;
            font-size: 1.3em;
        }

        .watchlist_button{
            margin-top: 1em;
            padding: 0.5em 1.5em;
            border-radius: 2em;
            font-size: 0.9em;
            font-weight: bold;
            color: var(--text-color);
            border: none;
            box-shadow: 0.125em 0.25em 0.2em 0 rgba(0, 0, 0, 0.25);
            cursor: pointer;
            background-color: transparent;
            border: 0.125em solid var(--text-color);
            box-sizing: border-box;
            display: flex;
            align-items: center;
        }

        .watchlist_button svg{
            margin-right: 0.2em;
        }

        @media only screen and (max-width: 47em) {
            grid-template-columns: 1fr;
            gap: 2em;

            .poster{
                margin-top: 3em;
                justify-self: center;
                height: 25em;
            }
        }

        @media only screen and (min-width: 47em) {
            .watchlist_button:hover{
                box-shadow: 0 0 0.5em 0.2em #f7f7f750;
            }
        }        
    }
`

export default MovieDetailsHome;