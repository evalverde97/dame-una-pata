import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import catImage from "../../assets/cat-modal-input.webp";
import dogImage3 from "../../assets/dog-modal-input3.webp";

import "./index.scss";

const AdoptionModal = () => {
  const [selectedPet, setSelectedPet] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (selectedPet) {
      localStorage.setItem("formData", JSON.stringify(formData));
      navigate("/listado", { state: { formData } });
      // console.log({ formData });
    } else {
      alert("Por favor, selecciona una mascota.");
    }
  };

  const handleSelection = (event) => {
    const { name, value } = event.target;
    setSelectedPet(event.target.value);
    setFormData({ [name]: value });
  };

  const modalTitle = "Tu mascota te esta buscando";
  const findPetText = "¿Que tipo de mascota buscas?";
  const locationText = "¿Dónde vivis?";

  return (
    <>
      <div className="adoption-modal">
        <div className="adoption-container">
          <p>{modalTitle}</p>
          <div className="adoption-select">
            <div className="adoption-select_interactions">
              <p>{findPetText}</p>
              <div className="adoption-selector">
                <input
                  className="adoption-input"
                  id="cat"
                  type="radio"
                  name="category"
                  value="cat"
                  onChange={handleSelection}
                />
                <label
                  htmlFor="cat"
                  className={`adoption-label ${
                    selectedPet === "cat" ? "selected" : ""
                  }`}
                >
                  <img
                    alt="cat-icon"
                    className="modal-adoption_image"
                    src={catImage}
                  />
                </label>
                <input
                  className="adoption-input"
                  id="dog"
                  name="category"
                  type="radio"
                  value="dog"
                  onChange={handleSelection}
                />
                <label
                  htmlFor="dog"
                  className={`adoption-label ${
                    selectedPet === "dog" ? "selected" : ""
                  }`}
                >
                  <img
                    alt="dog-icon"
                    className="modal-adoption_image"
                    src={dogImage3}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="adoption-select">
            <div className="adoption-select_interactions">
              <p>{locationText}</p>
              <label className="label-adress-btn">
                <select className="adoption-adress-select">
                  <option>Agregá tu ubicación</option>
                  <option value="CABA">CABA</option>
                  <option value="provincia de Bs.As">provincia de Bs.As</option>
                </select>
              </label>
            </div>
          </div>
          <Button
            className="adoption-modal_button"
            color="inherit"
            onClick={onClickHandler}
          >
            Buscar
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdoptionModal;
