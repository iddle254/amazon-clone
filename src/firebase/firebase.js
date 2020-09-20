import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1r_GmSX73nt5mAprJZwvjrgNCgd1PF2E",
  authDomain: "expensify-8463e.firebaseapp.com",
  databaseURL: "https://expensify-8463e.firebaseio.com",
  projectId: "expensify-8463e",
  storageBucket: "expensify-8463e.appspot.com",
  messagingSenderId: "397250920804",
  appId: "1:397250920804:web:f1e7c81dd11f92d77bba71",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
