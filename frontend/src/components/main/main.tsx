import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Catalog from "../pages/catalog";
import { ProductDetails } from "../pages/productDetails";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preguntas-frecuentes" element={<h1>Q&A</h1>} />
        <Route path="/catalogo" element={<Catalog />} />
        {/* El parámetro va así */}
        <Route path="/catalogo/:id" element={<ProductDetails />} />
      </Routes>
    </main>
  );
}

export default Main;
