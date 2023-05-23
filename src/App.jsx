import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Cart from "./compontents/cart/Cart";
import InFor from "./compontents/information/InFor";
import Layout from "./compontents/layout/Layout";
import Login from "./compontents/login/Login";
import Sale from "./compontents/sales/Sale";
import { CartContext } from "./compontents/Context/CartContext";
import { useState } from "react";
import Register from "./compontents/register/Register";
import Fruit from "./compontents/information/Fruit";
import Product from "./compontents/product/Product";
import New from "./compontents/new/New";

function App() {
  const [addCart, setCartAdd] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <CartContext.Provider value={{ addCart, setCartAdd, total, setTotal }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/trangchu" element={<Layout />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/infor" element={<InFor />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fruit" element={<Fruit />} />
          <Route path="/thucpham" element={<Product />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
