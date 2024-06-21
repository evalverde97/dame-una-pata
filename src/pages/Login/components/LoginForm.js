import React, { useState } from "react";
import TextInput from "../../../components/TextInput";
import SubmitButton from "../../../components/SubmitButton";
import Box from "@mui/material/Box";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejar el login
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton>Log In</SubmitButton>
    </Box>
  );
};

export default LoginForm;
