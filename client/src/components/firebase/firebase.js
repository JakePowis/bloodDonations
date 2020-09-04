import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDks39J-fsAobSwBLGx4pCyuSxPAWhTaH4",
    authDomain: "blooddonations-jp.firebaseapp.com",
    databaseURL: "https://blooddonations-jp.firebaseio.com",
    projectId: "blooddonations-jp",
    storageBucket: "blooddonations-jp.appspot.com",
    messagingSenderId: "78056183240",
    appId: "1:78056183240:web:9d5979f2449ab3ac455cfd",
    measurementId: "G-1MFBZJ1CCB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

//google provider sign-in
const googleProvider = new firebase.auth.GoogleAuthProvider();



export { firebase, db, auth, functions, googleProvider }