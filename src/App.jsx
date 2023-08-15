import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Turismo from "./pages/Turismo";
import AppsMoviles from "./pages/AppsMoviles";
import Contacto from "./pages/Contacto";
import ComerComprar from "./pages/ComerComprar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/donde-comer-y-comprar" element={<ComerComprar />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/apps-moviles" element={<AppsMoviles />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
