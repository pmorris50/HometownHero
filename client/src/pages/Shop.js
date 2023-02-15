// import React, { useState } from "react";
// import { useLazyQuery } from "@apollo/client";
// import { QUERY_CHECKOUT } from "../utils/queries";

// export default function Shop() {
//   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

//   function submitCart() {
//     let productIds = [1, 2, 3];
//     getCheckout({
//       variables: { products: productIds },
//     });
//   }

//   const button = document.querySelector("#checkout-button");
//   button.addEventListener("click", () => {
//     console.log("checkout button clicked");

//   return (
//     <div>
//       <h1>Shopping Page</h1>
//       <a
//         onClick={() => {
//           submitCart();
//         }}
//       >
//         Checkout
//       </a>
//     </div>
//   );
// }
import React, { useState } from "react";
import Store from "./Store";
import Success from "./Success";
import Cancel from "./Cancel";

import ShopNavComponent from "../components/ShopNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "../components/CartProvider";

const Shop = () => {
  return (
    <CartProvider>
      <div className="container">
        <ShopNavComponent>
          <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </ShopNavComponent>
      </div>
    </CartProvider>
  );
}

export default Shop;