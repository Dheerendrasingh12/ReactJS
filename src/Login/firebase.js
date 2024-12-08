// Import necessary functions from Firebase SDK v9+
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAFGpmFa88fBoPQp8q-weE_o_puKmEnscg",
  authDomain: "arzds-511d8.firebaseapp.com",
  databaseURL: "https://arzds-511d8-default-rtdb.firebaseio.com",
  projectId: "arzds-511d8",
  storageBucket: "arzds-511d8.firebasestorage.app",
  messagingSenderId: "6560953972",
  appId: "1:6560953972:web:2ae4347d426726998ec321",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);

export { db, auth };
