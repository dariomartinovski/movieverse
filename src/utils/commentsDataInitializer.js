export const initialMovieComments = () => {
    const initialComments = [
      {
        id: 1,
        name: 'Vasil123',
        date: '06.02.2024',
        text: 'Denis Villeneuve’s windswept epic is engrossing enough to maintain an audience with an intermission and a running time twice its length.',
        like_count: 1,
        dislike_count: 0,
      },
      {
        id: 2,
        name: 'Filip1122',
        date: '05.02.2024',
        text: 'When the anticipation is feverish, it sets up movies to disappoint and fail. This long-awaited movie smashes those expectations.',
        like_count: 2,
        dislike_count: 5,
      },
      {
        id: 3,
        name: 'TyroneB',
        date: '01.01.2024',
        text: "Nowhere near as enjoyable as Villeneuve's inspired Blade Runner 2049, Dune is an achievement for sure, but watching it is rather like having huge marble monoliths dropped on you for two and a half hours.",
        like_count: 2,
        dislike_count: 0,
      },
      {
        id: 4,
        name: 'Tony004',
        date: '07.02.2024',
        text: 'I saw it Tuesday night, and I want to already see it again this weekend. To watch a two-and-a-half-hour movie like that, says something...',
        like_count: 1,
        dislike_count: 1,
      },
      {
        id: 5,
        name: 'Percy Michaels',
        date: '10.02.2024',
        text: 'Came in thinking this would be really bad, but that was actually pretty enjoyable. Fun movie.',
        like_count: 5,
        dislike_count: 0,
      },
    ];
  
    localStorage.setItem('movie_comments', JSON.stringify(initialComments));
    return initialComments;
  };

export const initialTvShowComments = () => {
  const initialComments = [
    {
      id: 1,
      name: 'Free man',
      date: '02.02.2024',
      text: "The books are far superior. I've watched the series and read the books, they butchered George's work from Seasons 5 through 8.",
      like_count: 1,
      dislike_count: 0,
    },
    {
      id: 2,
      name: 'Bobby',
      date: '10.02.2024',
      text: 'The GOAT of TV shows',
      like_count: 2,
      dislike_count: 4,
    },
    {
      id: 3,
      name: 'Bob Gragan',
      date: '08.02.2024',
      text: "Hydrofluoric acid is one of the most feared acids on earth , it is frightening and relentless . It reminds me of the acid blood of the Aliens in the 'Aliens' movies .",
      like_count: 2,
      dislike_count: 0,
    },
    {
      id: 4,
      name: 'Social guy',
      date: '16.01.2024',
      text: 'the show became boring at season 5 and up',
      like_count: 4,
      dislike_count: 1,
    },
    {
      id: 5,
      name: 'Percy Michaels',
      date: '26.12.2023',
      text: "WOW!! love all of the characters in this show so far. watching it All soon. i hope there's a good ending i've never seen this before but i heard its good",
      like_count: 5,
      dislike_count: 0,
    },
    {
      id: 6,
      name: 'Dollar sign',
      date: '01.01.2023',
      text: "Started to watch it on new years eve, couldn't stop. Im still watching it. The show is totally amazing, i can't believe it.",
      like_count: 5,
      dislike_count: 0,
    },
  ];

  localStorage.setItem('tv_comments', JSON.stringify(initialComments));
  return initialComments;
};
