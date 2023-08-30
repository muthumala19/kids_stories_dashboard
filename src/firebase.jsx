// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-DO8YouHlZK3DQmlpWeVa_YkWMzFTkts",
    authDomain: "kids-stories-67585.firebaseapp.com",
    projectId: "kids-stories-67585",
    storageBucket: "kids-stories-67585.appspot.com",
    messagingSenderId: "733551193068",
    appId: "1:733551193068:web:c5f74c62fb0e4871ed2ec9",
    measurementId: "G-ZEVVLYZGTP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database=getFirestore(app)
