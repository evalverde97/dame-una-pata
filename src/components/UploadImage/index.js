import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { storage, db } from "../../db/firebase";

import ErrorFeddback from "../ErrorFeedback";

import "./index.scss";

const UploadImage = ({ id }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleClose = (e) => {
    e.preventdefault();
    setError(false);
  };

  const handleUpload = async () => {
    const storageRef = ref(storage, `images/${id}`);

    if (!image) {
      setError(true);
      <ErrorFeddback error={error} onClose={handleClose} />;
    } else {
      try {
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
        await saveImageUrlToFirestore(url);
        console.log("Imagen subida y URL guardada en Firestore");
      } catch (error) {
        console.error("Error al subir la imagen:", error);
      }
    }
  };

  const saveImageUrlToFirestore = async (url) => {
    const docRef = doc(db, "pets", id);
    try {
      await setDoc(docRef, { imageUrl: url }, { merge: true });
      console.log("URL de la imagen guardada en Firestore");
    } catch (error) {
      console.error("Error al guardar la URL en Firestore:", error);
    }
  };

  const nameSpace = "upload-image_container";

  return (
    <div className={nameSpace}>
      <button onClick={handleUpload}>Subir Imagen</button>
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default UploadImage;
