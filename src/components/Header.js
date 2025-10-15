import React, { useState } from "react";

const Header = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const handleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <>
      <div className="w-full flex justify-around items-center absolute">
        <div>
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo"
            className="w-48 bg-gradient-to-t from-black"
          />
        </div>
        <div className="flex gap-4 ">
          <select className="px-4 py-1 rounded-lg border-2 border-white bg-transparent text-white ">
            <option className="text-black">English</option>
            <option className="text-black">हिन्दी</option>
          </select>
          <button className="bg-red-600 text-white px-4 py-1 rounded-lg font-semibold">
            Sign in
          </button>
        </div>
      </div>

      <form className="w-4/12 mx-auto right-0 left-0 px-7 py-5 my-32 bg-black absolute text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl my-4">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter your name here"
            className="w-full p-4 my-3 rounded-lg bg-gray-800 bg-opacity-80"
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 my-3 rounded-lg bg-gray-800 bg-opacity-80"
        />
        <input
          type="password"
          placeholder={isSignInForm ? "Password" : "Set up your password"}
          className="w-full p-4 my-3 rounded-lg bg-gray-800 bg-opacity-80"
        />
        <button className="w-full p-3 my-3 bg-red-600 rounded-lg">
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
            <p>
              New to Netflix?
              <span className="underline cursor-pointer"> Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already Registered?
              <span className="underline cursor-pointer"> Sign In Now</span>
            </p>
          )}
        </p>
      </form>
    </>
  );
};

export default Header;
