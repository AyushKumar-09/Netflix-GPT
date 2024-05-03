// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWCyR5mR07rLItMxVoZMCtAITkv6p5au8",
  authDomain: "netflix-gpt-46dc6.firebaseapp.com",
  projectId: "netflix-gpt-46dc6",
  storageBucket: "netflix-gpt-46dc6.appspot.com",
  messagingSenderId: "104301316021",
  appId: "1:104301316021:web:1d0730b4e12c768b387bfc",
  measurementId: "G-WQ3PHCCJFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();