import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/checkValidData';
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_PHOTO } from "../utils/constans";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);


  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_PHOTO
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

          }).catch((error) => {

            setErrorMessage(error.message);
          });
          // console.log(user);


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });

    } else {
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }
  };
  const toggleSignInForm = () => {

    setIsSignInForm(!isSignInForm);
  };


  return (


    <>
      <div>
        <Header />
        <div className="absolute " >
          <img
          className=" fixed h-screen object-cover md:w-screen "
            src={BG_URL}
            alt="bg image" />
        </div>

        {/* form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-full pl-4 md:pl-12 md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-4 my-4 bg-gray-700 rounded-sm"
            />)}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-4 my-4 bg-gray-700 rounded-sm"
          />


          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 my-4 bg-gray-700 rounded-sm"
          />

          {/* error message */}

          <p className='text-red-600 font-bold text-lg py-2 '>{errorMessage}</p>

          <button
            className="p-3 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-8 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New To Netflix ? Sign In" : " Already registed ? SignUp Now"}
          </p>

        </form>
      </div>
    </>
  )

};

export default Login
