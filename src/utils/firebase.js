// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFyBCOCKOkG_hsZKRj2t6Nu2TPTKf-o2M",
  authDomain: "netflixgpt-c26bd.firebaseapp.com",
  projectId: "netflixgpt-c26bd",
  storageBucket: "netflixgpt-c26bd.firebasestorage.app",
  messagingSenderId: "358178882821",
  appId: "1:358178882821:web:a72c7bcba2cbb23216236c",
  measurementId: "G-KN8F3GXGJ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
