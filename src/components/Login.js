import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleSignButtonClick = () => {
    // validate the form data

    const message = checkValidate(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // If its not a sign in , then SIGN UP the user by using API
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://charts-static.billboard.com/img/2006/07/taylor-swift-vug-344x344.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
          updateProfile(user, {
            photoURL:
              "https://charts-static.billboard.com/img/2006/07/taylor-swift-vug-344x344.jpg",
          })
            .then(() => {
              const { uid, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 mx-auto right-0 left-0 px-7 py-5 my-32 bg-black absolute text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-3xl my-4">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your name here"
            className="w-full p-4 my-3 rounded-lg bg-gray-800 bg-opacity-80"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="w-full p-4 my-3 rounded-lg bg-gray-800 bg-opacity-80"
        />
        <input
          ref={password}
          type="password"
          placeholder={isSignInForm ? "Password" : "Set up your password"}
          className="w-full p-4 my-3 rounded-lg bg-gray-800 bg-opacity-80"
        />
        <p className="text-red-600 font-bold text-lg text-center">
          {errorMessage}
        </p>
        <button
          className="w-full p-3 my-3 bg-red-600 rounded-lg"
          onClick={handleSignButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>

        {isSignInForm && (
          <>
            <h1 className="text-xl text-center">OR</h1>
            <button className="w-full p-3 my-3 bg-gray-600 bg-opacity-80 rounded-lg">
              Use a sign-in code
            </button>
            <h2 className="text-lg text-center underline my-2">
              Forgot password?
            </h2>
          </>
        )}
        <p className="mt-4" onClick={handleSignInForm}>
          {isSignInForm ? (
            <>
              New to Netflix?
              <span className="underline cursor-pointer"> Sign Up Now</span>
            </>
          ) : (
            <>
              Already Registered?
              <span className="underline cursor-pointer"> Sign In Now</span>
            </>
          )}
        </p>
      </form>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/25f808aa-cecb-4753-8541-9a79f40c18ae/web/IN-en-20251006-TRIFECTA-perspective_507f47be-8780-4697-92cb-0f6c78177b6e_large.jpg"
        alt="netflix-background"
      />
    </div>
  );
};

export default Login;
