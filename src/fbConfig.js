import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Replace this with your own config details
const firebaseconfig = {
  apiKey: "AIzaSyDo2HauU6PtL3PY6KthXdpIUzbDV908avo",
  authDomain: "nsc22-c9f56.firebaseapp.com",
  projectId: "nsc22-c9f56",
  storageBucket: "nsc22-c9f56.appspot.com",
  messagingSenderId: "935490445508",
  appId: "1:935490445508:web:2cea5f25fe70faa13e6991",
  measurementId: "G-F8VVN1L7VD"
};

firebase.initializeApp(firebaseconfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
const firestore = firebase.firestore();

export default firebase;
