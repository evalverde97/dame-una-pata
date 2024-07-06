// src/App.js
import "./App.css";
import { PetProvider } from "./context/PetContext";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// pages
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import PetDetail from "./pages/PetDetail";
import AdoptionForm from "./pages/AdoptionForm";

const App = () => {
  return (
    <PetProvider>
      <NavBar />
      <Footer />
    </PetProvider>
  );
};

export {
  App,
  AboutUs,
  Contact,
  Home,
  LogIn,
  MyAccount,
  PetDetail,
  AdoptionForm,
};
