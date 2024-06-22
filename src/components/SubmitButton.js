import React from "react";
import Button from "@mui/material/Button";

const SubmitButton = ({ children }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 3, mb: 2 }}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
