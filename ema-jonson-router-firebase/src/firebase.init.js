// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    // measurementId: process.env.REACT_APP_measurementId

    apiKey: "AIzaSyDDOCicnWsmDO8jy3qpYSrU09zJ5GXMtMw",
    authDomain: "ema-jonson-router-firebase.firebaseapp.com",
    projectId: "ema-jonson-router-firebase",
    storageBucket: "ema-jonson-router-firebase.appspot.com",
    messagingSenderId: "972988110884",
    appId: "1:972988110884:web:51aa39b6b8fcbb531020b1",
    measurementId: "G-FD5DFXP3YJ"
};

// Initialize Firebase
const myapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(myapp);

const app = { myapp, analytics }


const auth = getAuth(app.myapp);

export default auth