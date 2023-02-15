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

import { Row, Col} from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";

import { Button, Container, Navbar, Modal } from "react-bootstrap";

function NavStore() {
  <>
    <h1 align="center" className="p-4">Welcome!</h1>
    <Row xs={1} md={3} className="g-4">
      {productsArray.map((product, idx) => (
        <Col align="center" key={idx}>
        <ProductCard product={product}/>
        </Col>
      ))}
    </Row>
  </>
}

export default NavStore;