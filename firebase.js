// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyLtxxzyyLMl4zaA-hSYWXI9lT0KkHPhs",
  authDomain: "karchery.firebaseapp.com",
  projectId: "karchery",
  storageBucket: "karchery.appspot.com",
  messagingSenderId: "346148715654",
  appId: "1:346148715654:web:8b87ba8dda9ab831332507",
  measurementId: "G-B4TD8Y3TTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);