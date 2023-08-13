import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default Router;
