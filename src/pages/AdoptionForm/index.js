import React, { useState } from "react";
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
import { db } from "../../db/firebase";
import UploadImage from "../../components/UploadImage";
import "./index.scss";
import { v4 as uuidv4 } from 'uuid';

const AdoptionForm = () => {
  const id = uuidv4();
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
    interesados: 4,
    nombre: "",
    peso: 2.5,
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
      await setDoc(docRef, formData);
      console.log("Formulario enviado y datos guardados en Firestore");
    } catch (error) {
      console.error("Error al guardar los datos en Firestore:", error);
    }
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
        <UploadImage nombre={formData.nombre} id={id}/>
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
    </div>
  );
};

export default AdoptionForm;
