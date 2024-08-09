import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Typography,
} from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { storage, db } from "../../db/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import UploadImage from "../../components/UploadImage";
import "./index.scss";
import { v4 as uuidv4 } from 'uuid';
import ErrorFeedback from "../../components/ErrorFeedback";

const AdoptionForm = () => {
  const id = uuidv4();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    actividad: "",
    compatibilidad: {
      ninos: false,
      otros_animales: false,
      personas_mayores: false,
    },
    edad: "",
    especie: "",
    esterilizado: false,
    genero: "",
    interesados: 0,
    nombre: "",
    peso: 0,
    raza: "",
    salud: "",
    tamano: "",
    ubicacion: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCompatibilityChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      compatibilidad: {
        ...formData.compatibilidad,
        [name]: checked,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "pets", id);
      const storageRef = ref(storage, `images/${id}`);
      await setDoc(docRef, formData);
      await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
        await setDoc(docRef, { imageUrl: url }, { merge: true });
        //TODO - Eliminar logs
      console.log("Formulario enviado y datos guardados en Firestore");
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/');
      }, 2000); // 2000 ms = 2 segundos
    } catch (error) {
      console.error("Error al guardar los datos en Firestore:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="form-container">
      <Typography variant="h4" gutterBottom className="form-title">
        Formulario de Adopción
      </Typography>
      <form onSubmit={handleSubmit} className="form-container_selector">
        <TextField
          label="Especie"
          name="especie"
          value={formData.especie}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="form-field"
        />
        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="form-field"
        />
        <TextField
          label="Edad"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="form-field"
        />
        <FormControl
          component="fieldset"
          margin="normal"
          className="form-field"
        >
          <FormLabel component="legend">Género</FormLabel>
          <RadioGroup
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            row
          >
            <FormControlLabel value="Macho" control={<Radio />} label="Macho" />
            <FormControlLabel
              value="Hembra"
              control={<Radio />}
              label="Hembra"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Raza"
          name="raza"
          value={formData.raza}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="form-field"
        />
        <TextField
          label="Tamaño"
          name="tamano"
          value={formData.tamano}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="form-field"
        />
        <TextField
          label="Estado de Salud"
          name="estado_salud"
          value={formData.estado_salud}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="form-field"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="esterilizado"
              checked={formData.esterilizado}
              onChange={handleChange}
            />
          }
          label="Esterilizado"
          margin="normal"
          className="form-checkbox"
        />
        <TextField
          label="Nivel de Actividad"
          name="nivel_actividad"
          value={formData.nivel_actividad}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="form-field"
        />
        <FormControl
          component="fieldset"
          margin="normal"
          className="form-field"
        >
          <FormLabel component="legend">Compatibilidad</FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                name="ninos"
                checked={formData.compatibilidad.ninos}
                onChange={handleCompatibilityChange}
              />
            }
            label="Niños"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="otros_animales"
                checked={formData.compatibilidad.otros_animales}
                onChange={handleCompatibilityChange}
              />
            }
            label="Otros Animales"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="personas_mayores"
                checked={formData.compatibilidad.personas_mayores}
                onChange={handleCompatibilityChange}
              />
            }
            label="Personas Mayores"
          />
        </FormControl>
        <UploadImage nombre={formData.nombre} id={id} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="submit-button"
        >
          Enviar
        </Button>
      </form>
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Formulario enviado exitosamente!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AdoptionForm;
