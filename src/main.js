import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCNN0RubdMwXwgp0xSl-JjTksARZ8Gh2c",
  authDomain: "portfolio-92708.firebaseapp.com",
  projectId: "portfolio-92708",
  storageBucket: "portfolio-92708.appspot.com",
  messagingSenderId: "255087011791",
  appId: "1:255087011791:web:b00c5302e17201ba41d4ba",
  measurementId: "G-188PBYVBL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
