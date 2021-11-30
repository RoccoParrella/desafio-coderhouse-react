import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBCnh5IHSNHicHZdyxmOBASorJbsaPhyXA",
    authDomain: "react-coder-404a0.firebaseapp.com",
    projectId: "react-coder-404a0",
    storageBucket: "react-coder-404a0.appspot.com",
    messagingSenderId: "70221376361",
    appId: "1:70221376361:web:6a0ecbddf6b5b7f33c6bf8",
    measurementId: "G-T60GJJWNWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;