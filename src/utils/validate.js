import React from "react";

const checkValidate = (email, password) => {
  //  this thing is called regex
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  //   if (!isEmailValid) return "Your email is not Valid!";
  //   if (!isPasswordValid) return "Your password is not Valid!";
  //   if (!isEmailValid && !isPasswordValid)
  //     return "Your email and password are invalid";

  switch (true) {
    case !isEmailValid && !isPasswordValid:
      return "Your email and password are invalid";
    case !isEmailValid:
      return "Your email is Invalid!";
    case !isPasswordValid:
      return "Your password is Invalid!";
    default:
      return null;
  }
};

export default checkValidate;
