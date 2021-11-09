// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCOQp1GuLPZPNgyUBszvikfaZ0cGq_jXk",
  authDomain: "insta-m.firebaseapp.com",
  projectId: "insta-m",
  storageBucket: "insta-m.appspot.com",
  messagingSenderId: "733041557669",
  appId: "1:733041557669:web:f0ee22d7da9b02c2c28d4c",
  measurementId: "G-MM3NNGZMNS",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
