import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EstadoProveedor } from "./context/EstadoGeneral";

//components
import NavBar from "./components/NavBar";

//pages
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import MyAccount from "./pages/MyAccount";

const App = () => {
  return (
    <EstadoProveedor>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </Router>
    </EstadoProveedor>
  );
};

export default App;
