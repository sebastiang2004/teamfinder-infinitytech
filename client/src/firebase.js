// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk32_lqQjrVmeN-iYxbAq3KgWXw-hzZGo",
  authDomain: "teamfinder-infinitytech.firebaseapp.com",
  databaseURL: "https://teamfinder-infinitytech-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "teamfinder-infinitytech",
  storageBucket: "teamfinder-infinitytech.appspot.com",
  messagingSenderId: "266696264444",
  appId: "1:266696264444:web:5c274ca39ffb800f70e579"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
