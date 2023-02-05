// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
import { useSyncExternalStore } from "react";

import { getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvXVgupB7YUex05wlJ7oAbZacMz92QBXo",
  authDomain: "gymbro-14fab.firebaseapp.com",
  projectId: "gymbro-14fab",
  storageBucket: "gymbro-14fab.appspot.com",
  messagingSenderId: "160555724186",
  appId: "1:160555724186:web:c6b60a5be72e411fe2de23",
  measurementId: "G-L6BYCMZW8V"
};

// // Initialize Firebase
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
// // const analytics = getAnalytics(app);
// const auth = getAuth(app);
let auth;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
    });
    
} else {
    app = getApp();
    auth = getAuth(app);
}

export { auth };
