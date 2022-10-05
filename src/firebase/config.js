import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/firebase-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUhysGLxbn9l-_MDVpzu7P8sN9uPzGNi0",
  authDomain: "green-initiative-techinterrupt.firebaseapp.com",
  projectId: "green-initiative-techinterrupt",
  storageBucket: "green-initiative-techinterrupt.appspot.com",
  messagingSenderId: "173169373251",
  appId: "1:173169373251:web:b84e441acbdafdadd264f6",
  measurementId: "G-HEYJH5W1NX",
  databaseURL:
    "https://green-initiative-techinterrupt-default-rtdb.firebaseio.com/",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const database = firebase.database();
const projectStorage = firebase.storage();

export { projectFirestore, projectAuth, database, projectStorage };
