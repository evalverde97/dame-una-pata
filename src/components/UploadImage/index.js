import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { storage, db } from "../../db/firebase";

import "./index.scss";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    const storageRef = ref(storage, `images/${image.name}`);
    try {
      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      await saveImageUrlToFirestore(url);
      console.log("Imagen subida y URL guardada en Firestore");
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  const saveImageUrlToFirestore = async (url) => {
    const docRef = doc(db, "animales-en-adopcion", 1);
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
