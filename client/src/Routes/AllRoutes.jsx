import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductList from "../pages/ProductList";
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/productlist" element={<ProductList />}></Route>
      <Route path="/productlist/:id" element={<SingleProductPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
};

export default AllRoutes;
