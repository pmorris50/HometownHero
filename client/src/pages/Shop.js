import React, { useState } from "react";
import Store from "./Store";
import Success from "./Success";
import Cancel from "./Cancel";

import ShopNavComponent from "../components/ShopNav";
import { Routes, Route } from "react-router-dom";
import CartProvider from "../components/CartContext";


const Shop = () => {
  return (
    <CartProvider>
      <div className="container">
        <ShopNavComponent/>
            <Routes> 
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
           </Routes>
      </div>
    </CartProvider>
  );
}

export default Shop;