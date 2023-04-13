import firebase from 'firebase'

const firebaseConfig = {
     apiKey: "AIzaSyBy8uRiVcH9aEc0DgBST8c9_uicTjqhxMc",
  authDomain: "nettronica-301ab.firebaseapp.com",
  databaseURL: "https://nettronica-301ab-default-rtdb.firebaseio.com",
  projectId: "nettronica-301ab",
  storageBucket: "nettronica-301ab.appspot.com",
  messagingSenderId: "1021682503544",
  appId: "1:1021682503544:web:eb7ce3fe5663bcaab7828d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }