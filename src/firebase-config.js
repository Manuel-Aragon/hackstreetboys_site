import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyRTQ5Dp68MRN3_hW4c_L3Q05svz0T1nY",
    authDomain: "hackstreetboys-1afc4.firebaseapp.com",
    databaseURL: "https://hackstreetboys-1afc4-default-rtdb.firebaseio.com",
    projectId: "hackstreetboys-1afc4",
    storageBucket: "hackstreetboys-1afc4.appspot.com",
    messagingSenderId: "746358041255",
    appId: "1:746358041255:web:15a8ce7bfa1cb875b00982",
    measurementId: "G-0E49N85SNN"
  };

  
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage }