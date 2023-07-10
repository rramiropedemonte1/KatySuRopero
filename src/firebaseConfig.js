import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAgzrxsqEMiZ71G1H7ieLShE7AguOaOZo",
  authDomain: "katy-c9bd4.firebaseapp.com",
  projectId: "katy-c9bd4",
  storageBucket: "katy-c9bd4.appspot.com",
  messagingSenderId: "320426317212",
  appId: "1:320426317212:web:164c997683c64dc802e459",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
