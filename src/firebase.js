import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseApp =firebase.initializeApp( {
//     apiKey: "AIzaSyClndSAa8J2L9DG35BGzzF8IuPjXjrAqEw",
//   authDomain: "todoapp-41c69.firebaseapp.com",
//   projectId: "todoapp-41c69",
//   storageBucket: "todoapp-41c69.appspot.com",
//   messagingSenderId: "511497172386",
//   appId: "1:511497172386:web:d033ca8c7ad9aaee7d6efb",
//   measurementId: "G-6ZW326SZC8"
//     });

const firebaseApp =firebase.initializeApp( {
  apiKey: "AIzaSyCMVFlWshlmNnlE5L3Qe9tIYqD2nO3cM8s",
  authDomain: "todoapp-ay.firebaseapp.com",
  projectId: "todoapp-ay",
  storageBucket: "todoapp-ay.appspot.com",
  messagingSenderId: "966211839076",
  appId: "1:966211839076:web:547930e73359de0493eb71",
  measurementId: "G-BNHGW0VLN5"
    });

const db = firebaseApp.firestore();
export default db;