// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP8w36PPptFrHtN28udjrok-DBS7hRsCk",
  authDomain: "crud-node-mongo.firebaseapp.com",
  projectId: "crud-node-mongo",
  storageBucket: "crud-node-mongo.firebasestorage.app",
  messagingSenderId: "215372244326",
  appId: "1:215372244326:web:59502544f14b69333754a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;