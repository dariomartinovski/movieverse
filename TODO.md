# Movieverse

#### React JS web application by: Dario Martinovski
---

## 1. Project description
Introducing "Movieverse," your first and only stop for the best cinematic viewing pleasure. The web application is a online movie database, where you can view popular movies and TV shows, see their details, add them to your watchlist and open discussions about them in the comment section, all done with a visually apealing and intuitive UI.\
\
The web application consists of the following pages:

  #### 1.1 Home page
  The home page is made up from few elements, beautiful carousell from few featured movies, popular production studios, section for popular movies and top 9 movies this week and also section for popular TV shows and top 9 TV shows this week.\
  Each of the featured movies on the carousell can be opened by clicking on the "See details" button, which reveals more details about the movie, where you can also watch the trailer, add it to your watchlist and possibly leave a comment for it.\
  While hovering over the production studiou's image, you can watch it's intro.\
  Also each of the listed popular movies/TV shows is clickable, which takes you to the according details page, the same is done for the "Top 9 this week" sections.
  
  #### 1.2 Movies page
  On the movies page, you have something very similar to what you have on the home page, where popular movies and top 9 movies this week are listed. The difference here, that there is no clutter, no unnecesarry elements.
  
  #### 1.3 TV Shows page
  Something very similar can be said about the TV shows page, where you have listed the popular TV shows and top 9 TV shows this week.
  
  #### 1.4 Watchlist page
  In the watchlist page you can view your movies and TV shows that you have added to it. You can open each of them, by clicking, which would reveal more details. There's also another button here "Choose a random movie" which would make our selection much easier, because sometimes even if we have a list of good movies, we still cannot choose one.
  
  #### 1.5 Login page
  The login page is very intuitive, it has a sing in or sing up option.

  #### 1.6 Movie/Tv Show details page
  The details page has a main part where the movie title, tagline, genres, overview, rating and the poster of the chosen movie are listed. Below that you have the movie trailer and some additional details. Then there's some intresting trivia and a comment section, where you can leave a comment, like or dislike others. \
\
  <img src="https://github.com/dariomartinovski/movieverse/assets/80409852/a152dca1-c3cb-4a91-9f73-55fad892c80e" alt="Home page" style="width: 440px;">
  <img src="https://github.com/dariomartinovski/movieverse/assets/80409852/a325952f-1e8f-472a-8db8-ef2eab2ed30a" alt="Home page" style="width: 440px;">
  <img src="https://github.com/dariomartinovski/movieverse/assets/80409852/764b34a3-0a66-42c9-8c40-6c6eef1236e5" alt="Movie details page" style="width: 440px;">
  <img src="https://github.com/dariomartinovski/movieverse/assets/80409852/f824ae25-03bc-4e7f-8b5b-dbaca8de845c" alt="Movie details page" style="width: 440px;">
  <p align="center">
    <sup>few images from the web app (more at the end of the document)</sup>
  </p>
  
---

### 2. User instructions

#### 2.1 Browsing movies / TV shows
Once you open the web application, you will be greated by a featured movies carousell, which you can scroll through by dragging the mouse from left to right or the other side, or by clicking the buttons on the left or right side. You can open each of the featured movies, by clicking see details or watch trailer, which would take you to the movie details page. \
If you scroll down a bit, you can see the current popular movies listed, accompanied by the top 9 movies this week. Every one of these movies you can open by clicking on the image or title. \
Scrolling further down, you can see the current popular TV shows listed, accompanied by the top 9 TV shows this week. Every one of these TV shows can be opened. \
You can also browse movies on the movies page, and TV shows accordingly on the TV shows page.

#### 2.2 Viewing movie details
You can view the movie details foir a chosen movie, by clicking on the chosen movie poster or title, which takes you to another page showing the movie details.\
Any of the movies/TV shows listed on the home page, movies page, TV shows page and watchlist page can be opened.

#### 2.3 Sign in / sign up
Firstly you have to open the login page, you can do that by clicking on the "Login ->" button on navigation bar.\
Once there you can choose on of the options, sign in or sign up.\
If you click sign in option, you have two input fields, for your email and password.\
If you click sign up, you have two additional fields, for your name and the other for confirmation of the inputted password.\
After signing in, the "Login ->" button in the navigation bar changes to "Logout" button, which you can later use for logging out.

#### 2.4 Watchlist
After logging in, you can acess your watchlist through the "Watchlist" button in the navigation bar.
show

#### 2.4.1 Adding movies to watchlist
You can add a movie to your watchlist by clicking the "Add to watchlist" button in the movie details page(see 2.2).

#### 2.4.2 Removing movies from watchlist
You can remove movies from your watchlist, by clicking on the movie from the watchlist, which would reaveal the movie details page, there the "Add to watchlist" button will now be "Remove from watchlist" button. By clicking on it you will remove the desired movie. You can check by returning back to your watchlist.

#### 2.4.3 Chosing a random movie from watchlist
Once in the watchlist page, the application allows for a way to choose a random movie from the watchlist, by clicking on the button "Choose a random movie".\
After the application has chosen a random movie, you will be propmted to open the movie with a yes/no dialog.

#### 2.5 Commenting
Once logged in and in the movie details page, you can scroll to the bottom of the page to the comment section.

#### 2.5.1 Adding a comment
You can add a comment by filling the input field and clicking the button "Comment".

#### 2.5.2 Edit a comment
You cannot edit a comment, but you can only leave one comment per movie, so if you try adding a new comment, the old one would be replaced with the new one.

#### 2.5.3 Liking, disliking other comments
You can like and dislike comments, by clicking the thumbs up for like, or thumbs down for disliking a comment.

##
### 3. Problem representation
#### 3.1 Application data
The data for this application comes from few apis, three to be precise.\
The APIs used:
- TMDB API - https://www.themoviedb.org/
- OMDB API - https://www.omdbapi.com/
- Youtube API - https://developers.google.com/youtube/

#### 3.1.1 Using the TMDB API
```jsx
function FeaturedMovies() {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const featuredMoviesIDs = [438631, 76341, 866398, 335984, 755566];
    const featuredMoviesBackgrounds = ['lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg', 'cfl0C5WsX7q8LeHnFPBS1s656A.jpg', 'tL8fzn7JaBzRJKsE1W6GrVxmMQj.jpg', 'ilRyazdMJwN05exqhwK4tMKBYZs.jpg', 'yjZM4QrgA7PqX18Es6DxvJQH3ba.jpg'];
    const youtubeTrailerRef = useRef(null);

    const getMovieDetails = async (movieId) => {
        const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
    
        return fetch(detailsUrl)
          .then(response => response.json())
          .then(movieDetails => {
            return movieDetails;
          })
          .catch(() => {
            console.error(`Error fetching movie details for movie with id: ${movieId}`);
            return null;
          });
      };

    const getFeaturedMovies = async () => {
        const promises = featuredMoviesIDs.map(movieId => getMovieDetails(movieId));

        Promise.all(promises)
        .then(movieDetails => {
            const validDetails = movieDetails.filter(detail => detail !== null);
            setFeaturedMovies(validDetails);
          })
        .catch(error => {
            console.error("Error fetching movie details:", error);
        });
    } 

    const scrollToTrailer = () => {
      if (youtubeTrailerRef.current) {
        youtubeTrailerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    useEffect(()=>{
      getFeaturedMovies();
    },[])
}
```
<p align="center">
    <sup>Code insert from the Featured movies component that is shown on the home page.</sup>
</p> 
Firstly here i'm using the TMDB API.

In the *useEffect* hook i'm calling the *getFeaturedMovies()* function, which is an asyncronous function. It's asyncronous because it's calling another function *getMovieDetails(movieID)* that's getting the detailed infromation about the predefined movie ids from the api.

```js
{
  "adult": false,
  "backdrop_path": "/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
  "belongs_to_collection": {
    "id": 726871,
    "name": "Dune Collection",
    "poster_path": "/wcVafar6Efk3YgFvh8oZQ4yHL6H.jpg",
    "backdrop_path": "/iCFFmXkK5FdIzqZyyQQEdpkTo8C.jpg"
  },
  "budget": 165000000,
  "genres": [
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 12,
      "name": "Adventure"
    }
  ],
  "homepage": "https://www.dunemovie.com/",
  "id": 438631,
  "imdb_id": "tt1160419",
  "original_language": "en",
  "original_title": "Dune",
  "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
  "popularity": 1133.192,
  "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  "production_companies": [
    {
      "id": 923,
      "logo_path": "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
      "name": "Legendary Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2021-09-15",
  "revenue": 433758183,
  "runtime": 155,
  "spoken_languages": [
    {
      "english_name": "Mandarin",
      "iso_639_1": "zh",
      "name": "普通话"
    },
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "Beyond fear, destiny awaits.",
  "title": "Dune",
  "video": false,
  "vote_average": 7.791,
  "vote_count": 10339
}
```
<p align="center">
    <sup>exmaple response object from the call of https://api.themoviedb.org/3/movie/${movieId} endpoint</sup>
</p>  

Then after that i'm displaying the information from the object.\
I'm using the same API call in the LatestMovies, LatestTvShows, PopularMovies, PopularTvShows, WatchlistItems, MovieDetailsHome and TvShowDetailsHome components.

