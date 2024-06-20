import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
// TODO- mover las keys al archivo .env y consumirlas de config
const firebaseConfig = {
  apiKey: "AIzaSyCdHbGSZryB-fi_b56fMMvwprLQcES15IQ",
  authDomain: "dame-una-pata0.firebaseapp.com",
  projectId: "dame-una-pata0",
  storageBucket: "dame-una-pata0.appspot.com",
  messagingSenderId: "512253780266",
  appId: "1:512253780266:web:9e98d79eb0ea10f8a3fe53",
  measurementId: "G-SXHJNHMZHE"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage};