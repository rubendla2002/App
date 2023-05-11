import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDBF_LQaVgxpq4Ewh2UNZDGiwt3Solj7-A",
  authDomain: "villadeaguimes-f56a9.firebaseapp.com",
  projectId: "villadeaguimes-f56a9",
  storageBucket: "villadeaguimes-f56a9.appspot.com",
  messagingSenderId: "23302709541",
  appId: "1:23302709541:web:c1ed5bd27e8d96d3b2facc",
  measurementId: "G-46ZR0RW1RY"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }