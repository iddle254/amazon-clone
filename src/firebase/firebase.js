import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCryoe2yn100bWZ4l2htlQr2gORjG0IePE",
  authDomain: "crwn-db-c8e0b.firebaseapp.com",
  databaseURL: "https://crwn-db-c8e0b.firebaseio.com",
  projectId: "crwn-db-c8e0b",
  storageBucket: "crwn-db-c8e0b.appspot.com",
  messagingSenderId: "882738952973",
  appId: "1:882738952973:web:03fa1358f30d178acece44",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
