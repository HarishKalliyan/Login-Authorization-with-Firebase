//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'; 
import  'firebase/compat/database'
const firebaseConfig = {
  apiKey: "AIzaSyD5SKC-zjgEx7Edz-VEL5ssbXJdvGA6AGI",
  authDomain: "loginpage-c6da7.firebaseapp.com",
  projectId: "loginpage-c6da7",
  storageBucket: "loginpage-c6da7.appspot.com",
  messagingSenderId: "765819636616",
  appId: "1:765819636616:web:6a1338c58a0361afc9083d"
};


const app = firebase.initializeApp(firebaseConfig);
export default app