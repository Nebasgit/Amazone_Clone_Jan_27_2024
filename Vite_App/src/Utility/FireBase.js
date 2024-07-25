import firebase from "firebase/compat/app";
import {getAuth}from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBHg-BwgGtGJjy6F9_ZtLK2cgqAqFuyMPQ",
  authDomain: "clone-90533.firebaseapp.com",
  projectId: "clone-90533",
  storageBucket: "clone-90533.appspot.com",
  messagingSenderId: "217648072544",
  appId: "1:217648072544:web:904822ac30eb4fdb05c005"
};

export const app =  firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()