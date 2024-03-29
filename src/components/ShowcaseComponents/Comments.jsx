import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Comment from '../SingleComponents/Comment';
import { collection, updateDoc, doc, addDoc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

function Comments({item, movieverseUser}) {
  const [showMore, setShowMore] = useState(false);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  const showMoreInformation = () => {
    let moreComments = [];
    comments.forEach((cmnt, i) => {
      if(i >= 3) 
        moreComments.push(<Comment key={cmnt.owner_id} comment={cmnt} onButtonsClick={handleButtonsClick}/>);
    })
    return moreComments;
  }

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleButtonsClick = async (commentId, l_count, d_count) => {
    const updatedComments = comments.map((comment) =>
      comment.owner_id === commentId
        ? { ...comment, like_count: comment.like_count + l_count, dislike_count: comment.dislike_count + d_count }
        : comment
    );
  
    if (item && item.id) {
      const commentsCollection = collection(db, `comments_for/${item.id}/comments`);
      
      // Fetch the existing comments
      const querySnapshot = await getDocs(commentsCollection);
      const existingComments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
      // Find the document to update
      const commentDoc = existingComments.find(comment => comment.owner_id === commentId);
  
      if (commentDoc) {
        const commentDocRef = doc(commentsCollection, commentDoc.id);
  
        // Update the document with the modified comment
        await updateDoc(commentDocRef, {
          like_count: commentDoc.like_count + l_count,
          dislike_count: commentDoc.dislike_count + d_count
        });

      }
    }

    setComments(updatedComments);
  
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if(!movieverseUser){
      navigate("/login");
      return;
    }

    const textareaValue = e.target.textarea.value.trim();
  
    if (textareaValue) {
      const newComment = {
        id: movieverseUser.id,
        owner_id: movieverseUser.id,
        owner_name: movieverseUser.displayName,
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
  
      // TODO update the comments for the movie in the firebase db. 
      try {
        if (item && item.id) {
          const commentsCollection = collection(db, `comments_for/${item.id}/comments`);
  
          // Add a new document for the comment
          // await addDoc(commentsCollection, newComment);
          const newCommentDocRef = doc(commentsCollection, movieverseUser.id);
          await setDoc(newCommentDocRef, newComment);

          // Fetch the updated comments after adding a new comment
          const querySnapshot = await getDocs(commentsCollection);
          const updatedComments = querySnapshot.docs.map(doc => doc.data());
          setComments(updatedComments);
        }
      } catch (error) {
        console.error("Error adding comment: ", error);
      }
  
      // Clear the textarea after submitting
      e.target.textarea.value = '';
    }
  }

  useEffect(() => {
    const fetchComments = async () => {
      if (item && item.id) {
        const commentsCollection = collection(db, `comments_for/${item.id}/comments`);
        const querySnapshot = await getDocs(commentsCollection);
        const commentsData = querySnapshot.docs.map(doc => doc.data());
        setComments(commentsData);
      }
    };

    fetchComments();
  }, [item?.id]);

  return (
    <CommentsContainer>
        <p className='comment_number'>{comments.length} Comments</p>
        {/* with after make the line */}
        <form onSubmit={handleSubmitForm}>
            {/* <input type="text" placeholder='Join discussion...'/> */}
            <textarea name="textarea" cols="30" rows="2" placeholder='Join discussion...' maxLength={250}></textarea>
            <button type="submit">Comment</button>
        </form>

        {comments?.map((comment, i) => {
          if(i < 3)
            return <Comment key={comment.owner_id}
                          comment={comment}
                          onButtonsClick={handleButtonsClick}
                          />
        })}
        {showMore && showMoreInformation()}
        {comments?.length > 3 && 
          <button onClick={toggleShowMore} className="show_more_button">
            {showMore ? "View less" : "View more"}
          </button>
        }
    </CommentsContainer>
  )
}

const CommentsContainer = styled.div`
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

export default Comments;