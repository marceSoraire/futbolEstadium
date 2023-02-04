import firebase from "firebase/compat/app";
import { getFirestore} from "firebase/firestore";
import 'firebase/compat/auth';

export const app = firebase.initializeApp ({
  apiKey: "AIzaSyBXSmiwjxZoEODux4YRqIH9OP-q6c2Wzuw",
  authDomain: "futbol-a71c3.firebaseapp.com",
  projectId: "futbol-a71c3",
  storageBucket: "futbol-a71c3.appspot.com",
  messagingSenderId: "893669777223",
  appId: "1:893669777223:web:aff72c0aaffe8a08097662"
});

export const db = getFirestore(app);
