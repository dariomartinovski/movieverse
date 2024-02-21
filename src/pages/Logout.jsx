import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';
import styled from 'styled-components';

function Logout({setMovieverseUser}) {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setMovieverseUser(null);
        }).catch((error) => {
            // An error happened.
            console.error(error.message);
        });
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                setMovieverseUser(null);
                unsubscribe(); // Stop listening for changes once user is null
                navigate("/");
            }
        });
    }

  return (
    <LogoutContainer>
        <h2>Are you sure you want to log out</h2>
        <div className="buttons">
            <button onClick={handleSignOut}>Yes</button>
            <button onClick={() => {navigate("/")}}>No</button>
        </div>
    </LogoutContainer>
  )
}

const LogoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;

    button{
        padding: 1em 1.5em;
        border-radius: 1em;
        margin: 0.5em;
        cursor: pointer;
    }
`

export default Logout;