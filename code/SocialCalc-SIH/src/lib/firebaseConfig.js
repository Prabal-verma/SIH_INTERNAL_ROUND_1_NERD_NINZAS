// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQVajxaYIZKUBudF3-ssEmkk_PznpFLS8",
  authDomain: "socialcalc-a12bb.firebaseapp.com",
  projectId: "socialcalc-a12bb",
  storageBucket: "socialcalc-a12bb.appspot.com",
  messagingSenderId: "316366267462",
  appId: "1:316366267462:web:cadfcc17cab1485f3ad647",
  measurementId: "G-DSHXZZY5D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const realtimeDB = getDatabase(app);
const storage = getStorage(app);

export { storage };