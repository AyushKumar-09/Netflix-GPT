
import React, { useRef, useState } from 'react';
// import Header from './Header';
// import { checkValidData } from '../utils/checkValidData';


const Newlog = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  // const name = useRef(null);

//   const handleButtonClick = () => {
    //validate the form data
    // const message = checkValidData(email.current.value, password.current.value);
    // setErrorMessage(message);

    // if (message) return;

    // if (!message) {
    //   //sign up

    // } else {
    //   //sign in

    // }

    // const toggleSignInForm = () => {

    //   setIsSignInForm(!isSignInForm);
    // };


    return (

      
      <>
      <div>hello

      </div>

        {/* <div className="absolute"> */}
          {/* <Header /> */}
          {/* bg Image */}
          {/* <img
            src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
            alt="bg image" />
        </div> */}

        {/* form */}
        
      </>
    )
  
};

export default Newlog
