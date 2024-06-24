import React from "react";
import { useLocation } from "react-router-dom";

const Listing = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  console.log("formData", formData);

  return (
    <div>
      <h1>Listado de mascotas</h1>
      {formData ? (
        <>
          <p>Tipo de mascota seleccionada: {formData.category}</p>
        </>
      ) : (
        <p>No se seleccionó ninguna mascota.</p>
      )}
    </div>
  );
};

export default Listing;
