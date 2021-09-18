import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD-4-rzZFEkkvMF5mZOXBEU-QpvnQKtZww",
  authDomain: "react-test-38360.firebaseapp.com",
  projectId: "react-test-38360",
  storageBucket: "react-test-38360.appspot.com",
  messagingSenderId: "993906330701",
  appId: "1:993906330701:web:3e7943d1080f86a80be004",
  measurementId: "G-T1F4EM3R2K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = app.auth();
*/
export {firebase};