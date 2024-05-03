import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORT_LANGUAGES } from '../utils/constans';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store => store.gpt.showGptSearch));


  const handleSignOut = () => {
    signOut(auth)
      .then(() => { }).catch((error) => {
        // An error happened.
        navigate("/error");
      });

  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {

        dispatch(removeUser());
        navigate("/");

      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };


  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='  absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>

      <img
        className='w-44  mx-auto md:mx-0'
        src={LOGO} alt="logo" />


      {/* user icon */}
      {user &&
        <div className='flex p-2 justify-between' >

          {showGptSearch &&(
            <select className='p-2 m-2 bg-transparent text-white' onChange={handleLanguageChange}>
              {SUPPORT_LANGUAGES.map(lang => <option
                className='bg-black text-white'
                key={lang.identifier}
                value={lang.identifier}>{lang.name}</option>)}

            </select>
          )}


          <button className='py-2 px-4 mx-4 my-2 text-white bg-purple-800 rounded-lg'
            onClick={handleGptSearchClick}> {showGptSearch ? "Home Page ": "GPT Search"} </button>
          <img
            className='hidden md:block w-10 h-10 rounded-sm '
            src={user?.photoURL} alt="user-icon" />

          <button
            onClick={handleSignOut}
            className='font-bold text-white '>(Sign Out) </button>
        </div>
      }
    </div>
  )
};

export default Header
