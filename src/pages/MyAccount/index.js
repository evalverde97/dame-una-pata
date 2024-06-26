import React, {useState} from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Typography, Grid } from '@mui/material';
import './index.scss';

const MyAccount = (email) => {
  // const db = getFirestore();
  // const docRef = doc(db, "users", email);
  const [user, setUser] = useState()

  // getDoc(docRef).then((docSnap) => {
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setUser(docSnap.data());
  //   } else {
  //     console.log("No such document!");
  //   }
  // }).catch((error) => {
  //   console.error("Error getting document:", error);
  // });
  return (
    <div>
      <h1>Mi cuenta</h1>
      <p>Información sobre mi cuenta...</p>
    </div>
  );
};

export default MyAccount;
