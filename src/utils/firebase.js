// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCooRK_VAGten_lpkWtgtlDJarYXBKYyQQ",
  authDomain: "netflixgpt-auth-73f67.firebaseapp.com",
  projectId: "netflixgpt-auth-73f67",
  storageBucket: "netflixgpt-auth-73f67.firebasestorage.app",
  messagingSenderId: "46984021811",
  appId: "1:46984021811:web:10399db97348b311fe2046",
  measurementId: "G-CDZRXL7HR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();