import React from 'react'
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
        <section>
            <h2>Are you sure you want to log out</h2>
            <div className="buttons">
                <button onClick={handleSignOut}>Yes</button>
                <button onClick={() => {navigate('/login');}}>No</button>
            </div>
        </section>
    </LogoutContainer>
  )
}

const LogoutContainer = styled.div`
    min-height: 100vh;
    display: grid;
    place-items: center;

    section{
        min-height: 10em;
        padding: 3em 4em;
        border-radius: 0.5em;
        background-color: var(--text-color);
        // border: 0.125em solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0.15em 0.15em 1em 0.2em rgba(0, 0, 0, 0.25);

        h2{
            margin-bottom: 1.2em;
        }

        button:first-of-type{
            margin-right: 2em;
            background-color: var(--call-to-action-color);
        }

        button:last-of-type{
            box-shadow:0 0 0 0.125em var(--call-to-action-color) inset;
        }

        button{
            padding: 1em 1.5em;
            border-radius: 1em;
            cursor: pointer;
            border: none;
            font-size: 0.8em;
            font-weight: bold;
        }
    }

`

export default Logout;