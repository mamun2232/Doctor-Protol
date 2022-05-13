// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTPTG2Pszm7ixFSA7g2Nn5hduKB1eaqio",
  authDomain: "doctor-protrol.firebaseapp.com",
  projectId: "doctor-protrol",
  storageBucket: "doctor-protrol.appspot.com",
  messagingSenderId: "732073931949",
  appId: "1:732073931949:web:1f5dad392f1be1a5da4224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth