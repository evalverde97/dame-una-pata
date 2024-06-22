import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";

import LoginForm from "./components/LoginForm";

import { auth } from "../../db/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (err) {
      setError(mapFirebaseError(err.code));
      setOpen(true);
    }
  };

  const mapFirebaseError = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Email inválido. Por favor, verifica tu dirección de correo.";
      case "auth/user-disabled":
        return "Usuario deshabilitado. Contacta al soporte.";
      case "auth/user-not-found":
        return "Usuario no encontrado. Verifica tu email.";
      case "auth/wrong-password":
        return "Contraseña incorrecta. Inténtalo nuevamente.";
      case "auth/email-already-in-use":
        return "El email ya está en uso. Inicia sesión o usa otro email.";
      case "auth/weak-password":
        return "La contraseña es demasiado débil. Usa una contraseña más segura.";
      default:
        return "Ocurrió un error. Inténtalo nuevamente.";
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {isSignUp ? "Sign Up" : "Log In"}
        </Typography>
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
          error={error}
          handleSubmit={handleSubmit}
        />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default LogIn;
