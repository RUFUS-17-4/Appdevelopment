import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADKPLa8lSrYtMKhxXrD_nmyvN7Wf9GWqs",
  authDomain: "backend-f8f97.firebaseapp.com",
  projectId: "backend-f8f97",
  storageBucket: "backend-f8f97.appspot.com",
  messagingSenderId: "534618070486",
  appId: "1:534618070486:web:fdee037f2296c4bcb3d877",
  measurementId: "G-2Q8WYJM2CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };
