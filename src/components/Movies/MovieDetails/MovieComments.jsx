import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Comment from '../../Comment';
import { initialMovieComments, initialTvShowComments } from '../../../utils/commentsDataInitializer';

function MovieComments({prefix}) {
  const [showMore, setShowMore] = useState(false);
  const [comments, setComments] = useState([]);

  const showMoreInformation = () => {
    let moreComments = [];
    comments.forEach((cmnt, i) => {
      if(i > 2) 
        moreComments.push(<Comment key={cmnt.id} comment={cmnt} onButtonsClick={handleButtonsClick}/>);
    })
    return moreComments;
  }

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleButtonsClick = (commentId, l_count, d_count) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, like_count: comment.like_count + l_count, dislike_count: comment.dislike_count + d_count }
        : comment
    );

    localStorage.setItem(`${prefix}_comments`, JSON.stringify(updatedComments));
    setComments(updatedComments);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const textareaValue = e.target.textarea.value.trim();
  
    if (textareaValue) {
      const newComment = {
        id: comments.length + 1,
        name: "Marko",
        date: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }),
        text: textareaValue,
        like_count: 0,
        dislike_count: 0,
      };
  
      const updatedComments = [...comments, newComment];
  
      localStorage.setItem(`${prefix}_comments`, JSON.stringify(updatedComments));
      setComments(updatedComments);
  
      // Clear the textarea after submitting
      e.target.textarea.value = '';
    }
  }

  useEffect(() => {
    const storedComments = localStorage.getItem(`${prefix}_comments`);

    if (!storedComments) {
      let initialComments = [];
      if(prefix === "movie")
        initialComments = initialMovieComments();
      else if(prefix === "tv")
        initialComments = initialTvShowComments();
      setComments(initialComments);
    } else {
      setComments(JSON.parse(storedComments));
    }
    //eslint-disable-next-line
  },[])

  return (
    <MovieCommentsContainer>
        <p className='comment_number'>{comments.length} Comments</p>
        {/* with after make the line */}
        <form onSubmit={handleSubmitForm}>
            <textarea name="textarea" cols="30" rows="2" placeholder='Join discussion...' maxLength={250}></textarea>
            {/* <input type="text" placeholder='Join discussion...'/> */}
            <button type="submit">Comment</button>
        </form>

        {comments?.map((comment, i) => {
          if(i < 3)
            return <Comment key={comment.id}
                          comment={comment}
                          onButtonsClick={handleButtonsClick}
                          />
        })}
        {showMore && showMoreInformation()}
        <button onClick={toggleShowMore} className="show_more_button">
          {showMore ? "View less" : "View more"}
        </button>
    </MovieCommentsContainer>
  )
}

const MovieCommentsContainer = styled.div`
    padding: 2% min(12%, 25em);
    color: var(--text-color);

    .comment_number
      font-size: 0.8em;
    }
    .comment_number::after{
      content: '';
      display: block;
      width: 100%;
      height: 0.125em;
      background-color: var(--lightColor);
      margin: 0.3em 0 1em 0;
    }

    form{
      display: grid;
      width: 100%;
      gap: 0.5em;
    }

    form textarea{
      font-family: Arial;
      font-size: 1em;
      padding: 0.5em;
      border: none;
      border-radius: 0.5em;
    }

    form input{
      box-sizing: border-box;
      padding: 0 0.5em;
      height: 2em;
      width: 100%;
      border: none;
      border-radius: 0.5em;
      font-size: 1em;
    }

    form button{
      justify-self: end;
      padding: 0.5em 1.5em;
      border: none;
      border-radius: 0.5em;
      font-size: 1em;
      background-color: var(--lightColor);
      color: var(--darkColor);
    }

    .show_more_button{
      margin-top: 1em;
      padding: 0.5em 1.5em;
      border-radius: 2em;
      font-size: 0.9em;
      background-color: transparent;
      color: var(--text-color);
      border: 0.125em solid var(--text-color);
      box-shadow: 0.125em 0.25em 0.2em 0 rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
  
    @media only screen and (min-width: 47em) {
      .show_more_button:hover{
          box-shadow: 0 0 0.5em 0.2em #f7f7f750;
      }
      form{
        width: 80%;
      }
      .comment_number::after{
        width: 80%;
      }
    }
`

export default MovieComments