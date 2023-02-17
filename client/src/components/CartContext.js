import { createContext, useState } from "react";
import { productsArray, getProductData } from "../productsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOne: () => {},
  removeOne: () => {},
  clearFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOne,
    removeOne,
    clearFromCart,
    getTotalCost,
  };
  console.log(contextValue);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOne(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOne(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      clearFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function clearFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// function getProductQuantity(id) {
//     const quantity = cartProducts.find((product) => product.id === id);
//     return product ? product.quantity : 0;
// }

// function addOne(id) {
//     const quantity = product.find((product) => product.id === id);
//     if (product) {
//         product.quantity++;
//     } else {
//         const product = productsArray.find((product) => product.id === id);
//         setItems([...items, { ...product, quantity: 1 }]);
//     }
// }

// function removeOne(id) {
//     const quantity = product.find((item) => product.id === id);
//     if (product) {
//         if (product.quantity > 1) {
//             product.quantity--;
//         } else {
//             clearFromCart(id);
//         }
//     }
// }

// function clearFromCart(id) {
//     setCartProducts(cartProducts.filter((Products) => product.id !== id));
// }

