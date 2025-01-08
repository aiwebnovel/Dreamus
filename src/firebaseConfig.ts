// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDpmTHCO97F6bLtlcViSTV2OU6mJ19QkL8',
  authDomain: 'dingdong-e63bb.firebaseapp.com',
  databaseURL: 'https://dingdong-e63bb-default-rtdb.firebaseio.com',
  projectId: 'dingdong-e63bb',
  storageBucket: 'dingdong-e63bb.firebasestorage.app',
  messagingSenderId: '17858144178',
  appId: '1:17858144178:web:4b1732f1f1dc400b9126ab',
  measurementId: 'G-WLRQFD688N',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
