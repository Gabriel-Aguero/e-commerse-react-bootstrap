import { Routes, Route, BrowserRouter } from "react-router-dom";
import RutaProtegida from "./RutaProtegida.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login";
import Header from "../components/Header";
import Administracion from "../pages/Administracion";
import Productos from "../pages/Productos";
import Footer from "../components/Footer";
import CartPage from "../pages/CartPage.jsx";
import UserProfile from "../pages/UserProfile.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route
          path="/admin"
          element={<RutaProtegida>{<Administracion />}</RutaProtegida>}
        />
        <Route path="/perfil" element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
