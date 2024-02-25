import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDYwBd8uaaSh0qfi6HdSQojnJkqdxzF2Bs",
    authDomain: "social-media-f7b50.firebaseapp.com",
    projectId: "social-media-f7b50",
    storageBucket: "social-media-f7b50.appspot.com",
    messagingSenderId: "1015470080632",
    appId: "1:1015470080632:web:43d29de0a72f5a9ded238d",
    measurementId: "G-EBM3L0SB0Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage(); 

export { auth, provider, storage };
export default db;