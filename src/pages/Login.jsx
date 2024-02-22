import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import { IoWarningOutline } from "react-icons/io5";

function Login({movieverseUser, setMovieverseUser}) {
  const [loginType, setLoginType] = useState('login');
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const authErrorMessages = {
    'Firebase: Error (auth/user-not-found).': 'User not found. Check if the email is correct.',
    'Firebase: Error (auth/wrong-password).': 'Incorrect password. Please try again.',
    'Firebase: Error (auth/email-already-in-use).': 'The email address is already in use by another account.',
    'Firebase: Error (auth/invalid-email).': 'Invalid email address. Please enter a valid email.',
    'Firebase: Error (auth/user-disabled).': 'The user account has been disabled.',
    'Firebase: Error (auth/weak-password).': 'Password should be at least 6 characters long.',
    'Firebase: Error (auth/missing-password).': "Input a password",
    'Firebase: Error (auth/invalid-credential).': 'Invalid credentials'
  };

 const handleCredentials = (e) => {
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
}

// Function to add a watchlist for a user
const addWatchlist = async (userId, initialMovieIds = []) => {
  const watchlistRef = doc(collection(db, "watchlists"), userId);

  await setDoc(watchlistRef, {
    owner_id: userId,
    watchlist_items: initialMovieIds,
  });
};

 const handleSignUp = (e) => {
    e.preventDefault();

    if (!userCredentials.displayName || userCredentials.displayName.trim() === '') {
      setError('Name is required for signup');
      return;
    }

    if(userCredentials.password !== userCredentials.confirmPassword){
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      try {
        await updateProfile(user, {
          displayName: userCredentials.displayName
        });
        setMovieverseUser({
          id: user.uid,
          email: user.email,
          displayName: user.displayName
        });
        await addWatchlist(user.uid);
      } catch (err) {
        authErrorMessages[err.message] != null ? setError(authErrorMessages[err.message]) : setError(err.message);
      }
    })
    .catch((err) => {
      authErrorMessages[err.message] != null ? setError(authErrorMessages[err.message]) : setError(err.message);
    });
    
    setError(null);
}

const hadnleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .then((userCredential) => {
        const user = userCredential.user;
        setMovieverseUser({['id']: user.uid, ['email']: user.email, ['displayName']: user.displayName});
    })
    .catch((err) => {
      authErrorMessages[err.message] != null ? setError(authErrorMessages[err.message]) : setError(err.message);
    });

    setError(null);
}

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setMovieverseUser({
        id: user.uid,
        email: user.email,
        displayName: user.displayName,
      });
    } else {
      setMovieverseUser(null);
    }
  });

  return () => unsubscribe(); // Cleanup the listener on component unmount
}, [setMovieverseUser]);

useEffect(() => {
    const prevUrl = sessionStorage.getItem('prevUrl');

    if (prevUrl && movieverseUser != null) {
      // Navigate back to the stored URL after the user logs in
      navigate(prevUrl);
    }
    else if(movieverseUser != null){
        navigate("/");
    }
}, [movieverseUser, navigate])

return (
      <LoginContainer>
        <section>
          <h1 className='title'>{loginType === 'login'? 'Sign in' : 'Sign up'}</h1>
          <div className="login_type">
            <button 
              className={`${loginType === 'login' ? 'selected' : 'deselected'}`}
              onClick={()=>setLoginType('login')}>
                Login
            </button>
            <button 
              className={`${loginType === 'signup' ? 'selected' : 'deselected'}`}
              onClick={()=>setLoginType('signup')}>
                Signup
            </button>
          </div>
          <form>  
            {error && 
            <div className="error">
              <IoWarningOutline /> {error}
            </div>}                  
              {loginType === 'signup' && 
                  <input onChange={handleCredentials} type="text" name="displayName" placeholder='Name'/>
                }
                  <input onChange={handleCredentials} type="text" name="email" placeholder="Email" />
                  <input onChange={handleCredentials} type="password" name="password" placeholder="Password" />            
                  {loginType === 'signup' && 
                    <input onChange={handleCredentials} type="password" name="confirmPassword" placeholder="Confirm password" />
                  } 
                {
                  loginType === 'login' ?
                  <button onClick={hadnleLogin}>Login</button>
                  : 
                  <button onClick={handleSignUp}>Sign Up</button>
                }
            </form>
        </section>
      </LoginContainer>
    )
  }
  
const LoginContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: var(--darkColor);

  section{
    min-height: 17em;
    padding: 3em 4em;
    border-radius: 0.5em;
    background-color: var(--text-color);
    // border: 0.125em solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0.15em 0.15em 1em 0.2em rgba(0, 0, 0, 0.25);
  }

  .title{
    margin-bottom: 1em;
    font-size: 2em;
  }

  .login_type{
    margin-bottom: 1em;
  }

  .login_type button{
    padding: 0.3em 1em;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 0.9em;
  }

  .login_type button:first-of-type{
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
  }

  .login_type button:last-of-type{
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
  }

  .selected {
    background-color: var(--call-to-action-color);
  }

  .login_type .deselected{
    // border: 0.1em solid var(--call-to-action-color);
    box-shadow:0 0 0 0.08em var(--call-to-action-color) inset;
  }

  form{
    display: flex;
    flex-direction: column;
  }

  form > *{
    border: none;
    border-radius: 1em;
    padding: 0.2em 0.5em;
  }

  form input{
    margin-bottom: 0.5em;
    border: none;
    border-bottom: 0.125em solid black;
    // background-color: transparent;
    width: 15em;
    font-size: 1em;
    align-self: center;
  }

  form button{
    padding: 0.4em;
    margin-top: 1em;
    background-color: var(--call-to-action-color);
    width: 60%;
    align-self: center;
    cursor: pointer;
    font-size: 1em;
  }

  form button:hover{
    background-color: var(--call-to-action-accent-color);
  }

  .error{
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-weight: bold;
    align-self: center;
    margin-bottom: 0.5em;
  }

  .error > *{
    margin-right: 0.2em;
  }
`

  export default Login;


  