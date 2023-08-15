import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Turismo from "../pages/Turismo";
import AppsMoviles from "../pages/AppsMoviles";
import Contacto from "../pages/Contacto";
import ComerComprar from "../pages/ComerComprar";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/donde-comer-y-comprar" element={<ComerComprar />} />
      <Route path="/turismo" element={<Turismo />} />
      <Route path="/apps-moviles" element={<AppsMoviles />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default Router;
