// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtIymV_VErIshn2Pme8HrGnaMQ7jlg_ms",
  authDomain: "artify-artwork.firebaseapp.com",
  projectId: "artify-artwork",
  storageBucket: "artify-artwork.firebasestorage.app",
  messagingSenderId: "1000694410814",
  appId: "1:1000694410814:web:694000779a02444d46eb6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);