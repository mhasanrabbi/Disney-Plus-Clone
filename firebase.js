// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAP-2sT78CIK2TRQYKAfRblIUQxbmJGA1I',
  authDomain: 'disney-plus-63412.firebaseapp.com',
  projectId: 'disney-plus-63412',
  storageBucket: 'disney-plus-63412.appspot.com',
  messagingSenderId: '634361630136',
  appId: '1:634361630136:web:c88dfc5c4650916140934d',
  measurementId: 'G-10N4X8L8FB',
};

// Initialize Firebase

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
