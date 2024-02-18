export const initializeComments = () => {
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
  
    localStorage.setItem('comments', JSON.stringify(initialComments));
    return initialComments;
  };
  