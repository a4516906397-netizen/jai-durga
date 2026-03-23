import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyByYzU3W4Es7L3j_j6xECK1CEdz06-DumY",
    authDomain: "jaidurga-c507c.firebaseapp.com",
    databaseURL: "https://jaidurga-c507c-default-rtdb.firebaseio.com",
    projectId: "jaidurga-c507c",
    storageBucket: "jaidurga-c507c.firebasestorage.app",
    messagingSenderId: "333016139813",
    appId: "1:333016139813:web:79aea3ab5fe948ef9557cc",
    measurementId: "G-R99YCSX6N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
