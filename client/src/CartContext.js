import { createContext, useState } from "react";

function CartContext() {createContext({
  items: [],
  getProductQuantity: () => {},
  addOne: () => {},
  removeOne: () => {},
  clearFromCart: () => {},
  getTotalCost: () => {},
});
}

export default CartContext;