#### 3.1.2 Using the OMDB API
```jsx
function MovieFacts({ movie }) {
  const [movieDetails, setMovieDetails] = useState();
  const [showMore, setShowMore] = useState(false);

  const getMovieDetails = async (imdbId) => {
    if (imdbId && typeof imdbId === "string") {
      const detailsUrl = `https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

      return fetch(detailsUrl)
        .then((response) => response.json())
        .then((movieDetails) => {
          setMovieDetails(movieDetails);
        })
        .catch(() => {
          console.error(
            `Error fetching movie details for movie with IMDB id: ${imdbId}`
          );
          return null;
        });
    }
  };
  useEffect(() => {
    getMovieDetails(movie.imdb_id);
  }, [movie]);
}
```
<p align="center">
    <sup>Code insert from the MovieFacts component that is shown on the MovieDetailsPage.</sup>
</p>

I'm using the OMDB API here, because it provides more information about the actors, writers, directors and similar facts about the movie.\
In similar fashion to the previous call, there's a fucntion *getMovieDetails(imdbID)* which takes in the imdb id of the desired movie, and makes a call to the omdb API with the imdb id and in return we get a response object, as:

```js
{"Title":"Dune",
"Year":"2021",
"Rated":"PG-13",
"Released":"22 Oct 2021",
"Runtime":"155 min",
"Genre":"Action, Adventure, Drama",
"Director":"Denis Villeneuve",
"Writer":"Jon Spaihts, Denis Villeneuve, Eric Roth",
"Actors":"Timothée Chalamet, Rebecca Ferguson, Zendaya",
"Plot":"A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.","Language":"English, Mandarin","Country":"United States, Canada","Awards":"Won 6 Oscars. 173 wins & 294 nominations total",
"Poster":"https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
"Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"83%"},{"Source":"Metacritic","Value":"74/100"}],
"Metascore":"74",
"imdbRating":"8.0",
"imdbVotes":"772,111",
"imdbID":"tt1160419",
"Type":"movie","DVD":"22 Oct 2021",
"BoxOffice":"$108,897,830",
"Production":"N/A","Website":"N/A",
"Response":"True"}
```
After that i'm just displaying the information normally with html and css.

#### 3.1.3 Using the Youtube API
```jsx
function YoutubeTrailer({title}) {

    const getTrailer = async () => {
      const cachedData = getFromCache();

      // Use cached data if available
      if (cachedData && cachedData.title === title) {
        const iframe = document.getElementById('trailer');
        iframe.src = `https://www.youtube.com/embed/${cachedData.videoId}`;
      } else {
        if (title && typeof title === 'string') {
          const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(`${title} trailer`)}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    
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

    useEffect(()=>{
      getTrailer();
    },[title])

    
  return (
    <YoutubeTrailerContainer>
      <h1 className='title'><FaRegCirclePlay />  Watch trailer</h1> 
      <div id='youtube-trailer' ref={youtubeTrailerRef}>
        <iframe title='trailer' id='trailer' frameBorder="0" allowFullScreen></iframe>
      </div>
    </YoutubeTrailerContainer>
  )
}
```
Here i'm using the youtube API, because i need to fetch the trailer of the movie, which neither the TMDB or OMDB API provides.\
So therefore in the *useEffect()* i'm calling the function *getTrailer()* when the parameter *title* changes.\
I'm making a call to the https://www.googleapis.com/youtube/v3/search url with the movie title, which returns an array of youtube videos, from which i'm getting the first one, because that is the desired trailer.

#### 3.2 Components
The components are divided in few groups:
- Section components,
- Showcase components,
- Independent components and
- Single components.

Let's start from the bottom, the single components. There's compomenents for Movie and TvShow which are used in the display of LatestMovies and LatestTvShows. There's components for SmallMovie and SmallTvShow which are used in the display of Top 9 this week, for movies and TV shows in the PopularMovies and PopularTvShows components. Also there's a Comment component which is used in the Comments component.

After that in the Showcase components group, there is Comments component in which the comments firstly are fetched and after that displayed. LatestTvShows and LatestMovies where the movies firsly are fetched from the API then displayed through the Movie, SmallMovie, TvShow and SmallTvShow components. WatchlistItems is very similar to the other ones, first it maps the items in the watchlist into the according movie or TV show component.

In the section components, we have MovieSection, TvShowSection and WatchlistSection. In these sections we're just combining the other components. For example in the MovieSection we use the LatestMovies component and Popular Movies.

In the independent components, we have few components that are not using any other components. We have MovieDetailsHome and TvShowDetailsHome that are the page when you open the movie details page, MovieFacts and TvShowFacts that are displaying some additional information about the movies/TV shows, youtube trailer that is used to get and display the movie trailer.

#### 3.3 Styling the components
For styling i'm using the *styled-component* library. 
This approach helps in creating modular and scoped styles for React components, making it easier to manage and maintain styles for individual components. The styles are applied dynamically at runtime, and the generated class names are often unique to avoid global style conflicts.

```jsx
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
```
<p align="center">
    <sup>Code insert with styled-component from the Youtube Trailer component.</sup>
</p>
With styled-components we can use something very similiar to SCSS where we can nest CSS rules, so the code would look cleaner, more maintainable and avoid unwanted overwrites. 

#### 3.4 Libraries

In this project i'm using few libraries like:
- React and React Router,
- React DOM,
- Styled Components,
- Firebase,
- Framer motion,
- React icons and
- React Splide.

#### 3.4.1 React Router
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';


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
```
The react router is user here to map the components to the according url which they should respond. For example the *Login* component is being rendered when the user goes to /login url, same for all the others.

#### 3.4.2 React Router Dom
```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

useEffect(() => {
    const prevUrl = sessionStorage.getItem('prevUrl');

    if (prevUrl && movieverseUser != null) {
      navigate(prevUrl);
    }
    else if(movieverseUser != null){
        navigate("/");
    }
}, [movieverseUser, navigate])
```
This is a code snippet from Login component where i'm using the *useNavigate()* hook to navigate the user back to the url he came from, or if he directly came to the /login page i'm just navigating to the home page.

#### 3.4.3 Styled components
The styled components are used because this approach helps in creating modular and scoped styles for React components, making it easier to manage and maintain styles for individual components as said previously.

#### 3.4.4 React Splide
React splide is a lightweight, flexible and accessible slider/carousel written in TypeScript. No dependencies, no Lighthouse errors.
```jsx
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

<Splide
      options={{
        type: 'loop', 
        // arrows: false,
      }}
    >
      {featuredMovies?.map((movie, i) => (
          <SplideSlide key={movie.id}>
            <FeaturedMovieContainer className="container" style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${featuredMoviesBackgrounds[i]})`,
            }}>
              <div className='featuredMovie'>
                <div className="left_side">
                  <h1 className='title'>{movie.title}</h1>
                  <p className='paragraph'>{movie.overview}</p>
                  <Link to={'/movie/' + movie.id + '/details'}>
                    <button className='details_button'>See details</button>
                  </Link>
                  <Link to={'/movie/' + movie.id + '/details'} onClick={scrollToTrailer}>
                    <button className='trailer_button'>Watch trailer</button>
                  </Link>
                </div>
                <img className='poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="black_gradient"></div>
            </FeaturedMovieContainer>
          </SplideSlide>
        ))}
      </Splide>
