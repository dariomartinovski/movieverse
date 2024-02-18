import styled from "styled-components";
import React from 'react'

function ProductionStudios() {
  const handleMouseOut = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  
  const handleHover = (videoRef) => {
    if (videoRef.current) {
      // Check if the video is paused before playing
      if (videoRef.current.paused) {
        setTimeout(function () {      
          videoRef.current.play();
        }, 150);
        // videoRef.current.play();
      }
    }
  }

  return (
    // mislam so for moze da se rese eden kaj so u array ke bidat [disney, pixar, marvel, star-wars, paramount]
    <Productions>
        <Production 
            onMouseOver={() => handleHover(disneyVideoRef)}
            onMouseOut={() => handleMouseOut(disneyVideoRef)}>
            <img src="/assets/images/productions/disney.svg" alt="Disney"/>
            <video muted={true} loop={true} playsInline={true}  ref={disneyVideoRef}>
                <source src="/assets/videos/productions/dinsey.mp4" type="video/mp4" />
            </video>
        </Production>
        <Production
            onMouseOver={() => handleHover(pixarVideoRef)}
            onMouseOut={() => handleMouseOut(pixarVideoRef)}>
            <img src="/assets/images/productions/pixar.svg" alt="Pixar" />
                <video muted loop={true} playsInline={true} ref={pixarVideoRef}>
                    <source src="/assets/videos/productions/pixar.mp4" type="video/mp4" />
                </video>
        </Production>
        <Production
            onMouseOver={() => handleHover(marvelVideoRef)}
            onMouseOut={() => handleMouseOut(marvelVideoRef)}>
            <img src="/assets/images/productions/marvel.svg" alt="Marvel" />
            <video muted loop={true} playsInline={true} ref={marvelVideoRef}>
                <source src="/assets/videos/productions/marvel.mp4" type="video/mp4" />
            </video>
        </Production>
        <Production
            onMouseOver={() => handleHover(starWarsVideoRef)}
            onMouseOut={() => handleMouseOut(disneyVideoRef)}>
            <img src="/assets/images/productions/star-wars.svg" alt="Star Wars" />
            <video muted loop={true} playsInline={true} ref={starWarsVideoRef}>
                <source src="/assets/videos/productions/star-wars.mp4" type="video/mp4" />
            </video>
        </Production>
        <Production
            onMouseOver={() => handleHover(paramountVideoRef)}
            onMouseOut={() => handleMouseOut(paramountVideoRef)}>
            <img src="/assets/images/productions/paramount.svg" alt="Paramount" />
            <video muted loop={true} playsInline={true} ref={paramountVideoRef}>
                <source src="/assets/videos/productions/paramount.mp4" type="video/mp4" />
            </video>
        </Production>
    </Productions>
  );
};

const Productions = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2% min(12%, 25em);
    color: white;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1em;

    @media (max-width: 47em) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
`
const Production = styled.div`
    aspect-ratio: 4 / 2.5;
    display: flex;
    justify-content: center;
    background: linear-gradient(0deg, rgba(220, 122, 3, 0.5) 0%, rgba(220, 122, 3, 0.1) 100%);
    box-shadow: 0.15em 0.15em 1em 0.1em rgba(0, 0, 0, 0.25);
    border-radius: 1em;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    overflow: hidden;

    img{
        width: 100%;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
    }

    video {
        // width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
        overflow: hidden;
      }

      &:hover {
    
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    
        video {
          opacity: 1;
        }
      }
`
const disneyVideoRef = React.createRef();
const pixarVideoRef = React.createRef();
const marvelVideoRef = React.createRef();
const starWarsVideoRef = React.createRef();
const paramountVideoRef = React.createRef();

export default ProductionStudios;