import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EstadoProveedor } from "./context/EstadoGeneral";

//pages
import Home from "./pages/Home";
import LogIn from "./pages/Login";

const App = () => {
  return (
    <EstadoProveedor>
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </EstadoProveedor>
  );
};

export default App;
