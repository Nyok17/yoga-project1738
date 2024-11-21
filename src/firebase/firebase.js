import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCGfK9imPb_wJ0EsCxKIEgCmQgq8xkh0Oc",
  authDomain: "yoga-class-dcacf.firebaseapp.com",
  projectId: "yoga-class-dcacf",
  storageBucket: "yoga-class-dcacf.appspot.com",
  messagingSenderId: "1063902502480",
  appId: "1:1063902502480:web:fbbde209b3bc39293dfb55",
  measurementId: "G-DGNYGW1MKL"
};


const app = initializeApp(firebaseConfig);
export const db= getDatabase(app);
export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();
export {signInWithPopup, signOut}
