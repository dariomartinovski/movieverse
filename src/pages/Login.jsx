// import FullPageLoader from '../components/FullPageLoader.jsx';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/config';

function Login({movieverseUser, setMovieverseUser}) {
  const [loginType, setLoginType] = useState('login');
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
    
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setMovieverseUser({['id']: user.uid, ['email']: user.email, ['displayName']: user.displayName});
    } else {
        setMovieverseUser(null);
    }
  });

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
      } catch (error) {
        setError(error.message);
      }
    })
    .catch((error) => {
      setError(error.message);
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
    .catch((error) => {
        setError(error.message);
    });

    setError(null);
}

useEffect(() => {
    if(movieverseUser != null){
        navigate("/");
    }
}, [movieverseUser])

return (
      <LoginContainer className="container login-page">
        <section>
          <h1>Welcome to the Book App</h1>
          <p>Login or create an account to continue</p>
          <div className="login-type">
            <button 
              className={`btn ${loginType === 'login' ? 'selected' : ''}`}
              onClick={()=>setLoginType('login')}>
                Login
            </button>
            <button 
              className={`btn ${loginType === 'signup' ? 'selected' : ''}`}
              onClick={()=>setLoginType('signup')}>
                Signup
            </button>
          </div>
          <form>
              {loginType === 'signup' && 
                  <div>
                  <label htmlFor="displayName">Name *</label>
                  <input onChange={handleCredentials} type="text" name="displayName" placeholder='Enter your name'/>
              </div>
              }
                <div>
                    <label>Email *</label>
                    <input onChange={handleCredentials} type="text" name="email" placeholder="Enter your email" />
                </div>
                <div>
                    <label>Password *</label>
                    <input onChange={handleCredentials} type="password" name="password" placeholder="Enter your password" />
                </div>
                {
                  loginType === 'login' ?
                  <button onClick={hadnleLogin}>Login</button>
                  : 
                  <button onClick={handleSignUp}>Sign Up</button>
                }
                {error && 
                <div className="error">
                  {error}
                </div>}                  
            </form>
        </section>
      </LoginContainer>
    )
  }
  
const LoginContainer = styled.div`
  background-color: white;
  margin-top: 5em;
  display: grid;
  place-items: center;
  
  .selected {
    background-color: grey;
  }
`

  export default Login;


  