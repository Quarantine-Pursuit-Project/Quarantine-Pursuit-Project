// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkF4NjvEQr5XSBEXScJ3fzJtMwGkAJDpU",
  authDomain: "quarantine-pursuit-khaf.firebaseapp.com",
  projectId: "quarantine-pursuit-khaf",
  storageBucket: "quarantine-pursuit-khaf.appspot.com",
  messagingSenderId: "522875930181",
  appId: "1:522875930181:web:06629b3ffd473c610b852c",
  measurementId: "G-L7Q7GMBPC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;