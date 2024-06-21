import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EstadoProveedor } from "./context/EstadoGeneral";

//pages
import Home from "./pages/Home";
import LogIn from "./pages/Login";

function App() {
  return (
    <EstadoProveedor>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </EstadoProveedor>
  );
}

export default App;
