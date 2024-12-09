// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXzkavSguHZefUoHZV9_GsnOJ6KtZ9S1o",
  authDomain: "dragon-news-client-5939a.firebaseapp.com",
  projectId: "dragon-news-client-5939a",
  storageBucket: "dragon-news-client-5939a.appspot.com",
  messagingSenderId: "625846782162",
  appId: "1:625846782162:web:b7bc249ae35632b1fd450b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;