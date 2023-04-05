import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"; 
const firebaseConfig = {
    apiKey: "AIzaSyDpbhq637Pw4h8y99VRPjoM61XFwIPtM2A",
    authDomain: "webappsproject-group13.firebaseapp.com",
    projectId: "webappsproject-group13",
    storageBucket: "webappsproject-group13.appspot.com",
    messagingSenderId: "726721745565",
    appId: "1:726721745565:web:417440ae1ea7e783b8fa74",
    measurementId: "G-X7MRQNKRP8"
  };

 // Intitialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};