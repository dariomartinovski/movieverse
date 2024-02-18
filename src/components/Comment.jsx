import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai";

function Comment({comment, onButtonsClick}) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if(disliked){
      setDisliked(false);
      onButtonsClick(comment.id, +1, -1);
    }
    else{
      if(liked)
        onButtonsClick(comment.id, -1, 0);
      else
        onButtonsClick(comment.id, 1, 0);
    }
    setLiked(!liked);
  };

  const handleDislike = () => {
    if(liked){
      setLiked(false);
      onButtonsClick(comment.id, -1, 1);
    }
    else{
      if(disliked)
        onButtonsClick(comment.id, 0, -1);
      else
        onButtonsClick(comment.id, 0, 1);
    }
    setDisliked(!disliked);
  };

  return (
    <CommentContainer>
        <p className='name'>{comment?.name}</p>
        <p className='date'>{comment?.date}</p>
        <p className='text'>{comment?.text}</p>
        <div className='buttons'>
        {liked ? (
          <AiFillLike className='like_button' onClick={handleLike}/>
          ) : (
            <AiOutlineLike className='like_button' onClick={handleLike} />
          )}
          ({comment.like_count}){' '}
          {disliked ? (
            <AiFillDislike className='dislike_button' onClick={handleDislike}/>
          ) : (
            <AiOutlineDislike className='dislike_button' onClick={handleDislike} />
          )}
          ({comment.dislike_count})
      </div>
    </CommentContainer>
  )
}

const CommentContainer = styled.div`
  margin-bottom: 1.5em;

  .date{
    font-size: 0.8em;
    margin-bottom: 0.4em;
  }

  .text{
    margin-left: 1em;
    width: 100%;
  }
  
  .buttons{
    margin-left: 1em;
    display: flex;
    align-items: center;
  }

  .like_button{
    margin: 0.1em 0.1em 0 0;
    cursor: pointer;
  }

  .dislike_button{
    margin: 0.35em 0.1em 0 1em;
    cursor: pointer;
  }

  @media only screen and (min-width: 47em) {
    .text{
      width: 80%;
    }
  }
`

export default Comment;