import { initializeApp, getApps, getApp } from '@firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAupDM6PhhrnrKmre4DTZTl5KZWOsT5Mak",
  authDomain: "trustsolidinvestments.firebaseapp.com",
  projectId: "trustsolidinvestments",
  storageBucket: "trustsolidinvestments.appspot.com",
  messagingSenderId: "381110113191",
  appId: "1:381110113191:web:7ddd740fc3e2e220699c82"
};
// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp(); 

// init services
  const db = getFirestore(app)
  const Auth = getAuth(app)
  const storage = getStorage(app);

  
  export { db, storage, Auth }