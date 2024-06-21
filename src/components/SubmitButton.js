import React from "react";
import Button from "@mui/material/Button";

const SubmitButton = ({ onClick, children }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} fullWidth>
      {children}
    </Button>
  );
};

export default SubmitButton;
