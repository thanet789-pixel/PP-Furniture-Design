import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7Q_ledAm4ug6ubvzwbVh46z6J5QnlLxU",
  authDomain: "pp-furniture2026.firebaseapp.com",
  projectId: "pp-furniture2026",
  storageBucket: "pp-furniture2026.firebasestorage.app",
  messagingSenderId: "711438968099",
  appId: "1:711438968099:web:ad2bd01b336096a5401896",
  measurementId: "G-YN7FBKY80C",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
}).catch(() => {});
