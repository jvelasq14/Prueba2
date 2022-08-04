import app from 'firebase/app'
import 'firebase/firestore'
import  'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXaCEO1tyX3j-1I4egVSntWDXsHSxq8H8",
    authDomain: "prueba-frontend-aa503.firebaseapp.com",
    projectId: "prueba-frontend-aa503",
    storageBucket: "prueba-frontend-aa503.appspot.com",
    messagingSenderId: "1024145069744",
    appId: "1:1024145069744:web:f82ada80a8c6a1b55f0d75"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);
  const db = app.firestore;
  const auth = app.auth;
  export{db,auth}