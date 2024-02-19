import React, { useState, useEffect } from 'react'
import { MdOutlineStar, MdOutlineStarBorder, MdOutlineStarHalf } from "react-icons/md";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import styled from 'styled-components';

function renderStars(rating){
    rating = rating / 2;
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = maxStars - fullStars - halfStars;

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<MdOutlineStar key={i} />);
    }
    if (halfStars === 1) {
        stars.push(<MdOutlineStarHalf key={fullStars} />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<MdOutlineStarBorder key={fullStars + 1 + i} />);
    }
    return stars;
}

function TvShowDetailsHome({show}) {
    const [watchlist, setWatchlist] = useState([]);
    const [isInWatchlist, setIsInWatchlist] = useState(false);

    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        setWatchlist(storedWatchlist);
      }, []);

    useEffect(() => {
        setIsInWatchlist(watchlist.includes(`tv_${show.id}`));
    }, [watchlist, show.id]);

    const addToWatchlist = () => {
        if (isInWatchlist) {
            const shouldRemove = window.confirm('Are you sure you want to remove this show from your watchlist?');
            if (shouldRemove) {
            const updatedWatchlist = watchlist.filter((id) => id !== `tv_${show.id}`);
            setWatchlist(updatedWatchlist);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
            alert('Successfully removed show from watchlist');
            setIsInWatchlist(false);
            }
        } else {
        const updatedWatchlist = [...watchlist, `tv_${show.id}`];
        setWatchlist(updatedWatchlist);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
            alert('Successfully added show to watchlist');
            setIsInWatchlist(true);
        }
    };

  return (
    <TvShowDetailsHomeContainer style={{
        backgroundImage: show?.backdrop_path?
        `url(https://image.tmdb.org/t/p/original${show.backdrop_path})`
        : 'none',
      }}
      >
        <div className='show_container'>
            <img className='poster' src={`https://image.tmdb.org/t/p/w500${show?.poster_path}`} alt={show?.name} />
            <div className="right_part">
                <h1 className="title">{show?.name}</h1>
                <h3 className='tagline'>{show?.tagline}</h3>
                <div className="genres">
                    {show?.genres?.map((genre) => {
                        return <p className='genre' key={genre.id}>{genre.name}</p> 
                    })}
                </div>
                <div className="overview">{show?.overview}</div>
                <div className="rating">
                    {/* stars */}
                    <span>{renderStars(show?.vote_average?.toFixed(1))}</span>
                    <p className='number_rating'> {show?.vote_average?.toFixed(1)} of 10.0 ({show?.vote_count} reviews)</p>
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
     </TvShowDetailsHomeContainer>
  )
}

const TvShowDetailsHomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    isolation: isolate;
    position: relative;

    .show_container{
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

export default TvShowDetailsHome;