import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm4taUIUfhrXCTnQ3ToEphgfhSPrWs0kE",
  authDomain: "nexgen-1c39a.firebaseapp.com",
  projectId: "nexgen-1c39a",
  storageBucket: "nexgen-1c39a.firebasestorage.app",
  messagingSenderId: "1038731315699",
  appId: "1:1038731315699:web:f2399e148673527527ea86",
  measurementId: "G-WLQFMKGYKW"
};


const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export { db };