import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = ({ label, type, value, onChange }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default TextInput;