```
Here i have shown how we import the splide library, and we also need to import a style for the carousell, here i'm using the default styling.\
First we create the container Splide, where we can set few properties, i've set the property loop to true, which loops the slides. Then with SplideSlide we create each of the elements, which in this case is one movie with all it's details.

#### 3.4.5 Framer motion
Framer motion is a library providing neat animations, cool effects and transitions. I'm using it in the nav bar, specifically when the hamburger menu is clicked so it has a smooth transition.

```jsx
import { AnimatePresence, motion } from "framer-motion";

return (
    <nav>
      <Link to={"/"} className="homeButton">
        MovieVerse
      </Link>
      <motion.button
        className="toggleButton"
        onClick={handleClick}
        animate={{ rotate: rotation }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 50 50">
          <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg>
      </motion.button>
      <AnimatePresence>
        {menuState && (
          <motion.ul
            className="navlinks"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween" }}
            exit={{ y: -25, opacity: 0 }}
          >
            <NavLink to="/" onClick={closeMenu}>
              <li className="navlink">Home</li>
            </NavLink>
            <NavLink to="/movies" onClick={closeMenu}>
              <li className="navlink">Movies</li>
            </NavLink>
            <NavLink to="/tv-shows" onClick={closeMenu}>
              <li className="navlink">TV shows</li>
            </NavLink>
            <NavLink to="/watchlist" onClick={closeMenu}>
              <li className="navlink">Watchlist</li>
            </NavLink>
            <NavLink to={movieverseUser ? '/logout': '/login'} onClick={closeMenu}>
              <li className="navlink">{movieverseUser ? 'Logout' : <>Login <FaArrowRightLong/></>}</li>
            </NavLink>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
```
We create motion elements, and we can change the properties on them. For example here on the ul i have added a smooth transition, and a offset of -25px so it looks like it comes from the top.

#### 3.4.6 React icons
I'm using react icons all around the project. We can search for the icons here https://react-icons.github.io/react-icons/, and then just import them in the document and use them as components.

```jsx
import { FaRegCirclePlay } from "react-icons/fa6";

return (
    <YoutubeTrailerContainer>
      <h1 className='title'><FaRegCirclePlay />  Watch trailer</h1> 
      <div id='youtube-trailer' ref={youtubeTrailerRef}>
        {/* remove iframe later */}
        <iframe title='trailer' id='trailer' frameBorder="0" allowFullScreen></iframe>
      </div>
    </YoutubeTrailerContainer>
  )
```
#### 3.4.7 Firebase
I'm using firebase for user authentication, logging in and signing up. Also i'm saving the users, comments about the movies/tv shows and user watchlists in *Firestore database*. Here's an example of that:
```jsx
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

useEffect(() => {
      const fetchWatchlist = async () => {
        if(movieverseUser && movieverseUser.id){
          const userId = movieverseUser.id;
          const watchlistRef = doc(db, "watchlists", userId);
  
        try {
          const watchlistDoc = await getDoc(watchlistRef);
          const currentWatchlist = watchlistDoc.data().watchlist_items || [];
  
          convertItems(currentWatchlist);
        } catch (error) {
          console.error("Error fetching watchlist:", error);
        }
        }
      };

      fetchWatchlist();
      // eslint-disable-next-line
    }, [movieverseUser]);
```
Here i'm fetching the users watchlist from the db and then parsing it into a movie component or tv show component accordingly.\
One more thing im using firebase for is *hosting*. The application is deployed and runing on firebase.

### 4. Additional images and links
  <img src="https://github.com/dariomartinovski/ShooterHero/assets/80409852/64c1693a-6738-46b8-a5f1-328c93e29e4c" alt="Почетен екран" style="width: 440px;">
  
  
---


The entire code source code is in the main branch of the repository **https://github.com/dariomartinovski/movieverse**\
The application is also hosted on firebase: **https://movieverse-5c81e.web.app/**