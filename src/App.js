import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EstadoProveedor } from './context/EstadoGeneral';
import  Home  from './pages/Home';

function App() {
  return (
    <EstadoProveedor>
      <Router>
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </EstadoProveedor>
  );
}

export default App;
