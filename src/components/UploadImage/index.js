import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { storage, db } from "../../db/firebase";

import ErrorFeddback from "../ErrorFeedback";

import "./index.scss";

const UploadImage = ({ id }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);


  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else if (!image) {
      setError(true);
    }
  };

  const handleClose = (e) => {
    e.preventdefault();
    setError(false);
  };


  const nameSpace = "upload-image_container";

  return (
    <div className={nameSpace}>
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default UploadImage;
