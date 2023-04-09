// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'XXXXXXX',
  authDomain: 'XXXXXXX.firebaseapp.com',
  projectId: 'XXXXXXX',
  storageBucket: 'XXXXXXX.appspot.com',
  messagingSenderId: 'XXXXXXX',
  appId: 'XXXXXXX'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);