import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCJI9eKuY5M0_0l16rv-FgGrpneX5xnh0g",

  authDomain: "linkedincloneapp-8c333.firebaseapp.com",

  projectId: "linkedincloneapp-8c333",

  storageBucket: "linkedincloneapp-8c333.firebasestorage.app",

  messagingSenderId: "358039780641",

  appId: "1:358039780641:web:8c18da19ad330628241260"

};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  db,
  auth,
  provider
};