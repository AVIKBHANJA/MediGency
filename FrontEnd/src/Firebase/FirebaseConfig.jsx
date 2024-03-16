import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4FqgGmPqnQEUEKXDzOPAZeZTmU6IkIn0",
  authDomain: "medigency-31c9c.firebaseapp.com",
  projectId: "medigency-31c9c",
  storageBucket: "medigency-31c9c.appspot.com",
  messagingSenderId: "898427243553",
  appId: "1:898427243553:web:b816bdfe0c814610736760"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);