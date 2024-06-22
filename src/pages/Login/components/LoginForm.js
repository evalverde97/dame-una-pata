import Box from "@mui/material/Box";

import SubmitButton from "../../../components/SubmitButton";
import TextInput from "../../../components/TextInput";

const LoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  isSignUp,
  setIsSignUp,
  error,
  handleSubmit,
}) => {
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
      {error && <Box sx={{ color: "red", mt: 1 }}>{error}</Box>}
      <SubmitButton>{isSignUp ? "Sign Up" : "Log In"}</SubmitButton>
      <Box
        sx={{ mt: 2, cursor: "pointer", color: "blue" }}
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp
          ? "Already have an account? Log In"
          : "Don’t have an account? Sign Up"}
      </Box>
    </Box>
  );
};

export default LoginForm;
