import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div>
      <Header />
      <img
        src={user?.photoURL}
        alt="ts-icon"
        className="absolute right-40 top-3 w-14 rounded-lg"
      />

      <button
        onClick={handleSignOut}
        className="bg-red-600 text-white px-3 py-1 rounded-lg absolute right-12 top-6 shadow-md"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Browse;
