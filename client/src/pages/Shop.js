import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";

export default function Shop() {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  function submitCart() {
    let productIds = [1, 2, 3];
    getCheckout({
      variables: { products: productIds },
    });
  }

  const button = document.querySelector("#checkout-button");
  button.addEventListener("click", () => {
    console.log("checkout button clicked");

  return (
    <div>
      <h1>Shopping Page</h1>
      <a
        onClick={() => {
          submitCart();
        }}
      >
        Checkout
      </a>
    </div>
  );
}
