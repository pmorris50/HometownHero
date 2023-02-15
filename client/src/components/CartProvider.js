import { createContext, useState } from "react";
import { productsArray, getProductData } from "../productsStore";
import { Provider } from "react-redux";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOne: () => {},
  removeOne: () => {},
  clearFromCart: () => {},
  getTotalCost: () => {},
});

export default function CartProvider({ children }) {
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

// function getProductQuantity(id) {
//     const item = items.find((item) => item.id === id);
//     return item ? item.quantity : 0;
// }

// function addOne(id) {
//     const item = items.find((item) => item.id === id);
//     if (item) {
//         item.quantity++;
//     } else {
//         const product = productsArray.find((product) => product.id === id);
//         setItems([...items, { ...product, quantity: 1 }]);
//     }
// }

// function removeOne(id) {
//     const item = items.find((item) => item.id === id);
//     if (item) {
//         if (item.quantity > 1) {
//             item.quantity--;
//         } else {
//             clearFromCart(id);
//         }
//     }
// }

// function clearFromCart(id) {
//     setItems(items.filter((item) => item.id !== id));
// }

// function getTotalCost() {
//     return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
// }
