import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAWvG4FdIwIWADNKPfvj8I8FgoxTopmIFU",
    authDomain: "morinoparty.firebaseapp.com",
    databaseURL: "https://morinoparty.firebaseio.com",
    projectId: "morinoparty",
    storageBucket: "morinoparty.appspot.com",
    messagingSenderId: "690718262574",
    appId: "1:690718262574:web:022bfcdee79c56efbfa6bf",
    measurementId: "G-KNN64ZT967"
  });
}

export default firebase;
