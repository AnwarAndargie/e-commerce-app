import NavBar from "./components/NavBar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men" />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route path="/kid" element={<ShopCategory category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
