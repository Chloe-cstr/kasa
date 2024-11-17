import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Housing from "./Housing/Housing";
import NotFound from "./NotFound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/housing/:id" element={<Housing />} /> {/* Logement */}
        <Route path="*" element={<NotFound />} /> {/* Page 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
