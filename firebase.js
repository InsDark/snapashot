// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuHE_pSa6RGifisOqJC3W-oUxJ2HIIxm4",
  authDomain: "snap-a-shot.firebaseapp.com",
  projectId: "snap-a-shot",
  storageBucket: "snap-a-shot.appspot.com",
  messagingSenderId: "353730302299",
  appId: "1:353730302299:web:f70444e280c28c0f538a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
