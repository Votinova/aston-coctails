import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrqyhS3PaSfsZO8_sAV1MYViK9b0qHspc",
  authDomain: "coctails-f4b0d.firebaseapp.com",
  projectId: "coctails-f4b0d",
  storageBucket: "coctails-f4b0d.appspot.com",
  messagingSenderId: "8964069139",
  appId: "1:8964069139:web:c8f311084481fe6cdf6ce6",
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)