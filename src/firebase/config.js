import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUhysGLxbn9l-_MDVpzu7P8sN9uPzGNi0",
  authDomain: "green-initiative-techinterrupt.firebaseapp.com",
  projectId: "green-initiative-techinterrupt",
  storageBucket: "green-initiative-techinterrupt.appspot.com",
  messagingSenderId: "173169373251",
  appId: "1:173169373251:web:b84e441acbdafdadd264f6",
  measurementId: "G-HEYJH5W1NX",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
