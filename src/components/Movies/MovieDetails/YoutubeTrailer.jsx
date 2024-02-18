import React, { useEffect } from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import styled from 'styled-components';
import { getFromCache, saveToCache } from '../../../utils/youtubeTrailerCache';

function YoutubeTrailer({title}) {
    const youtubeApiKey = "AIzaSyBKlBCol0arfQuYcziLUnrzv88ys_D-z1Y";

    const getTrailer = async () => {
      const cachedData = getFromCache();

      // Use cached data if available
      if (cachedData && cachedData.title === title) {
        const iframe = document.getElementById('trailer');
        iframe.src = `https://www.youtube.com/embed/${cachedData.videoId}`;
      } else {
        if (title && typeof title === 'string') {
          const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(`${title} trailer`)}&key=${youtubeApiKey}`;
    
          try {
            const response = await fetch(apiUrl);
            const data = await response.json();
  
            const firstVideoId = data.items[0]?.id?.videoId;

            const iframe = document.getElementById('trailer');
            iframe.src = `https://www.youtube.com/embed/${firstVideoId}`;

            // Save data to cache
            saveToCache({ title, videoId: firstVideoId });
          } catch (error) {
            console.error('Error fetching trailer:', error);
          }
        }
      }
    };

    // useEffect(()=>{
    //   getTrailer();
    //   // eslint-disable-next-line
    // },[title])

    
  return (
    <YoutubeTrailerContainer>
      <h1 className='title'><FaRegCirclePlay />  Watch trailer</h1> 
      <div id='youtube-trailer' ref={youtubeTrailerRef}>
        {/* remove iframe later */}
        <iframe title='trailer' id='trailer' frameBorder="0" allowFullScreen></iframe>
      </div>
    </YoutubeTrailerContainer>
  )
}

const YoutubeTrailerContainer = styled.div`
  padding: 2% min(12%, 25em);

  .title{
    grid-column: 1/-1;
    color: var(--text-color);
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
  }
  .title > *{
    margin-right: 0.25em;
  }

  .youtube-trailer{
    width: 100%;
    height: 100%;
  }
  
  #trailer {
    background-color: var(--offWhite);
    width: 100%;
    height: 80vh;
  }
  
  @media (max-width: 47em) {
    #trailer{
      height: 30vh;
    }
  }
`

const youtubeTrailerRef = React.createRef();

export default YoutubeTrailer;