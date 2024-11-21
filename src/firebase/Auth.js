import React, { useContext, useEffect } from 'react';
import { auth, provider, signInWithPopup, signOut } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { GlobalContext } from '../context/GlobalState';

const Auth = () => {
    const{user, setUser}= useContext(GlobalContext);

    const handleGoogleSignIn= async () =>{
        try {
            const result= await signInWithPopup(auth, provider);
            setUser(result.user);
            console.log(result.user)
        } catch (error) {
            console.log('Error signing in with Google', error)
        }
    }

    const handleLogOut = async () =>{
        try {
            await signOut(auth);
            setUser(null);
            console.log('User signed out');
        } catch (error) {
            console.error('Error signing out', error);
        }
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
          setUser(currentUser)  
        });
        return ()=> unsubscribe();
    }, [])

  return (
    <div>Auth</div>
  )
}

export default Auth