// Shree Ganeshay namah 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfg96bu9QNeSUkCBkgpzf7hx43SbCPrG8",
  authDomain: "exam-7fe9e.firebaseapp.com",
  projectId: "exam-7fe9e",
  storageBucket: "exam-7fe9e.firebasestorage.app",
  messagingSenderId: "126225985813",
  appId: "1:126225985813:web:b0c84a2ceaf0fa2ce3b91c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth